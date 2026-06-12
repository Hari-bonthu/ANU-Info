import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { EmployeeServicesShell } from "@/components/employee-services/employee-services-shell";
import { EmployeeServicesApp } from "@/components/employee-services/employee-services-app";
import type { EmployeeServiceTabKey } from "@/data/employee-services-app";

export const Route = createFileRoute("/employee-services/$pageId")({
  component: EmployeeServicesPageComponent,
});

function EmployeeServicesPageComponent() {
  const { pageId } = Route.useParams();
  const navigate = useNavigate({ from: Route.fullPath });

  const handlePageChange = (newPageId: EmployeeServiceTabKey) => {
    navigate({
      params: { pageId: newPageId },
    });
  };

  return (
    <EmployeeServicesShell pageId={pageId}>
      <EmployeeServicesApp page={pageId} onPageChange={handlePageChange} />
    </EmployeeServicesShell>
  );
}
