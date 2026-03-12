"use client";

import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const transition: Transition = { duration: 0.5, ease: "easeOut" };

type HeroCTAGroupProps = {
    primaryLabel: string;
    primaryHref?: string;
    secondaryLabel: string;
    secondaryHref?: string;
    delay?: number;
    className?: string;
};

export function HeroCTAGroup({
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
    delay = 0.3,
    className,
}: HeroCTAGroupProps) {
    return (
        <motion.div
            {...fadeInUp}
            transition={{ delay, ...transition }}
            className={cn("flex flex-wrap gap-3.5", className)}
        >
            {primaryHref ? (
                <Button
                    render={<Link href={primaryHref} />}
                    nativeButton={false}
                    variant="ghost"
                    size="lg"
                    className="h-12 bg-white px-7 font-bold text-[#7C3AED] shadow-[0_4px_12px_rgba(124,58,237,0.15)] hover:bg-[#F9FAFB] hover:text-[#7C3AED]"
                >
                    {primaryLabel}
                </Button>
            ) : (
                <Button
                    size="lg"
                    className="h-12 bg-white px-7 font-bold text-[#7C3AED] shadow-[0_4px_12px_rgba(124,58,237,0.15)] hover:bg-[#F9FAFB]"
                >
                    {primaryLabel}
                </Button>
            )}

            {secondaryHref ? (
                <Button
                    render={<Link target="new" href={secondaryHref} />}
                    nativeButton={false}
                    variant="outline"
                    size="lg"
                    className="h-12 border-2 border-[#7C3AED] bg-transparent px-7 font-semibold text-[#7C3AED] hover:bg-[#7C3AED]/10 hover:text-[#7C3AED]"
                >
                    {secondaryLabel}
                </Button>
            ) : (
                <Button
                    variant="outline"
                    size="lg"
                    className="h-12 border-2 border-[#7C3AED] bg-transparent px-7 font-semibold text-[#7C3AED] hover:bg-[#7C3AED]/10"
                >
                    {secondaryLabel}
                </Button>
            )}
        </motion.div>
    );
}
