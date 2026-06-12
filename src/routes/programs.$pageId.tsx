import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ProgramsShell } from "@/components/programs/programs-shell";
import { ProgramsApp } from "@/components/programs/programs-app";
import type { ProgramsTabKey } from "@/data/programs-app";

export const Route = createFileRoute("/programs/$pageId")({
  component: ProgramsPageComponent,
});

function ProgramsPageComponent() {
  const { pageId } = Route.useParams();
  const navigate = useNavigate({ from: Route.fullPath });

  const handlePageChange = (newPageId: ProgramsTabKey) => {
    navigate({
      params: { pageId: newPageId },
    });
  };

  return (
    <ProgramsShell pageId={pageId}>
      <ProgramsApp page={pageId} onPageChange={handlePageChange} />
    </ProgramsShell>
  );
}
