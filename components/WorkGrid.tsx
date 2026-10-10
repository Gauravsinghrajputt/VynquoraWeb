"use client";

import { useState } from "react";
import type { Project } from "@/lib/site";
import ProjectCard from "./ProjectCard";
import NdaCard from "./NdaCard";

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {categories.length > 2 && (
        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors cursor-pointer ${
                active === c ? "border-ink bg-ink text-bg" : "border-line bg-card text-muted hover:text-ink hover:border-silver"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} priority={i < 2} />
        ))}
        {active === "All" && <NdaCard />}
      </div>
    </>
  );
}
