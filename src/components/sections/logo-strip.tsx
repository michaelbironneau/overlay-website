"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { src: "/images/openvpn.svg", alt: "OpenVPN", width: 110, height: 28 },
    { src: "/images/wireguard.svg", alt: "WireGuard", width: 110, height: 28 },
    { src: "/images/zerotier.svg", alt: "ZeroTier", width: 90, height: 28 },
    { src: "/images/tridium.png", alt: "Tridium / Niagara", width: 100, height: 24 },
    { src: "/images/siemens.svg", alt: "Siemens", width: 90, height: 22 },
    { src: "/images/schneider.png", alt: "Schneider Electric", width: 120, height: 36 },
    { src: "/images/trend.png", alt: "Trend", width: 120, height: 36 }
];

export function LogoStrip() {
    return (
        <div className="bg-[#F3F1FF] py-7 px-12 text-center border-b border-[#E9D5FF]">
            <span className="font-mono text-[11px] text-[#6B7280] tracking-[0.12em] uppercase block mb-5">
                Works with
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {logos.map((logo, idx) => (
                    <motion.div
                        key={logo.alt}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ opacity: 1 }}
                        className="grayscale hover:grayscale-0 transition-all"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.height}
                            className="object-contain"
                            style={{ height: `${logo.height}px`, width: 'auto' }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
