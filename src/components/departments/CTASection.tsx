import { ArrowRight, Mail } from "lucide-react";
import type { DepartmentPageData } from "./department-data";

export function CTASection({ department }: { department: DepartmentPageData }) {
  return (
    <section id="contact" className="px-6 py-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-[oklch(0.22_0.06_265)] px-6 py-7 text-white md:flex md:items-center md:justify-between md:gap-8 md:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.78_0.14_45)]">
            Take the next step
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">{department.name}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/72">
            Explore admissions, curriculum and department contact details.
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[oklch(0.78_0.14_45)] px-5 py-2.5 text-sm font-semibold text-[oklch(0.22_0.06_265)]"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:registrar@anu.ac.in"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Contact Department <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
