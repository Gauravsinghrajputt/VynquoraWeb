"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";
import { Icon } from "./Icons";

// Project card with a 3D tilt that follows the pointer, plus a light glare.
export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const reduce = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch" || reduce()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 9}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 11}deg`);
    el.style.setProperty("--gx", `${x * 100}%`);
    el.style.setProperty("--gy", `${y * 100}%`);
    el.style.setProperty("--glare", "1");
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--glare", "0");
  };

  return (
    <div className="[perspective:1200px]">
      <Link
        ref={ref}
        href={`/work/${project.slug}`}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="group relative block h-full rounded-[22px] border border-line bg-card transition-[transform,box-shadow] duration-300 ease-out [transform-style:preserve-3d] [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] shadow-[0_1px_0_rgba(255,255,255,.6)_inset,0_18px_40px_-24px_rgba(20,24,32,.35)] hover:shadow-[0_1px_0_rgba(255,255,255,.6)_inset,0_40px_70px_-30px_rgba(20,40,90,.45)] dark:shadow-[0_18px_40px_-24px_rgba(0,0,0,.8)] dark:hover:shadow-[0_40px_70px_-30px_rgba(0,0,0,.95)]"
      >
        {/* screenshot, lifted forward in 3D */}
        <div className="p-3 [transform:translateZ(36px)] transition-transform duration-300">
          <div className="overflow-hidden rounded-[14px] border border-line bg-bg-alt">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1600}
              height={1000}
              priority={priority}
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="block aspect-[16/10] h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="px-6 pb-6 pt-2 [transform:translateZ(22px)]">
          <div className="flex items-center gap-2 text-sm">
            <span className="rounded-full bg-brand-soft px-2.5 py-1 font-medium text-brand">{project.category}</span>
            {project.liveUrl ? (
              <span className="inline-flex items-center gap-1.5 text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
              </span>
            ) : null}
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{project.name}</h3>
          <p className="mt-2 text-muted leading-relaxed">{project.kind}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-medium text-ink">
            View case study
            <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>

        {/* glare */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[22px] transition-opacity duration-300 [opacity:var(--glare,0)] [background:radial-gradient(600px_circle_at_var(--gx,50%)_var(--gy,50%),rgba(255,255,255,.22),transparent_40%)]"
        />
      </Link>
    </div>
  );
}
