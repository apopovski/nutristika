"use client";

import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabaseClient";

export default function AccessDeniedPage() {
  const router = useRouter();

  const handleBackToLogin = async () => {
    const supabaseClient = getSupabaseClient();
    await supabaseClient.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
          Access denied
        </p>

        <h1 className="mt-4 text-2xl font-semibold text-slate-900">You don’t have admin permission</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Your account is signed in, but it is not assigned to the admin role. Please contact the site owner to request access.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleBackToLogin}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Back to login
          </button>
          <a
            href="mailto:hello@nutristika.com"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Contact admin
          </a>
        </div>
      </section>
    </main>
  );
}
