import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getFacultySlugByName } from "@/data/facultyProfiles";
import { SectionShell } from "./section-shell";
import type { FacultyItem } from "./department-data";

const facultyImages = Object.values(
  import.meta.glob("../../assets/faculty/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  }),
) as string[];

export function FacultyPreview({
  faculty,
  departmentId,
  departmentName,
  collegeName,
}: {
  faculty: FacultyItem[];
  departmentId: string;
  departmentName: string;
  collegeName: string;
}) {
  const featuredFaculty = faculty.slice(0, 3);

  return (
    <SectionShell
      eyebrow="Faculty"
      title="Learn from mentors with academic depth and practical perspective"
      className="bg-white"
    >
      <div className="mb-5 flex justify-end">
        <Link
          to="/faculty"
          className="inline-flex items-center gap-2 rounded-md border border-[oklch(0.22_0.06_265)] bg-white px-5 py-3 text-sm font-semibold text-[oklch(0.22_0.06_265)] transition hover:bg-[oklch(0.97_0.01_260)]"
        >
          View All Faculty
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {featuredFaculty.map((member) => {
          const facultySlug = getFacultySlugByName(member.name) ?? "prof-v-ramachandra-rao";
          const demoImage = facultyImages.length
            ? facultyImages[featuredFaculty.indexOf(member) % facultyImages.length]
            : "";

          const initial =
            member.name.trim().split(" ").slice(-1)[0]?.charAt(0).toUpperCase() ?? "F";

          return (
            <Link
              key={member.name}
              to={`/faculty/${facultySlug}?fromDepartmentId=${encodeURIComponent(departmentId)}&fromDepartmentName=${encodeURIComponent(departmentName)}&fromCollegeName=${encodeURIComponent(collegeName)}`}
              className="group rounded-2xl border border-slate-200 bg-[oklch(0.995_0.002_260)] p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
            >
              <div className="grid grid-cols-[92px_1fr] gap-4">
                {demoImage ? (
                  <img
                    src={demoImage}
                    alt={member.name}
                    className="h-[112px] w-[92px] rounded-2xl object-cover object-top"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-[112px] w-[92px] items-center justify-center rounded-2xl bg-[oklch(0.92_0.01_260)] text-3xl font-black text-[oklch(0.22_0.06_265)] transition group-hover:bg-[oklch(0.52_0.14_45)] group-hover:text-white">
                    {initial}
                  </div>
                )}

                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-6 text-slate-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[oklch(0.52_0.14_45)]">
                    {member.role}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {member.focus}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </SectionShell>
  );
}
