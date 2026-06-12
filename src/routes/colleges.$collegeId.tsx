import { createFileRoute } from "@tanstack/react-router";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { CollegeDetailPage, getCollegePage } from "@/components/college-section";

export const Route = createFileRoute("/colleges/$collegeId")({
  component: CollegeRoute,
  head: () => ({
    meta: [
      { title: "University Colleges | Acharya Nagarjuna University" },
      {
        name: "description",
        content:
          "Explore Acharya Nagarjuna University college details, departments, research, updates and student outcomes.",
      },
    ],
  }),
});

function CollegeRoute() {
  const { collegeId } = Route.useParams();
  const college = getCollegePage(collegeId);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <BreadcrumbTrail
          items={[{ label: "Home", href: "/" }, { label: "Colleges" }, { label: college.name }]}
        />
        <CollegeDetailPage collegeId={collegeId} />
      </main>
    </div>
  );
}
