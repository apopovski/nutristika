"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabaseClient";

type Banner =
  | { kind: "success"; text: string }
  | { kind: "error"; text: string }
  | { kind: "info"; text: string }
  | null;

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [banner, setBanner] = useState<Banner>({
    kind: "info",
    text: "Open this page from your reset email link, then set a new password."
  });

  useEffect(() => {
    const captureRecoverySession = async () => {
      try {
        const supabaseClient = getSupabaseClient();
        await supabaseClient.auth.getSession();
      } catch {
        // Silent: banner already guides user to use email link.
      }
    };

    void captureRecoverySession();
  }, []);

  const isPasswordMismatch = useMemo(
    () => confirmPassword.length > 0 && password !== confirmPassword,
    [password, confirmPassword]
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.length < 8) {
      setBanner({ kind: "error", text: "Password must be at least 8 characters." });
      return;
    }

    if (password !== confirmPassword) {
      setBanner({ kind: "error", text: "Passwords do not match." });
      return;
    }

    setIsSubmitting(true);
    setBanner(null);

    try {
      const supabaseClient = getSupabaseClient();
      const { error } = await supabaseClient.auth.updateUser({ password });

      if (error) {
        setBanner({ kind: "error", text: error.message || "Unable to reset password." });
        setIsSubmitting(false);
        return;
      }

      setBanner({ kind: "success", text: "Password updated. Redirecting to sign in..." });
      window.setTimeout(() => {
        router.replace("/admin/login");
        router.refresh();
      }, 1200);
    } catch {
      setBanner({ kind: "error", text: "Unexpected error resetting password." });
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold text-slate-900">Reset password</h1>
        <p className="mt-2 text-sm text-slate-600">Choose a new password for your admin account.</p>

        {banner ? (
          <p
            className={`mt-4 rounded-xl border px-3 py-2 text-sm ${
              banner.kind === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : banner.kind === "error"
                  ? "border-rose-200 bg-rose-50 text-rose-700"
                  : "border-blue-200 bg-blue-50 text-blue-800"
            }`}
            role={banner.kind === "error" ? "alert" : "status"}
          >
            {banner.text}
          </p>
        ) : null}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">New password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              placeholder="At least 8 characters"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">Confirm new password</span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
              className={`w-full rounded-xl border px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:ring-2 ${
                isPasswordMismatch
                  ? "border-rose-300 focus:border-rose-400 focus:ring-rose-200"
                  : "border-slate-300 focus:border-slate-500 focus:ring-slate-200"
              }`}
              placeholder="Repeat your new password"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting || isPasswordMismatch}
            className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Updating..." : "Update password"}
          </button>
        </form>

        <div className="mt-5 text-center">
          <Link href="/admin/login" className="text-sm font-medium text-slate-700 underline underline-offset-2">
            Back to sign in
          </Link>
        </div>
      </section>
    </main>
  );
}
