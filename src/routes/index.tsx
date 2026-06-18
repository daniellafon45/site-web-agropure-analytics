import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LOCALE } from "@/i18n/types";

export const Route = createFileRoute("/")({
  beforeLoad: ({ location }) => {
    throw redirect({
      to: "/$locale",
      params: { locale: DEFAULT_LOCALE },
      search: location.search,
      hash: location.hash,
    });
  },
});
