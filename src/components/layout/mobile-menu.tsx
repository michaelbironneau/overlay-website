"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { primaryNavItems } from "./nav-config";

const menuEase = [0.22, 1, 0.36, 1] as const;

const overlayVariants = {
    closed: {
        opacity: 0,
        y: "-100%",
        transition: {
            duration: 0.5,
            ease: menuEase,
        },
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: menuEase,
        },
    },
};

const containerVariants = {
    open: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
};

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="md:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="relative z-[100] text-[#0F0520]"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={overlayVariants}
                        className="fixed inset-0 z-[90] bg-white/95 backdrop-blur-xl flex flex-col pt-24 px-8"
                    >
                        <motion.nav
                            variants={containerVariants}
                            className="flex flex-col gap-8 items-center text-center"
                        >
                            {primaryNavItems.map((item) => (
                                <motion.div key={item.label} variants={linkVariants} className="w-full">
                                    {item.children ? (
                                        <div className="flex flex-col items-center">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setExpandedGroup((current) =>
                                                        current === item.label ? null : item.label
                                                    )
                                                }
                                                className="flex items-center gap-2 text-2xl font-display font-bold text-[#0F0520] transition-colors hover:text-[#7C3AED]"
                                                aria-expanded={expandedGroup === item.label}
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    className={`h-5 w-5 transition-transform ${expandedGroup === item.label ? "rotate-180" : ""}`}
                                                />
                                            </button>

                                            {expandedGroup === item.label && (
                                                <div className="mt-4 w-full max-w-sm rounded-2xl border border-[#E9D5FF] bg-white/80 p-3 text-left">
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            onClick={() => {
                                                                setIsOpen(false);
                                                                setExpandedGroup(null);
                                                            }}
                                                            className="block rounded-xl px-4 py-3 transition-colors hover:bg-[#F8F5FF]"
                                                        >
                                                            <div className="text-base font-semibold text-[#0F0520]">
                                                                {child.label}
                                                            </div>
                                                            {child.description ? (
                                                                <div className="mt-1 text-sm leading-relaxed text-[#6B7280]">
                                                                    {child.description}
                                                                </div>
                                                            ) : null}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href ?? "#"}
                                            onClick={() => setIsOpen(false)}
                                            className="text-2xl font-display font-bold text-[#0F0520] hover:text-[#7C3AED] transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}

                            <motion.div variants={linkVariants} className="w-full pt-8 flex flex-col gap-4">
                                <Button variant="ghost" className="text-lg font-medium text-[#0F0520] h-12">
                                    Sign in
                                </Button>
                                <Button className="bg-linear-to-br from-[#7C3AED] to-[#6D28D9] text-white shadow-lg h-14 font-bold text-lg">
                                    Book a Demo
                                </Button>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
