import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { RankingsShell } from "@/components/rankings/rankings-shell";
import { RankingsApp } from "@/components/rankings/rankings-app";
import type { RankingsTabKey } from "@/data/rankings-app";

export const Route = createFileRoute("/rankings/$pageId")({
  component: RankingsPageComponent,
});

function RankingsPageComponent() {
  const { pageId } = Route.useParams();
  const navigate = useNavigate({ from: Route.fullPath });

  const handlePageChange = (newPageId: RankingsTabKey) => {
    navigate({
      params: { pageId: newPageId },
    });
  };

  return (
    <RankingsShell pageId={pageId}>
      <RankingsApp page={pageId} onPageChange={handlePageChange} />
    </RankingsShell>
  );
}
