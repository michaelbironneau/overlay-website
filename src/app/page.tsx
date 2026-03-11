import { Announcement } from "@/components/layout/announcement";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { LogoStrip } from "@/components/sections/logo-strip";
import { Comparison } from "@/components/sections/comparison";
import { FeatureRow } from "@/components/sections/feature-row";
import { EngineerProductivity } from "@/components/sections/engineer-productivity";
import { SecuritySection } from "@/components/sections/security";
import { TestimonialSection } from "@/components/sections/testimonial";
import { CompatibilitySection } from "@/components/sections/compatibility";
import { OnboardingSteps } from "@/components/sections/onboarding";
import { PricingSection } from "@/components/sections/pricing";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Announcement />
      <Header />
      <Hero />
      <LogoStrip />
      <Comparison />

      <FeatureRow
        eyebrow="Unified Command Center"
        title={<>One login.<br />Every site. Every team.</>}
        description="No more tabbing between VPN clients or hunting for credentials in shared docs. Your entire estate, searchable and accessible from a single browser tab."
        features={[
          "See all sites at a glance — filter by client, region, or status",
          "Jump into any session in two clicks",
          "Works with your existing VPN, mesh network, or direct connection",
          "Logs you into head-ends automatically (Niagara 4 now supported)"
        ]}
        ctaText="See the dashboard in action →"
        ctaHref="#"
        imageSrc="/images/single-pane-of-glass.png"
        imageAlt="Unified access dashboard"
        className="bg-[#F3F1FF]"
      />

      <FeatureRow
        eyebrow="New Revenue Streams"
        title={<>Launch a customer portal<br />in minutes.</>}
        description="Give your clients secure, self-service access to their BMS dashboards. No development needed. Turn access into recurring revenue."
        features={[
          "White-label portal with your branding, hosted on your domain",
          "Granular permissions — clients see only what you allow",
          "High-margin recurring revenue from digital services",
          "Ready-made sales collateral to close faster"
        ]}
        ctaText="See how bureaus monetise access →"
        ctaHref="/monetise-remote-access"
        imageSrc="/images/revenue.png"
        imageAlt="Customer portal"
        reverse
        className="bg-white"
      />

      <EngineerProductivity />
      <SecuritySection />
      <TestimonialSection />
      <CompatibilitySection id="solutions" />
      <OnboardingSteps />
      <PricingSection />
      <FinalCTA />

      <Footer />
    </main>
  );
}
