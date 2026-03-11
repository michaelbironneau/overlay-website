import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FinalCTAProps = {
    eyebrow?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    primaryCtaLabel?: string;
    primaryCtaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
    footnote?: string;
    variant?: "default" | "testimonial";
};

export function FinalCTA({
    eyebrow = "Ready to move?",
    title = <>Your team deserves better<br className="hidden md:block" /> than VPN juggling.</>,
    description = <>Join the bureaus who&apos;ve reclaimed 10+ hours per week.<br className="hidden md:block" /> Setup takes hours, not weeks. No hardware. No network changes.</>,
    primaryCtaLabel = "Book Your Demo",
    primaryCtaHref = "#",
    secondaryCtaLabel,
    secondaryCtaHref = "#",
    footnote = "Free 14-day trial · No credit card required",
    variant = "default",
}: FinalCTAProps) {
    const isTestimonial = variant === "testimonial";

    return (
        <section
            className={cn(
                "py-32 px-6 text-center relative overflow-hidden",
                isTestimonial ? "bg-gradient-to-br from-[#7C3AED] to-[#0F0520]" : "bg-[#0F0520]"
            )}
        >
            {isTestimonial ? (
                <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#7C3AED] opacity-20 blur-[120px] pointer-events-none" />
            ) : null}
            <div className="max-w-[1160px] mx-auto relative z-10">
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-white/60 uppercase mb-4">{eyebrow}</p>
                <h2 className="font-display text-[28px] md:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-4">
                    {title}
                </h2>
                <p className="text-lg text-white/80 max-w-[640px] mx-auto leading-relaxed mb-10">
                    {description}
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button
                        render={<Link href={primaryCtaHref} />}
                        nativeButton={false}
                        variant="ghost"
                        size="lg"
                        className="h-14 bg-white px-8 text-base font-bold text-[#7C3AED] transition-transform hover:scale-[1.04] hover:bg-white hover:text-[#7C3AED]"
                    >
                        {primaryCtaLabel}
                    </Button>
                    {secondaryCtaLabel ? (
                        <Button
                            render={<Link href={secondaryCtaHref} />}
                            nativeButton={false}
                            variant="outline"
                            size="lg"
                            className={cn(
                                "h-14 bg-transparent px-8 text-base font-semibold text-white hover:text-white",
                                isTestimonial ? "border-white/20 hover:bg-white/10" : "border-white/25 hover:bg-white/10"
                            )}
                        >
                            {secondaryCtaLabel}
                        </Button>
                    ) : null}
                </div>
                <p className="mt-4 font-mono text-xs text-white/50">{footnote}</p>
            </div>
        </section>
    );
}
