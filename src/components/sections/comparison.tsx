"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ComparisonGrid, type ComparisonRow } from "@/components/sections/comparison-grid";

const comparisonData: ComparisonRow[] = [
    {
        before: { title: "A maze of systems to log into", sub: "VMs, jump boxes, different VPNs for each site" },
        after: { title: "Log in once, access all your sites", sub: "One-click access based on Overlay identity" }
    },
    {
        before: { title: "Site visits for every problem", sub: "High cost, high disruption for every incident" },
        after: { title: "Connect engineering tools in seconds", sub: "Use Workbench and other tools remotely, preserving margins" }
    },
    {
        before: { title: "Head-ends exposed on the internet", sub: "Public IPs, no segmentation — audit failure by design" },
        after: { title: "Zero-trust tunnel, nothing exposed", sub: "Head-ends stay dark — only Overlay sees them" }
    },
    {
        before: { title: "\"Who changed that setpoint?\"", sub: "Shared credentials — no answer, no defence, no audit" },
        after: { title: "Full audit and access trail", sub: "Who, what, when — compliant by default, defensible by design" }
    },
    {
        before: { title: "Remote connectivity is a cost center", sub: "Paying for SIM cards and routers gets expensive at scale" },
        after: { title: "Remote connectivity is a revenue stream", sub: "Sell remote access back to customers with Overlay's whitelabel resources and automated billing & renewals" }
    }
];

type ComparisonSectionProps = {
    id?: string;
    eyebrow: string;
    title: React.ReactNode;
    description: string;
    rows: ComparisonRow[];
    quote?: React.ReactNode;
    ctaLabel?: string;
    ctaHref?: string;
};

export function ComparisonSection({
    id,
    eyebrow,
    title,
    description,
    rows,
    quote,
    ctaLabel,
    ctaHref,
}: ComparisonSectionProps) {
    return (
        <section id={id} className="bg-[#FAF5FF] py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#7C3AED 1px, transparent 1px), linear-gradient(90deg, #7C3AED 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-[1160px] mx-auto relative z-10">
                <div className="max-w-[1160px] mx-auto text-center mb-16 px-6">
                    <p className="font-mono text-xs font-medium tracking-[0.14em] text-[#7C3AED] uppercase mb-4">{eyebrow}</p>
                    <h2 className="font-display text-[28px] md:text-[48px] font-bold text-[#0F0520] leading-[1.1] tracking-tight mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-[#6B7280] max-w-[580px] mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                <ComparisonGrid rows={rows} className="mx-auto max-w-[960px]" />

                {quote ? (
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-10 md:mt-12 font-display text-[18px] md:text-[24px] font-bold text-[#0F0520] max-w-[640px] mx-auto leading-tight px-6"
                    >
                        {quote}
                    </motion.p>
                ) : null}

                {ctaLabel && ctaHref ? (
                    <div className="text-center mt-12">
                        <Button
                            render={<Link href={ctaHref} />}
                            nativeButton={false}
                            size="lg"
                            className="h-12 bg-[#7C3AED] px-7 font-semibold text-white shadow-lg hover:bg-[#6D28D9]"
                        >
                            {ctaLabel}
                        </Button>
                    </div>
                ) : null}
            </div>
        </section>
    );
}

export function Comparison() {
    return (
        <ComparisonSection
            id="how-it-works"
            eyebrow="Why BMS operators leave legacy tunnels"
            title={<>Every pain point,<br className="hidden md:block" /> directly solved.</>}
            description="No more choosing between security and convenience. Overlay closes each gap, one by one."
            rows={comparisonData}
            quote='"Overlay blends convenience with enterprise-grade controls — without the enterprise-grade complexity."'
            ctaLabel="See How Teams Make the Switch →"
            ctaHref="/how-it-works"
        />
    );
}
