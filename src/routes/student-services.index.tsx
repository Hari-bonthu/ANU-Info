import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/student-services/")({
  beforeLoad: () => {
    throw redirect({
      to: "/student-services/$pageId",
      params: { pageId: "overview" },
      replace: true,
    });
  },
});
