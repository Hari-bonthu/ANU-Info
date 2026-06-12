import { CareerSection } from "./CareerSection";
import { CTASection } from "./CTASection";
import { DepartmentHero } from "./DepartmentHero";
import { FacilitiesSection } from "./FacilitiesSection";
import { FacultyPreview } from "./FacultyPreview";
import { ProgramsSection } from "./ProgramsSection";
import { ResearchFocusSection } from "./ResearchFocusSection";
import type { DepartmentPageData } from "./department-data";
export function DepartmentPage({ department }: { department: DepartmentPageData }) {
  return (
    <main className="bg-background">
      <DepartmentHero department={department} />

      <section id="programs">
        <ProgramsSection programs={department.programs} />
      </section>

      <section id="faculty">
        <FacultyPreview
          faculty={department.faculty}
          departmentId={department.id}
          departmentName={department.name}
          collegeName={department.college}
        />
      </section>

      <section id="facilities">
        <FacilitiesSection items={department.facilities.slice(0, 4)} />
      </section>

      <section id="research">
        <ResearchFocusSection items={department.researchFocus} />
      </section>
    </main>
  );
}
