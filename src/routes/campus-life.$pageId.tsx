import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { CampusLifeShell } from "@/components/campus-life/campus-life-shell";
import { CampusLifeApp } from "@/components/campus-life/campus-life-app";
import type { CampusLifeTabKey } from "@/data/campus-life-app";

export const Route = createFileRoute("/campus-life/$pageId")({
  component: CampusLifePageComponent,
});

function CampusLifePageComponent() {
  const { pageId } = Route.useParams();
  const navigate = useNavigate({ from: Route.fullPath });

  const handlePageChange = (newPageId: CampusLifeTabKey) => {
    navigate({
      params: { pageId: newPageId },
    });
  };

  return (
    <CampusLifeShell pageId={pageId}>
      <CampusLifeApp page={pageId} onPageChange={handlePageChange} />
    </CampusLifeShell>
  );
}
