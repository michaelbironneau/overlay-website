"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureRowProps {
    eyebrow: string;
    title: string | React.ReactNode;
    description: string;
    features: string[];
    ctaText: string;
    ctaHref: string;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    className?: string;
    dark?: boolean;
}

export function FeatureRow({
    eyebrow,
    title,
    description,
    features,
    ctaText,
    ctaHref,
    imageSrc,
    imageAlt,
    reverse = false,
    className,
    dark = false,
}: FeatureRowProps) {
    return (
        <section className={cn("py-24 px-6", className)}>
            <div className="max-w-[1160px] mx-auto">
                <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center", reverse && "md:flex-row-reverse")}>
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={cn("flex flex-col gap-4", reverse && "md:order-last")}
                    >
                        <p className={cn(
                            "font-mono font-medium tracking-[0.14em] uppercase",
                            dark ? "text-[#4F46E5] text-xs" : "text-[#6B7280] text-[17px]"
                        )}>
                            {eyebrow}
                        </p>
                        <h3 className={cn("font-display text-[28px] md:text-[32px] font-bold leading-[1.15] tracking-tight", dark ? "text-white" : "text-[#0F0520]")}>
                            {title}
                        </h3>
                        <p className={cn("text-base md:text-[18px] leading-relaxed", dark ? "text-white/70" : "text-[#6B7280]")}>
                            {description}
                        </p>
                        <ul className="flex flex-col gap-3.5 mt-2">
                            {features.map((f, idx) => (
                                <li key={idx} className={cn("flex gap-3 text-base items-start", dark ? "text-white" : "text-[#0F0520]")}>
                                    <div className="w-5 h-5 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                                    </div>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        <a href={ctaHref} className={cn("mt-4 text-sm font-semibold hover:underline", dark ? "text-white" : "text-[#7C3AED]")}>
                            {ctaText}
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={cn(
                            "relative overflow-hidden rounded-xl border shadow-2xl",
                            dark ? "bg-[#0F0520] border-white/10" : "bg-white border-[#E9D5FF]"
                        )}
                    >
                        <div className={cn(
                            "h-7 flex items-center px-3.5 gap-1.5 border-b",
                            dark ? "bg-[#0F0520] border-white/10" : "bg-[#F9FAFB] border-[#E9D5FF]"
                        )}>
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
