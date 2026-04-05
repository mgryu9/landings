import HeroSection from "@/components/meetingai/HeroSection";
import ProblemSection from "@/components/meetingai/ProblemSection";
import FeaturesSection from "@/components/meetingai/FeaturesSection";
import FaqSection from "@/components/meetingai/FaqSection";
import CtaSection from "@/components/meetingai/CtaSection";
import { createAdminClient } from "@/lib/supabase";

async function getWaitlistCount(): Promise<number> {
  try {
    const adminClient = createAdminClient();
    const { count, error } = await adminClient
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .eq("project", "meetingai");

    if (error) return 0;
    return count ?? 0;
  } catch {
    return 0;
  }
}

export default async function MeetingAIPage() {
  const waitlistCount = await getWaitlistCount();

  return (
    <main>
      <HeroSection waitlistCount={waitlistCount} />
      <ProblemSection />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p className="font-semibold text-white mb-1">미팅AI</p>
        <p>회의록 액션아이템 자동 추출 서비스</p>
        <p className="mt-3">
          문의:{" "}
          <a href="mailto:mgryu9@gmail.com" className="text-violet-400 hover:underline">
            mgryu9@gmail.com
          </a>
        </p>
        <p className="mt-4 text-xs text-gray-600">
          &copy; 2026 미팅AI. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
