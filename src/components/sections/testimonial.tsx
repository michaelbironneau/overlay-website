"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function TestimonialSection() {
    return (
        <section className="bg-gradient-to-br from-[#7C3AED] to-[#0F0520] py-24 px-6 text-center text-white relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED] opacity-20 blur-[120px] pointer-events-none" />

            <div className="max-w-[1160px] mx-auto relative z-10">
                <motion.p
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="font-display text-[22px] md:text-[34px] font-bold leading-tight max-w-[900px] mx-auto mb-8"
                >
                    &quot;We onboarded 40 sites in a weekend. What used to take three engineers now takes one. Our clients don&apos;t even know it&apos;s Overlay — they just know their portal works.&quot;
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-mono text-sm tracking-[0.2em] text-white/50 uppercase"
                >
                    — JAMES WALKER, Operations Director, Allied Facilities Group
                </motion.p>

                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    <Link href="/book-a-demo" className="bg-white text-[#7C3AED] px-8 py-4 rounded-md font-bold text-base hover:scale-[1.04] transition-transform">
                        Book a Demo
                    </Link>
                    <Link href="/how-it-works" className="border-2 border-white/20 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-white/10 transition-colors">
                        ▶ Watch 2-min Overview
                    </Link>
                </div>
            </div>
        </section>
    );
}
