import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">AgroPure</p>
            <h1 className="text-lg font-semibold">Administration blog</h1>
          </div>
          <Link to="/admin/blog" className="text-sm font-medium text-primary hover:underline">
            Articles
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
