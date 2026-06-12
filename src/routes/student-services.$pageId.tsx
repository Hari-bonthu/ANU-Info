import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { StudentServicesShell } from "@/components/student-services/student-services-shell";
import { StudentServicesApp } from "@/components/student-services/student-services-app";
import type { StudentServiceTabKey } from "@/data/student-services-app";

export const Route = createFileRoute("/student-services/$pageId")({
  component: StudentServicesPageComponent,
});

function StudentServicesPageComponent() {
  const { pageId } = Route.useParams();
  const navigate = useNavigate({ from: Route.fullPath });

  const handlePageChange = (newPageId: StudentServiceTabKey) => {
    navigate({
      params: { pageId: newPageId },
    });
  };

  return (
    <StudentServicesShell pageId={pageId}>
      <StudentServicesApp page={pageId} onPageChange={handlePageChange} />
    </StudentServicesShell>
  );
}
