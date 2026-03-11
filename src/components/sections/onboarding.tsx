"use client";

import { motion } from "framer-motion";

const steps = [
    { num: 1, title: "Book a Demo", desc: "30-minute call. We'll suggest the quickest solution for your estate and answer your questions." },
    { num: 2, title: "Connect Your Networks", desc: "Guided setup. Works with your existing VPN or mesh - or we provide a managed VPN service if you don't already use one." },
    { num: 3, title: "Onboard your team", desc: "Invite engineers, staff and contractors. Create your sites. Set permissions. Start remediating remotely." },
    { num: 4, title: "Unlock New Revenue", desc: "Launch your customer portal. Turn access into recurring revenue." }
];

export function OnboardingSteps({ id }: { id?: string }) {
    return (
        <section id={id} className="bg-[#F3F1FF] py-24 px-6">
            <div className="max-w-[1160px] mx-auto text-center mb-16">
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-[#7C3AED] uppercase mb-4">Four-Step Rollout</p>
                <h2 className="font-display text-[28px] md:text-[48px] font-bold text-[#0F0520] leading-[1.1] tracking-tight mb-4">
                    Go live in four steps.
                </h2>
                <p className="text-lg text-[#6B7280] max-w-[580px] mx-auto leading-relaxed">
                    No hardware changes. No site visits. Onboarding typically takes hours, not weeks.
                </p>
            </div>

            <div className="max-w-[1160px] mx-auto relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-[#E9D5FF] z-0" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col gap-4 text-center px-4"
                        >
                            <div className="w-14 h-14 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center font-display font-bold text-[22px] mx-auto mb-2 shadow-lg shadow-[#7C3AED]/20">
                                {step.num}
                            </div>
                            <h4 className="font-display text-[17px] font-bold text-[#0F0520]">{step.title}</h4>
                            <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
