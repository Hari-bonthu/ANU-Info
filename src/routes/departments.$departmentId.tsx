import { createFileRoute, notFound } from "@tanstack/react-router";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { DepartmentPage } from "@/components/departments/DepartmentPage";
import { getDepartmentPage } from "@/components/departments/department-data";

const collegeIdByName: Record<string, string> = {
  "ANU College of Engineering & Technology": "engineering",
  "ANU College of Sciences": "sciences",
  "ANU College of Arts, Commerce & Law": "arts-commerce-law",
  "ANU College of Pharmaceutical Sciences": "pharmacy",
  "ANU College of Architecture & Planning": "architecture-planning",
  "ANU College of Physical Education & Sports": "physical-education-sports",
};

export const Route = createFileRoute("/departments/$departmentId")({
  head: ({ params }) => {
    const department = getDepartmentPage(params.departmentId);

    return {
      meta: [
        {
          title: department
            ? `${department.name} | Acharya Nagarjuna University`
            : "Department | Acharya Nagarjuna University",
        },
        {
          name: "description",
          content:
            department?.purpose ??
            "Explore department programs, skills, labs, faculty snapshot, career outcomes and updates at Acharya Nagarjuna University.",
        },
      ],
    };
  },
  component: DepartmentRoute,
});

function DepartmentRoute() {
  const { departmentId } = Route.useParams();
  const department = getDepartmentPage(departmentId);

  if (!department) {
    throw notFound();
  }

  const collegeId = collegeIdByName[department.college];
  const collegeHref = collegeId ? `/colleges/${collegeId}` : undefined;

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbTrail
        items={[
          { label: "Home", href: "/" },
          { label: "Colleges" },
          { label: department.college, href: collegeHref },
          { label: department.name },
        ]}
      />
      <DepartmentPage department={department} />
    </div>
  );
}
