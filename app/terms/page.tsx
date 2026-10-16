import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `Terms for using the ${site.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const owner = site.legalName || site.name;
  return (
    <LegalPage title="Terms of use" updated="October 2026">
      <p>
        These terms apply to your use of {site.domain}, operated by <strong>{owner}</strong>. By using the site you agree to them.
      </p>

      <h2>About this website</h2>
      <p>
        The site describes our services and past work. It is for general information and is not an offer or a contract.
        Timelines and examples are indicative; every project is confirmed in a written proposal.
      </p>

      <h2>Project work</h2>
      <p>
        Client projects are governed by a separate written agreement or proposal, which covers scope, price, timelines, intellectual
        property and confidentiality. Where that agreement differs from these terms, the agreement applies.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The text, design and branding on this site belong to {owner}. Screenshots of products we have built are shown as examples of
        our work; product names and content belong to their respective owners. You may not copy site content for commercial use
        without our written consent.
      </p>

      <h2>Links to other sites</h2>
      <p>Links to live products and third-party sites are provided for convenience. We are not responsible for their content.</p>

      <h2>Liability</h2>
      <p>
        We work to keep the site accurate and available but provide it &quot;as is&quot;. To the extent allowed by law, we are not liable
        for losses arising from use of the website itself.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, with courts in {site.address.city}, {site.address.region} having jurisdiction.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
