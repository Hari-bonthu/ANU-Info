import { ArrowRight, Mail, Sparkles } from "lucide-react";
import collegeArchitectureImage from "@/assets/Colleges/College_Architecture.jpeg";
import collegeArtsImage from "@/assets/Colleges/College_Arts.jpg";
import collegeEngineeringImage from "@/assets/Colleges/College_Engineering.jpg";
import collegePharmaImage from "@/assets/Colleges/College_Pharma.jpg";
import collegePhysicalEducationImage from "@/assets/Colleges/College_PhysicalEducation.jpg";
import collegeSciencesImage from "@/assets/Colleges/College_Sciences.jpg";
import type { DepartmentPageData } from "./department-data";

export function DepartmentHero({ department }: { department: DepartmentPageData }) {
  const bannerImageByCollege: Record<string, string> = {
    "ANU College of Sciences": collegeSciencesImage,
    "ANU College of Engineering & Technology": collegeEngineeringImage,
    "ANU College of Arts, Commerce & Law": collegeArtsImage,
    "ANU College of Pharmaceutical Sciences": collegePharmaImage,
    "ANU College of Physical Education & Sports": collegePhysicalEducationImage,
    "ANU College of Architecture & Planning": collegeArchitectureImage,
  };

  const bannerImage = bannerImageByCollege[department.college] ?? collegeSciencesImage;

  const stats = [
    { label: "Programs", value: String(department.programs.length) },
    { label: "Faculty", value: String(department.faculty.length) },
    { label: "Research Areas", value: String(department.researchFocus.length) },
  ];

  return (
    <section className="relative isolate overflow-hidden text-white">
      <img
        src={bannerImage}
        alt={`${department.name} campus banner`}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,20,40,0.9)_0%,rgba(10,35,70,0.76)_45%,rgba(15,118,110,0.28)_100%)]"
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_30%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-[460px] max-w-7xl items-end gap-10 px-6 py-14 lg:grid-cols-[1.4fr_0.6fr] lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FDBA74] backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            {department.college}
          </div>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            {department.name}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            {department.purpose}
          </p>

          <p className="mt-4 text-sm font-semibold tracking-wide text-[#FDBA74] md:text-base">
            {department.heroLine}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#fb923c]"
            >
              Explore Programs
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Contact Department
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
