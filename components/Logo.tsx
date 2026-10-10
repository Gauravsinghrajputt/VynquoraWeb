import { site } from "@/lib/site";

// Vynquora mark with depth: bevelled two-tone V, glossy orbit swoosh and a
// shaded checkered sphere, matching the 3D brand logo.
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        {/* silver face + shadow side */}
        <linearGradient id="vq-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".45" stopColor="#D5DBE3" />
          <stop offset="1" stopColor="#8A94A3" />
        </linearGradient>
        <linearGradient id="vq-silver-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6B7482" />
          <stop offset="1" stopColor="#3B4250" />
        </linearGradient>
        {/* blue face + shadow side */}
        <linearGradient id="vq-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5AA2FF" />
          <stop offset=".5" stopColor="#2A6FE0" />
          <stop offset="1" stopColor="#1546A8" />
        </linearGradient>
        <linearGradient id="vq-blue-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#123B8C" />
          <stop offset="1" stopColor="#0B2560" />
        </linearGradient>
        {/* swoosh */}
        <linearGradient id="vq-swoosh" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#0F3E9C" />
          <stop offset=".55" stopColor="#2F7BF0" />
          <stop offset="1" stopColor="#7DB6FF" />
        </linearGradient>
        {/* sphere shading */}
        <radialGradient id="vq-sphere" cx=".35" cy=".3" r=".75">
          <stop offset="0" stopColor="#9CC6FF" />
          <stop offset=".45" stopColor="#2F72DE" />
          <stop offset="1" stopColor="#0B2560" />
        </radialGradient>
        <radialGradient id="vq-sphere-shine" cx=".32" cy=".28" r=".5">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".75" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <clipPath id="vq-sphere-clip">
          <circle cx="49.5" cy="12" r="7" />
        </clipPath>
        <filter id="vq-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="1.2" floodColor="#0B1630" floodOpacity=".28" />
        </filter>
      </defs>

      <g filter="url(#vq-shadow)">
        {/* left arm: extruded side, then face */}
        <path d="M8.6 11.6h12.5l15 38.5-3.5 8.5Z" fill="url(#vq-silver-side)" />
        <path d="M7 10h12.5l15 38.5L31 57Z" fill="url(#vq-silver)" />
        <path d="M7 10h12.5l.6 1.5H7.8Z" fill="#FFFFFF" opacity=".9" />

        {/* right arm: extruded side, then face */}
        <path d="M32.6 58.6l-4.2-10.6L44.1 23.6h12.5Z" fill="url(#vq-blue-side)" />
        <path d="M31 57l-4.2-10.6L42.5 22H55Z" fill="url(#vq-blue)" />
        <path d="M42.5 22H55l-1 1.4H41.6Z" fill="#B9D6FF" opacity=".8" />

        {/* orbit swoosh with a highlight edge */}
        <path d="M5 41.5c2 9.5 24 10 52-20.5 1.6-1.7 3.4-1.2 1.6.9C34 53 9.5 54.5 5 41.5Z" fill="url(#vq-swoosh)" />
        <path d="M6.2 42.6c3.4 7.6 24.2 7.4 50.8-21" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth=".8" fill="none" strokeLinecap="round" />

        {/* checkered sphere */}
        <circle cx="49.5" cy="12" r="7" fill="url(#vq-sphere)" />
        <g clipPath="url(#vq-sphere-clip)" fill="#0B1E4A" opacity=".55">
          <path d="M43 6h2.6v2.6H43zM48.2 6h2.6v2.6h-2.6zM53.4 6H56v2.6h-2.6zM45.6 8.6h2.6v2.6h-2.6zM50.8 8.6h2.6v2.6h-2.6zM43 11.2h2.6v2.6H43zM48.2 11.2h2.6v2.6h-2.6zM53.4 11.2H56v2.6h-2.6zM45.6 13.8h2.6v2.6h-2.6zM50.8 13.8h2.6v2.6h-2.6zM48.2 16.4h2.6V19h-2.6z" />
        </g>
        <circle cx="49.5" cy="12" r="7" fill="url(#vq-sphere-shine)" />
      </g>
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-10 w-10" />
      <span className="text-[1.35rem] font-semibold tracking-[-0.03em] text-ink">{site.name}</span>
    </span>
  );
}
