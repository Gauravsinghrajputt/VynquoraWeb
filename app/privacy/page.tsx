import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects, uses and protects the information you share with us.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const owner = site.legalName || site.name;
  return (
    <LegalPage title="Privacy policy" updated="October 2026">
      <p>
        This policy explains what information <strong>{owner}</strong> (&quot;{site.name}&quot;, &quot;we&quot;) collects through{" "}
        {site.domain}, why we collect it and how we protect it. We follow India&apos;s Digital Personal Data Protection Act, 2023,
        and handle data from clients abroad with the same care.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>Details you send us</strong>: your name, email, company, phone number and project details when you use the contact form, email or WhatsApp.</li>
        <li><strong>Basic technical data</strong>: standard server logs (such as browser type and pages visited) kept by our hosting provider for security and performance.</li>
      </ul>
      <p>We do not use advertising trackers and we do not sell or rent personal data.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry and prepare proposals.</li>
        <li>To deliver and support projects you engage us for.</li>
        <li>To keep the website secure and working well.</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        Only with service providers we use to run the business, such as our website host, email provider and form-delivery service,
        and only as needed for them to provide that service. We may disclose information if required by law.
      </p>

      <h2>Client and project data</h2>
      <p>
        Data we access while building for a client stays under that client&apos;s control, is used only for the agreed work, and is handled
        according to the NDA or contract we sign. Access is limited to the people working on the project and removed when the project ends.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Enquiry details are kept for as long as needed to follow up and for our business records. You can ask us to delete them at any time.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask to see, correct or delete the personal data we hold about you, or withdraw consent for us to contact you. Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond within 30 days.
      </p>

      <h2>Contact</h2>
      <p>
        {owner}, {site.address.locality}, {site.address.city}, {site.address.countryName}.<br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
