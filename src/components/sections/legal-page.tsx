import Link from "next/link";
import { Announcement } from "@/components/layout/announcement";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Logo } from "@/components/logo";

type LegalSection = {
  title: string;
  body: React.ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  sections: LegalSection[];
  footnote?: React.ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  description,
  sections,
  footnote,
}: LegalPageProps) {
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
              {eyebrow}
            </p>
            <h1 className="font-display text-[40px] font-bold leading-[1.05] tracking-tight text-[#0F0520] md:text-[64px]">
              {title}
            </h1>
            <div className="max-w-2xl text-lg leading-relaxed text-[#6B7280]">{description}</div>
          </div>

          <div className="mt-14 grid gap-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[32px] border border-[#E9D5FF] bg-white/90 p-6 shadow-[0_24px_80px_rgba(124,58,237,0.08)] md:p-8"
              >
                <h2 className="font-display text-[28px] font-bold leading-tight text-[#0F0520]">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-[#6B7280]">
                  {section.body}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-[#E9D5FF] pt-8 text-sm text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
            <div>{footnote}</div>
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
