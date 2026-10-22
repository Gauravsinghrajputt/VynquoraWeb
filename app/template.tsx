// Re-created on every page change, so each page fades in softly.
// The header and footer live in layout.tsx and stay put.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
