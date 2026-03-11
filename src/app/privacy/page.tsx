import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

const LAST_UPDATED = "11 March 2026";

export const metadata: Metadata = {
  title: "Privacy | Overlay",
  description:
    "Privacy notice for the Overlay website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title={<>Privacy notice </>}
      description={
        <>
          This website is operated by <strong className="text-[#0F0520]">Quantology Limited</strong>.
          This notice is intended to provide a lightweight, website-level explanation of how
          personal data may be handled in connection with the public Overlay site, including the
          Book a Demo flow.
        </>
      }
      sections={[
        {
          title: "Who this notice applies to",
          body: (
            <>
              <p>
                This notice applies to visitors to the public Overlay marketing website. It is not
                intended to be a full platform privacy framework or a substitute for any separate
                contractual or product documentation that may apply to customers.
              </p>
              <p>
                For the purposes of this website, Quantology Limited is the operator of the site
                and the party responsible for deciding how website-level personal data is handled.
              </p>
            </>
          ),
        },
        {
          title: "What data may be collected",
          body: (
            <>
              <p>The website may involve the handling of the following categories of data:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>basic technical information generated when a visitor accesses the website</li>
                <li>information a visitor chooses to provide when booking a demo</li>
                <li>information a visitor chooses to provide in direct communications</li>
              </ul>
              <p>
                Based on the current repo, this website does not present broader analytics tooling
                or marketing tracking disclosures beyond the essential operation of the site and
                the embedded Calendly booking flow.
              </p>
            </>
          ),
        },
        {
          title: "How data is used",
          body: (
            <>
              <p>Website-level personal data may be used to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>operate and secure the website</li>
                <li>respond to demo requests and related follow-up</li>
                <li>handle direct business communications initiated by the visitor</li>
                <li>maintain and improve the practical operation of the website</li>
              </ul>
              <p>
                For a UK and EU GDPR framing, the most relevant lawful bases are likely legitimate
                interests in operating and securing a B2B website, and steps taken at the request
                of a visitor where they actively request a demo or make contact.
              </p>
            </>
          ),
        },
        {
          title: "Calendly and third-party processing",
          body: (
            <>
              <p>
                The <strong className="text-[#0F0520]">Book a Demo</strong> page embeds Calendly.
                If a visitor books a demo, they submit information through that third-party tool.
              </p>
              <p>
                Quantology Limited may receive the information needed to arrange and follow up on
                the booking, while Calendly may process the booking interaction under its own
                terms and privacy documentation. Visitors should review Calendly&apos;s own policies
                where relevant before submitting data through that flow.
              </p>
            </>
          ),
        },
        {
          title: "Retention, transfers, and rights",
          body: (
            <>
              <p>
                Website-level data should only be kept for as long as reasonably necessary for the
                relevant website, booking, operational, or communication purpose. Where third-party
                tools are used, their own retention practices may also apply.
              </p>
              <p>
                Some service providers or infrastructure may involve processing or storage outside
                the UK. Where that occurs, transfers should be handled using appropriate safeguards
                under applicable UK and EU data protection rules.
              </p>
              <p>
                Under UK GDPR and EU GDPR, individuals may have rights that can include access,
                correction, erasure, restriction, objection, and portability, depending on the
                circumstances.
              </p>
            </>
          ),
        },
        {
          title: "Cookies and an important limitation",
          body: (
            <>
              <p>
                Based on the current site implementation, this policy is limited to essential
                website operation and the specific use of third-party embedded tooling such as
                Calendly. It does not claim the use of a wider analytics or advertising stack.
              </p>
              <p>
                This website does not currently publish a dedicated privacy or data-rights contact
                route. That is a compliance limitation for a GDPR-aligned notice, and Quantology
                Limited may update this page if a public contact route is added.
              </p>
              <p className="font-medium text-[#0F0520]">Last updated: {LAST_UPDATED}</p>
            </>
          ),
        },
      ]}
      footnote=""
    />
  );
}
