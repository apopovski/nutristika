"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { supabaseClient } from "@/lib/supabaseClient";

type HomepageContentRow = {
  id: number | string;
  title: string | null;
  description: string | null;
};

type BannerState =
  | { kind: "success"; text: string }
  | { kind: "error"; text: string }
  | { kind: "info"; text: string }
  | null;

export default function HomepageEditorPage() {
  const [rowId, setRowId] = useState<number | string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [initialTitle, setInitialTitle] = useState("");
  const [initialDescription, setInitialDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [banner, setBanner] = useState<BannerState>(null);

  const titlePreview = useMemo(() => title.trim() || "Your homepage title will appear here", [title]);
  const descriptionPreview = useMemo(
    () => description.trim() || "Your homepage description will appear here.",
    [description]
  );
  const hasUnsavedChanges = title !== initialTitle || description !== initialDescription;

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      setBanner(null);

      const { data, error } = await supabaseClient
        .from("homepage_content")
        .select("id,title,description")
        .order("id", { ascending: true })
        .limit(1)
        .maybeSingle<HomepageContentRow>();

      if (error) {
        setBanner({ kind: "error", text: `Unable to load content: ${error.message}` });
        setIsLoading(false);
        return;
      }

      if (!data) {
        setRowId(null);
        setTitle("");
        setDescription("");
        setInitialTitle("");
        setInitialDescription("");
        setBanner({ kind: "info", text: "No homepage row found yet. Add content below and click Save to create it." });
        setIsLoading(false);
        return;
      }

      setRowId(data.id);
      setTitle(data.title ?? "");
      setDescription(data.description ?? "");
      setInitialTitle(data.title ?? "");
      setInitialDescription(data.description ?? "");
      setIsLoading(false);
    };

    void loadContent();
  }, []);

  const handleSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setBanner(null);

    const payload = {
      title: title.trim(),
      description: description.trim()
    };

    if (!payload.title || !payload.description) {
      setBanner({ kind: "error", text: "Please fill in both title and description before saving." });
      setIsSaving(false);
      return;
    }

    if (!hasUnsavedChanges && rowId !== null) {
      setBanner({ kind: "info", text: "No changes to save yet." });
      setIsSaving(false);
      return;
    }

    if (rowId !== null) {
      const { error } = await supabaseClient.from("homepage_content").update(payload).eq("id", rowId);

      if (error) {
        setBanner({ kind: "error", text: `Save failed: ${error.message}` });
        setIsSaving(false);
        return;
      }

      setInitialTitle(payload.title);
      setInitialDescription(payload.description);
      setBanner({ kind: "success", text: "Homepage content saved successfully." });
      setIsSaving(false);
      return;
    }

    const { data, error } = await supabaseClient
      .from("homepage_content")
      .insert(payload)
      .select("id")
      .single<{ id: number | string }>();

    if (error) {
      setBanner({ kind: "error", text: `Create failed: ${error.message}` });
      setIsSaving(false);
      return;
    }

    setRowId(data.id);
    setInitialTitle(payload.title);
    setInitialDescription(payload.description);
    setBanner({ kind: "success", text: "Homepage content created and saved successfully." });
    setIsSaving(false);
  };

  const handleDiscard = () => {
    setTitle(initialTitle);
    setDescription(initialDescription);
    setBanner({ kind: "info", text: "Changes were discarded." });
  };

  return (
    <div>
      <header>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Homepage editor</p>
        <h2 className="mt-1 text-2xl font-semibold text-slate-900">Edit homepage content</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Update your homepage title and description in one place. Changes are saved directly to your admin database.
        </p>
        <div className="mt-3 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          {hasUnsavedChanges ? "Unsaved changes" : "All changes saved"}
        </div>
      </header>

      {banner ? (
        <div
          className={`mt-5 rounded-xl border px-4 py-3 text-sm ${
            banner.kind === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : banner.kind === "error"
                ? "border-rose-200 bg-rose-50 text-rose-700"
                : "border-blue-200 bg-blue-50 text-blue-800"
          }`}
          role={banner.kind === "error" ? "alert" : "status"}
        >
          {banner.text}
        </div>
      ) : null}

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <form onSubmit={handleSave} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor="homepage-title" className="block text-sm font-medium text-slate-700">
                Homepage title
              </label>
              <span className="text-xs text-slate-500">{title.length} characters</span>
            </div>
            <input
              id="homepage-title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Simple habits. Lasting health."
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              disabled={isLoading || isSaving}
              required
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor="homepage-description" className="block text-sm font-medium text-slate-700">
                Homepage description
              </label>
              <span className="text-xs text-slate-500">{description.length} characters</span>
            </div>
            <textarea
              id="homepage-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={6}
              placeholder="Describe what visitors should know first about your services."
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              disabled={isLoading || isSaving}
              required
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="submit"
              disabled={isLoading || isSaving || !hasUnsavedChanges}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Loading..." : isSaving ? "Saving..." : "Save changes"}
            </button>
            <button
              type="button"
              onClick={handleDiscard}
              disabled={isLoading || isSaving || !hasUnsavedChanges}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Discard changes
            </button>
            <span className="text-xs text-slate-500">Friendly tip: keep headline short for better readability.</span>
          </div>
        </form>

        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Live preview</p>
          <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-xl font-semibold leading-tight text-slate-900">{titlePreview}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{descriptionPreview}</p>
          </div>
          <p className="mt-3 text-xs text-slate-500">This preview helps clients understand exactly what website visitors will read.</p>
        </aside>
      </div>
    </div>
  );
}
