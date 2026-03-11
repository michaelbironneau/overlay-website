"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type PricingPlan = {
    name: string;
    price: string;
    period: string;
    desc: string;
    features: string[];
    cta: string;
    variant: "outline" | "default";
    featured?: boolean;
};

const plans: PricingPlan[] = [
    {
        name: "Project Plan",
        price: "£12",
        period: "/mo per site",
        desc: "Pay-as-you-go for resellers and small bureaus. Scale discounts available.",
        features: [
            "Pay per site, cancel at any time",
            "Up to 5 users per site",
            "HTTP(S) + Fox(S) included",
            "Full audit logging",
            "First customer portal free",
            "Monetisation support (auto-billing and renewals)",
            "Upgrade  to enterprise anytime"
        ],
        cta: "Get Started",
        variant: "outline"
    },
    {
        name: "Enterprise Plan",
        price: "Custom",
        period: " pricing",
        desc: "Dedicated environment with predictable costs for growing teams. Everything in Project, plus:",
        features: [
            "Unlimited sites",
            "Unlimited team members",
            "Unlimited customer portals",
            "Add cloud-hosted VMs",
            "Dedicated support portal",
            "SSO / SAML integration",
            "SLA guarantee"
        ],
        cta: "Book a Demo",
        variant: "default",
        featured: true
    }
];

export function PricingSection() {
    return (
        <section id="pricing" className="bg-white py-24 px-6">
            <div className="max-w-[1160px] mx-auto">
                <div className="text-center mb-16">
                    <p className="font-mono text-xs font-medium tracking-[0.14em] text-[#7C3AED] uppercase mb-4">Pricing</p>
                    <h2 className="font-display text-[28px] md:text-[48px] font-bold text-[#0F0520] leading-[1.1] tracking-tight mb-4">
                        Simple pricing that scales with you.
                    </h2>
                    <p className="text-lg text-[#6B7280] max-w-[580px] mx-auto leading-relaxed">
                        Start on project pricing. Move to enterprise when you&apos;re ready. No long-term contracts. No surprise fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[820px] mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`relative p-10 rounded-xl border ${plan.featured ? "bg-[#EFF6FF] border-[#7C3AED] border-2 shadow-xl" : "bg-[#F3F1FF] border-[#E9D5FF]"}`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F97316] text-[#0F0520] font-mono text-[11px] font-bold tracking-widest px-3.5 py-1 rounded-full uppercase">
                                    Most Popular
                                </div>
                            )}
                            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B7280] mb-2.5">{plan.name}</p>
                            <div className="font-display text-[40px] font-extrabold tracking-tight mb-1.5 flex items-baseline">
                                {plan.price}
                                <span className="text-xl font-normal text-[#6B7280] ml-1">{plan.period}</span>
                            </div>
                            <p className="text-[15px] text-[#6B7280] mb-7 leading-normal">{plan.desc}</p>

                            <ul className="space-y-2.5 mb-8">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex gap-2.5 text-[15px] text-[#0F0520] items-start">
                                        <span className="text-[#10B981] font-bold">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.variant}
                                className={`w-full h-11 text-[15px] font-bold ${plan.featured ? "bg-[#7C3AED] hover:bg-[#6D28D9] text-white" : "border-2 border-[#0F0520] bg-transparent text-[#0F0520]"}`}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center mt-7 text-[15px] text-[#6B7280]">
                    Questions? <a href="/book-a-demo" className="text-[#7C3AED] font-semibold hover:underline">Book a 30-minute call</a> and we&apos;ll find the right fit.
                </p>
            </div>
        </section>
    );
}
