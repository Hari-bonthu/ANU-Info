import { SectionShell } from "./section-shell";
import type { DepartmentCardItem } from "./department-data";

export function CareerSection({
  items,
  careers,
}: {
  items?: DepartmentCardItem[];
  careers?: DepartmentCardItem[];
}) {
  const list = items ?? careers ?? [];

  if (!list.length) return null;

  return (
    <SectionShell
      eyebrow="Student path"
      title="Career outcomes students recognize"
      className="bg-[oklch(0.985_0.004_250)]"
    >
      <div className="grid gap-4 md:grid-cols-4">
        {list.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="rounded-lg bg-white p-6 text-center shadow-[0_18px_45px_-38px_oklch(0.22_0.06_265/0.45)]"
            >
              <Icon className="mx-auto h-8 w-8 text-[oklch(0.58_0.15_45)]" />
              <h3 className="mt-5 text-base font-semibold text-[oklch(0.22_0.06_265)]">
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
