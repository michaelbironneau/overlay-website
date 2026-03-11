"use client";

import { Box, FileText, LayoutGrid, Network, Shield, Workflow } from "lucide-react";
import { HeroAnimation } from "@/components/animations/hero-animation";
import { FeatureRow } from "@/components/sections/feature-row";
import { HeroCTAGroup } from "@/components/sections/hero-cta-group";
import { StepSection } from "@/components/sections/onboarding";
import { TrustPillarsSection } from "@/components/sections/security";
import { MermaidDiagram } from "@/components/ui/mermaid-diagram";

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
    description: "A clearer record of who initiated access, in what context, and when.",
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

const accessModelDiagram = `flowchart LR
    U["Named user"] --> A["Overlay authentication and policy checks"]
    A --> R["Scoped resource selection"]
    R --> S["Per-resource session creation"]
    S --> C["Connector"]
    C --> H["HeadEnd"]
    C --> T["Controller"]
    C --> M["Machine"]
    S --> AU["Audit event"]
    C --> AL["Connector access log"]`;

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
            to broad, site-wide VPN access. Customers get a clearer access model. Engineers get a
            consistent workflow.
          </p>
          <p className="mt-4 max-w-[620px] text-lg leading-relaxed text-[#4B5563]">
            The result is easier governance across mixed estates, stronger auditability, and a
            rollout approach that fits how building portfolios actually operate.
          </p>

          <HeroCTAGroup
            primaryLabel="Book a Demo"
            secondaryLabel="See the access model"
            secondaryHref="/how-it-works#comparison"
            className="mt-8"
          />
        </div>

        <div className="rounded-[28px] border border-[#E9D5FF] bg-white p-6 shadow-[0_24px_80px_rgba(124,58,237,0.12)]">
          <div className="rounded-[24px] border border-[#E9D5FF] bg-[#FAF5FF] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7C3AED]">
              The Overlay model
            </p>
            <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-[#0F0520]">
              A session-based access model for BMS estates.
            </h2>
            <div className="mt-6 grid gap-3">
              {[
                "The same operating model works across estates and vendors.",
                "Policy checks (e.g. MFA) happen before access is opened.",
                "Named users request a specific building resource.",
                "Session activity is easy to attribute and review.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[#E9D5FF] bg-white px-4 py-4 text-sm leading-relaxed text-[#0F0520]">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#6B7280]">
              Access is convenient for users but secured to exacting enterprise standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegacyComparisonSection() {
  return (
    <section
      id="comparison"
      className="relative overflow-hidden bg-[#F3F1FF] px-6 py-24"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#7C3AED 1px, transparent 1px), linear-gradient(90deg, #7C3AED 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1160px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#7C3AED]">
            From broad tunnels to controlled sessions
          </p>
          <h2 className="font-display text-[30px] font-bold leading-[1.08] tracking-tight text-[#0F0520] md:text-[52px]">
            Convenience for users, enterprise-level controls for IT teams.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#6B7280]">
            This is the model behind Overlay&apos;s identity-based connectivity approach. A
            named user signs in, policy is checked, a specific resource is selected, a session is
            created for that request, and the connector brokers the path to the target.
          </p>
        </div>

        <div className="mt-14 rounded-[32px] border border-[#E9D5FF] bg-white p-6 shadow-[0_24px_80px_rgba(124,58,237,0.10)] md:p-8">
          <div className="overflow-x-auto">
            <MermaidDiagram
              chart={accessModelDiagram}
              className="[&_svg]:mx-auto [&_svg]:h-auto [&_svg]:min-w-[820px] [&_svg]:max-w-none [&_svg]:overflow-visible"
            />
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[780px] text-center text-base leading-relaxed text-[#6B7280]">
          The operational outcome is concise: access is attached to identity, scope, and session
          context instead of general network presence. That is what makes the model easier to
          govern across mixed BMS estates.
        </p>
      </div>
    </section>
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
      title={<>Built to give customers clearer control,<br className="hidden md:block" /> evidence, and consistency.</>}
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
        "Focused on governance and operating consistency",
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
        "Keep one operating model across sites with and without existing connectivity",
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

const exampleScenarios = [
  {
    eyebrow: "Example 1",
    title: "Teltonika RUT on site, forwarding to the BMS",
    summary:
      "Overlay keeps the model the same whether the site uses Overlay-managed connectivity or the operator's own network path.",
    paths: [
      "Overlay-managed connectivity: the site router is configured to join an Overlay-managed WireGuard path, and Overlay brokers sessions to the defined building resources behind it.",
      "Operator-managed connectivity: the BMS operator uses its own network path, and an Overlay connector links that operator network to the Overlay control plane so users still start from named-user, resource-based sessions.",
    ],
  },
  {
    eyebrow: "Example 2",
    title: "Head-end on a site PC",
    summary:
      "The same two connectivity options apply even when the head-end is on a local PC and no Teltonika router is required.",
    paths: [
      "Overlay-managed connectivity: the site PC or gateway joins the Overlay-managed connectivity layer, giving Overlay a path to broker access to the hosted head-end.",
      "Operator-managed connectivity: the operator uses its existing site networking approach, and the Overlay connector brokers named-user sessions through that established path.",
    ],
  },
  {
    eyebrow: "Example 3",
    title: "Head-end hosted in the BMS operator cloud",
    summary:
      "Overlay also fits hosted environments where the head-end already sits in the operator's cloud estate rather than on site.",
    paths: [
      "An Overlay connector runs in the operator cloud and brokers access to the hosted head-end over the operator's VPN or private network path to Overlay.",
      "The access workflow does not change: users sign in, policy is checked, they select the hosted resource, and the resulting session is attributable and auditable.",
    ],
  },
];

export function ExampleScenariosSection() {
  return (
    <section className="bg-[#0F0520] px-6 py-24 text-white">
      <div className="mx-auto max-w-[1160px]">
        <div className="max-w-[760px]">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/60">
            Example Deployments
          </p>
          <h2 className="font-display text-[30px] font-bold leading-[1.08] tracking-tight md:text-[52px]">
            The same connectivity model can fit very different BMS estates.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/72">
            These examples are grounded in the capabilities described in the docs: connector-brokered
            sessions, support for existing VPN-style connectivity, and an Overlay-managed connectivity
            option where a suitable site path does not already exist.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {exampleScenarios.map((scenario) => (
            <article
              key={scenario.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#C4B5FD]">
                {scenario.eyebrow}
              </p>
              <h3 className="mt-4 font-display text-[28px] font-bold leading-tight text-white">
                {scenario.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/72">{scenario.summary}</p>
              <div className="mt-6 grid gap-4">
                {scenario.paths.map((path) => (
                  <div
                    key={path}
                    className="rounded-2xl border border-white/10 bg-[#140A2A] px-4 py-4 text-sm leading-relaxed text-white/88"
                  >
                    {path}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RolloutSection() {
  return (
    <StepSection
      id="rollout"
      eyebrow="Rollout"
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
