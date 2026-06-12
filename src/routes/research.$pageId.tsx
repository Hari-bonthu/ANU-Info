import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ResearchShell } from "@/components/research/research-shell";
import { ResearchApp } from "@/components/research/research-app";
import type { ResearchTabKey } from "@/data/research-app";

export const Route = createFileRoute("/research/$pageId")({
  component: ResearchPageComponent,
});

function ResearchPageComponent() {
  const { pageId } = Route.useParams();
  const navigate = useNavigate({ from: Route.fullPath });

  const handlePageChange = (newPageId: ResearchTabKey) => {
    navigate({
      params: { pageId: newPageId },
    });
  };

  return (
    <ResearchShell pageId={pageId}>
      <ResearchApp page={pageId} onPageChange={handlePageChange} />
    </ResearchShell>
  );
}
