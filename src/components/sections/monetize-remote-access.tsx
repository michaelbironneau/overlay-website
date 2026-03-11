import Image from "next/image";
import { Check, PoundSterling, Server, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComparisonGrid, type ComparisonRow } from "@/components/sections/comparison-grid";
import { HeroCTAGroup } from "@/components/sections/hero-cta-group";

const problemComparisonRows: ComparisonRow[] = [
  {
    before: { title: "Shared VPNs across multiple customers" },
    after: { title: "Remote troubleshooting" },
  },
  {
    before: { title: "Static firewall rules that never get reviewed" },
    after: { title: "Alarm response" },
  },
  {
    before: { title: "Credentials emailed around engineering teams" },
    after: { title: "Energy optimisation" },
  },
  {
    before: { title: "No clear billing model" },
    after: { title: "System upgrades" },
  },
  {
    before: { title: "Remote access provided for free" },
    after: { title: "Out-of-hours support" },
  },
];

const managedPlatformItems = [
  "Secure network infrastructure",
  "Encrypted tunnels",
  "Authentication and access control",
  "Session routing",
  "Monitoring and uptime",
];

const turnkeyPartnerItems = [
  "Automated billing",
  "Subscription management",
  "Renewal reminders",
  "Customer portals",
  "White-label branding",
];

const growthItems = [
  "Secure remote access for engineers",
  "Managed access for third-party contractors",
  "Monitoring connections for energy analytics",
  "Secure integration with customer IT environments",
];

export function MonetizeRemoteAccessHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF5FF] px-6 pb-20 pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.16)_0%,_rgba(250,245,255,0)_45%)]" />
      <div className="relative z-10 mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#7C3AED]">
            Remote Access as a Service
          </p>
          <h1 className="font-display text-[40px] font-extrabold leading-[1.04] tracking-[-1.4px] text-[#111827] md:text-[68px]">
            Monetize Remote Access
          </h1>
          <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-[#4B5563] md:text-[20px]">
            Secure remote access for BMS operators, without the admin. Overlay lets you provide
            secure remote connections to your customers&apos; buildings while we handle the
            infrastructure, billing, and renewals.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#4B5563]">
            You focus on engineering. We handle the platform.
          </p>
          <p className="mt-6 text-[20px] font-semibold text-[#0F0520]">
            Start offering remote access as a service, in days, not months.
          </p>

          <HeroCTAGroup
            primaryLabel="Book a Demo"
            secondaryLabel="▶ How it Works"
            secondaryHref="#how-it-works"
            className="mt-8"
          />
        </div>

        <div className="rounded-[28px] border border-[#E9D5FF] bg-white p-6 shadow-[0_24px_80px_rgba(124,58,237,0.12)]">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F1FF]">
              <PoundSterling className="h-6 w-6 text-[#7C3AED]" />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7C3AED]">
                Revenue Calculator
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-[#0F0520]">
                See what your sites could earn
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            <CalculatorField label="Number of sites" defaultValue="25" />
            <CalculatorField label="Number of customers" defaultValue="8" />
            <CalculatorField label="Number of users" defaultValue="60" />
          </div>

          <Button className="mt-6 h-12 w-full font-semibold text-white bg-linear-to-br from-[#7C3AED] to-[#6D28D9]">
            Estimate
          </Button>

          <div className="mt-6 rounded-2xl bg-[#0F0520] px-5 py-6 text-white">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
              Placeholder Estimate
            </p>
            <div className="mt-2 flex items-end gap-2">
              <span className="font-display text-5xl font-extrabold tracking-tight">£2,750</span>
              <span className="pb-1 text-white/70">/ month</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Non-binding illustration only. Final pricing and packaging are configured with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalculatorField({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#0F0520]">{label}</span>
      <input
        type="text"
        defaultValue={defaultValue}
        className="h-12 w-full rounded-xl border border-[#E9D5FF] bg-[#FCFBFF] px-4 text-[#0F0520] outline-none transition focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
      />
    </label>
  );
}

export function RemoteAccessProblemSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1160px]">
        <div className="max-w-[720px]">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#7C3AED]">
            The Problem
          </p>
          <h2 className="font-display text-[30px] font-bold leading-[1.08] tracking-tight text-[#0F0520] md:text-[52px]">
            Remote access is already mission-critical, but it is rarely treated like a product.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#6B7280]">
            Most BMS operators already provide remote access in some form. The issue is that it is
            usually unmanaged, insecure, and difficult to monetize.
          </p>
        </div>

        <div className="mt-12">
          <ComparisonGrid
            rows={problemComparisonRows}
            beforeLabel="Typical Reality"
            afterLabel="Why it matters"
            className="mx-auto max-w-[960px]"
          />
          <p className="mx-auto mt-8 max-w-[700px] text-center text-base leading-relaxed text-[#6B7280]">
            Remote access now powers modern building operations, but for many operators it still
            remains an unmanaged cost instead of a service customers understand and pay for.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ManagedPlatformSection() {
  return (
    <section className="bg-[#F3F1FF] px-6 py-24">
      <div className="mx-auto grid max-w-[1160px] gap-6 lg:grid-cols-2">
        <ServiceCard
          eyebrow="Fully Managed Platform"
          title="Overlay removes the infrastructure burden."
          description="We handle the operational plumbing that usually turns remote access into a distraction for engineering teams."
          icon={<Server className="h-6 w-6 text-[#7C3AED]" />}
          items={managedPlatformItems}
          footer="Your engineers simply connect through the portal."
        />
        <ServiceCard
          eyebrow="Turnkey Partner Experience"
          title="Offer the service without adding new overhead."
          description="Overlay powers the commercial and customer-facing layer so your team can focus on the buildings and the relationship."
          icon={<ShieldCheck className="h-6 w-6 text-[#7C3AED]" />}
          items={turnkeyPartnerItems}
          footer="Your customers see your service. Overlay powers it behind the scenes."
        />
      </div>
    </section>
  );
}

function ServiceCard({
  eyebrow,
  title,
  description,
  icon,
  items,
  footer,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  footer: string;
}) {
  return (
    <div className="rounded-[28px] border border-[#E9D5FF] bg-white p-8 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F1FF]">
        {icon}
      </div>
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#7C3AED]">
        {eyebrow}
      </p>
      <h3 className="mt-3 font-display text-[30px] font-bold leading-tight text-[#0F0520]">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-[#6B7280]">{description}</p>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#FAF5FF] px-4 py-4">
            <Check className="mt-0.5 h-4 w-4 text-[#10B981]" />
            <span className="text-[15px] font-medium text-[#0F0520]">{item}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-base font-medium leading-relaxed text-[#0F0520]">{footer}</p>
    </div>
  );
}

export function RemoteServiceGrowthSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F0520] px-6 py-24 text-white">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative z-10 mx-auto grid max-w-[1160px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/55">
            Grow Your Remote Service Offering
          </p>
          <h2 className="font-display text-[30px] font-bold leading-[1.08] tracking-tight md:text-[52px]">
            Expand remote services from one secure platform.
          </h2>
          <p className="mt-5 max-w-[520px] text-lg leading-relaxed text-white/72">
            Many BMS operators already deliver remote services. Overlay helps you expand that
            offering safely across engineers, contractors, analytics teams, and customer IT
            environments.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
          <div className="h-7 border-b border-white/10 bg-[#0A0416] px-3.5">
            <div className="flex h-full items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
            </div>
          </div>
          <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
            <div className="p-8">
              <div className="grid gap-4">
                {growthItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <Check className="mt-0.5 h-4 w-4 text-[#34D399]" />
                    <span className="text-sm leading-relaxed text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px] border-t border-white/10 md:border-l md:border-t-0">
              <Image
                src="/images/engineer-productivity.png"
                alt="Overlay remote service management"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
