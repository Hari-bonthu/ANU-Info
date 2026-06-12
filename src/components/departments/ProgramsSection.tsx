import { Clock3, GraduationCap } from "lucide-react";
import { SectionShell } from "./section-shell";
import type { ProgramItem } from "./department-data";

export function ProgramsSection({ programs }: { programs: ProgramItem[] }) {
  return (
    <SectionShell
      eyebrow="Programs offered"
      title="Study options designed for progression and specialization"
      className="bg-[oklch(0.985_0.004_250)]"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {programs.map((program, index) => (
          <article
            key={program.name}
            className="group rounded-2xl border border-black/5 bg-white p-5 shadow-[0_18px_45px_-40px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_-34px_rgba(15,23,42,0.35)]"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.97_0.035_45)] text-[oklch(0.5_0.14_45)]">
                <GraduationCap className="h-5 w-5" />
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold tracking-wide text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold leading-6 text-slate-900">{program.name}</h3>

            <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-[oklch(0.97_0.035_45)] px-3 py-1.5 text-xs font-semibold text-[oklch(0.5_0.14_45)]">
              <Clock3 className="h-3.5 w-3.5" />
              {program.duration}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">{program.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
