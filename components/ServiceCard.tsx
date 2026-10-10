"use client";

import { useRef } from "react";
import { Icon } from "./Icons";

type Service = { icon: string; title: string; body: string; tags: string[] };

// Raised service card: 3D tilt toward the pointer, a lifted icon tile,
// a moving light glare and a large faint icon in the corner.
export default function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLElement>(null);
  const I = Icon[service.icon as keyof typeof Icon];

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 10}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 12}deg`);
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
    <div className="[perspective:1100px]">
      <article
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="group relative h-full overflow-hidden rounded-[22px] border border-line bg-card p-7 sm:p-8 transition-[transform,box-shadow] duration-300 ease-out [transform-style:preserve-3d] [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] shadow-[inset_0_1px_0_rgba(255,255,255,.7),0_1px_2px_rgba(20,24,32,.06),0_14px_34px_-22px_rgba(20,40,90,.35)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.7),0_2px_4px_rgba(20,24,32,.06),0_36px_60px_-30px_rgba(20,60,160,.45)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,.05),0_14px_34px_-22px_rgba(0,0,0,.9)] dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_36px_60px_-30px_rgba(0,0,0,1)]"
      >
        {/* faint background gradient that warms up on hover */}
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,var(--brand-soft),transparent_55%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

        {/* big faint icon, pushed back in depth */}
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-6 -right-6 text-brand/[0.07] [transform:translateZ(-20px)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:-translate-x-1">
          <I className="h-40 w-40" />
        </span>

        {/* lifted 3D icon tile */}
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white [transform:translateZ(40px)] bg-[linear-gradient(145deg,#5aa2ff_0%,#2a6fe0_45%,#1546a8_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,.45),inset_0_-3px_6px_rgba(9,30,80,.35),0_10px_18px_-6px_rgba(31,95,209,.55)]">
          <I className="h-6 w-6 drop-shadow-[0_1px_1px_rgba(0,0,0,.25)]" />
        </span>

        <div className="relative [transform:translateZ(24px)]">
          <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em]">{service.title}</h3>
          <p className="mt-3 text-muted leading-relaxed">{service.body}</p>
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {service.tags.map((t) => (
              <li key={t} className="rounded-full border border-line bg-bg/70 px-2.5 py-1 text-xs text-muted backdrop-blur">
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* glare */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[22px] transition-opacity duration-300 [opacity:var(--glare,0)] [background:radial-gradient(500px_circle_at_var(--gx,50%)_var(--gy,50%),rgba(255,255,255,.28),transparent_45%)] dark:[background:radial-gradient(500px_circle_at_var(--gx,50%)_var(--gy,50%),rgba(120,170,255,.12),transparent_45%)]"
        />
      </article>
    </div>
  );
}
