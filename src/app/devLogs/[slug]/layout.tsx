import "katex/dist/katex.min.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div
      className="prose dark:prose-invert container max-w-3xl mx-auto px-4 py-8"
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
