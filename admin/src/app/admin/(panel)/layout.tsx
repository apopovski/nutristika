import type { ReactNode } from "react";
import { AdminSidebarNav } from "@/components/admin/AdminSidebarNav";
import { AdminTopBar } from "@/components/admin/AdminTopBar";

type AdminPanelLayoutProps = {
  children: ReactNode;
};

export default function AdminPanelLayout({ children }: AdminPanelLayoutProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_38%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)]">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-6 md:grid-cols-[280px_minmax(0,1fr)] md:px-6 md:py-8">
        <aside className="glass-panel rounded-3xl p-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] md:sticky md:top-6 md:h-fit">
          <div className="mb-4 border-b border-slate-200/70 pb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Nutristika Admin</p>
            <h1 className="mt-1 text-xl font-semibold text-slate-900">Control Panel</h1>
            <p className="mt-1 text-sm text-slate-600">Simple tools for quick updates.</p>
          </div>
          <AdminSidebarNav />

          <div className="mt-4 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Tip</p>
            <p className="mt-1 text-xs leading-5 text-emerald-800">
              Make one small update at a time, then click save. This keeps content changes easy to review.
            </p>
          </div>
        </aside>

        <section className="glass-panel rounded-3xl p-5 shadow-[0_18px_46px_rgba(15,23,42,0.08)] md:p-8">
          <AdminTopBar />
          {children}
        </section>
      </div>
    </main>
  );
}
