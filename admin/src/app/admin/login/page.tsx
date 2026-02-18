"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabaseClient";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showResetToast, setShowResetToast] = useState(false);

  useEffect(() => {
    const didReset = new URLSearchParams(window.location.search).get("reset") === "success";
    if (!didReset) return;

    setShowResetToast(true);
    const timeoutId = window.setTimeout(() => {
      setShowResetToast(false);
    }, 3500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const supabaseClient = getSupabaseClient();

      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        setErrorMessage(error.message || "Unable to sign in. Please try again.");
        return;
      }

      if (!data?.session) {
        setErrorMessage("Sign-in succeeded but no active session was created. Please try again.");
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected error during sign in.";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_36%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] px-4 py-10">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_20px_48px_rgba(15,23,42,0.1)] backdrop-blur sm:p-8">
        <h1 className="text-2xl font-semibold text-slate-900">Admin login</h1>
        <p className="mt-2 text-sm text-slate-600">Sign in to access the Nutristika admin area.</p>
        <p className="mt-1 text-xs text-slate-500">Only authorized team members should use this page.</p>

        {showResetToast ? (
          <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800" role="status">
            Password updated, please sign in.
          </p>
        ) : null}

        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
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

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">Password</span>
            <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-2.5 py-1.5 focus-within:border-slate-500 focus-within:ring-2 focus-within:ring-slate-200">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
                className="w-full border-none px-0 py-1 text-sm text-slate-900 outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="rounded-md px-2 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          {errorMessage ? (
            <p className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
          <div className="text-right">
            <Link href="/admin/forgot-password" className="text-xs font-medium text-slate-600 underline underline-offset-2">
              Forgot password?
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
