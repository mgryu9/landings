import HeroSection from "@/components/salary/HeroSection";
import ProblemSection from "@/components/salary/ProblemSection";
import FeaturesSection from "@/components/salary/FeaturesSection";
import FaqSection from "@/components/salary/FaqSection";
import CtaSection from "@/components/salary/CtaSection";
import { createAdminClient } from "@/lib/supabase";

async function getWaitlistCount(): Promise<number> {
  try {
    const adminClient = createAdminClient();
    const { count, error } = await adminClient
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .eq("project", "salary");

    if (error) return 0;
    return count ?? 0;
  } catch {
    return 0;
  }
}

export default async function SalaryPage() {
  const waitlistCount = await getWaitlistCount();

  return (
    <main>
      <HeroSection waitlistCount={waitlistCount} />
      <ProblemSection />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p className="font-semibold text-white mb-1">연봉핏</p>
        <p>이직 연봉 협상 도우미</p>
        <p className="mt-3">
          문의:{" "}
          <a href="mailto:mgryu9@gmail.com" className="text-blue-400 hover:underline">
            mgryu9@gmail.com
          </a>
        </p>
        <p className="mt-4 text-xs text-gray-600">
          &copy; 2026 연봉핏. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
