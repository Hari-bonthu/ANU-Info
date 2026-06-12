import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/employee-services/")({
  beforeLoad: () => {
    throw redirect({
      to: "/employee-services/$pageId",
      params: { pageId: "overview" },
      replace: true,
    });
  },
});
