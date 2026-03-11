import type { Metadata } from "next";
import { Announcement } from "@/components/layout/announcement";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FinalCTA } from "@/components/sections/final-cta";
import {
  DeploymentFitSection,
  ExampleScenariosSection,
  HowItWorksHero,
  LegacyComparisonSection,
  ManagedConnectivitySection,
  RolloutSection,
  TrustAndAuditSection,
  WorkflowSection,
} from "@/components/sections/how-it-works";

export const metadata: Metadata = {
  title: "How It Works | Overlay",
  description:
    "Understand how Overlay gives BMS teams controlled, auditable remote access across mixed customer estates.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Announcement />
      <Header />
      <HowItWorksHero />
      <WorkflowSection />
      <ExampleScenariosSection />
      <LegacyComparisonSection />
      <TrustAndAuditSection />
      <DeploymentFitSection />
      <ManagedConnectivitySection />
      <RolloutSection />
      <FinalCTA
        eyebrow="Review The Model"
        title={<>See whether Overlay fits your security,<br className="hidden md:block" /> operations, and rollout requirements.</>}
        description="The key question is simple: can remote access become easier to govern without making the field workflow harder to operate? Overlay is designed to do exactly that."
        primaryCtaLabel="Book a Demo"
        primaryCtaHref="#"
        secondaryCtaLabel="See rollout steps"
        secondaryCtaHref="#rollout"
        footnote="BMS-centric access model. Loved by IT teams."
        variant="testimonial"
      />
      <Footer />
    </main>
  );
}
