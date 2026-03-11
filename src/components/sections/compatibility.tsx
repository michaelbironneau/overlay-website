"use client";

import { Shield, Globe, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const compatData = [
    {
        icon: Shield,
        title: "VPNs",
        description: "OpenVPN, IPSec, or your existing tunnel. Provide a VPN profile and Overlay's connector joins your network instantly."
    },
    {
        icon: Globe,
        title: "Mesh Networks",
        description: "ZeroTier, WireGuard, Tailscale — we bridge them all. Add Overlay like adding another site or device."
    },
    {
        icon: Monitor,
        title: "Remote Desktop",
        description: "RDP, VNC, or browser-native sessions. Login details entered once. Authorised users connect with a single click."
    }
];

export function CompatibilitySection({ id }: { id?: string }) {
    return (
        <section id={id} className="bg-white py-24 px-6 border-y border-[#E9D5FF] relative overflow-hidden">
            {/* Circuit Pattern Background (Small) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#7C3AED 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="max-w-[1160px] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <p className="font-mono text-xs font-medium tracking-[0.14em] text-[#7C3AED] uppercase mb-4">Compatibility & Onboarding</p>
                    <h2 className="font-display text-[28px] md:text-[48px] font-bold text-[#0F0520] leading-[1.1] tracking-tight mb-4">
                        Works with the connectivity<br className="hidden md:block" /> you already have.
                    </h2>
                    <p className="text-lg text-[#6B7280] max-w-[580px] mx-auto leading-relaxed">
                        No site changes. No new firewalls. No network redesign. Overlay adapts to your infrastructure — not the other way around.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {compatData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white border border-[#E9D5FF] hover:border-[#7C3AED] rounded-[10px] p-8 flex flex-col gap-4 transition-all hover:shadow-lg group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#FAF5FF] flex items-center justify-center group-hover:bg-[#7C3AED] transition-colors">
                                <item.icon className="w-6 h-6 text-[#7C3AED] group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="font-display text-[17px] font-bold text-[#0F0520]">{item.title}</h4>
                            <p className="text-[#6B7280] text-[15px] leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="max-w-[800px] mx-auto relative shadow-xl rounded-xl overflow-hidden">
                        <div className="bg-[#0F0520] rounded-t-lg h-6 flex items-center px-3 gap-1 border-b border-white/10">
                            <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                        </div>
                        <div className="relative aspect-video bg-[#0F0520]">
                            <Image
                                src="/images/compatibility.png"
                                alt="Compatibility diagram"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <p className="mt-4 font-mono text-[13px] text-[#6B7280]">
                        Guided setup adapts to your network. Most sites connect in under an hour.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
