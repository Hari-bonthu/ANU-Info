import { SectionShell } from "./section-shell";
import type { DepartmentCardItem } from "./department-data";

export function FacilitiesSection({ items }: { items: DepartmentCardItem[] }) {
  // Pattern for card sizes - creates visual interest while maintaining consistency
  const gridPatterns = [
    "md:col-span-2 md:row-span-2", // Large
    "md:col-span-1 md:row-span-1", // Small
    "md:col-span-1 md:row-span-1", // Small
    "md:col-span-1 md:row-span-2", // Tall
  ];

  return (
    <SectionShell
      eyebrow="Facilities / labs"
      title="Infrastructure for learning"
      className="bg-white"
    >
      <p className="mb-6 max-w-3xl text-sm leading-6 text-slate-600">
        Modern labs, research centers, and learning spaces equipped with industry-standard tools and
        technology to support hands-on education.
      </p>

      {/* Mobile: Single column stack */}
      <div className="grid gap-4 md:hidden">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="group overflow-hidden rounded-lg bg-white shadow-[0_16px_40px_-40px_oklch(0.22_0.06_265/0.5)] ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_52px_-36px_oklch(0.22_0.06_265/0.55)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[oklch(0.91_0.01_260)]">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(15,35,69,0.08) 25%, transparent 25%, transparent 50%, rgba(15,35,69,0.08) 50%, rgba(15,35,69,0.08) 75%, transparent 75%, transparent)",
                    backgroundSize: "20px 20px",
                  }}
                  aria-hidden
                />
              )}
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.06_265)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="p-4">
              <h3 className="text-base font-semibold leading-6 text-[oklch(0.22_0.06_265)] transition-colors group-hover:text-[oklch(0.52_0.14_45)]">
                {item.title}
              </h3>
              {item.description && (
                <p className="mt-2 line-clamp-2 text-sm leading-5 text-muted-foreground">
                  {item.description}
                </p>
              )}
              {item.capacity && (
                <p className="mt-3 text-xs font-semibold text-[oklch(0.52_0.14_45)]">
                  Capacity: {item.capacity}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Desktop: Masonry-style grid */}
      <div className="hidden auto-rows-[180px] grid-cols-3 gap-4 md:grid">
        {items.map((item, index) => {
          const sizeClass = gridPatterns[index % gridPatterns.length];

          return (
            <article
              key={`${item.title}-${index}`}
              className={`group relative overflow-hidden rounded-lg bg-white shadow-[0_18px_45px_-40px_oklch(0.22_0.06_265/0.45)] ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_52px_-36px_oklch(0.22_0.06_265/0.55)] ${sizeClass}`}
            >
              {/* Image/Pattern Background */}
              <div className="relative h-full w-full overflow-hidden bg-[oklch(0.91_0.01_260)]">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgba(15,35,69,0.08) 25%, transparent 25%, transparent 50%, rgba(15,35,69,0.08) 50%, rgba(15,35,69,0.08) 75%, transparent 75%, transparent)",
                      backgroundSize: "20px 20px",
                    }}
                    aria-hidden
                  />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.06_265)]/80 via-[oklch(0.22_0.06_265)]/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-lg font-bold leading-6 text-white drop-shadow-lg">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="mt-2 text-sm leading-5 text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-2">
                        {item.description}
                      </p>
                    )}

                    {item.capacity && (
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[oklch(0.97_0.035_45)] px-2.5 py-1 text-xs font-semibold text-[oklch(0.5_0.14_45)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        {item.capacity}
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
