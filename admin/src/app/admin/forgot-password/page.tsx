"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabaseClient";

type Banner =
  | { kind: "success"; text: string }
  | { kind: "error"; text: string }
  | null;

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [banner, setBanner] = useState<Banner>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setBanner(null);

    try {
      const supabaseClient = getSupabaseClient();
      const redirectTo = `${window.location.origin}/admin/reset-password`;

      const { error } = await supabaseClient.auth.resetPasswordForEmail(email.trim(), {
        redirectTo
      });

      if (error) {
        setBanner({ kind: "error", text: error.message || "Unable to send reset email." });
        setIsSubmitting(false);
        return;
      }

      setBanner({
        kind: "success",
        text: "Password reset link sent. Check your inbox (and spam folder)."
      });
      setIsSubmitting(false);
    } catch {
      setBanner({ kind: "error", text: "Unexpected error sending reset email. Please try again." });
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold text-slate-900">Forgot password</h1>
        <p className="mt-2 text-sm text-slate-600">Enter your admin email and we’ll send you a reset link.</p>

        {banner ? (
          <p
            className={`mt-4 rounded-xl border px-3 py-2 text-sm ${
              banner.kind === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-rose-200 bg-rose-50 text-rose-700"
            }`}
            role={banner.kind === "error" ? "alert" : "status"}
          >
            {banner.text}
          </p>
        ) : null}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              placeholder="you@example.com"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send reset link"}
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
