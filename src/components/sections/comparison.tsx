"use client";

import { motion } from "framer-motion";
import { ComparisonGrid, type ComparisonRow } from "@/components/sections/comparison-grid";

const comparisonData: ComparisonRow[] = [
    {
        before: { title: "Credentials shared over email", sub: "Plaintext passwords, no expiry, zero visibility into access" },
        after: { title: "Zero-credential kiosk links", sub: "One-click access, time-limited, revocable instantly" }
    },
    {
        before: { title: "Truck roll for every remedial", sub: "$400+ average cost, 2–4 hour disruption per incident" },
        after: { title: "Remote session in 90 seconds", sub: "Fix it from the office — margin stays where it belongs" }
    },
    {
        before: { title: "Head-ends exposed on the internet", sub: "Public IPs, no segmentation — audit failure by design" },
        after: { title: "Zero-trust tunnel, nothing exposed", sub: "Head-ends stay dark — only Overlay sees them" }
    },
    {
        before: { title: "\"Who changed that setpoint?\"", sub: "Shared credentials — no answer, no defence, no audit" },
        after: { title: "Full audit trail — every action logged", sub: "Who, what, when — compliant by default, defensible by design" }
    }
];

export function Comparison() {
    return (
        <section id="how-it-works" className="bg-[#FAF5FF] py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#7C3AED 1px, transparent 1px), linear-gradient(90deg, #7C3AED 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-[1160px] mx-auto relative z-10">
                <div className="max-w-[1160px] mx-auto text-center mb-16 px-6">
                    <p className="font-mono text-xs font-medium tracking-[0.14em] text-[#7C3AED] uppercase mb-4">Why BMS operators leave legacy tunnels</p>
                    <h2 className="font-display text-[28px] md:text-[48px] font-bold text-[#0F0520] leading-[1.1] tracking-tight mb-4">
                        Every pain point,<br className="hidden md:block" /> directly solved.
                    </h2>
                    <p className="text-lg text-[#6B7280] max-w-[580px] mx-auto leading-relaxed">
                        No more choosing between security and convenience. Overlay closes each gap, one by one.
                    </p>
                </div>

                <ComparisonGrid rows={comparisonData} className="mx-auto max-w-[960px]" />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-10 md:mt-12 font-display text-[18px] md:text-[24px] font-bold text-[#0F0520] max-w-[640px] mx-auto leading-tight px-6"
                >
                    &quot;Overlay blends convenience with enterprise-grade controls — without the enterprise-grade complexity.&quot;
                </motion.p>

                <div className="text-center mt-12">
                    <a href="#" className="inline-block bg-[#7C3AED] text-white px-7 py-3.5 rounded-md font-semibold text-base shadow-lg hover:bg-[#6D28D9] transition-colors">
                        See How Teams Make the Switch →
                    </a>
                </div>
            </div>
        </section>
    );
}
