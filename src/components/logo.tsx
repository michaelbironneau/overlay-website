import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, variant = "default" }: { className?: string; variant?: "default" | "light" }) {
    const isLight = variant === "light";

    return (
        <div className={cn("flex items-center gap-2.5", className)}>
            <img src={"/images/logo_3.png"} className="h-6 shadow-lg" />
            <span className={cn(
                "font-display text-xl font-extrabold tracking-tight",
                isLight ? "text-white" : "text-[#0F0520]"
            )}>
                over<span className="text-[#7C3AED]">lay</span>
            </span>
        </div>
    );
}
