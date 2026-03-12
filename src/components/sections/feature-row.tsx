"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FeatureRowProps = {
  id?: string;
  eyebrow: string;
  title: string | ReactNode;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  reverse?: boolean;
  className?: string;
  dark?: boolean;
} & (
  | {
      imageSrc: string;
      imageAlt: string;
      visual?: never;
    }
  | {
      visual: ReactNode;
      imageSrc?: never;
      imageAlt?: never;
    }
);

export function FeatureRow({
  id,
  eyebrow,
  title,
  description,
  features,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  visual,
  reverse = false,
  className,
  dark = false,
}: FeatureRowProps) {
  return (
    <section id={id} className={cn("px-6 py-24", className)}>
      <div className="mx-auto max-w-[1160px]">
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24",
            reverse && "md:flex-row-reverse",
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn("flex flex-col gap-4", reverse && "md:order-last")}
          >
            <p
              className={cn(
                "font-mono font-medium uppercase tracking-[0.14em]",
                dark ? "text-xs text-[#4F46E5]" : "text-[17px] text-[#6B7280]",
              )}
            >
              {eyebrow}
            </p>
            <h3
              className={cn(
                "font-display text-[28px] font-bold leading-[1.15] tracking-tight md:text-[32px]",
                dark ? "text-white" : "text-[#0F0520]",
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "text-base leading-relaxed md:text-[18px]",
                dark ? "text-white/70" : "text-[#6B7280]",
              )}
            >
              {description}
            </p>
            <ul className="mt-2 flex flex-col gap-3.5">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className={cn(
                    "flex items-start gap-3 text-base",
                    dark ? "text-white" : "text-[#0F0520]",
                  )}
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={ctaHref}
              className={cn(
                "mt-4 text-sm font-semibold hover:underline",
                dark ? "text-white" : "text-[#7C3AED]",
              )}
            >
              {ctaText}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "relative",
              !visual && "overflow-hidden rounded-xl border shadow-2xl",
              !visual && (dark ? "border-white/10 bg-[#0F0520]" : "border-[#E9D5FF] bg-white"),
            )}
          >
            {visual ? (
              visual
            ) : (
              <>
                <div
                  className={cn(
                    "flex h-7 items-center gap-1.5 border-b px-3.5",
                    dark ? "border-white/10 bg-[#0F0520]" : "border-[#E9D5FF] bg-[#F9FAFB]",
                  )}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={imageSrc!} alt={imageAlt!} fill className="object-cover" />
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
