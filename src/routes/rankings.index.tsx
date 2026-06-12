import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/rankings/")({
  beforeLoad: () => {
    throw redirect({
      to: "/rankings/$pageId",
      params: { pageId: "overview" },
      replace: true,
    });
  },
});
