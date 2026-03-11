"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { Check, PoundSterling, Server, ShieldCheck } from "lucide-react";
import { HeroAnimation } from "@/components/animations/hero-animation";
import { Button } from "@/components/ui/button";
import { ComparisonGrid, type ComparisonRow } from "@/components/sections/comparison-grid";
import { HeroCTAGroup } from "@/components/sections/hero-cta-group";

const problemComparisonRows: ComparisonRow[] = [
  {
    before: { title: "Remote connections are a cost center" },
    after: { title: "Remote connections are a revenue stream" },
  },
  {
    before: { title: "Your sales slow down every time there's a cyber risk questionnaire" },
    after: { title: "Overlay provides pre-filled risk assessments" },
  },
  {
    before: { title: "Credentials emailed around engineering teams" },
    after: { title: "Staff just use one Overlay identity" },
  },
  {
    before: { title: "Manual customer billing (or none at all)" },
    after: { title: "Automated customer billing and renewals" },
  },
  {
    before: { title: "Teams juggle different VPNs for every client" },
    after: { title: "All customer connections in one place" },
  },
];

const managedPlatformItems = [
  "Bring your own network infrastructure or use ours",
  "Encrypted tunnels",
  "Authentication and access control",
  "Session routing",
  "Military-grade audit and access logging",
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
      <HeroAnimation />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.16)_0%,_rgba(250,245,255,0)_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,245,255,0.92)_0%,_rgba(250,245,255,0)_75%)] z-[1]" />
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

        <RevenueCalculatorCard />
      </div>
    </section>
  );
}

function RevenueCalculatorCard() {
  const [siteCount, setSiteCount] = useState(25);
  const [estimatedMonthlyRevenue, setEstimatedMonthlyRevenue] = useState<number | null>(null);
  const [animatedEstimate, setAnimatedEstimate] = useState(0);

  const siteLabel = siteCount === 1000 ? "1000+" : siteCount.toString();

  useEffect(() => {
    if (estimatedMonthlyRevenue === null) {
      return;
    }

    setAnimatedEstimate(0);

    const controls = animate(0, estimatedMonthlyRevenue, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate(value) {
        setAnimatedEstimate(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [estimatedMonthlyRevenue]);

  return (
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

      <div className="mt-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[#0F0520]">Number of sites</p>
          </div>
          <div className="rounded-2xl bg-[#F3F1FF] px-4 py-2 text-right">
            <p className="font-display text-2xl font-bold tracking-tight text-[#0F0520]">
              {siteLabel}
            </p>
          </div>
        </div>

        <input
          type="range"
          min={1}
          max={1000}
          step={1}
          value={siteCount}
          onChange={(event) => setSiteCount(Number(event.target.value))}
          className="mt-6 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#E9D5FF] accent-[#7C3AED]"
          aria-label="Number of sites"
        />

        <div className="mt-2 flex justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B7280]">
          <span>1</span>
          <span>1000+</span>
        </div>
      </div>

      <Button
        className="mt-6 h-12 w-full font-semibold text-white bg-linear-to-br from-[#7C3AED] to-[#6D28D9]"
        onClick={() => setEstimatedMonthlyRevenue(calculateEstimate(siteCount))}
      >
        Estimate
      </Button>

      {estimatedMonthlyRevenue !== null ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-6 rounded-2xl bg-[#0F0520] px-5 py-6 text-white"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
            Estimated Monthly Revenue
          </p>
          <div className="mt-2 flex items-end gap-2">
            <span className="font-display text-5xl font-extrabold tracking-tight">
              £{animatedEstimate.toLocaleString("en-GB")}
            </span>
            <span className="pb-1 text-white/70">/ month</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Tiered estimate based on your site count. Final packaging and pricing can be refined with
            your team.
          </p>
        </motion.div>
      ) : null}
    </div>
  );
}

function calculateEstimate(siteCount: number) {
  const tiers = [
    { limit: 25, rate: 9 },
    { limit: 75, rate: 10 },
    { limit: 100, rate: 11 },
  ];

  let remainingSites = siteCount;
  let total = 0;

  for (const tier of tiers) {
    if (remainingSites <= 0) {
      return total;
    }

    const sitesInTier = Math.min(remainingSites, tier.limit);
    total += sitesInTier * tier.rate;
    remainingSites -= sitesInTier;
  }

  if (remainingSites > 0) {
    total += remainingSites * 12;
  }

  return total;
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
            beforeLabel="Before Overlay"
            afterLabel="After overlay"
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
