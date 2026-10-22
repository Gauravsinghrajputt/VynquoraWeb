import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import WorkGrid from "@/components/WorkGrid";
import { projects } from "@/lib/site";
import { container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Our work",
  description: "Web platforms, AI products and business software we have designed, built and launched.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Work"
        title="Work we've shipped."
        intro="Live products you can open and try. Open any project to see the problem, what we built and the tools we used."
      />
      <section className="bg-bg-alt py-16 sm:py-20">
        <div className={container}>
          <WorkGrid projects={projects} />
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
