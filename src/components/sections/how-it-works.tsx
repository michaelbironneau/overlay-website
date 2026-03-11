"use client";

import { Box, FileText, LayoutGrid, Network, Shield, Workflow } from "lucide-react";
import { HeroAnimation } from "@/components/animations/hero-animation";
import { ComparisonSection } from "@/components/sections/comparison";
import { FeatureRow } from "@/components/sections/feature-row";
import { HeroCTAGroup } from "@/components/sections/hero-cta-group";
import { StepSection } from "@/components/sections/onboarding";
import { TrustPillarsSection } from "@/components/sections/security";
import type { ComparisonRow } from "@/components/sections/comparison-grid";

const comparisonRows: ComparisonRow[] = [
  {
    before: {
      title: "Users join a site network before they can work",
      sub: "Broad VPN access often becomes the default starting point, even for one device or one task.",
    },
    after: {
      title: "Users request access to a specific building resource",
      sub: "Access starts with a named person, a defined target, and an approved session.",
    },
  },
  {
    before: {
      title: "Each customer estate behaves differently",
      sub: "Engineers switch clients, profiles, and site-specific instructions across the portfolio.",
    },
    after: {
      title: "The operator workflow stays consistent",
      sub: "Teams work through the same Overlay flow even when underlying site connectivity varies.",
    },
  },
  {
    before: {
      title: "Audit evidence is fragmented",
      sub: "Identity events, network logs, and human process sit in different places.",
    },
    after: {
      title: "Access is attributable and reviewable",
      sub: "Session activity can be tied back to the named user and the requested target.",
    },
  },
  {
    before: {
      title: "Shared credentials and static access linger",
      sub: "Offboarding, policy enforcement, and customer governance become harder over time.",
    },
    after: {
      title: "Policy is checked before access is granted",
      sub: "MFA, scope, and session controls are applied before the connection is opened.",
    },
  },
];

const workflowSteps = [
  {
    num: 1,
    title: "User signs in",
    desc: "The engineer or operator authenticates as a named user instead of starting from a site VPN profile.",
  },
  {
    num: 2,
    title: "Policy is enforced",
    desc: "Overlay checks organisation requirements such as access scope and MFA before the session starts.",
  },
  {
    num: 3,
    title: "A specific target is chosen",
    desc: "The user requests the exact head-end, controller, or machine they need rather than broad site presence.",
  },
  {
    num: 4,
    title: "A session is brokered and recorded",
    desc: "Overlay opens the requested session and produces evidence that the action was initiated by that named user.",
  },
];

const trustCards = [
  {
    icon: Shield,
    title: "Named-user access",
    description: "Access begins with an identified person, which reduces dependence on shared VPN or controller credentials.",
  },
  {
    icon: LayoutGrid,
    title: "Scoped to the requested resource",
    description: "Users ask for the building system or device they need, rather than inheriting general site network reach.",
  },
  {
    icon: Workflow,
    title: "Policy before connectivity",
    description: "The access decision happens before the session is created, helping teams enforce MFA and role boundaries consistently.",
  },
  {
    icon: FileText,
    title: "Session-level evidence",
    description: "Buyers get a clearer record of who initiated access, in what context, and when.",
  },
  {
    icon: Box,
    title: "Consistent workflow across mixed estates",
    description: "The operator experience stays stable even when the underlying estate uses different site connectivity methods.",
  },
  {
    icon: Network,
    title: "Connectivity included when needed",
    description: "Where a site does not already have a suitable path, Overlay can provide the connectivity layer without changing the access model.",
  },
];

export function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF5FF] px-6 pb-20 pt-24 md:pt-28">
      <HeroAnimation />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.16)_0%,_rgba(250,245,255,0)_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,245,255,0.92)_0%,_rgba(250,245,255,0)_75%)] z-[1]" />
      <div className="relative z-10 mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#7C3AED]">
            How Overlay Works
          </p>
          <h1 className="font-display text-[40px] font-extrabold leading-[1.04] tracking-[-1.4px] text-[#111827] md:text-[64px]">
            Secure BMS access, without making users operate the network.
          </h1>
          <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-[#4B5563] md:text-[20px]">
            Overlay gives BMS teams a controlled way to reach building resources without defaulting
            to broad, site-wide VPN access. Buyers get a clearer access model. Engineers get a
            consistent workflow.
          </p>
          <p className="mt-4 max-w-[620px] text-lg leading-relaxed text-[#4B5563]">
            The result is easier governance across mixed estates, stronger auditability, and a
            rollout approach that fits how building portfolios actually operate.
          </p>

          <HeroCTAGroup
            primaryLabel="Book a Demo"
            secondaryLabel="See the access model"
            secondaryHref="#comparison"
            className="mt-8"
          />
        </div>

        <div className="rounded-[28px] border border-[#E9D5FF] bg-white p-6 shadow-[0_24px_80px_rgba(124,58,237,0.12)]">
          <div className="rounded-[24px] border border-[#E9D5FF] bg-[#FAF5FF] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7C3AED]">
              Buyer summary
            </p>
            <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-[#0F0520]">
              A session-based access model for BMS estates.
            </h2>
            <div className="mt-6 grid gap-3">
              {[
                "Named users request a specific building resource.",
                "Policy checks happen before access is opened.",
                "The same operating model works across varied site connectivity.",
                "Session activity is easier to attribute and review.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[#E9D5FF] bg-white px-4 py-4 text-sm leading-relaxed text-[#0F0520]">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#6B7280]">
              This page focuses on the buyer model and operating posture, not internal
              implementation detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegacyComparisonSection() {
  return (
    <ComparisonSection
      id="comparison"
      eyebrow="From broad tunnels to controlled sessions"
      title={<>A safer operating model than<br className="hidden md:block" /> traditional BMS VPN sprawl.</>}
      description="Overlay is designed to reduce broad network access, normalize the operator workflow, and make remote access easier to govern across customer estates."
      rows={comparisonRows}
      quote="Built for technical buyers who need security controls and operational fit to improve together."
      ctaLabel="See the session flow"
      ctaHref="#workflow"
    />
  );
}

export function WorkflowSection() {
  return (
    <StepSection
      id="workflow"
      eyebrow="How Access Works"
      title={<>Access begins with the user,<br className="hidden md:block" /> not the tunnel.</>}
      description="Overlay keeps the workflow straightforward for engineers while centering the access decision on identity, policy, and the requested resource."
      steps={workflowSteps}
      className="bg-white py-24 px-6"
    />
  );
}

export function TrustAndAuditSection() {
  return (
    <TrustPillarsSection
      eyebrow="Control And Auditability"
      title={<>Built to give buyers clearer control,<br className="hidden md:block" /> evidence, and consistency.</>}
      description="The objective is not to make every estate identical underneath. It is to make access control, session brokering, and auditability more consistent above that variation."
      cards={trustCards}
      className="bg-[#F3F1FF] py-24 px-6 relative overflow-hidden"
    />
  );
}

export function DeploymentFitSection() {
  return (
    <FeatureRow
      eyebrow="Deployment Fit"
      title={<>Designed for real BMS estates,<br />not greenfield assumptions.</>}
      description="Overlay is intended for portfolios where site connectivity, devices, and operational practices vary from customer to customer. The user workflow remains consistent even when the underlying estate does not."
      features={[
        "Supports mixed estates with existing remote-access patterns already in place",
        "Fits teams supporting head-ends, controllers, and engineering endpoints",
        "Reduces the need for engineers to learn a different access process per customer",
        "Keeps the buyer story focused on governance and operating consistency",
      ]}
      ctaText="See rollout approach →"
      ctaHref="#rollout"
      imageSrc="/images/compatibility.png"
      imageAlt="Overlay compatibility view for mixed BMS estates"
      className="bg-white"
    />
  );
}

export function ManagedConnectivitySection() {
  return (
    <FeatureRow
      eyebrow="Managed Connectivity"
      title={<>Overlay can provide the connectivity layer<br />when the site does not already have one.</>}
      description="Some customer estates already have a suitable path for secure access. Others do not. Overlay can extend the same session-based access model to those sites by providing the underlying connectivity layer as well."
      features={[
        "Presented as an extension of the same access model, not a separate product story",
        "Lets buyers keep one operating model across sites with and without existing connectivity",
        "Avoids turning special-case sites into a different governance process",
      ]}
      ctaText="See rollout approach →"
      ctaHref="#rollout"
      imageSrc="/images/engineer-productivity.png"
      imageAlt="Overlay managed connectivity for customer estates"
      reverse
      className="bg-[#F3F1FF]"
    />
  );
}

export function RolloutSection() {
  return (
    <StepSection
      id="rollout"
      eyebrow="Buyer Rollout"
      title={<>Adopt the model in four practical steps.</>}
      description="The rollout story should feel familiar to BMS teams: confirm the estate fit, connect the sites, onboard the right users, and move into governed day-to-day access."
      steps={[
        {
          num: 1,
          title: "Review the estate",
          desc: "Map the current mix of customers, site connectivity, and remote-access requirements with Overlay.",
        },
        {
          num: 2,
          title: "Connect what is already there",
          desc: "Use existing site connectivity where suitable, or layer in Overlay-managed connectivity where it is missing.",
        },
        {
          num: 3,
          title: "Define user access",
          desc: "Onboard engineers, operators, or contractors with the right access boundaries for the buildings they support.",
        },
        {
          num: 4,
          title: "Operate with evidence",
          desc: "Run day-to-day remote access through a model that is easier to review, explain, and scale.",
        },
      ]}
      className="bg-white py-24 px-6"
    />
  );
}
