import HeroSection from "@/components/reviewbot/HeroSection";
import ProblemSection from "@/components/reviewbot/ProblemSection";
import FeaturesSection from "@/components/reviewbot/FeaturesSection";
import FaqSection from "@/components/reviewbot/FaqSection";
import CtaSection from "@/components/reviewbot/CtaSection";
import { createAdminClient } from "@/lib/supabase";

async function getWaitlistCount(): Promise<number> {
  try {
    const adminClient = createAdminClient();
    const { count, error } = await adminClient
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .eq("project", "reviewbot");

    if (error) return 0;
    return count ?? 0;
  } catch {
    return 0;
  }
}

export default async function ReviewbotPage() {
  const waitlistCount = await getWaitlistCount();

  return (
    <main>
      <HeroSection waitlistCount={waitlistCount} />
      <ProblemSection />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p className="font-semibold text-white mb-1">리뷰봇</p>
        <p>소상공인 리뷰 통합 관리 서비스</p>
        <p className="mt-3">
          문의:{" "}
          <a href="mailto:mgryu9@gmail.com" className="text-orange-400 hover:underline">
            mgryu9@gmail.com
          </a>
        </p>
        <p className="mt-4 text-xs text-gray-600">
          &copy; 2026 리뷰봇. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
