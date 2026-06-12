import type { ReactNode } from "react";

export function SectionShell({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-10 lg:py-12 ${className}`}>
      <div className="mb-5 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.58_0.15_45)]">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[oklch(0.22_0.06_265)] md:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
