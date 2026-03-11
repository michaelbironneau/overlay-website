"use client";

import { CircuitAnimation } from "@/components/animations/circuit-animation";
import { FeatureRow } from "@/components/sections/feature-row";
import { motion } from "framer-motion";

export function EngineerProductivity() {
    return (
        <section className="bg-[#0F0520] relative overflow-hidden">
            <CircuitAnimation />
            <div className="relative z-10 pt-24 pb-12 px-6">
                <div className="max-w-[1160px] mx-auto text-center mb-16">
                    <p className="font-mono text-xs font-medium tracking-[0.14em] text-white uppercase mb-4 opacity-60">Reduce Engineer Friction</p>
                    <h2 className="font-display text-[28px] md:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-4">
                        Reclaim 10–30% of<br className="hidden md:block" /> your bureau&apos;s day.
                    </h2>
                    <p className="text-lg text-white/70 max-w-[580px] mx-auto leading-relaxed">
                        Every minute spent logging into disparate systems is a minute not spent solving problems.
                    </p>
                </div>

                <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-center backdrop-blur-sm">
                        <div className="text-[40px] font-bold tracking-tight text-[#EC4899]">10–30%</div>
                        <div className="text-sm font-mono text-white/50 uppercase tracking-widest mt-1">Bureau time reclaimed</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-center backdrop-blur-sm">
                        <div className="text-[40px] font-bold tracking-tight text-[#7C3AED]">Zero</div>
                        <div className="text-sm font-mono text-white/50 uppercase tracking-widest mt-1">On-site visits for remote remedials</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-center backdrop-blur-sm">
                        <div className="text-[40px] font-bold tracking-tight text-[#F97316]">1-click</div>
                        <div className="text-sm font-mono text-white/50 uppercase tracking-widest mt-1">Contractor access provisioning</div>
                    </div>
                </div>

                <FeatureRow
                    eyebrow=""
                    title=""
                    description=""
                    features={[
                        "Convenient remote commissioning without losing security",
                        "Works out-of-the-box with Workbench, IQSET, Desigo CC, EcoStruxure",
                        "Just-in-Time access locked to engineer's IP, expires at session end",
                        "Auditable contractor access without compromising security"
                    ]}
                    ctaText="See engineer workflow →"
                    ctaHref="#"
                    imageSrc="/images/engineer-productivity.png"
                    imageAlt="Engineer productivity view"
                    dark
                    className="py-0"
                />

                <div className="text-center mt-14 pb-24 relative z-10">
                    <a href="#" className="inline-block bg-white text-[#7C3AED] px-8 py-4 rounded-md font-bold text-base hover:scale-[1.04] transition-transform">
                        Reclaim Your Team&apos;s Time →
                    </a>
                </div>
            </div>
        </section>
    );
}
