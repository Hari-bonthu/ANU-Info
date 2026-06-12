import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionShell } from "./section-shell";
import type { ResearchFocusItem } from "./department-data";

export function ResearchFocusSection({ items }: { items: ResearchFocusItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  if (!items.length) return null;

  const scrollByCard = (direction: "prev" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const firstCard = scroller.querySelector<HTMLElement>("[data-research-card]");
    const cardWidth = firstCard?.offsetWidth ?? 340;
    const gap = 16;

    scroller.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <SectionShell
      eyebrow="Research focus"
      title="Themes shaping inquiry, innovation, and advanced study"
      className="bg-[oklch(0.985_0.004_250)]"
    >
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <p className="max-w-3xl text-sm leading-6 text-slate-600">
          Faculty-led research areas that open opportunities for postgraduate work, doctoral study,
          publications, and interdisciplinary projects.
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard("prev")}
            aria-label="Previous research focus"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollByCard("next")}
            aria-label="Next research focus"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-6 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex snap-x snap-mandatory gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                data-research-card
                className="flex min-h-[320px] w-[84vw] max-w-[360px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.28)] transition hover:border-orange-200 sm:w-[340px]"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.22_0.06_265)] text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-xs font-bold tracking-[0.18em] text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-black leading-6 tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-sm leading-6 text-slate-600">
                    <span className="font-semibold text-slate-900">{item.lead}</span>
                    <span className="mx-2 text-slate-300">•</span>
                    {item.projects}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
