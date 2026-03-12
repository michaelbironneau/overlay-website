import { Logo } from "@/components/logo";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#090314] px-6 md:px-12 py-20 border-t border-white/5 text-[#6B7280]">
            <div className="max-w-[1160px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
                    <div className="space-y-4 col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block">
                            <Logo variant="light" />
                        </Link>
                        <p className="text-sm leading-relaxed max-w-[220px]">
                            Secure remote access for BMS teams. Loved by bureaus, trusted by enterprise security teams.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 col-span-1 md:contents">
                        <div className="space-y-4">
                            <h5 className="font-display text-sm font-bold text-white">Product</h5>
                            <ul className="flex flex-col gap-2.5">
                                <li><Link href="/how-it-works" className="text-sm hover:text-white transition-colors">Platform</Link></li>
                                <li><Link href="/how-it-works" className="text-sm hover:text-white transition-colors">Security</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h5 className="font-display text-sm font-bold text-white">Solutions</h5>
                            <ul className="flex flex-col gap-2.5">
                                <li><Link href="#" className="text-sm hover:text-white transition-colors">Bureaus</Link></li>
                                <li><Link href="/how-it-works" className="text-sm hover:text-white transition-colors">BMS Projects</Link></li>
                                <li><Link href="/#new-revenue-streams" className="text-sm hover:text-white transition-colors">Partners</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4 col-span-2 md:col-span-1">
                            <h5 className="font-display text-sm font-bold text-white">Company</h5>
                            <ul className="flex flex-col gap-2.5">
                                <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy</Link></li>
                                <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-7 border-t border-white/10 text-[13px] text-white/35">
                    <p>© {new Date().getFullYear()} Overlay · Built in the UK 🇬🇧</p>
                </div>
            </div>
        </footer>
    );
}
