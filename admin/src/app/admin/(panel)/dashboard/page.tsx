import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div>
      <header>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Dashboard</p>
        <h2 className="mt-1 text-2xl font-semibold text-slate-900">Welcome back 👋</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Use the menu on the left to manage your website content. Everything is organized for quick updates.
        </p>
      </header>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/homepage-editor"
          className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Most used</p>
          <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-slate-700">Edit Homepage</h3>
          <p className="mt-1 text-sm text-slate-600">Update the main message visitors see first.</p>
          <p className="mt-3 text-sm font-medium text-slate-700">Open editor →</p>
        </Link>

        <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Account status</p>
          <h3 className="mt-2 text-base font-semibold text-slate-900">You’re signed in</h3>
          <p className="mt-1 text-sm text-slate-600">All admin tools are available. Use the side menu anytime.</p>
        </article>
      </div>
    </div>
  );
}
