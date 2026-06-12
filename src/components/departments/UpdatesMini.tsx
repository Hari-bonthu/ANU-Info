import { ArrowRight } from "lucide-react";
import { SectionShell } from "./section-shell";
import type { UpdateItem } from "./department-data";

export function UpdatesMini({ updates }: { updates: UpdateItem[] }) {
  return (
    <SectionShell eyebrow="Recent updates" title="Only the latest essentials">
      <div className="rounded-lg bg-white p-4 shadow-[0_18px_45px_-40px_oklch(0.22_0.06_265/0.45)] ring-1 ring-black/5">
        <ol className="space-y-3">
          {updates.slice(0, 5).map((update) => (
            <li
              key={update.title}
              className="grid gap-2 sm:grid-cols-[70px_1fr_auto] sm:items-center"
            >
              <time className="text-xs font-semibold text-[oklch(0.58_0.15_45)]">
                {update.date}
              </time>
              <p className="text-sm font-medium leading-5 text-[oklch(0.22_0.06_265)]">
                {update.title}
              </p>
              <span className="w-fit rounded-full bg-[oklch(0.97_0.035_45)] px-2.5 py-1 text-[10px] font-bold text-[oklch(0.5_0.14_45)]">
                {update.tag}
              </span>
            </li>
          ))}
        </ol>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.22_0.06_265)]"
        >
          View All Updates <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </SectionShell>
  );
}
