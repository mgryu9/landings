import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { Resend } from "resend";

// GET /api/waitlist?project=zzaktech → count 반환
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const project = searchParams.get("project");

    const adminClient = createAdminClient();

    const query = adminClient
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (project) {
      query.eq("project", project);
    }

    const { count, error } = await query;

    if (error) {
      console.error("Supabase count error:", error);
      return NextResponse.json({ count: 0 }, { status: 200 });
    }

    return NextResponse.json({ count: count ?? 0 }, { status: 200 });
  } catch (error) {
    console.error("Waitlist GET error:", error);
    return NextResponse.json({ count: 0 }, { status: 200 });
  }
}

// POST /api/waitlist → { email, project, source? }
export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
  try {
    const body = await request.json();
    const { email, project, source } = body;

    // 이메일 유효성 검사
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "이메일을 입력해주세요." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 형식이 아닙니다." },
        { status: 400 }
      );
    }

    if (!project || typeof project !== "string") {
      return NextResponse.json(
        { error: "project 파라미터가 필요합니다." },
        { status: 400 }
      );
    }

    const adminClient = createAdminClient();

    const { error: insertError } = await adminClient
      .from("waitlist")
      .insert({
        email: email.toLowerCase().trim(),
        project,
        source: source || null,
      });

    if (insertError) {
      if (insertError.code === "23505") {
        return NextResponse.json(
          { error: "이미 등록된 이메일입니다." },
          { status: 409 }
        );
      }
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { error: "등록 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      );
    }

    // 프로젝트별 이메일 설정
    const projectConfig: Record<
      string,
      { name: string; description: string; color: string }
    > = {
      zzaktech: {
        name: "짝테크",
        description: "추천 코드 나누고 보상 두 배로",
        color: "#16a34a",
      },
      stylist: {
        name: "핸즈 (Handz)",
        description: "미용사 개인 검색 & 팔로우 플랫폼",
        color: "#f43f5e",
      },
      salary: {
        name: "연봉핏",
        description: "이직 연봉 협상 도우미",
        color: "#2563eb",
      },
      reviewbot: {
        name: "리뷰봇",
        description: "소상공인 리뷰 통합 관리 서비스",
        color: "#f97316",
      },
      meetingai: {
        name: "미팅AI",
        description: "회의록 액션아이템 자동 추출 서비스",
        color: "#7c3aed",
      },
      apartment: {
        name: "청약핏",
        description: "청약 당첨 전략 커뮤니티",
        color: "#059669",
      },
    };

    const config = projectConfig[project] ?? {
      name: project,
      description: "서비스",
      color: "#16a34a",
    };

    // 사용자 확인 이메일 발송
    try {
      await resend.emails.send({
        from: `${config.name} <noreply@resend.dev>`,
        to: email,
        subject: `[${config.name}] 사전등록이 완료되었습니다 🎉`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="color: ${config.color}; font-size: 28px; font-weight: 700; margin: 0;">${config.name}</h1>
              <p style="color: #6b7280; font-size: 14px; margin-top: 4px;">${config.description}</p>
            </div>
            <div style="background: #f0fdf4; border-radius: 12px; padding: 32px; margin-bottom: 24px;">
              <h2 style="color: #15803d; font-size: 20px; font-weight: 700; margin: 0 0 12px;">사전등록 완료!</h2>
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0;">
                안녕하세요! ${config.name} 사전등록해 주셔서 감사합니다.<br>
                서비스 오픈 첫날, 이 이메일로 초대장을 보내드릴게요.
              </p>
            </div>
            <div style="background: white; border: 1px solid #d1fae5; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
              <h3 style="color: #15803d; font-size: 16px; font-weight: 600; margin: 0 0 16px;">사전등록자 특별 혜택</h3>
              <ul style="color: #374151; font-size: 15px; line-height: 2; margin: 0; padding-left: 20px;">
                <li>오픈 첫날 즉시 이용 가능</li>
                <li>프리미엄 기능 무료 제공 (오픈 후 30일)</li>
                <li>초기 파트너 매칭 우선권</li>
              </ul>
            </div>
            <p style="color: #9ca3af; font-size: 13px; text-align: center; margin: 0;">
              이 이메일은 ${config.name} 사전등록 확인 메일입니다.<br>
              문의: mgryu9@gmail.com
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("User confirmation email error:", emailError);
    }

    // 운영자 알림 이메일 발송
    try {
      await resend.emails.send({
        from: `${config.name} 알림 <noreply@resend.dev>`,
        to: "mgryu9@gmail.com",
        subject: `[${config.name}] 새 사전등록`,
        html: `
          <p>새로운 사전등록이 있습니다.</p>
          <p><strong>프로젝트:</strong> ${project}</p>
          <p><strong>이메일:</strong> ${email}</p>
          <p><strong>소스:</strong> ${source || "직접 방문"}</p>
          <p><strong>시각:</strong> ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}</p>
        `,
      });
    } catch (adminEmailError) {
      console.error("Admin notification email error:", adminEmailError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Waitlist POST error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
