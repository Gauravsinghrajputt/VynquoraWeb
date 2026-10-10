import Image from "next/image";

export default function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-line bg-card shadow-[0_30px_80px_-30px_rgba(20,24,32,0.35)] dark:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-bg-alt px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto truncate rounded-md bg-card px-3 py-0.5 text-xs text-muted">{url}</span>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      <Image src={src} alt={alt} width={1600} height={1000} priority={priority} sizes="(min-width: 1024px) 640px, 100vw" className="block h-auto w-full" />
    </figure>
  );
}
