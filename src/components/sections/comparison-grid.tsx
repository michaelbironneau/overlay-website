"use client";

import { motion } from "framer-motion";

type ComparisonItem = {
    title: string;
    sub?: string;
};

export type ComparisonRow = {
    before: ComparisonItem;
    after: ComparisonItem;
};

type ComparisonGridProps = {
    rows: ComparisonRow[];
    beforeLabel?: string;
    afterLabel?: string;
    className?: string;
};

export function ComparisonGrid({
    rows,
    beforeLabel = "Before Overlay",
    afterLabel = "With Overlay",
    className = "max-w-[960px]",
}: ComparisonGridProps) {
    return (
        <div className={className}>
            <div className="mb-2 hidden md:grid grid-cols-[1fr_52px_1fr]">
                <span className="px-6 font-mono text-[10px] uppercase tracking-[0.14em] text-[#EF4444]">
                    {beforeLabel}
                </span>
                <span />
                <span className="px-6 font-mono text-[10px] uppercase tracking-[0.14em] text-[#10B981]">
                    {afterLabel}
                </span>
            </div>

            <div className="flex flex-col gap-4 md:gap-2">
                {rows.map((row, idx) => (
                    <motion.div
                        key={`${row.before.title}-${row.after.title}-${idx}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex flex-col overflow-hidden rounded-lg border border-[#E9D5FF] md:grid md:grid-cols-[1fr_52px_1fr] md:border-none"
                    >
                        <div className="bg-[#FEF2F2] px-5 pt-4 md:hidden">
                            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#EF4444]">
                                {beforeLabel}
                            </span>
                        </div>

                        <div className="flex gap-3 bg-[#FEF2F2] px-5 py-5 text-left md:px-7 md:py-6">
                            <div className="mt-0.5 shrink-0 text-lg leading-tight font-bold text-[#EF4444]">✗</div>
                            <div>
                                <div className="mb-0.5 text-[15px] font-semibold text-[#0F0520]">
                                    {row.before.title}
                                </div>
                                {row.before.sub ? (
                                    <div className="text-[13px] leading-tight text-[#6B7280]">
                                        {row.before.sub}
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className="flex items-center justify-center bg-[#F9FAFB] py-2 md:py-0">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5 rotate-90 md:rotate-0"
                                fill="none"
                                stroke="#D1D5DB"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </div>

                        <div className="bg-[#F0FDF4] px-5 pt-4 md:hidden">
                            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#10B981]">
                                {afterLabel}
                            </span>
                        </div>

                        <div className="flex gap-3 bg-[#F0FDF4] px-5 py-5 text-left md:px-7 md:py-6">
                            <div className="mt-0.5 shrink-0 text-lg leading-tight font-bold text-[#10B981]">✓</div>
                            <div>
                                <div className="mb-0.5 text-[15px] font-semibold text-[#0F0520]">
                                    {row.after.title}
                                </div>
                                {row.after.sub ? (
                                    <div className="text-[13px] leading-tight text-[#6B7280]">
                                        {row.after.sub}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
