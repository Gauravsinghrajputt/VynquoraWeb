import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our work",
  description: "Web platforms, AI products and business software we have designed, built and launched.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-24">
            <h1 className="max-w-3xl text-[2.75rem] leading-[1.02] sm:text-6xl font-semibold tracking-[-0.045em]">
              Work we&apos;ve shipped.
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed">
              Live products you can open and try. Open any project to see the problem, what we built and the tools we used.
            </p>
          </div>
        </section>
        <section className="bg-bg-alt py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <WorkGrid projects={projects} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
