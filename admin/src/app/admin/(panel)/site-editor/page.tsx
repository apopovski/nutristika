"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { getSupabaseClient } from "@/lib/supabaseClient";

type ContentType = "text" | "image";
type ContentLanguage = "all" | "en" | "de";

type SiteOverrideRow = {
  id: number | string;
  key: string;
  value: string;
  content_type: ContentType;
  language: ContentLanguage | null;
  updated_at: string | null;
};

type BannerState =
  | { kind: "success"; text: string }
  | { kind: "error"; text: string }
  | { kind: "info"; text: string }
  | null;

const suggestedTextKeys = [
  "hero.word1",
  "hero.word2",
  "hero.word3",
  "hero.word4",
  "story.title",
  "story.body",
  "story.goal",
  "services.title",
  "quotes.title",
  "cta.title",
  "cta.text",
  "cta.button",
  "form.title",
  "form.subtitle"
];

const suggestedImageKeys = [
  "hero.slide.1",
  "hero.slide.2",
  "hero.slide.3",
  "hero.slide.4",
  "hero.slide.5",
  "hero.slide.6",
  "hero.slide.7",
  "hero.slide.8",
  "hero.slide.9",
  "hero.float.2",
  "hero.float.3",
  "hero.profile.photo",
  "services.card1.image",
  "services.card2.image",
  "services.card3.image",
  "quotes.gallery.1",
  "quotes.gallery.2",
  "inquiry.image"
];

const visualSections: Array<{
  title: string;
  description: string;
  items: Array<{ key: string; type: ContentType; language?: ContentLanguage }>;
}> = [
  {
    title: "Hero section",
    description: "Main first impression text and photos",
    items: [
      { key: "hero.word1", type: "text" },
      { key: "hero.word2", type: "text" },
      { key: "hero.word3", type: "text" },
      { key: "hero.word4", type: "text" },
      { key: "hero.slide.1", type: "image" },
      { key: "hero.profile.photo", type: "image" }
    ]
  },
  {
    title: "Story + services",
    description: "About text and service card visuals",
    items: [
      { key: "story.title", type: "text" },
      { key: "story.body", type: "text" },
      { key: "services.title", type: "text" },
      { key: "services.card1.image", type: "image" },
      { key: "services.card2.image", type: "image" },
      { key: "services.card3.image", type: "image" }
    ]
  },
  {
    title: "CTA + inquiry",
    description: "Final conversion section and contact form messaging",
    items: [
      { key: "cta.title", type: "text" },
      { key: "cta.text", type: "text" },
      { key: "cta.button", type: "text" },
      { key: "form.title", type: "text" },
      { key: "form.subtitle", type: "text" },
      { key: "inquiry.image", type: "image" }
    ]
  }
];

const isValidHttpUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

export default function SiteEditorPage() {
  const [rows, setRows] = useState<SiteOverrideRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [banner, setBanner] = useState<BannerState>(null);
  const [filter, setFilter] = useState<"all" | ContentType>("all");

  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newType, setNewType] = useState<ContentType>("text");
  const [newLanguage, setNewLanguage] = useState<ContentLanguage>("all");
  const [viewMode, setViewMode] = useState<"visual" | "list">("visual");
  const [previewBaseUrl, setPreviewBaseUrl] = useState("https://nutristika.vercel.app");
  const keyInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("site-editor-preview-url");
    if (saved && /^https?:\/\//i.test(saved)) {
      setPreviewBaseUrl(saved);
    }
  }, []);

  useEffect(() => {
    if (/^https?:\/\//i.test(previewBaseUrl)) {
      localStorage.setItem("site-editor-preview-url", previewBaseUrl);
    }
  }, [previewBaseUrl]);

  const callAdminApi = async (method: "GET" | "POST" | "PATCH" | "DELETE", body?: Record<string, unknown>) => {
    const supabase = getSupabaseClient();
    const {
      data: { session }
    } = await supabase.auth.getSession();

    if (!session?.access_token) {
      return {
        ok: false,
        message: "Your session has expired. Please sign out and sign in again."
      };
    }

    const response = await fetch("/api/admin/site-content", {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store"
    });

    const payload = await response.json().catch(() => ({}));
    return {
      ok: response.ok,
      status: response.status,
      payload,
      message: typeof payload?.message === "string" ? payload.message : "Request failed."
    };
  };

  const loadRows = async () => {
    setIsLoading(true);
    setBanner(null);

    const result = await callAdminApi("GET");
    if (!result.ok) {
      setBanner({ kind: "error", text: `Unable to load content: ${result.message}` });
      setRows([]);
      setIsLoading(false);
      return;
    }

    const items = Array.isArray(result.payload?.items) ? (result.payload.items as SiteOverrideRow[]) : [];
    setRows(items);
    setIsLoading(false);
  };

  useEffect(() => {
    void loadRows();
  }, []);

  const shownRows = useMemo(() => {
    if (filter === "all") return rows;
    return rows.filter((row) => row.content_type === filter);
  }, [rows, filter]);

  const previewUrl = useMemo(() => {
    const base = previewBaseUrl.trim().replace(/\/$/, "");
    if (!/^https?:\/\//i.test(base)) return "https://nutristika.vercel.app/?inspector=1";
    return `${base}/?inspector=1`;
  }, [previewBaseUrl]);

  const seedCreateForm = (item: { key: string; type: ContentType; language?: ContentLanguage }) => {
    setNewKey(item.key);
    setNewType(item.type);
    setNewLanguage(item.type === "image" ? "all" : item.language || "all");
    setViewMode("visual");
    setTimeout(() => keyInputRef.current?.focus(), 0);
  };

  const handleCreate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSaving) return;

    const key = newKey.trim();
    const value = newValue.trim();

    if (!key || !value) {
      setBanner({ kind: "error", text: "Key and value are required." });
      return;
    }

    if (newType === "image" && !isValidHttpUrl(value)) {
      setBanner({ kind: "error", text: "Image values must be valid HTTP/HTTPS URLs." });
      return;
    }

    setIsSaving(true);
    setBanner(null);

    const result = await callAdminApi("POST", {
      key,
      value,
      content_type: newType,
      language: newType === "image" ? "all" : newLanguage
    });

    if (!result.ok) {
      setBanner({ kind: "error", text: `Create failed: ${result.message}` });
      setIsSaving(false);
      return;
    }

    setNewKey("");
    setNewValue("");
    setNewType("text");
    setNewLanguage("all");

    await loadRows();
    setBanner({ kind: "success", text: "Override created successfully." });
    setIsSaving(false);
  };

  const handleRowChange = (id: SiteOverrideRow["id"], patch: Partial<SiteOverrideRow>) => {
    setRows((current) => current.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  };

  const handleSaveRow = async (row: SiteOverrideRow) => {
    const key = row.key.trim();
    const value = row.value.trim();

    if (!key || !value) {
      setBanner({ kind: "error", text: "Each row needs a key and value." });
      return;
    }

    if (row.content_type === "image" && !isValidHttpUrl(value)) {
      setBanner({ kind: "error", text: `Image URL is invalid for key “${key}”.` });
      return;
    }

    setIsSaving(true);
    setBanner(null);

    const result = await callAdminApi("PATCH", {
      id: row.id,
      key,
      value,
      content_type: row.content_type,
      language: row.content_type === "image" ? "all" : row.language || "all"
    });

    if (!result.ok) {
      setBanner({ kind: "error", text: `Save failed: ${result.message}` });
      setIsSaving(false);
      return;
    }

    await loadRows();
    setBanner({ kind: "success", text: `Saved “${key}”.` });
    setIsSaving(false);
  };

  const handleDeleteRow = async (row: SiteOverrideRow) => {
    if (isSaving) return;

    setIsSaving(true);
    setBanner(null);

    const result = await callAdminApi("DELETE", { id: row.id });

    if (!result.ok) {
      setBanner({ kind: "error", text: `Delete failed: ${result.message}` });
      setIsSaving(false);
      return;
    }

    await loadRows();
    setBanner({ kind: "success", text: `Deleted “${row.key}”.` });
    setIsSaving(false);
  };

  return (
    <div>
      <header>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Site editor</p>
        <h2 className="mt-1 text-2xl font-semibold text-slate-900">Visual website editor</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Edit content in a more intuitive way using a live preview + guided section controls. This works like a lightweight visual builder,
          while keeping your production-safe key/value system under the hood.
        </p>
        <div className="mt-4 inline-flex rounded-xl border border-slate-200 bg-white p-1">
          <button
            type="button"
            onClick={() => setViewMode("visual")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              viewMode === "visual" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            Visual mode
          </button>
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              viewMode === "list" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            Advanced list mode
          </button>
        </div>
      </header>

      {banner ? (
        <div
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm shadow-sm ${
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

      {viewMode === "visual" ? (
        <section className="mt-6 grid gap-5 xl:grid-cols-[380px_minmax(0,1fr)]">
          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-slate-900">Live preview</h3>
              <a
                href={previewUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Open full page ↗
              </a>
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-600">
              Tip: preview loads with inspector enabled. Hover and click text/image on the website to copy key payload.
            </p>

            <label className="mt-3 block">
              <span className="mb-1 block text-xs font-medium text-slate-600">Preview URL</span>
              <input
                type="url"
                value={previewBaseUrl}
                onChange={(event) => setPreviewBaseUrl(event.target.value)}
                placeholder="https://nutristika.vercel.app"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
              />
            </label>

            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-2">
              <iframe
                key={previewUrl}
                src={previewUrl}
                title="Website preview"
                className="h-[460px] w-full rounded-lg border border-slate-200 bg-white"
              />
            </div>

            <p className="mt-2 text-[11px] text-slate-500">
              Due to browser security, selection happens on the live page. Use copied keys below to apply edits.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
            <h3 className="text-base font-semibold text-slate-900">Section-based editing</h3>
            <p className="mt-1 text-sm text-slate-600">Pick a section first, then update the pre-filled key in the form below.</p>

            <div className="mt-4 space-y-3">
              {visualSections.map((section) => (
                <div key={section.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <h4 className="text-sm font-semibold text-slate-900">{section.title}</h4>
                  <p className="mt-1 text-xs text-slate-600">{section.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <button
                        key={`${section.title}-${item.key}`}
                        type="button"
                        onClick={() => seedCreateForm(item)}
                        className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
                          item.type === "image"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item.key}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      ) : null}

      <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-900">Create override</h3>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            {rows.length} saved key{rows.length === 1 ? "" : "s"}
          </span>
        </div>

        <form onSubmit={handleCreate} className="mt-4 grid gap-3 lg:grid-cols-[1.1fr_1.4fr_130px_140px_auto]">
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-slate-600">Key</span>
            <input
              ref={keyInputRef}
              type="text"
              value={newKey}
              onChange={(event) => setNewKey(event.target.value)}
              placeholder="story.title"
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              disabled={isSaving}
              required
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-slate-600">Value</span>
            <input
              type="text"
              value={newValue}
              onChange={(event) => setNewValue(event.target.value)}
              placeholder={newType === "image" ? "https://..." : "New headline"}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              disabled={isSaving}
              required
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-slate-600">Type</span>
            <select
              value={newType}
              onChange={(event) => setNewType(event.target.value as ContentType)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              disabled={isSaving}
            >
              <option value="text">Text</option>
              <option value="image">Image</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-slate-600">Language</span>
            <select
              value={newLanguage}
              onChange={(event) => setNewLanguage(event.target.value as ContentLanguage)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              disabled={isSaving || newType === "image"}
            >
              <option value="all">All</option>
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>
          </label>

          <button
            type="submit"
            disabled={isSaving || isLoading}
            className="self-end rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Saving..." : "Add"}
          </button>
        </form>

        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Popular text keys</p>
            <p className="mt-1 text-xs text-slate-500">Use these with type = Text</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {suggestedTextKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setNewKey(key);
                    setNewType("text");
                  }}
                  className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 hover:bg-slate-100"
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Popular image keys</p>
            <p className="mt-1 text-xs text-slate-500">Use these with type = Image</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {suggestedImageKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setNewKey(key);
                    setNewType("image");
                    setNewLanguage("all");
                  }}
                  className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 hover:bg-slate-100"
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-900">Existing overrides</h3>
          <label className="inline-flex items-center gap-2 text-xs text-slate-600">
            Filter
            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value as "all" | ContentType)}
              className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-xs outline-none"
            >
              <option value="all">All</option>
              <option value="text">Text</option>
              <option value="image">Image</option>
            </select>
          </label>
        </div>

        {isLoading ? (
          <p className="mt-4 text-sm text-slate-500">Loading overrides…</p>
        ) : shownRows.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">No overrides yet. Create your first one above.</p>
        ) : (
          <div className="mt-4 grid gap-3">
            {shownRows.map((row) => (
              <article key={row.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    {row.content_type}
                  </span>
                  <span className="text-[11px] text-slate-500">lang: {row.content_type === "image" ? "all" : row.language || "all"}</span>
                </div>

                <div className="grid gap-2 lg:grid-cols-[1.1fr_1.4fr_120px_120px_auto_auto] lg:items-end">
                  <label className="block">
                    <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Key</span>
                    <input
                      type="text"
                      value={row.key}
                      onChange={(event) => handleRowChange(row.id, { key: event.target.value })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm outline-none focus:border-slate-500"
                      disabled={isSaving}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Value</span>
                    <input
                      type="text"
                      value={row.value}
                      onChange={(event) => handleRowChange(row.id, { value: event.target.value })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm outline-none focus:border-slate-500"
                      disabled={isSaving}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Type</span>
                    <select
                      value={row.content_type}
                      onChange={(event) =>
                        handleRowChange(row.id, {
                          content_type: event.target.value as ContentType,
                          language: event.target.value === "image" ? "all" : row.language || "all"
                        })
                      }
                      className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm outline-none focus:border-slate-500"
                      disabled={isSaving}
                    >
                      <option value="text">Text</option>
                      <option value="image">Image</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Language</span>
                    <select
                      value={row.content_type === "image" ? "all" : row.language || "all"}
                      onChange={(event) => handleRowChange(row.id, { language: event.target.value as ContentLanguage })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm outline-none focus:border-slate-500"
                      disabled={isSaving || row.content_type === "image"}
                    >
                      <option value="all">All</option>
                      <option value="en">EN</option>
                      <option value="de">DE</option>
                    </select>
                  </label>

                  <button
                    type="button"
                    onClick={() => handleSaveRow(row)}
                    disabled={isSaving}
                    className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={() => void handleDeleteRow(row)}
                    disabled={isSaving}
                    className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Delete
                  </button>
                </div>

                {row.content_type === "image" && row.value ? (
                  <div className="mt-3 rounded-xl border border-slate-200 bg-white p-2">
                    <img src={row.value} alt={row.key} className="h-28 w-full rounded-lg object-cover" />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
