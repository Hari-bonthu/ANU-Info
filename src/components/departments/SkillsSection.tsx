import { SectionShell } from "./section-shell";
import type { DepartmentCardItem } from "./department-data";

export function SkillsSection({ items }: { items: DepartmentCardItem[] }) {
  return (
    <SectionShell eyebrow="Skills / outcomes" title="What students carry forward">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="rounded-lg bg-[oklch(0.22_0.06_265)] p-6 text-white"
            >
              <Icon className="h-8 w-8 text-[oklch(0.78_0.14_45)]" />
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/72">{item.text}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
