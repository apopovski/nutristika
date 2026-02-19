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

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/admin/blocks-editor"
          className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phase 2</p>
          <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-slate-700">Blocks Editor</h3>
          <p className="mt-1 text-sm text-slate-600">Add, remove, and reorder service cards visually.</p>
          <p className="mt-3 inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
            Open editor →
          </p>
        </Link>

        <Link
          href="/admin/site-editor"
          className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Power tool</p>
          <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-slate-700">Site Editor</h3>
          <p className="mt-1 text-sm text-slate-600">Edit text and image URLs across the website from one place.</p>
          <p className="mt-3 inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
            Open editor →
          </p>
        </Link>

        <Link
          href="/admin/homepage-editor"
          className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Most used</p>
          <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-slate-700">Edit Homepage</h3>
          <p className="mt-1 text-sm text-slate-600">Update the main message visitors see first.</p>
          <p className="mt-3 inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
            Open editor →
          </p>
        </Link>

        <article className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Account status</p>
          <h3 className="mt-2 text-base font-semibold text-slate-900">You’re signed in</h3>
          <p className="mt-1 text-sm text-slate-600">All admin tools are available. Use the side menu anytime.</p>
        </article>
      </div>

      <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/80 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Recommended flow</p>
        <p className="mt-1 text-sm text-blue-900">
          1) Open Site Editor → 2) Update text or image URL → 3) Save and review the live website.
        </p>
      </div>
    </div>
  );
}
