import HeroSection from "@/components/zzaktech/HeroSection";
import ProblemSection from "@/components/zzaktech/ProblemSection";
import FeaturesSection from "@/components/zzaktech/FeaturesSection";
import TestimonialsSection from "@/components/zzaktech/TestimonialsSection";
import FaqSection from "@/components/zzaktech/FaqSection";
import CtaSection from "@/components/zzaktech/CtaSection";
import { createAdminClient } from "@/lib/supabase";

async function getWaitlistCount(): Promise<number> {
  try {
    const adminClient = createAdminClient();
    const { count, error } = await adminClient
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .eq("project", "zzaktech");

    if (error) return 0;
    return count ?? 0;
  } catch {
    return 0;
  }
}

export default async function ZzaktechPage() {
  const waitlistCount = await getWaitlistCount();

  return (
    <main>
      <HeroSection waitlistCount={waitlistCount} />
      <ProblemSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />

      {/* 푸터 */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p className="font-semibold text-white mb-1">짝테크</p>
        <p>앱테크 추천 코드 & 미션 파트너 매칭 커뮤니티</p>
        <p className="mt-3">
          문의:{" "}
          <a
            href="mailto:mgryu9@gmail.com"
            className="text-green-400 hover:underline"
          >
            mgryu9@gmail.com
          </a>
        </p>
        <p className="mt-4 text-xs text-gray-600">
          &copy; 2026 짝테크. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
