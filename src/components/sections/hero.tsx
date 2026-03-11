"use client";

import { motion, type Transition } from "framer-motion";
import { HeroAnimation } from "@/components/animations/hero-animation";
import { HeroCTAGroup } from "@/components/sections/hero-cta-group";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const transition: Transition = { duration: 0.5, ease: "easeOut" };

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center text-center bg-[#FAF5FF]">
            <HeroAnimation />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,245,255,0.95)_0%,_rgba(250,245,255,0)_75%)] pointer-events-none z-1" />

            <div className="relative z-10 w-full max-w-[1160px] flex flex-col items-center">
                <img src={"/images/logo_3.png"} className="h-24" />
                <motion.div
                    {...fadeInUp}
                    transition={transition}
                    className="font-mono mt-2 text-xs font-medium tracking-[0.14em] text-[#7C3AED] uppercase mb-[18px]"
                >
                    Remote access for BMS teams
                </motion.div>

                <motion.h1
                    {...fadeInUp}
                    transition={{ delay: 0.1, ...transition }}
                    className="font-display text-[40px] md:text-[72px] font-extrabold text-[#111827] leading-[1.07] tracking-[-1.5px] max-w-[760px] mb-[22px]"
                >
                    Every Site.<br />One Login.
                </motion.h1>

                <motion.p
                    {...fadeInUp}
                    transition={{ delay: 0.2, ...transition }}
                    className="text-base md:text-[19px] text-[#6B7280] max-w-[520px] mb-9 leading-relaxed"
                >
                    Say goodbye to juggling VPNs and login credentials. Overlay gives you centralised
                    remote access to your BMS without a system overhaul.
                </motion.p>

                <HeroCTAGroup
                    primaryLabel="Book a Demo"
                    primaryHref="/book-a-demo"
                    secondaryLabel="▶ How it Works"
                    secondaryHref="/#demo-video"
                    className="mb-3.5 justify-center"
                />

                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.4, ...transition }}
                    className="font-mono text-xs text-[#6B7280] mb-14"
                >
                    30 MIN · NO COMMITMENT
                </motion.div>

                <motion.p
                    {...fadeInUp}
                    transition={{ delay: 0.5, ...transition }}
                    className="font-mono text-[13px] text-[#6B7280] -mt-10"
                >
                    Onboarding in hours. No site visits required.
                </motion.p>

                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.6, ...transition }}
                    className="mt-10 w-full max-w-[640px] relative shadow-2xl"
                    id="demo-video"
                >
                    <div className="bg-[#0F0520] rounded-t-lg h-7 flex items-center px-3.5 gap-1.5 border-b border-white/10">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    </div>
                    <div className="relative aspect-video bg-[#0F0520] rounded-b-lg overflow-hidden">
                        <iframe
                            src="https://share.descript.com/embed/xZDVrT7GTzc"
                            title="Overlay 3-minute how-to video"
                            className="absolute inset-0 h-full w-full border-0"
                            allowFullScreen
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
