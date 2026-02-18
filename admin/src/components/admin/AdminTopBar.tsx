"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabaseClient";

const titleMap: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/homepage-editor": "Homepage Editor",
  "/admin/edit-homepage": "Homepage Editor"
};

export function AdminTopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const pageTitle = useMemo(() => titleMap[pathname] || "Admin", [pathname]);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await supabaseClient.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <header className="mb-5 flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:p-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Admin area</p>
        <h2 className="mt-1 text-lg font-semibold text-slate-900">{pageTitle}</h2>
      </div>

      <button
        type="button"
        onClick={handleSignOut}
        disabled={isSigningOut}
        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSigningOut ? "Signing out..." : "Sign out"}
      </button>
    </header>
  );
}
