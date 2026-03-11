import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

const LAST_UPDATED = "11 March 2026";

export const metadata: Metadata = {
  title: "Terms | Overlay",
  description:
    "Website terms for the Overlay site operated by Quantology Limited.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title={<>Website terms for Overlay.</>}
      description={
        <>
          These terms apply to the public Overlay website operated by{" "}
          <strong className="text-[#0F0520]">Quantology Limited</strong>. They are intended to
          describe the basis on which visitors may access and use the site, not to replace any
          separate customer or commercial agreement.
        </>
      }
      sections={[
        {
          title: "Ownership and permitted use",
          body: (
            <>
              <p>
                The website and its contents are owned or controlled by Quantology Limited. Visitors
                may browse the site and use it for legitimate business evaluation, information, and
                contact purposes.
              </p>
              <p>
                Visitors must not misuse the website, attempt to interfere with its operation, or
                use the website in a way that is unlawful, harmful, or misleading.
              </p>
            </>
          ),
        },
        {
          title: "Informational nature of the site",
          body: (
            <>
              <p>
                The website is provided for general information about Overlay and related services.
                It is not a binding offer, product warranty, or complete statement of service
                capability, availability, or pricing.
              </p>
              <p>
                Public website content may change over time. A visitor should not rely on website
                content alone as the final basis for a purchasing, implementation, or compliance
                decision without direct engagement and any applicable contractual documentation.
              </p>
            </>
          ),
        },
        {
          title: "Intellectual property",
          body: (
            <>
              <p>
                The Overlay name, branding, website copy, design, graphics, and other content are
                protected by applicable intellectual property laws and may not be copied,
                distributed, or reused beyond normal business evaluation without permission.
              </p>
            </>
          ),
        },
        {
          title: "Third-party services and links",
          body: (
            <>
              <p>
                This website may link to, embed, or rely on third-party services, including booking
                infrastructure such as Calendly. Quantology Limited is not responsible for the
                content, availability, or policies of third-party services outside its control.
              </p>
              <p>
                A visitor&apos;s use of any such third-party service may also be subject to that
                provider&apos;s own terms and privacy documentation.
              </p>
            </>
          ),
        },
        {
          title: "Availability and liability",
          body: (
            <>
              <p>
                Quantology Limited does not guarantee that the website will always be available,
                uninterrupted, secure, or free from errors. To the extent permitted by law, the
                website is made available without warranties of any kind.
              </p>
              <p>
                To the extent permitted by applicable law, Quantology Limited will not be liable for
                indirect, consequential, or business-loss claims arising from use of, or inability
                to use, the public website. Nothing in these terms is intended to exclude liability
                where exclusion would be unlawful.
              </p>
            </>
          ),
        },
        {
          title: "Governing law",
          body: (
            <>
              <p>
                These website terms are intended to be governed by the laws of England and Wales.
                The courts of England and Wales should have jurisdiction, unless applicable law
                requires otherwise.
              </p>
              <p className="font-medium text-[#0F0520]">Last updated: {LAST_UPDATED}</p>
            </>
          ),
        },
      ]}
      footnote="Website terms only, not intended to govern product or service relationships."
    />
  );
}
