import { Analytics } from "@vercel/analytics/react";
import MetaPixel from "@/components/MetaPixel";
import HeroSection from "@/components/kindergarten/HeroSection";
import ProblemSection from "@/components/kindergarten/ProblemSection";
import FeaturesSection from "@/components/kindergarten/FeaturesSection";
import FaqSection from "@/components/kindergarten/FaqSection";
import CtaSection from "@/components/kindergarten/CtaSection";
import { createAdminClient } from "@/lib/supabase";

export const metadata = {
  title: "키즈커넥트 - 유치원·어린이집 선생님 커뮤니티",
  description:
    "구인구직부터 수업자료 공유, 선생님끼리 솔직한 소통까지. 유아교육 선생님들의 커뮤니티.",
  openGraph: {
    title: "키즈커넥트 - 유치원·어린이집 선생님 커뮤니티",
    description:
      "구인구직부터 수업자료 공유, 선생님끼리 솔직한 소통까지. 유아교육 선생님들의 커뮤니티.",
    type: "website",
  },
};

async function getWaitlistCount(): Promise<number> {
  try {
    const adminClient = createAdminClient();
    const { count, error } = await adminClient
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .eq("project", "kindergarten");

    if (error) return 0;
    return count ?? 0;
  } catch {
    return 0;
  }
}

export default async function KindergartenPage() {
  const waitlistCount = await getWaitlistCount();

  return (
    <main>
      <MetaPixel pixelId="1523494972728904" />
      <Analytics />

      {/* 헤더 */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-yellow-100">
        <div className="h-14 flex items-center justify-between px-5 max-w-3xl mx-auto">
          <span className="text-base font-bold text-gray-900">
            키즈커넥트
          </span>
          <a
            href="#register"
            className="px-4 py-2 rounded-full bg-yellow-400 text-yellow-900 text-sm font-bold hover:bg-yellow-500 transition"
          >
            사전등록하기
          </a>
        </div>
      </header>

      <div id="register">
        <HeroSection waitlistCount={waitlistCount} />
      </div>
      <ProblemSection />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />

      {/* 푸터 */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p className="font-semibold text-white mb-1">키즈커넥트</p>
        <p>유치원·어린이집 선생님 커뮤니티</p>
        <p className="mt-3">
          문의:{" "}
          <a
            href="mailto:mgryu9@gmail.com"
            className="text-yellow-400 hover:underline"
          >
            mgryu9@gmail.com
          </a>
        </p>
        <p className="mt-4 text-xs text-gray-600">
          &copy; 2026 키즈커넥트. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
