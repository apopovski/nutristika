"use client";

import { useEffect, useMemo, useState } from "react";
import { getSupabaseClient } from "@/lib/supabaseClient";

type EditorLanguage = "en" | "de";
type BlockSection = "services" | "faq";

type ServiceCard = {
  badge: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  imageUrl: string;
  featured: boolean;
};

type ServicesBlocksDocument = {
  en: ServiceCard[];
  de: ServiceCard[];
};

type FaqItem = {
  q: string;
  a: string;
};

type FaqBlocksDocument = {
  en: FaqItem[];
  de: FaqItem[];
};

type BannerState =
  | { kind: "success"; text: string }
  | { kind: "error"; text: string }
  | { kind: "info"; text: string }
  | null;

const makeDefaultCard = (): ServiceCard => ({
  badge: "New",
  title: "New service",
  text: "Describe the service in a clear, benefit-focused sentence.",
  cta: "Learn more →",
  href: "#cta",
  imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
  featured: false
});

const defaultBlocks: ServicesBlocksDocument = {
  en: [
    {
      badge: "Personalized",
      title: "1:1 Nutrition Coaching",
      text: "Personalized guidance focused on sustainable change.",
      cta: "Learn more →",
      href: "#cta",
      imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
      featured: false
    },
    {
      badge: "Most Popular",
      title: "Signature Coaching Program",
      text: "Step-by-step support for lasting health transformation.",
      cta: "Discover more →",
      href: "#cta",
      imageUrl: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1200&auto=format&fit=crop",
      featured: true
    },
    {
      badge: "Practical",
      title: "Meal Planning & Kitchen Skills",
      text: "Simple systems to make healthy eating easier.",
      cta: "Get started →",
      href: "#cta",
      imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop",
      featured: false
    }
  ],
  de: [
    {
      badge: "Individuell",
      title: "1:1 Ernährungscoaching",
      text: "Individuelle Begleitung mit Fokus auf nachhaltige Veränderung.",
      cta: "Mehr erfahren →",
      href: "#cta",
      imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
      featured: false
    },
    {
      badge: "Am beliebtesten",
      title: "Signature-Coaching-Programm",
      text: "Schritt-für-Schritt-Begleitung für langfristige Gesundheit.",
      cta: "Mehr entdecken →",
      href: "#cta",
      imageUrl: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1200&auto=format&fit=crop",
      featured: true
    },
    {
      badge: "Praxisnah",
      title: "Meal Planning & Küchenkompetenz",
      text: "Einfache Systeme, die gesundes Essen leichter machen.",
      cta: "Jetzt starten →",
      href: "#cta",
      imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop",
      featured: false
    }
  ]
};

const makeDefaultFaqItem = (): FaqItem => ({
  q: "New question",
  a: "Write a clear and concise answer here."
});

const defaultFaqBlocks: FaqBlocksDocument = {
  en: [
    {
      q: "Do I need to be fully plant-based?",
      a: "No. We use a flexible plant-forward approach tailored to your goals and preferences."
    },
    {
      q: "How much time does meal prep take?",
      a: "Most clients use 60–90 minutes weekly with our prep templates."
    },
    {
      q: "Can this fit a busy work week?",
      a: "Yes — the program is built around realistic routines and fast weekday options."
    }
  ],
  de: [
    {
      q: "Muss ich komplett pflanzenbasiert essen?",
      a: "Nein. Wir arbeiten mit einem flexiblen, pflanzenbetonten Ansatz – passend zu Ihren Zielen und Vorlieben."
    },
    {
      q: "Wie viel Zeit braucht Meal Prep?",
      a: "Die meisten Kund:innen brauchen mit unseren Vorlagen 60–90 Minuten pro Woche."
    },
    {
      q: "Passt das in einen vollen Arbeitsalltag?",
      a: "Ja — das Programm ist auf realistische Routinen und schnelle Optionen unter der Woche ausgelegt."
    }
  ]
};

const clampCards = (cards: ServiceCard[]) => cards.filter(Boolean).slice(0, 24);
const clampFaqItems = (items: FaqItem[]) => items.filter(Boolean).slice(0, 24);

export default function BlocksEditorPage() {
  const [servicesDoc, setServicesDoc] = useState<ServicesBlocksDocument>(defaultBlocks);
  const [faqDoc, setFaqDoc] = useState<FaqBlocksDocument>(defaultFaqBlocks);
  const [activeLang, setActiveLang] = useState<EditorLanguage>("en");
  const [activeSection, setActiveSection] = useState<BlockSection>("services");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [banner, setBanner] = useState<BannerState>(null);

  const cards = useMemo(() => servicesDoc[activeLang] || [], [servicesDoc, activeLang]);
  const faqItems = useMemo(() => faqDoc[activeLang] || [], [faqDoc, activeLang]);

  const callAdminApi = async (method: "GET" | "POST", body?: Record<string, unknown>) => {
    const supabase = getSupabaseClient();
    const {
      data: { session }
    } = await supabase.auth.getSession();

    if (!session?.access_token) {
      return { ok: false, message: "Session expired. Please sign in again." };
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
      payload,
      message: typeof payload?.message === "string" ? payload.message : "Request failed"
    };
  };

  const loadBlocks = async () => {
    setIsLoading(true);
    setBanner(null);

    const result = await callAdminApi("GET");
    if (!result.ok) {
      setBanner({ kind: "error", text: `Unable to load blocks: ${result.message}` });
      setIsLoading(false);
      return;
    }

    const items = Array.isArray(result.payload?.items) ? result.payload.items : [];
    const servicesRow = items.find((item: any) => item.key === "blocks.services" && item.content_type === "text");
    const faqRow = items.find((item: any) => item.key === "blocks.faq" && item.content_type === "text");

    if (!servicesRow?.value) {
      setServicesDoc(defaultBlocks);
      setBanner({ kind: "info", text: "No saved Services blocks yet. You are editing defaults." });
    } else {
      try {
        const parsed = JSON.parse(servicesRow.value);
        setServicesDoc({
          en: clampCards(Array.isArray(parsed?.en) ? parsed.en : defaultBlocks.en),
          de: clampCards(Array.isArray(parsed?.de) ? parsed.de : defaultBlocks.de)
        });
      } catch {
        setServicesDoc(defaultBlocks);
        setBanner({ kind: "error", text: "Saved Services block JSON is invalid. Loaded defaults." });
      }
    }

    if (!faqRow?.value) {
      setFaqDoc(defaultFaqBlocks);
    } else {
      try {
        const parsed = JSON.parse(faqRow.value);
        setFaqDoc({
          en: clampFaqItems(Array.isArray(parsed?.en) ? parsed.en : defaultFaqBlocks.en),
          de: clampFaqItems(Array.isArray(parsed?.de) ? parsed.de : defaultFaqBlocks.de)
        });
      } catch {
        setFaqDoc(defaultFaqBlocks);
        setBanner({ kind: "error", text: "Saved FAQ block JSON is invalid. Loaded defaults." });
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    void loadBlocks();
  }, []);

  const updateCard = (index: number, patch: Partial<ServiceCard>) => {
    setServicesDoc((current) => {
      const updated = [...current[activeLang]];
      updated[index] = { ...updated[index], ...patch };
      return {
        ...current,
        [activeLang]: updated
      };
    });
  };

  const moveCard = (index: number, direction: -1 | 1) => {
    setServicesDoc((current) => {
      const list = [...current[activeLang]];
      const target = index + direction;
      if (target < 0 || target >= list.length) return current;
      [list[index], list[target]] = [list[target], list[index]];
      return { ...current, [activeLang]: list };
    });
  };

  const removeCard = (index: number) => {
    setServicesDoc((current) => {
      const next = current[activeLang].filter((_, idx) => idx !== index);
      return { ...current, [activeLang]: next };
    });
  };

  const addCard = () => {
    setServicesDoc((current) => ({
      ...current,
      [activeLang]: [...current[activeLang], makeDefaultCard()]
    }));
  };

  const updateFaqItem = (index: number, patch: Partial<FaqItem>) => {
    setFaqDoc((current) => {
      const updated = [...current[activeLang]];
      updated[index] = { ...updated[index], ...patch };
      return {
        ...current,
        [activeLang]: updated
      };
    });
  };

  const moveFaqItem = (index: number, direction: -1 | 1) => {
    setFaqDoc((current) => {
      const list = [...current[activeLang]];
      const target = index + direction;
      if (target < 0 || target >= list.length) return current;
      [list[index], list[target]] = [list[target], list[index]];
      return { ...current, [activeLang]: list };
    });
  };

  const removeFaqItem = (index: number) => {
    setFaqDoc((current) => {
      const next = current[activeLang].filter((_, idx) => idx !== index);
      return { ...current, [activeLang]: next };
    });
  };

  const addFaqItem = () => {
    setFaqDoc((current) => ({
      ...current,
      [activeLang]: [...current[activeLang], makeDefaultFaqItem()]
    }));
  };

  const saveBlocks = async () => {
    setIsSaving(true);
    setBanner(null);

    const servicesPayload = {
      en: clampCards(servicesDoc.en).map((card) => ({ ...card })),
      de: clampCards(servicesDoc.de).map((card) => ({ ...card }))
    };

    const faqPayload = {
      en: clampFaqItems(faqDoc.en).map((item) => ({ ...item })),
      de: clampFaqItems(faqDoc.de).map((item) => ({ ...item }))
    };

    const [servicesResult, faqResult] = await Promise.all([
      callAdminApi("POST", {
        key: "blocks.services",
        value: JSON.stringify(servicesPayload),
        content_type: "text",
        language: "all"
      }),
      callAdminApi("POST", {
        key: "blocks.faq",
        value: JSON.stringify(faqPayload),
        content_type: "text",
        language: "all"
      })
    ]);

    if (!servicesResult.ok || !faqResult.ok) {
      const message = !servicesResult.ok ? servicesResult.message : faqResult.message;
      setBanner({ kind: "error", text: `Save failed: ${message}` });
      setIsSaving(false);
      return;
    }

    setBanner({ kind: "success", text: "Blocks saved for Services + FAQ. Refresh the public page to verify." });
    setIsSaving(false);
  };

  return (
    <div>
      <header>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phase 2</p>
        <h2 className="mt-1 text-2xl font-semibold text-slate-900">Block-based sections editor</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Manage sections as visual blocks: add, remove, reorder, and edit independently per language.
        </p>
      </header>

      {banner ? (
        <div
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
            banner.kind === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : banner.kind === "error"
                ? "border-rose-200 bg-rose-50 text-rose-700"
                : "border-blue-200 bg-blue-50 text-blue-800"
          }`}
        >
          {banner.text}
        </div>
      ) : null}

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
              <button
                type="button"
                onClick={() => setActiveSection("services")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${activeSection === "services" ? "bg-slate-900 text-white" : "text-slate-700"}`}
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => setActiveSection("faq")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${activeSection === "faq" ? "bg-slate-900 text-white" : "text-slate-700"}`}
              >
                FAQ
              </button>
            </div>

            <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
              <button
                type="button"
                onClick={() => setActiveLang("en")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${activeLang === "en" ? "bg-slate-900 text-white" : "text-slate-700"}`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setActiveLang("de")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${activeLang === "de" ? "bg-slate-900 text-white" : "text-slate-700"}`}
              >
                Deutsch
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={activeSection === "services" ? addCard : addFaqItem}
              disabled={isLoading || isSaving}
              className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"
            >
              {activeSection === "services" ? "+ Add card" : "+ Add FAQ"}
            </button>
            <button
              type="button"
              onClick={() => void saveBlocks()}
              disabled={isLoading || isSaving}
              className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-700 disabled:opacity-60"
            >
              {isSaving ? "Saving..." : "Save blocks"}
            </button>
          </div>
        </div>

        {isLoading ? (
          <p className="mt-4 text-sm text-slate-500">Loading block data…</p>
        ) : activeSection === "services" && cards.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">No service cards in this language yet. Add one to begin.</p>
        ) : activeSection === "faq" && faqItems.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">No FAQ items in this language yet. Add one to begin.</p>
        ) : (
          <div className="mt-4 space-y-3">
            {activeSection === "services"
              ? cards.map((card, index) => (
                  <article key={`${activeLang}-service-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Card {index + 1}</p>
                      <div className="flex items-center gap-1">
                        <button type="button" onClick={() => moveCard(index, -1)} className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs">↑</button>
                        <button type="button" onClick={() => moveCard(index, 1)} className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs">↓</button>
                        <button type="button" onClick={() => removeCard(index)} className="rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700">Remove</button>
                      </div>
                    </div>

                    <div className="grid gap-2 md:grid-cols-2">
                      <label className="block">
                        <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Badge</span>
                        <input type="text" value={card.badge} onChange={(event) => updateCard(index, { badge: event.target.value })} className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm" />
                      </label>
                      <label className="block">
                        <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Title</span>
                        <input type="text" value={card.title} onChange={(event) => updateCard(index, { title: event.target.value })} className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm" />
                      </label>
                    </div>

                    <label className="mt-2 block">
                      <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Description</span>
                      <textarea value={card.text} onChange={(event) => updateCard(index, { text: event.target.value })} rows={3} className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm" />
                    </label>

                    <div className="mt-2 grid gap-2 md:grid-cols-3">
                      <label className="block">
                        <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">CTA text</span>
                        <input type="text" value={card.cta} onChange={(event) => updateCard(index, { cta: event.target.value })} className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm" />
                      </label>
                      <label className="block md:col-span-2">
                        <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">CTA link</span>
                        <input type="text" value={card.href} onChange={(event) => updateCard(index, { href: event.target.value })} className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm" />
                      </label>
                    </div>

                    <label className="mt-2 block">
                      <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Image URL</span>
                      <input type="url" value={card.imageUrl} onChange={(event) => updateCard(index, { imageUrl: event.target.value })} className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm" />
                    </label>

                    <label className="mt-2 inline-flex items-center gap-2 text-xs text-slate-700">
                      <input type="checkbox" checked={card.featured} onChange={(event) => updateCard(index, { featured: event.target.checked })} />
                      Featured styling
                    </label>
                  </article>
                ))
              : faqItems.map((item, index) => (
                  <article key={`${activeLang}-faq-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">FAQ {index + 1}</p>
                      <div className="flex items-center gap-1">
                        <button type="button" onClick={() => moveFaqItem(index, -1)} className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs">↑</button>
                        <button type="button" onClick={() => moveFaqItem(index, 1)} className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs">↓</button>
                        <button type="button" onClick={() => removeFaqItem(index)} className="rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700">Remove</button>
                      </div>
                    </div>

                    <label className="block">
                      <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Question</span>
                      <input type="text" value={item.q} onChange={(event) => updateFaqItem(index, { q: event.target.value })} className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm" />
                    </label>

                    <label className="mt-2 block">
                      <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Answer</span>
                      <textarea value={item.a} onChange={(event) => updateFaqItem(index, { a: event.target.value })} rows={4} className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm" />
                    </label>
                  </article>
                ))}
          </div>
        )}
      </div>
    </div>
  );
}
