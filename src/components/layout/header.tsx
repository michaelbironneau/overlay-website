"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { primaryNavItems } from "./nav-config";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const productMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!productMenuRef.current?.contains(event.target as Node)) {
        setIsProductMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsProductMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b-2 border-[#E9D5FF] bg-white">
      <div className="mx-auto flex h-full max-w-[1160px] items-center justify-between px-6">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {primaryNavItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                ref={productMenuRef}
                className="relative"
                onMouseEnter={() => setIsProductMenuOpen(true)}
                onMouseLeave={() => setIsProductMenuOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium text-[#0F0520] opacity-70 transition-opacity hover:opacity-100"
                  onClick={() => setIsProductMenuOpen((open) => !open)}
                  aria-expanded={isProductMenuOpen}
                  aria-haspopup="menu"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isProductMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isProductMenuOpen && (
                  <div className="absolute left-0 top-full w-80 pt-3">
                    <div className="rounded-2xl border border-[#E9D5FF] bg-white p-3 shadow-[0_24px_80px_rgba(15,5,32,0.14)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-[#F8F5FF]"
                          onClick={() => setIsProductMenuOpen(false)}
                        >
                          <div className="text-sm font-semibold text-[#0F0520]">{child.label}</div>
                          {child.description ? (
                            <div className="mt-1 text-sm leading-relaxed text-[#6B7280]">
                              {child.description}
                            </div>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className="text-sm font-medium text-[#0F0520] opacity-70 transition-opacity hover:opacity-100"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden items-center gap-2.5 md:flex">
            <Button variant="ghost" className="h-9 px-4 text-sm font-medium text-[#0F0520] opacity-80">
              Sign in
            </Button>
            <Button className="h-10 px-5.5 font-semibold text-white shadow-[0_4px_12px_rgba(124,58,237,0.2)] transition-all hover:shadow-[0_6px_16px_rgba(124,58,237,0.3)] bg-linear-to-br from-[#7C3AED] to-[#6D28D9]">
              Book a Demo
            </Button>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
