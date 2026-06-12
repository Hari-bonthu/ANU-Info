import { SectionShell } from "./section-shell";
import type { DepartmentCardItem } from "./department-data";

export function LearningGrid({ items }: { items: DepartmentCardItem[] }) {
  return (
    <SectionShell eyebrow="What you'll learn" title="Focused skills, no long theory block">
      <div id="curriculum" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="rounded-lg bg-white p-5 shadow-[0_18px_45px_-35px_oklch(0.22_0.06_265/0.45)] ring-1 ring-black/5"
            >
              <Icon className="h-7 w-7 text-[oklch(0.58_0.15_45)]" />
              <h3 className="mt-5 text-base font-semibold leading-6 text-[oklch(0.22_0.06_265)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
