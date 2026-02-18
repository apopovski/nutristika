import type { ReactNode } from "react";
import { AdminSidebarNav } from "@/components/admin/AdminSidebarNav";
import { AdminTopBar } from "@/components/admin/AdminTopBar";

type AdminPanelLayoutProps = {
  children: ReactNode;
};

export default function AdminPanelLayout({ children }: AdminPanelLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-50">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-6 md:grid-cols-[280px_minmax(0,1fr)] md:px-6 md:py-8">
        <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:sticky md:top-6 md:h-fit">
          <div className="mb-4 border-b border-slate-100 pb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Nutristika Admin</p>
            <h1 className="mt-1 text-xl font-semibold text-slate-900">Control Panel</h1>
            <p className="mt-1 text-sm text-slate-600">Choose what you want to update.</p>
          </div>
          <AdminSidebarNav />

          <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Tip</p>
            <p className="mt-1 text-xs leading-5 text-emerald-800">
              Make one small update at a time, then click save. This keeps content changes easy to review.
            </p>
          </div>
        </aside>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <AdminTopBar />
          {children}
        </section>
      </div>
    </main>
  );
}
