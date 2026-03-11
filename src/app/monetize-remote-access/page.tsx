import type { Metadata } from "next";
import { Announcement } from "@/components/layout/announcement";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FeatureRow } from "@/components/sections/feature-row";
import { FinalCTA } from "@/components/sections/final-cta";
import {
  ManagedPlatformSection,
  MonetizeRemoteAccessHero,
  RemoteAccessProblemSection,
  RemoteServiceGrowthSection,
} from "@/components/sections/monetize-remote-access";
import { OnboardingSteps } from "@/components/sections/onboarding";
import { SecuritySection } from "@/components/sections/security";

export const metadata: Metadata = {
  title: "Monetize Remote Access | Overlay",
  description:
    "Turn building remote access into a secure recurring service with Overlay handling the infrastructure, billing, and renewals.",
};

export default function MonetizeRemoteAccessPage() {
  return (
    <main className="min-h-screen">
      <Announcement />
      <Header />
      <MonetizeRemoteAccessHero />
      <RemoteAccessProblemSection />

      <FeatureRow
        eyebrow="Overlay Turns Remote Access Into a Service"
        title={<>Secure, managed connectivity for the buildings you already support.</>}
        description="Overlay is a secure remote access platform designed specifically for building systems. It lets BMS operators provide managed, secure remote connectivity to customer building networks without exposing controllers or maintaining complex VPN infrastructure."
        features={[
          "No inbound ports and no exposed controllers",
          "Secure, controlled access when engineers need it",
          "Package remote access as a billable managed service",
        ]}
        ctaText="See how deployment works →"
        ctaHref="#how-it-works"
        imageSrc="/images/revenue.png"
        imageAlt="Overlay customer portal revenue view"
        className="bg-[#FAF5FF]"
      />

      <FeatureRow
        eyebrow="New Revenue Stream"
        title={<>Turn infrastructure you already manage into recurring monthly revenue.</>}
        description="With Overlay, every connected building can become a subscription service. Instead of remote access remaining an operational cost, it becomes Remote Access as a Service with predictable monthly revenue."
        features={[
          "Secure remote engineer access",
          "Third-party contractor access",
          "Head-end monitoring systems",
          "Remote diagnostics and support",
        ]}
        ctaText="Book a demo →"
        ctaHref="#"
        imageSrc="/images/single-pane-of-glass.png"
        imageAlt="Overlay unified access dashboard"
        reverse
        className="bg-white"
      />

      <FeatureRow
        eyebrow="Designed For BMS Operators"
        title={<>Built around real building-system deployments.</>}
        description="Overlay understands how building systems are deployed across mixed estates. Access is provided to any device on the building network, not just web interfaces, so engineers keep using the tools they already know."
        features={[
          "Supports Niagara, Trend IQ, Schneider EcoStruxure, Siemens Desigo, and legacy head-ends",
          "Works across embedded controllers and full head-end environments",
          "No workflow changes required for engineering teams",
        ]}
        ctaText="Explore compatibility →"
        ctaHref="/#solutions"
        imageSrc="/images/compatibility.png"
        imageAlt="Overlay compatibility diagram"
        className="bg-[#F3F1FF]"
      />

      <ManagedPlatformSection />
      <OnboardingSteps id="how-it-works" />
      <SecuritySection />
      <RemoteServiceGrowthSection />

      <FinalCTA
        eyebrow="Start Offering Remote Access as a Service"
        title={<>Turn remote connections into a new revenue stream.</>}
        description={
          <>
            Overlay helps BMS operators turn a necessary operational tool into a structured service
            offering. Secure access for engineers. Simple deployment for buildings. Recurring
            revenue for operators.
          </>
        }
        primaryCtaLabel="Book a Demo"
        primaryCtaHref="#"
        secondaryCtaLabel="▶ Watch 2-min Overview"
        secondaryCtaHref="#how-it-works"
        footnote="Launch in days, not months."
        variant="testimonial"
      />

      <Footer />
    </main>
  );
}
