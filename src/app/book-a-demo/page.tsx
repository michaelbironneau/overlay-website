import type { Metadata } from "next";
import Link from "next/link";
import { CircuitAnimation } from "@/components/animations/circuit-animation";
import { Announcement } from "@/components/layout/announcement";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Logo } from "@/components/logo";
import { CalendlyEmbed } from "@/components/ui/calendly-embed";

export const metadata: Metadata = {
  title: "Book a Demo | Overlay",
  description:
    "Schedule a live Overlay walkthrough covering remote access workflows, security controls, and deployment options for your BMS estate.",
};

const demoTopics = [
  "How Overlay connects through existing VPNs and networks",
  "Web access and engineering tools access",
  "Setting up customers, sites, and users",
  "Configuring secure customer portals and kiosk links",
  "Pricing paths for project vs. enterprise deployments",
  "Any questions or custom use cases you have",
];

export default function BookADemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Announcement />
      <Header />
      <section className="relative overflow-hidden bg-[#FAF5FF] px-6 pb-20 pt-24 md:pt-28">

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.16)_0%,_rgba(250,245,255,0)_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,245,255,0.93)_0%,_rgba(250,245,255,0.45)_48%,_rgba(250,245,255,0)_78%)]" />

        <div className="relative z-10 mx-auto max-w-[1160px]">
          <div className="max-w-3xl space-y-4">
            <Logo />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.5em] text-[#6B7280]">
              Book a Demo
            </p>
            <h1 className="font-display text-[40px] font-bold leading-[1.05] tracking-tight text-[#0F0520] md:text-[64px]">
              Get hands-on with Overlay in a guided session.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#6B7280]">
              Walk through remote access workflows, security controls, and deployment options with
              our product team. We will tailor the session to your current tooling and the sites
              you manage.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-[#E9D5FF] bg-white/90 p-6 shadow-[0_24px_80px_rgba(124,58,237,0.10)] md:p-8">
              <h2 className="font-display text-[30px] font-bold leading-tight text-[#0F0520]">
                Request a live walkthrough
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#6B7280]">
                Drop a slot straight into our calendar so we can show you how Overlay unifies
                customer access, kiosk links, and engineer workflows.
              </p>

              <div className="mt-6 rounded-[28px] border border-dashed border-[#C4B5FD] bg-gradient-to-br from-[#7C3AED]/5 via-white to-[#F3F1FF] p-3 md:p-4">
                <CalendlyEmbed
                  className="overflow-hidden rounded-[24px] bg-white"
                  height={760}
                />

                <div className="mt-4 rounded-2xl bg-white/90 px-4 py-3 text-sm text-[#6B7280]">
                  Walkthroughs typically last 15 minutes with 15 minutes for questions and next
                  steps.
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6 rounded-[32px] border border-[#E9D5FF] bg-white/75 p-6 md:p-8">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.4em] text-[#6B7280]">
                  What we cover
                </p>
                <ul className="mt-6 space-y-3 text-base leading-relaxed text-[#6B7280]">
                  {demoTopics.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-[#C4B5FD]/50 bg-[#F8F5FF] p-5">
                <p className="text-sm leading-relaxed text-[#6B7280]">
                  Ready to explore pricing now?{" "}
                  <Link href="/#pricing" className="font-semibold text-[#7C3AED] hover:underline">
                    Jump back to the plans section.
                  </Link>
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E9D5FF] bg-white p-5">
                <p className="font-display text-xl font-bold text-[#0F0520]">What to prepare</p>
                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                  Bring a rough picture of your current estate: how engineers connect today, where
                  head-ends live, and whether you want Overlay to work with existing site
                  networking or provide the connectivity layer.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-[#E9D5FF] pt-8 text-sm text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
            <p>Need an NDA before sharing details? We can sign one ahead of the call.</p>
            <Link
              href="/"
              className="rounded-full border border-[#E9D5FF] bg-white px-5 py-2 text-sm font-semibold text-[#0F0520] transition hover:border-[#7C3AED] hover:text-[#7C3AED]"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
