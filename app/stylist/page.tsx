import HeroSection from "@/components/stylist/HeroSection";
import ProblemSection from "@/components/stylist/ProblemSection";
import FeaturesSection from "@/components/stylist/FeaturesSection";
import FaqSection from "@/components/stylist/FaqSection";
import CtaSection from "@/components/stylist/CtaSection";
import { createAdminClient } from "@/lib/supabase";

async function getWaitlistCount(): Promise<number> {
  try {
    const adminClient = createAdminClient();
    const { count, error } = await adminClient
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .eq("project", "stylist");

    if (error) return 0;
    return count ?? 0;
  } catch {
    return 0;
  }
}

export default async function StylistPage() {
  const waitlistCount = await getWaitlistCount();

  return (
    <main>
      <HeroSection waitlistCount={waitlistCount} />
      <ProblemSection />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p className="font-semibold text-white mb-1">핸즈 (Handz)</p>
        <p>미용사 개인 검색 & 팔로우 플랫폼</p>
        <p className="mt-3">
          문의:{" "}
          <a href="mailto:mgryu9@gmail.com" className="text-rose-400 hover:underline">
            mgryu9@gmail.com
          </a>
        </p>
        <p className="mt-4 text-xs text-gray-600">
          &copy; 2026 핸즈. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
