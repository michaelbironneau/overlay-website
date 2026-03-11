"use client";

import type { LucideIcon } from "lucide-react";
import { Shield, LayoutGrid, Box, FileText, Cpu, Settings } from "lucide-react";
import { motion } from "framer-motion";

type TrustCard = {
    icon: LucideIcon;
    title: string;
    description: string;
};

const securityCards: TrustCard[] = [
    {
        icon: Shield,
        title: "Identity-based access",
        description: "Users prove who they are, not what network they're on. Sessions map to individuals, never shared credentials."
    },
    {
        icon: LayoutGrid,
        title: "Zero-trust segmentation",
        description: "Every session isolated. Authenticated users only see their assigned scopes. No lateral movement possible."
    },
    {
        icon: Box,
        title: "Session sandboxing",
        description: "Ephemeral session hosts isolate activity. Contractors get scoped access — nothing more, nothing less."
    },
    {
        icon: FileText,
        title: "Continuous logging",
        description: "Every click, every change, timestamped and attributed. Satisfy enterprise compliance requirements by default."
    },
    {
        icon: Cpu,
        title: "Multi-vendor native",
        description: "Overlay normalises Tridium, Siemens, Schneider, and legacy stacks without gateway swaps."
    },
    {
        icon: Settings,
        title: "BMS workflow-driven",
        description: "Built around common BMS workflows, with secure defaults. Designed to save time and prevent breaches."
    }
];

type TrustPillarsSectionProps = {
    eyebrow: string;
    title: React.ReactNode;
    description: string;
    cards: TrustCard[];
    className?: string;
};

export function TrustPillarsSection({
    eyebrow,
    title,
    description,
    cards,
    className = "bg-[#F3F1FF] py-24 px-6 relative overflow-hidden",
}: TrustPillarsSectionProps) {
    return (
        <section className={className}>
            <div className="max-w-[1160px] mx-auto text-center mb-16 px-4">
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-[#7C3AED] uppercase mb-4">{eyebrow}</p>
                <h2 className="font-display text-[28px] md:text-[48px] font-bold text-[#0F0520] leading-[1.1] tracking-tight mb-4">
                    {title}
                </h2>
                <p className="text-lg text-[#6B7280] max-w-[580px] mx-auto leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 rounded-xl border border-[#E9D5FF] hover:border-[#7C3AED] transition-all hover:shadow-lg group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-[#FAF5FF] flex items-center justify-center mb-6 group-hover:bg-[#7C3AED] transition-colors">
                            <card.icon className="w-6 h-6 text-[#7C3AED] group-hover:text-white transition-colors" />
                        </div>
                        <h4 className="font-display text-xl font-bold text-[#0F0520] mb-3">{card.title}</h4>
                        <p className="text-[#6B7280] text-sm leading-relaxed">{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export function SecuritySection() {
    return (
        <TrustPillarsSection
            eyebrow="Built for Multi-Vendor Environments"
            title={<>Zero-trust. Identity-driven.<br className="hidden md:block" /> Fully auditable.</>}
            description="Security that works by default, not by configuration. No shared credentials. No open ports. Every session logged and attributable."
            cards={securityCards}
        />
    );
}
