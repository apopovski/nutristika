/* ============================================================
   Nutristika Alt — v2 Interactivity
   ============================================================ */

(() => {
  "use strict";

  /* ----------------------------------------------------------
     0. Mobile burger menu
     ---------------------------------------------------------- */
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuLinks = mobileMenu?.querySelectorAll("a") || [];

  /* ----------------------------------------------------------
     0b. Simple i18n (EN / DE)
     ---------------------------------------------------------- */
  const i18nDict = {
    en: {
      "nav.story": "Story",
      "nav.programs": "Programs",
      "nav.benefits": "Benefits",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "lang.label": "Language",
      "lang.en": "English",
      "lang.de": "Deutsch",
      "header.cta": "BOOK A FREE CALL",
      "hero.word1": "SIMPLE",
      "hero.word2": "HABITS.",
      "hero.word3": "LASTING",
      "hero.word4": "Health.",
      "hero.person.name": "Jasmina Klisch",
      "hero.person.title": "Registered Dietitian Nutritionist",
      "hero.eyebrow": "Registered Dietitian Nutritionist",
      "hero.cta": "Explore Programs",
      "story.title": "We’re more than a meal plan.",
      "story.body": "I support adults who want to feel better in their bodies without restrictive diets or quick fixes. As a registered dietitian, I combine evidence-based nutrition, plant-forward culinary guidance, and behavior coaching to help you create habits that truly last.",
      "story.goal": "My goal is simple: empower you to take control of your health with clarity and confidence.",
      "story.card1.title": "Easy",
      "story.card1.text": "Simple weekly systems that work in real life.",
      "story.card2.title": "Tasty",
      "story.card2.text": "Balanced food that feels satisfying, not restrictive.",
      "story.card3.title": "Quick",
      "story.card3.text": "Fast, practical actions you can use right away on busy days.",
      "story.card4.title": "Sustainable",
      "story.card4.text": "Simple habits designed to last long-term, not just for a few weeks.",
      "services.title": "Services designed for lasting change",
      "services.card1.badge": "Personalized",
      "services.card1.title": "1:1 Nutrition Coaching",
      "services.card1.text": "Personalized guidance focused on sustainable change.",
      "services.card1.cta": "Learn more →",
      "services.card2.badge": "Most Popular",
      "services.card2.title": "Signature Coaching Program",
      "services.card2.text": "Step-by-step support for lasting health transformation.",
      "services.card2.cta": "Discover more →",
      "services.card3.badge": "Practical",
      "services.card3.title": "Meal Planning & Kitchen Skills",
      "services.card3.text": "Simple systems to make healthy eating easier.",
      "services.card3.cta": "Get started →",
      "quotes.title": "Don’t just trust us — trust results.",
      "quotes.q1": "“I finally stopped starting over every Monday. The structure is simple and it works.”",
      "quotes.c1": "— Miriam, Project Cordinatior",
      "quotes.q2": "“Energy is up, inflammation is down, and meal prep takes half the time now.”",
      "quotes.c2": "— Aleksandar, Designer",
      "faq.title": "What people ask most",
      "faq.q1": "Do I need to be fully plant-based?",
      "faq.a1": "No. We use a flexible plant-forward approach tailored to your goals and preferences.",
      "faq.q2": "How much time does meal prep take?",
      "faq.a2": "Most clients use 60–90 minutes weekly with our prep templates.",
      "faq.q3": "Can this fit a busy work week?",
      "faq.a3": "Yes — the program is built around realistic routines and fast weekday options.",
      "cta.title": "Ready to feel better in your body?",
      "cta.text": "Book your free discovery call to build habits that support lasting health.",
      "cta.button": "Book Your Free Discovery Call",
      "form.title": "Coaching Inquiry Form",
      "form.subtitle": "Share your goals, and we’ll follow up with thoughtful next steps tailored to your lifestyle.",
      "form.name": "Full Name",
      "form.email": "Email Address",
      "form.phone": "Phone (optional)",
      "form.program": "Preferred Program",
      "form.select": "Select one",
      "form.opt.info": "General Information",
      "form.opt.reset": "Quick Reset",
      "form.opt.signature": "Signature 8-Week Coaching",
      "form.opt.performance": "Performance Nutrition",
      "form.support": "What would you like support with?",
      "form.placeholder": "Energy, inflammation, meal planning, weight goals, schedule challenges...",
      "form.button": "Send Inquiry",
      "fab.cta": "Book a Call",
      "footer.copy": "© 2026 Nutristika"
    },
    de: {
      "nav.story": "Überblick",
      "nav.programs": "Programme",
      "nav.benefits": "Vorteile",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",
      "lang.label": "Sprache",
      "lang.en": "English",
      "lang.de": "Deutsch",
      "header.cta": "KOSTENLOSES ERSTGESPRÄCH BUCHEN",
      "hero.word1": "EINFACHE",
      "hero.word2": "GEWOHNHEITEN.",
      "hero.word3": "NACHHALTIGE",
      "hero.word4": "Gesundheit.",
      "hero.person.name": "Jasmina Klisch",
      "hero.person.title": "Registrierte Ernährungsberaterin",
      "hero.eyebrow": "Registrierte Ernährungsberaterin",
      "hero.cta": "Programme entdecken",
      "story.title": "Wir sind mehr als nur ein Ernährungsplan.",
      "story.body": "Ich unterstütze Erwachsene, die sich in ihrem Körper besser fühlen möchten – ohne restriktive Diäten oder schnelle Lösungen. Als registrierte Ernährungsberaterin kombiniere ich evidenzbasierte Ernährung, pflanzenbetonte Küchenpraxis und Verhaltenscoaching, damit Gewohnheiten wirklich langfristig halten.",
      "story.goal": "Mein Ziel ist klar: Sie dabei zu unterstützen, Ihre Gesundheit mit Klarheit und Selbstvertrauen in die Hand zu nehmen.",
      "story.card1.title": "Einfach",
      "story.card1.text": "Einfache Wochenroutinen, die im echten Alltag funktionieren.",
      "story.card2.title": "Lecker",
      "story.card2.text": "Ausgewogene Ernährung, die sättigt – ohne Verzicht.",
      "story.card3.title": "Schnell",
      "story.card3.text": "Praktische Schritte, die Sie sofort in stressigen Tagen umsetzen können.",
      "story.card4.title": "Nachhaltig",
      "story.card4.text": "Gewohnheiten, die langfristig bleiben – nicht nur für ein paar Wochen.",
      "services.title": "Leistungen für nachhaltige Veränderung",
      "services.card1.badge": "Individuell",
      "services.card1.title": "1:1 Ernährungscoaching",
      "services.card1.text": "Individuelle Begleitung mit Fokus auf nachhaltige Veränderung.",
      "services.card1.cta": "Mehr erfahren →",
      "services.card2.badge": "Am beliebtesten",
      "services.card2.title": "Signature-Coaching-Programm",
      "services.card2.text": "Schritt-für-Schritt-Begleitung für langfristige Gesundheit.",
      "services.card2.cta": "Mehr entdecken →",
      "services.card3.badge": "Praxisnah",
      "services.card3.title": "Meal Planning & Küchenkompetenz",
      "services.card3.text": "Einfache Systeme, die gesundes Essen leichter machen.",
      "services.card3.cta": "Jetzt starten →",
      "quotes.title": "Verlassen Sie sich nicht nur auf uns — vertrauen Sie den Ergebnissen.",
      "quotes.q1": "„Ich habe endlich aufgehört, jeden Montag wieder von vorne anzufangen. Die Struktur ist einfach und funktioniert.“",
      "quotes.c1": "— Miriam, Projektkoordinatorin",
      "quotes.q2": "„Mehr Energie, weniger Entzündung, und Meal Prep dauert nur noch halb so lange.“",
      "quotes.c2": "— Aleksandar, Designer",
      "faq.title": "Häufig gestellte Fragen",
      "faq.q1": "Muss ich komplett pflanzenbasiert essen?",
      "faq.a1": "Nein. Wir arbeiten mit einem flexiblen, pflanzenbetonten Ansatz – passend zu Ihren Zielen und Vorlieben.",
      "faq.q2": "Wie viel Zeit braucht Meal Prep?",
      "faq.a2": "Die meisten Kund:innen brauchen mit unseren Vorlagen 60–90 Minuten pro Woche.",
      "faq.q3": "Passt das in einen vollen Arbeitsalltag?",
      "faq.a3": "Ja — das Programm ist auf realistische Routinen und schnelle Optionen unter der Woche ausgelegt.",
      "cta.title": "Bereit, sich in Ihrem Körper besser zu fühlen?",
      "cta.text": "Buchen Sie Ihr kostenloses Erstgespräch und bauen Sie Gewohnheiten auf, die Ihre Gesundheit langfristig stärken.",
      "cta.button": "Kostenloses Erstgespräch buchen",
      "form.title": "Anfrageformular für Coaching",
      "form.subtitle": "Teilen Sie Ihre Ziele mit — wir melden uns mit passenden nächsten Schritten für Ihren Alltag.",
      "form.name": "Vollständiger Name",
      "form.email": "E-Mail-Adresse",
      "form.phone": "Telefon (optional)",
      "form.program": "Gewünschtes Programm",
      "form.select": "Bitte auswählen",
      "form.opt.info": "Allgemeine Informationen",
      "form.opt.reset": "Quick Reset",
      "form.opt.signature": "Signature 8-Week Coaching",
      "form.opt.performance": "Performance Nutrition",
      "form.support": "Wobei wünschen Sie sich Unterstützung?",
      "form.placeholder": "Energie, Entzündungen, Meal Planning, Gewichtsziele, Herausforderungen im Alltag...",
      "form.button": "Anfrage senden",
      "fab.cta": "Gespräch buchen",
      "footer.copy": "© 2026 Nutristika"
    }
  };

  const languageButtons = document.querySelectorAll(".lang-btn[data-lang]");
  const adminApiBaseFromHtml = document.documentElement.getAttribute("data-admin-api-base") || "";
  const adminApiBaseFromWindow = typeof window.NUTRISTIKA_ADMIN_API_BASE === "string"
    ? window.NUTRISTIKA_ADMIN_API_BASE
    : "";

  const apiBases = [...new Set([
    adminApiBaseFromWindow,
    adminApiBaseFromHtml,
    "https://nutristika-admin.vercel.app",
    ""
  ].map((value) => String(value || "").trim()))];
  const primaryAdminApiBase = (adminApiBaseFromWindow || adminApiBaseFromHtml || "https://nutristika-admin.vercel.app")
    .replace(/\/$/, "");

  let siteContentOverrides = {
    textByKey: {},
    imageByKey: {}
  };

  const fallbackHomepageContent = {
    title: i18nDict.en["story.title"],
    description: i18nDict.en["story.body"]
  };

  const fallbackServicesImages = [
    "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop"
  ];

  const fallbackServicesBlocks = {
    en: [
      {
        badge: i18nDict.en["services.card1.badge"],
        title: i18nDict.en["services.card1.title"],
        text: i18nDict.en["services.card1.text"],
        cta: i18nDict.en["services.card1.cta"],
        href: "#cta",
        imageUrl: fallbackServicesImages[0],
        featured: false
      },
      {
        badge: i18nDict.en["services.card2.badge"],
        title: i18nDict.en["services.card2.title"],
        text: i18nDict.en["services.card2.text"],
        cta: i18nDict.en["services.card2.cta"],
        href: "#cta",
        imageUrl: fallbackServicesImages[1],
        featured: true
      },
      {
        badge: i18nDict.en["services.card3.badge"],
        title: i18nDict.en["services.card3.title"],
        text: i18nDict.en["services.card3.text"],
        cta: i18nDict.en["services.card3.cta"],
        href: "#cta",
        imageUrl: fallbackServicesImages[2],
        featured: false
      }
    ],
    de: [
      {
        badge: i18nDict.de["services.card1.badge"],
        title: i18nDict.de["services.card1.title"],
        text: i18nDict.de["services.card1.text"],
        cta: i18nDict.de["services.card1.cta"],
        href: "#cta",
        imageUrl: fallbackServicesImages[0],
        featured: false
      },
      {
        badge: i18nDict.de["services.card2.badge"],
        title: i18nDict.de["services.card2.title"],
        text: i18nDict.de["services.card2.text"],
        cta: i18nDict.de["services.card2.cta"],
        href: "#cta",
        imageUrl: fallbackServicesImages[1],
        featured: true
      },
      {
        badge: i18nDict.de["services.card3.badge"],
        title: i18nDict.de["services.card3.title"],
        text: i18nDict.de["services.card3.text"],
        cta: i18nDict.de["services.card3.cta"],
        href: "#cta",
        imageUrl: fallbackServicesImages[2],
        featured: false
      }
    ]
  };

  const fallbackFaqBlocks = {
    en: [
      {
        q: i18nDict.en["faq.q1"],
        a: i18nDict.en["faq.a1"]
      },
      {
        q: i18nDict.en["faq.q2"],
        a: i18nDict.en["faq.a2"]
      },
      {
        q: i18nDict.en["faq.q3"],
        a: i18nDict.en["faq.a3"]
      }
    ],
    de: [
      {
        q: i18nDict.de["faq.q1"],
        a: i18nDict.de["faq.a1"]
      },
      {
        q: i18nDict.de["faq.q2"],
        a: i18nDict.de["faq.a2"]
      },
      {
        q: i18nDict.de["faq.q3"],
        a: i18nDict.de["faq.a3"]
      }
    ]
  };

  const renderServicesBlocks = (lang) => {
    const cardsContainer = document.querySelector("#products .cards");
    if (!cardsContainer) return;

    const raw = getTextOverride("blocks.services", "all");
    if (!raw) {
      return;
    }

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return;
    }

    const list = Array.isArray(parsed?.[lang])
      ? parsed[lang]
      : Array.isArray(parsed?.en)
        ? parsed.en
        : [];

    if (!list.length) {
      return;
    }

    const normalized = list
      .map((item, index) => {
        const fallback = (fallbackServicesBlocks[lang] || fallbackServicesBlocks.en)[index % fallbackServicesBlocks.en.length];
        const imageFallback = fallback?.imageUrl || fallbackServicesImages[index % fallbackServicesImages.length];

        return {
          badge: typeof item?.badge === "string" ? item.badge : fallback.badge,
          title: typeof item?.title === "string" ? item.title : fallback.title,
          text: typeof item?.text === "string" ? item.text : fallback.text,
          cta: typeof item?.cta === "string" ? item.cta : fallback.cta,
          href: typeof item?.href === "string" && item.href.trim() ? item.href : "#cta",
          imageUrl: typeof item?.imageUrl === "string" && item.imageUrl.trim() ? item.imageUrl : imageFallback,
          featured: Boolean(item?.featured)
        };
      })
      .slice(0, 24);

    cardsContainer.innerHTML = "";

    normalized.forEach((card) => {
      const article = document.createElement("article");
      article.className = `product-card${card.featured ? " featured" : ""}`;

      const image = document.createElement("img");
      image.className = "product-card-media leaf-image";
      image.src = card.imageUrl;
      image.alt = card.title || "Service card image";

      const badge = document.createElement("span");
      badge.textContent = card.badge;

      const title = document.createElement("h3");
      title.textContent = card.title;

      const text = document.createElement("p");
      text.textContent = card.text;

      const link = document.createElement("a");
      link.href = card.href;
      link.textContent = card.cta;

      article.appendChild(image);
      article.appendChild(badge);
      article.appendChild(title);
      article.appendChild(text);
      article.appendChild(link);
      cardsContainer.appendChild(article);
    });
  };

  const renderFaqBlocks = (lang) => {
    const faqSection = document.querySelector("#faq");
    if (!faqSection) return;

    const raw = getTextOverride("blocks.faq", "all");
    if (!raw) return;

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return;
    }

    const list = Array.isArray(parsed?.[lang])
      ? parsed[lang]
      : Array.isArray(parsed?.en)
        ? parsed.en
        : [];

    if (!list.length) return;

    const normalized = list
      .map((item, index) => {
        const fallback = (fallbackFaqBlocks[lang] || fallbackFaqBlocks.en)[index % fallbackFaqBlocks.en.length];
        return {
          q: typeof item?.q === "string" && item.q.trim() ? item.q : fallback.q,
          a: typeof item?.a === "string" && item.a.trim() ? item.a : fallback.a
        };
      })
      .slice(0, 24);

    faqSection.querySelectorAll("details").forEach((node) => node.remove());

    normalized.forEach((item) => {
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      summary.textContent = item.q;
      const answer = document.createElement("p");
      answer.textContent = item.a;
      details.appendChild(summary);
      details.appendChild(answer);
      faqSection.appendChild(details);
    });
  };

  const detectPreferredLanguage = () => {
    const browserLanguages = [
      ...(Array.isArray(navigator.languages) ? navigator.languages : []),
      navigator.language,
      navigator.userLanguage
    ].filter(Boolean);

    const normalized = browserLanguages.map((lang) => String(lang).toLowerCase());
    if (normalized.some((lang) => lang.startsWith("de"))) return "de";
    return "en";
  };

  const getTextOverride = (key, lang) => {
    const byKey = siteContentOverrides?.textByKey?.[key];
    if (!byKey) return null;

    const localized = typeof byKey?.[lang] === "string" ? byKey[lang].trim() : "";
    if (localized) return localized;

    const universal = typeof byKey?.all === "string" ? byKey.all.trim() : "";
    if (universal) return universal;

    return null;
  };

  const applyImageOverrides = () => {
    const imageMap = siteContentOverrides?.imageByKey || {};
    document.querySelectorAll("[data-image-key]").forEach((el) => {
      const key = el.getAttribute("data-image-key");
      const overrideSrc = key ? imageMap[key] : "";

      if (typeof overrideSrc === "string" && overrideSrc.trim()) {
        el.setAttribute("src", overrideSrc.trim());
      }
    });

    const heroWrap = document.querySelector(".hero-f1-slideshow");
    if (heroWrap) {
      const existingKeys = new Set(
        [...heroWrap.querySelectorAll(".hero-slide[data-image-key]")]
          .map((el) => el.getAttribute("data-image-key"))
          .filter(Boolean)
      );

      Object.entries(imageMap)
        .filter(([key, value]) => /^hero\.slide\.\d+$/.test(key) && typeof value === "string" && value.trim())
        .sort((a, b) => Number(a[0].split(".").pop()) - Number(b[0].split(".").pop()))
        .forEach(([key, value]) => {
          if (existingKeys.has(key)) return;
          const slide = document.createElement("img");
          slide.className = "hero-slide";
          slide.setAttribute("data-image-key", key);
          slide.setAttribute("src", value.trim());
          slide.setAttribute("alt", "Hero slide image");
          heroWrap.appendChild(slide);
        });
    }

    const widthOverride = siteContentOverrides?.textByKey?.["hero.slide.width"]?.all;
    const widthNumber = Number.parseInt(String(widthOverride || ""), 10);
    const heroFloat = document.querySelector(".hero-float.f1");
    if (heroFloat instanceof HTMLElement) {
      if (Number.isFinite(widthNumber) && widthNumber >= 220 && widthNumber <= 1200) {
        heroFloat.style.width = `${widthNumber}px`;
      } else {
        heroFloat.style.removeProperty("width");
      }
    }
  };

  let liveEditorViewport = "auto";

  const getViewportBreakpoint = () => {
    if (window.innerWidth <= 640) return "mobile";
    if (window.innerWidth <= 960) return "tablet";
    return "desktop";
  };

  const getActiveBreakpoint = () => (liveEditorViewport === "auto" ? getViewportBreakpoint() : liveEditorViewport);

  const applyIconOverrides = (lang) => {
    document.querySelectorAll("[data-icon-key]").forEach((el) => {
      const key = el.getAttribute("data-icon-key");
      if (!key) return;

      const override = getTextOverride(key, lang) || getTextOverride(key, "en") || getTextOverride(key, "all");
      if (override) {
        el.textContent = override;
      }
    });
  };

  const applyLayoutOverrides = () => {
    const bp = getActiveBreakpoint();
    document.querySelectorAll("[data-i18n], [data-i18n-placeholder], [data-image-key], [data-icon-key], [data-layout-key]").forEach((el) => {
      if (!(el instanceof HTMLElement)) return;

      const key = el.getAttribute("data-i18n")
        || el.getAttribute("data-i18n-placeholder")
        || el.getAttribute("data-image-key")
        || el.getAttribute("data-icon-key")
        || el.getAttribute("data-layout-key");
      if (!key) return;

      const translateKey = `layout.${key}.translate.${bp}`;
      const hiddenKey = `layout.${key}.hidden.${bp}`;
      const translate = getTextOverride(translateKey, "en") || getTextOverride(translateKey, "all") || "";
      const hidden = getTextOverride(hiddenKey, "en") || getTextOverride(hiddenKey, "all") || "0";

      el.style.transform = "";
      el.style.display = "";

      if (hidden === "1") {
        el.style.display = "none";
        return;
      }

      const [xRaw, yRaw] = String(translate).split(",");
      const x = Number.parseInt((xRaw || "").trim(), 10);
      const y = Number.parseInt((yRaw || "").trim(), 10);

      if (Number.isFinite(x) || Number.isFinite(y)) {
        const tx = Number.isFinite(x) ? x : 0;
        const ty = Number.isFinite(y) ? y : 0;
        el.style.transform = `translate(${tx}px, ${ty}px)`;
      }
    });
  };

  const fetchFirstJson = async (path) => {
    for (const base of apiBases) {
      const prefix = base.replace(/\/$/, "");
      const url = `${prefix}${path}`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json"
          },
          cache: "no-store"
        });

        if (!response.ok) {
          continue;
        }

        const data = await response.json();
        return data;
      } catch {
        // Keep trying the next candidate base URL.
      }
    }

    return null;
  };

  const applyLanguage = (lang) => {
    const selected = i18nDict[lang] ? lang : "en";
    const dict = i18nDict[selected];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;

      const override = getTextOverride(key, selected);
      if (override) {
        el.textContent = override;
        return;
      }

      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;

      const override = getTextOverride(key, selected);
      if (override) {
        el.setAttribute("placeholder", override);
        return;
      }

      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    document.documentElement.setAttribute("lang", selected === "de" ? "de" : "en");
    localStorage.setItem("site-language", selected);
    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === selected;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    renderServicesBlocks(selected);
    renderFaqBlocks(selected);
    applyIconOverrides(selected);
    applyLayoutOverrides();
  };

  const initialLang = localStorage.getItem("site-language") || detectPreferredLanguage();
  applyLanguage(initialLang);

  /* ----------------------------------------------------------
     0c. Live key inspector (for fast content mapping)
     ---------------------------------------------------------- */
  const INSPECTOR_STORAGE_KEY = "nutristika-key-inspector";
  const LIVE_EDITOR_TOKEN_KEY = "nutristika-live-editor-token";
  const params = new URLSearchParams(window.location.search);
  const inspectorParam = params.get("inspector");
  const editorParam = params.get("editor");
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const hashToken = hashParams.get("adminToken");

  if (hashToken) {
    sessionStorage.setItem(LIVE_EDITOR_TOKEN_KEY, hashToken);
    const cleanUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, "", cleanUrl);
  }

  const liveEditorToken = sessionStorage.getItem(LIVE_EDITOR_TOKEN_KEY) || "";
  const liveEditorEnabled = editorParam === "1" && Boolean(liveEditorToken);

  if (inspectorParam === "1") {
    localStorage.setItem(INSPECTOR_STORAGE_KEY, "true");
  }

  if (inspectorParam === "0") {
    localStorage.setItem(INSPECTOR_STORAGE_KEY, "false");
  }

  const shouldShowInspectorUi = inspectorParam !== null || localStorage.getItem(INSPECTOR_STORAGE_KEY) === "true";
  let isInspectorEnabled = localStorage.getItem(INSPECTOR_STORAGE_KEY) === "true";
  let highlightedNode = null;

  const getInspectorNode = (target) => {
    if (!(target instanceof Element)) return null;
    return target.closest("[data-i18n], [data-i18n-placeholder], [data-image-key], [data-icon-key], [data-layout-key]");
  };

  const getInspectorDetails = (node) => {
    const i18nKey = node.getAttribute("data-i18n");
    const placeholderKey = node.getAttribute("data-i18n-placeholder");
    const imageKey = node.getAttribute("data-image-key");
    const iconKey = node.getAttribute("data-icon-key");
    const layoutKey = node.getAttribute("data-layout-key");

    if (layoutKey) {
      return {
        type: "layout",
        key: layoutKey,
        value: ""
      };
    }

    if (iconKey) {
      return {
        type: "icon",
        key: iconKey,
        value: (node.textContent || "").trim()
      };
    }

    if (imageKey) {
      return {
        type: "image",
        key: imageKey,
        value: (node.getAttribute("src") || "").trim()
      };
    }

    if (placeholderKey) {
      return {
        type: "placeholder",
        key: placeholderKey,
        value: (node.getAttribute("placeholder") || "").trim()
      };
    }

    return {
      type: "text",
      key: i18nKey || "",
      value: (node.textContent || "").trim()
    };
  };

  const inspectorRoot = document.createElement("div");
  inspectorRoot.className = "key-inspector";
  inspectorRoot.innerHTML = `
    <button type="button" class="key-inspector__toggle" aria-pressed="false">Inspector: Off</button>
    <p class="key-inspector__hint">Tip: click any highlighted text/image to copy its key.</p>
    <p class="key-inspector__status" role="status" aria-live="polite">Inspector idle</p>
  `;

  const inspectorToggleButton = inspectorRoot.querySelector(".key-inspector__toggle");
  const inspectorStatus = inspectorRoot.querySelector(".key-inspector__status");

  const setInspectorStatus = (message, tone = "info") => {
    if (!inspectorStatus) return;
    inspectorStatus.textContent = message;
    inspectorStatus.setAttribute("data-tone", tone);
  };

  const setInspectorEnabled = (enabled) => {
    isInspectorEnabled = Boolean(enabled);
    localStorage.setItem(INSPECTOR_STORAGE_KEY, isInspectorEnabled ? "true" : "false");
    document.body.classList.toggle("inspector-enabled", isInspectorEnabled);

    if (!isInspectorEnabled && highlightedNode) {
      highlightedNode.classList.remove("key-inspector__focus");
      highlightedNode = null;
    }

    if (inspectorToggleButton instanceof HTMLButtonElement) {
      inspectorToggleButton.setAttribute("aria-pressed", String(isInspectorEnabled));
      inspectorToggleButton.textContent = `Inspector: ${isInspectorEnabled ? "On" : "Off"}`;
    }

    setInspectorStatus(
      isInspectorEnabled
        ? "Inspector active — hover and click keyed elements."
        : "Inspector off",
      isInspectorEnabled ? "success" : "info"
    );
  };

  if (shouldShowInspectorUi) {
    document.body.appendChild(inspectorRoot);
    if (inspectorToggleButton instanceof HTMLButtonElement) {
      inspectorToggleButton.addEventListener("click", () => {
        setInspectorEnabled(!isInspectorEnabled);
      });
    }
  }

  setInspectorEnabled(isInspectorEnabled);

  const callLiveEditorApi = async (method, payload) => {
    if (!liveEditorToken) {
      return { ok: false, message: "Missing editor token. Open page from admin live editor." };
    }

    const response = await fetch(`${primaryAdminApiBase}/api/admin/site-content`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${liveEditorToken}`
      },
      body: payload ? JSON.stringify(payload) : undefined,
      cache: "no-store"
    });

    const data = await response.json().catch(() => ({}));
    return {
      ok: response.ok,
      data,
      message: typeof data?.message === "string" ? data.message : "Request failed"
    };
  };

  const getActiveLang = () => localStorage.getItem("site-language") || detectPreferredLanguage();

  const rerenderLiveState = () => {
    applyImageOverrides();
    applyLanguage(getActiveLang());
    wireLiveEditableNodes();
  };

  const getLocalValue = ({ key, type, language }) => {
    if (type === "image") {
      return siteContentOverrides?.imageByKey?.[key] ?? null;
    }

    const lang = language || "all";
    const entry = siteContentOverrides?.textByKey?.[key] || {};
    if (typeof entry[lang] === "string") return entry[lang];
    if (typeof entry.all === "string") return entry.all;
    return null;
  };

  const setLocalValue = ({ key, type, language, value }) => {
    if (type === "image") {
      if (value === null || value === undefined || value === "") {
        delete siteContentOverrides.imageByKey[key];
      } else {
        siteContentOverrides.imageByKey[key] = String(value);
      }
      rerenderLiveState();
      return;
    }

    const lang = language || "all";
    if (!siteContentOverrides.textByKey[key]) {
      siteContentOverrides.textByKey[key] = {};
    }

    if (value === null || value === undefined) {
      delete siteContentOverrides.textByKey[key][lang];
      if (!Object.keys(siteContentOverrides.textByKey[key]).length) {
        delete siteContentOverrides.textByKey[key];
      }
    } else {
      siteContentOverrides.textByKey[key][lang] = String(value);
    }

    rerenderLiveState();
  };

  let autosaveEnabled = true;
  let pendingOperations = [];
  let autosaveTimer = null;
  let isFlushingOperations = false;
  const undoStack = [];

  const buildInverseOperation = (operation) => {
    const previousValue = operation.previousValue;
    if (previousValue === null || previousValue === undefined || previousValue === "") {
      return {
        kind: "delete",
        payload: {
          key: operation.payload.key,
          type: operation.payload.type,
          language: operation.payload.language
        },
        previousValue: operation.payload.value
      };
    }

    return {
      kind: "save",
      payload: {
        key: operation.payload.key,
        value: previousValue,
        type: operation.payload.type,
        language: operation.payload.language
      },
      previousValue: operation.payload.value
    };
  };

  const executeOperation = async (operation) => {
    if (operation.kind === "save") {
      return callLiveEditorApi("POST", {
        key: operation.payload.key,
        value: operation.payload.value,
        content_type: operation.payload.type,
        language: operation.payload.type === "image" ? "all" : (operation.payload.language || "all")
      });
    }

    return callLiveEditorApi("DELETE", {
      key: operation.payload.key,
      content_type: operation.payload.type,
      language: operation.payload.type === "image" ? "all" : (operation.payload.language || "all")
    });
  };

  const flushPendingOperations = async () => {
    if (isFlushingOperations || !pendingOperations.length) return;
    isFlushingOperations = true;

    while (pendingOperations.length) {
      const operation = pendingOperations.shift();
      const result = await executeOperation(operation);

      if (!result.ok) {
        pendingOperations.unshift(operation);
        setLiveEditorStatus(`Save failed: ${result.message}`, "error");
        break;
      }

      undoStack.push(buildInverseOperation(operation));
      if (undoStack.length > 60) undoStack.shift();
    }

    if (!pendingOperations.length) {
      setLiveEditorStatus("All changes saved.", "success");
    }

    isFlushingOperations = false;
  };

  const scheduleAutosaveFlush = () => {
    if (!autosaveEnabled) return;
    if (autosaveTimer) {
      window.clearTimeout(autosaveTimer);
    }
    autosaveTimer = window.setTimeout(() => {
      autosaveTimer = null;
      void flushPendingOperations();
    }, 900);
  };

  const saveLiveOverride = async ({ key, value, type, language }) => {
    const payload = {
      key,
      value,
      type,
      language: type === "image" ? "all" : (language || "all")
    };

    const operation = {
      kind: "save",
      payload,
      previousValue: getLocalValue(payload)
    };

    pendingOperations.push(operation);
    scheduleAutosaveFlush();
    return { ok: true, queued: true };
  };

  const deleteLiveOverride = async ({ key, type, language }) => {
    const payload = {
      key,
      type,
      language: type === "image" ? "all" : (language || "all")
    };

    const operation = {
      kind: "delete",
      payload,
      previousValue: getLocalValue(payload)
    };

    pendingOperations.push(operation);
    scheduleAutosaveFlush();
    return { ok: true, queued: true };
  };

  const liveEditorRoot = document.createElement("div");
  liveEditorRoot.className = "key-inspector live-editor-panel";
  liveEditorRoot.innerHTML = `
    <p class="key-inspector__hint"><strong>Live Editor</strong> — click text/image to edit instantly.</p>
    <div class="live-editor-actions">
      <button type="button" class="key-inspector__toggle" data-live-action="viewport" data-viewport="desktop">Desktop</button>
      <button type="button" class="key-inspector__toggle" data-live-action="viewport" data-viewport="tablet">Tablet</button>
      <button type="button" class="key-inspector__toggle" data-live-action="viewport" data-viewport="mobile">Mobile</button>
      <button type="button" class="key-inspector__toggle" data-live-action="toggle-grid">Grid: Off</button>
    </div>
    <div class="live-editor-actions">
      <button type="button" class="key-inspector__toggle" data-live-action="toggle-autosave" data-active="true">Autosave: On</button>
      <button type="button" class="key-inspector__toggle" data-live-action="save-now">Save now</button>
      <button type="button" class="key-inspector__toggle" data-live-action="undo">Undo</button>
    </div>
    <div class="live-editor-actions">
      <button type="button" class="key-inspector__toggle" data-live-action="add-slide">+ Add hero slide</button>
      <button type="button" class="key-inspector__toggle" data-live-action="remove-slide">− Remove selected slide</button>
      <button type="button" class="key-inspector__toggle" data-live-action="hide-selected">Hide selected</button>
      <button type="button" class="key-inspector__toggle" data-live-action="show-selected">Show selected</button>
    </div>
    <div class="live-editor-actions">
      <button type="button" class="key-inspector__toggle" data-live-action="toggle-drag-scope" data-mode="child">Move: Child element</button>
    </div>
    <label class="key-inspector__hint" for="live-slider-width">Hero slider width</label>
    <input id="live-slider-width" type="range" min="260" max="980" step="10" value="620" />
    <p class="key-inspector__status" role="status" aria-live="polite">Live editor idle</p>
  `;

  const liveEditorStatus = liveEditorRoot.querySelector(".key-inspector__status");
  const liveWidthInput = liveEditorRoot.querySelector("#live-slider-width");
  const liveEditorHud = document.createElement("div");
  liveEditorHud.className = "live-editor-hud";
  liveEditorHud.innerHTML = `
    <p class="live-editor-hud__key">No selection</p>
    <p class="live-editor-hud__coords">x: 0 · y: 0</p>
    <button type="button" class="live-editor-hud__copy" data-live-hud-action="copy-coords">Copy coords</button>
  `;

  const liveEditorHudKey = liveEditorHud.querySelector(".live-editor-hud__key");
  const liveEditorHudCoords = liveEditorHud.querySelector(".live-editor-hud__coords");
  const liveEditorHudCopyButton = liveEditorHud.querySelector('[data-live-hud-action="copy-coords"]');
  let selectedHeroSlideKey = "";
  let selectedNodeKey = "";
  let selectedNode = null;
  let suppressLiveClickUntil = 0;
  let dragScopeMode = "child";
  let nudgeSaveTimer = null;
  let hudHideTimer = null;

  const setLiveEditorStatus = (message, tone = "info") => {
    if (!liveEditorStatus) return;
    liveEditorStatus.textContent = message;
    liveEditorStatus.setAttribute("data-tone", tone);
  };

  const showLiveEditorHud = ({ key, x, y }) => {
    if (liveEditorHudKey) {
      liveEditorHudKey.textContent = key || "No selection";
    }
    if (liveEditorHudCoords) {
      liveEditorHudCoords.textContent = `x: ${x} · y: ${y}`;
    }

    if (hudHideTimer) {
      window.clearTimeout(hudHideTimer);
      hudHideTimer = null;
    }

    liveEditorHud.classList.add("is-visible");
  };

  const hideLiveEditorHudSoon = (delay = 1400) => {
    if (hudHideTimer) {
      window.clearTimeout(hudHideTimer);
    }

    hudHideTimer = window.setTimeout(() => {
      hudHideTimer = null;
      liveEditorHud.classList.remove("is-visible");
    }, delay);
  };

  const copySelectedCoords = async () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) {
      setLiveEditorStatus("Select an element first to copy coordinates.", "info");
      return;
    }

    const { x, y } = getTranslateFromElement(selectedNode);
    const payload = `${x},${y}`;

    try {
      await navigator.clipboard.writeText(payload);
      setLiveEditorStatus(`Copied coords for ${selectedNodeKey}: ${payload}`, "success");
      showLiveEditorHud({ key: selectedNodeKey, x, y });
      hideLiveEditorHudSoon(1800);
      return;
    } catch {
      try {
        const temp = document.createElement("textarea");
        temp.value = payload;
        temp.setAttribute("readonly", "");
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.focus();
        temp.select();
        const copied = document.execCommand("copy");
        temp.remove();

        if (copied) {
          setLiveEditorStatus(`Copied coords for ${selectedNodeKey}: ${payload}`, "success");
          showLiveEditorHud({ key: selectedNodeKey, x, y });
          hideLiveEditorHudSoon(1800);
          return;
        }
      } catch {
        // no-op
      }
    }

    setLiveEditorStatus("Could not copy coordinates. Try again.", "error");
  };

  const setSelectedNode = (node, key) => {
    if (selectedNode instanceof HTMLElement) {
      selectedNode.removeAttribute("data-live-selected");
    }

    selectedNode = node instanceof HTMLElement ? node : null;
    selectedNodeKey = key || "";

    if (selectedNode instanceof HTMLElement) {
      selectedNode.setAttribute("data-live-selected", "true");
      const coords = getTranslateFromElement(selectedNode);
      showLiveEditorHud({ key: selectedNodeKey, x: coords.x, y: coords.y });
    }
  };

  const getTranslateFromElement = (el) => {
    if (!(el instanceof HTMLElement)) return { x: 0, y: 0 };

    const transform = window.getComputedStyle(el).transform;
    if (!transform || transform === "none") {
      return { x: 0, y: 0 };
    }

    try {
      const matrix = new DOMMatrixReadOnly(transform);
      return {
        x: Math.round(matrix.m41 || 0),
        y: Math.round(matrix.m42 || 0)
      };
    } catch {
      return { x: 0, y: 0 };
    }
  };

  const updateViewportButtons = () => {
    liveEditorRoot.querySelectorAll('[data-live-action="viewport"]').forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      const viewport = button.getAttribute("data-viewport") || "";
      const isActive = viewport === liveEditorViewport;
      button.setAttribute("data-active", String(isActive));
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  const updateVisibilityButtons = () => {
    const bp = getActiveBreakpoint();
    liveEditorRoot.querySelectorAll('[data-live-action="hide-selected"]').forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      button.textContent = `Hide (${bp})`;
    });

    liveEditorRoot.querySelectorAll('[data-live-action="show-selected"]').forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      button.textContent = `Show (${bp})`;
    });
  };

  const updateDragScopeButton = () => {
    const button = liveEditorRoot.querySelector('[data-live-action="toggle-drag-scope"]');
    if (!(button instanceof HTMLElement)) return;

    const isChild = dragScopeMode === "child";
    button.setAttribute("data-mode", dragScopeMode);
    button.setAttribute("data-active", String(isChild));
    button.textContent = isChild ? "Move: Child element" : "Move: Parent layer";
  };

  const resolveDragTargetNode = (target) => {
    const exactNode = getInspectorNode(target);
    if (!exactNode) return null;

    if (dragScopeMode === "parent") {
      if (exactNode.hasAttribute("data-layout-key")) {
        return exactNode;
      }

      return exactNode.closest("[data-layout-key]") || exactNode;
    }

    return exactNode;
  };

  const saveLayoutTranslate = async (key, el) => {
    if (!(el instanceof HTMLElement) || !key) return;

    const { x, y } = getTranslateFromElement(el);
    const translateKey = `layout.${key}.translate.${getActiveBreakpoint()}`;

    const result = await saveLiveOverride({
      key: translateKey,
      value: `${x},${y}`,
      type: "text",
      language: "all"
    });

    if (!result.ok) {
      setLiveEditorStatus(`Position save failed: ${result.message}`, "error");
      return;
    }

    if (!siteContentOverrides.textByKey[translateKey]) {
      siteContentOverrides.textByKey[translateKey] = {};
    }
    siteContentOverrides.textByKey[translateKey].all = `${x},${y}`;
    setLiveEditorStatus(`Saved position (${getActiveBreakpoint()}) for ${key}`, "success");
    hideLiveEditorHudSoon();
  };

  const isTextInputContext = (eventTarget) => {
    if (!(eventTarget instanceof HTMLElement)) return false;
    if (eventTarget.isContentEditable) return true;

    const tag = eventTarget.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
  };

  const nudgeSelectedNode = (dx, dy) => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) return false;

    const origin = getTranslateFromElement(selectedNode);
    const nextX = origin.x + dx;
    const nextY = origin.y + dy;
    selectedNode.style.transform = `translate(${nextX}px, ${nextY}px)`;
    showLiveEditorHud({ key: selectedNodeKey, x: nextX, y: nextY });

    if (nudgeSaveTimer) {
      window.clearTimeout(nudgeSaveTimer);
    }

    nudgeSaveTimer = window.setTimeout(() => {
      nudgeSaveTimer = null;
      void saveLayoutTranslate(selectedNodeKey, selectedNode);
    }, 260);

    setLiveEditorStatus(`Nudged ${selectedNodeKey} to ${nextX},${nextY} (${getActiveBreakpoint()})`, "info");
    return true;
  };

  const attachDragHandler = (el, key) => {
    if (!(el instanceof HTMLElement)) return;

    let startX = 0;
    let startY = 0;
    let originX = 0;
    let originY = 0;
    let didMove = false;

    const onMove = (moveEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      if (!didMove && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
        didMove = true;
      }
      const nextX = originX + dx;
      const nextY = originY + dy;
      el.style.transform = `translate(${nextX}px, ${nextY}px)`;
      showLiveEditorHud({ key, x: nextX, y: nextY });
    };

    const onUp = async () => {
      el.removeAttribute("data-dragging");
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);

      if (didMove) {
        suppressLiveClickUntil = Date.now() + 260;
      }

      await saveLayoutTranslate(key, el);
    };

    el.addEventListener("pointerdown", (downEvent) => {
      if (!liveEditorEnabled) return;
      if (liveEditorRoot.contains(downEvent.target)) return;
      if (liveEditorHud.contains(downEvent.target)) return;
      if (downEvent.button !== 0) return;

      const dragNode = resolveDragTargetNode(downEvent.target);
      if (dragNode && dragNode !== el) return;

      downEvent.preventDefault();
      downEvent.stopPropagation();
      setSelectedNode(el, key);
      el.setAttribute("data-dragging", "true");
      didMove = false;

      startX = downEvent.clientX;
      startY = downEvent.clientY;
      const origin = getTranslateFromElement(el);
      originX = origin.x;
      originY = origin.y;

      document.addEventListener("pointermove", onMove);
      document.addEventListener("pointerup", onUp);
    });
  };

  const ensureLayoutKeys = () => {
    const layoutSelectors = [
      ".site-header",
      ".hero",
      ".hero-headline",
      ".hero-cta",
      ".hero-profile",
      ".hero-float.f1",
      ".hero-float.f2",
      ".hero-float.f3",
      ".story",
      ".products",
      ".quotes",
      ".faq",
      ".cta",
      ".inquiry",
      ".footer",
      ".hero-person-name"
    ];

    layoutSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el, index) => {
        if (!(el instanceof HTMLElement)) return;
        if (el.hasAttribute("data-layout-key")) return;

        const base = selector.replace(/[^a-z0-9]+/gi, ".").replace(/^\.+|\.+$/g, "").toLowerCase();
        const suffix = index > 0 ? `.${index + 1}` : "";
        el.setAttribute("data-layout-key", `layout.elem.${base}${suffix}`);
      });
    });
  };

  const wireLiveEditableNodes = () => {
    if (editorParam !== "1") return;
    ensureLayoutKeys();
    document.querySelectorAll("[data-i18n], [data-i18n-placeholder], [data-image-key], [data-icon-key], [data-layout-key]").forEach((el) => {
      const key = el.getAttribute("data-i18n")
        || el.getAttribute("data-i18n-placeholder")
        || el.getAttribute("data-image-key")
        || el.getAttribute("data-icon-key")
        || el.getAttribute("data-layout-key");

      if (!key || !(el instanceof HTMLElement)) return;
      if (el.dataset.dragBound === "true") return;
      el.dataset.dragBound = "true";
      attachDragHandler(el, key);
    });
  };

  if (editorParam === "1") {
    document.body.appendChild(liveEditorRoot);
    document.body.appendChild(liveEditorHud);
    document.body.classList.add("live-editor-enabled");

    liveEditorViewport = getViewportBreakpoint();
    document.body.classList.add(`live-editor-vp-${liveEditorViewport}`);
    updateViewportButtons();
    updateVisibilityButtons();
    updateDragScopeButton();

    if (liveEditorEnabled) {
      document.body.classList.add("inspector-enabled");
      setLiveEditorStatus("Live editor active. Click content to edit.", "success");
    } else {
      setLiveEditorStatus("Missing token. Open this page from admin → Open live editor.", "error");
    }

    wireLiveEditableNodes();
  }

  if (liveEditorHudCopyButton instanceof HTMLButtonElement) {
    liveEditorHudCopyButton.addEventListener("click", () => {
      void copySelectedCoords();
    });
  }

  if (liveWidthInput instanceof HTMLInputElement) {
    const heroFloat = document.querySelector(".hero-float.f1");

    liveWidthInput.addEventListener("input", () => {
      if (!(heroFloat instanceof HTMLElement)) return;
      heroFloat.style.width = `${liveWidthInput.value}px`;
      setLiveEditorStatus(`Slider width: ${liveWidthInput.value}px`, "info");
    });

    liveWidthInput.addEventListener("change", async () => {
      if (!liveEditorEnabled) return;
      const result = await saveLiveOverride({
        key: "hero.slide.width",
        value: String(liveWidthInput.value),
        type: "text",
        language: "all"
      });

      if (result.ok) {
        if (!siteContentOverrides.textByKey["hero.slide.width"]) {
          siteContentOverrides.textByKey["hero.slide.width"] = {};
        }
        siteContentOverrides.textByKey["hero.slide.width"].all = String(liveWidthInput.value);
        setLiveEditorStatus("Saved slider width.", "success");
      } else {
        setLiveEditorStatus(`Save failed: ${result.message}`, "error");
      }
    });
  }

  liveEditorRoot.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const action = target.getAttribute("data-live-action");
    if (!action) return;

    if (action === "viewport") {
      const viewport = target.getAttribute("data-viewport");
      if (viewport !== "desktop" && viewport !== "tablet" && viewport !== "mobile") return;

      liveEditorViewport = viewport;
      document.body.classList.remove("live-editor-vp-desktop", "live-editor-vp-tablet", "live-editor-vp-mobile");
      document.body.classList.add(`live-editor-vp-${viewport}`);
      updateViewportButtons();
      updateVisibilityButtons();
      applyLayoutOverrides();
      setLiveEditorStatus(`Editing ${viewport} layout`, "info");
      return;
    }

    if (action === "toggle-grid") {
      const active = document.body.classList.toggle("live-editor-grid");
      if (target instanceof HTMLElement) {
        target.textContent = `Grid: ${active ? "On" : "Off"}`;
      }
      setLiveEditorStatus(`Grid ${active ? "enabled" : "disabled"}`, "info");
      return;
    }

    if (action === "toggle-autosave") {
      autosaveEnabled = !autosaveEnabled;
      if (target instanceof HTMLElement) {
        target.setAttribute("data-active", String(autosaveEnabled));
        target.textContent = `Autosave: ${autosaveEnabled ? "On" : "Off"}`;
      }
      if (autosaveEnabled) {
        scheduleAutosaveFlush();
      }
      setLiveEditorStatus(`Autosave ${autosaveEnabled ? "enabled" : "disabled"}.`, "info");
      return;
    }

    if (action === "toggle-drag-scope") {
      dragScopeMode = dragScopeMode === "child" ? "parent" : "child";
      updateDragScopeButton();
      setLiveEditorStatus(
        dragScopeMode === "child"
          ? "Drag mode: moving child element"
          : "Drag mode: moving parent layer",
        "info"
      );
      return;
    }

    if (action === "save-now") {
      await flushPendingOperations();
      return;
    }

    if (action === "undo") {
      if (pendingOperations.length) {
        const pending = pendingOperations.pop();
        const inversePending = buildInverseOperation(pending);
        setLocalValue({
          key: inversePending.payload.key,
          type: inversePending.payload.type,
          language: inversePending.payload.language,
          value: inversePending.kind === "save" ? inversePending.payload.value : null
        });
        setLiveEditorStatus("Undid last unsaved change.", "success");
        return;
      }

      const inverse = undoStack.pop();
      if (!inverse) {
        setLiveEditorStatus("Nothing to undo.", "info");
        return;
      }

      const result = await executeOperation(inverse);
      if (!result.ok) {
        undoStack.push(inverse);
        setLiveEditorStatus(`Undo failed: ${result.message}`, "error");
        return;
      }

      setLocalValue({
        key: inverse.payload.key,
        type: inverse.payload.type,
        language: inverse.payload.language,
        value: inverse.kind === "save" ? inverse.payload.value : null
      });

      setLiveEditorStatus("Undo applied.", "success");
      return;
    }

    if (!liveEditorEnabled) {
      setLiveEditorStatus("Token missing for live edits.", "error");
      return;
    }

    if (action === "hide-selected" || action === "show-selected") {
      if (!selectedNodeKey) {
        setLiveEditorStatus("Select any editable element first.", "info");
        return;
      }

      const hiddenKey = `layout.${selectedNodeKey}.hidden.${getActiveBreakpoint()}`;
      const hiddenValue = action === "hide-selected" ? "1" : "0";
      const result = await saveLiveOverride({
        key: hiddenKey,
        value: hiddenValue,
        type: "text",
        language: "all"
      });

      if (!result.ok) {
        setLiveEditorStatus(`Visibility update failed: ${result.message}`, "error");
        return;
      }

      if (!siteContentOverrides.textByKey[hiddenKey]) {
        siteContentOverrides.textByKey[hiddenKey] = {};
      }
      siteContentOverrides.textByKey[hiddenKey].all = hiddenValue;
      applyLayoutOverrides();
      setLiveEditorStatus(
        `${action === "hide-selected" ? "Hidden" : "Shown"} ${selectedNodeKey} on ${getActiveBreakpoint()}`,
        "success"
      );
      return;
    }

    if (action === "add-slide") {
      const url = window.prompt("Paste new hero slide image URL:");
      if (!url || !/^https?:\/\//i.test(url.trim())) return;

      const heroWrap = document.querySelector(".hero-f1-slideshow");
      if (!heroWrap) return;

      const keys = [
        ...[...heroWrap.querySelectorAll(".hero-slide[data-image-key]")].map((el) => el.getAttribute("data-image-key") || ""),
        ...Object.keys(siteContentOverrides.imageByKey || {})
      ];

      const maxIndex = keys
        .map((key) => Number.parseInt((key.match(/^hero\.slide\.(\d+)$/) || [])[1] || "0", 10))
        .filter((value) => Number.isFinite(value))
        .reduce((max, value) => Math.max(max, value), 0);

      const nextKey = `hero.slide.${maxIndex + 1}`;
      const result = await saveLiveOverride({ key: nextKey, value: url.trim(), type: "image", language: "all" });

      if (!result.ok) {
        setLiveEditorStatus(`Add failed: ${result.message}`, "error");
        return;
      }

      siteContentOverrides.imageByKey[nextKey] = url.trim();
      applyImageOverrides();
      wireLiveEditableNodes();
      setLiveEditorStatus(`Added ${nextKey}`, "success");
      return;
    }

    if (action === "remove-slide") {
      if (!selectedHeroSlideKey) {
        setLiveEditorStatus("Select a hero slide image first.", "info");
        return;
      }

      const confirmed = window.confirm(`Remove override for ${selectedHeroSlideKey}?`);
      if (!confirmed) return;

      const result = await deleteLiveOverride({ key: selectedHeroSlideKey, type: "image", language: "all" });
      if (!result.ok) {
        setLiveEditorStatus(`Remove failed: ${result.message}`, "error");
        return;
      }

      delete siteContentOverrides.imageByKey[selectedHeroSlideKey];
      setLiveEditorStatus(`Removed ${selectedHeroSlideKey}. Reloading...`, "success");
      window.location.reload();
    }
  });

  const copyInspectorPayload = async (details) => {
    const activeLang = localStorage.getItem("site-language") || detectPreferredLanguage();
    const payload = JSON.stringify(
      {
        key: details.key,
        type: details.type,
        language: details.type === "image" ? "all" : activeLang,
        value: details.value
      },
      null,
      2
    );

    try {
      await navigator.clipboard.writeText(payload);
      return true;
    } catch {
      try {
        const temp = document.createElement("textarea");
        temp.value = payload;
        temp.setAttribute("readonly", "");
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.focus();
        temp.select();
        const copied = document.execCommand("copy");
        temp.remove();
        return copied;
      } catch {
        return false;
      }
    }
  };

  document.addEventListener("mouseover", (event) => {
    if (!isInspectorEnabled) return;
    if (inspectorRoot.contains(event.target)) return;

    const node = getInspectorNode(event.target);

    if (highlightedNode && highlightedNode !== node) {
      highlightedNode.classList.remove("key-inspector__focus");
    }

    if (node) {
      node.classList.add("key-inspector__focus");
      highlightedNode = node;
      const details = getInspectorDetails(node);
      setInspectorStatus(`Hover: ${details.type} → ${details.key || "(missing key)"}`);
      return;
    }

    highlightedNode = null;
    setInspectorStatus("Inspector active — hover and click keyed elements.");
  });

  document.addEventListener("click", async (event) => {
    if (liveEditorEnabled) {
      if (Date.now() < suppressLiveClickUntil) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (liveEditorRoot.contains(event.target) || liveEditorHud.contains(event.target) || inspectorRoot.contains(event.target)) return;

      const node = getInspectorNode(event.target);
      if (!node) return;

      const details = getInspectorDetails(node);
      if (!details.key) return;

      if (node instanceof HTMLElement) {
        setSelectedNode(node, details.key);
      }

      const activeLang = localStorage.getItem("site-language") || detectPreferredLanguage();

      if (details.type === "layout") {
        setLiveEditorStatus(`Selected ${details.key}. Drag to move.`, "info");
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (details.type === "image") {
        if (/^hero\.slide\.\d+$/.test(details.key)) {
          selectedHeroSlideKey = details.key;
          setLiveEditorStatus(`Selected ${details.key}`, "info");
        }

        const nextUrl = window.prompt(`Edit image URL for ${details.key}:`, details.value || "");
        if (nextUrl === null) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        const trimmed = nextUrl.trim();
        if (!trimmed) {
          const deletion = await deleteLiveOverride({ key: details.key, type: "image", language: "all" });
          if (!deletion.ok) {
            setLiveEditorStatus(`Delete failed: ${deletion.message}`, "error");
            return;
          }
          delete siteContentOverrides.imageByKey[details.key];
          setLiveEditorStatus(`Deleted ${details.key}. Reloading...`, "success");
          window.location.reload();
          return;
        }

        if (!/^https?:\/\//i.test(trimmed)) {
          setLiveEditorStatus("Image URL must start with http:// or https://", "error");
          return;
        }

        const save = await saveLiveOverride({ key: details.key, value: trimmed, type: "image", language: "all" });
        if (!save.ok) {
          setLiveEditorStatus(`Save failed: ${save.message}`, "error");
          return;
        }

        siteContentOverrides.imageByKey[details.key] = trimmed;
        applyImageOverrides();
        setLiveEditorStatus(`Saved image ${details.key}`, "success");
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (details.type === "placeholder" || details.type === "icon") {
        const promptLabel = details.type === "icon" ? "Edit icon name" : "Edit placeholder";
        const placeholderText = window.prompt(`${promptLabel} for ${details.key}:`, details.value || "");
        if (placeholderText === null) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        const savePlaceholder = await saveLiveOverride({
          key: details.key,
          value: placeholderText.trim(),
          type: "text",
          language: activeLang
        });

        if (!savePlaceholder.ok) {
          setLiveEditorStatus(`Save failed: ${savePlaceholder.message}`, "error");
          return;
        }

        if (!siteContentOverrides.textByKey[details.key]) {
          siteContentOverrides.textByKey[details.key] = {};
        }
        siteContentOverrides.textByKey[details.key][activeLang] = placeholderText.trim();
        applyLanguage(activeLang);
        setLiveEditorStatus(`Saved ${details.key} (${activeLang.toUpperCase()})`, "success");

        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (!(node instanceof HTMLElement)) return;

      const originalText = node.textContent || "";
      node.setAttribute("contenteditable", "true");
      node.classList.add("key-inspector__focus");
      node.focus();

      const range = document.createRange();
      range.selectNodeContents(node);
      range.collapse(false);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);

      setLiveEditorStatus(`Editing ${details.key} — press Enter to save, Esc to cancel.`, "info");

      const cleanup = () => {
        node.removeAttribute("contenteditable");
        node.removeEventListener("blur", onBlur);
        node.removeEventListener("keydown", onKeydown);
      };

      const cancelEdit = () => {
        node.textContent = originalText;
        cleanup();
        applyLanguage(activeLang);
        setLiveEditorStatus("Edit canceled.", "info");
      };

      const saveEdit = async () => {
        const updatedText = (node.textContent || "").trim();
        const save = await saveLiveOverride({
          key: details.key,
          value: updatedText,
          type: "text",
          language: activeLang
        });

        if (!save.ok) {
          node.textContent = originalText;
          cleanup();
          applyLanguage(activeLang);
          setLiveEditorStatus(`Save failed: ${save.message}`, "error");
          return;
        }

        if (!siteContentOverrides.textByKey[details.key]) {
          siteContentOverrides.textByKey[details.key] = {};
        }
        siteContentOverrides.textByKey[details.key][activeLang] = updatedText;
        cleanup();
        applyLanguage(activeLang);
        setLiveEditorStatus(`Saved ${details.key} (${activeLang.toUpperCase()})`, "success");
      };

      const onBlur = () => {
        void saveEdit();
      };

      const onKeydown = (keyboardEvent) => {
        if (keyboardEvent.key === "Enter") {
          keyboardEvent.preventDefault();
          node.blur();
        }
        if (keyboardEvent.key === "Escape") {
          keyboardEvent.preventDefault();
          cancelEdit();
        }
      };

      node.addEventListener("blur", onBlur, { once: true });
      node.addEventListener("keydown", onKeydown);

      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (!isInspectorEnabled) return;
    if (inspectorRoot.contains(event.target)) return;

    const node = getInspectorNode(event.target);
    if (!node) return;

    const details = getInspectorDetails(node);
    if (!details.key) {
      setInspectorStatus("Selected element has no key attribute.", "error");
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const copied = await copyInspectorPayload(details);
    if (copied) {
      setInspectorStatus(`Copied ${details.type} key: ${details.key}`, "success");
      return;
    }

    setInspectorStatus("Could not copy to clipboard. Please try again.", "error");
  }, true);

  document.addEventListener("keydown", (event) => {
    if (liveEditorEnabled && event.key.startsWith("Arrow")) {
      if (liveEditorRoot.contains(event.target)) return;
      if (isTextInputContext(event.target)) return;

      const step = event.shiftKey ? 10 : 1;
      let dx = 0;
      let dy = 0;

      if (event.key === "ArrowLeft") dx = -step;
      if (event.key === "ArrowRight") dx = step;
      if (event.key === "ArrowUp") dy = -step;
      if (event.key === "ArrowDown") dy = step;

      if (dx !== 0 || dy !== 0) {
        event.preventDefault();
        event.stopPropagation();

        if (!nudgeSelectedNode(dx, dy)) {
          setLiveEditorStatus("Select an element first, then use arrow keys.", "info");
        }
        return;
      }
    }

    if (event.key.toLowerCase() === "i" && event.shiftKey && event.altKey) {
      event.preventDefault();
      if (!document.body.contains(inspectorRoot)) {
        document.body.appendChild(inspectorRoot);
      }
      setInspectorEnabled(!isInspectorEnabled);
    }
  });

  const applyHomepageContent = (content) => {
    const title = typeof content?.title === "string" && content.title.trim()
      ? content.title.trim()
      : fallbackHomepageContent.title;
    const description = typeof content?.description === "string" && content.description.trim()
      ? content.description.trim()
      : fallbackHomepageContent.description;

    i18nDict.en["story.title"] = title;
    i18nDict.en["story.body"] = description;

    const activeLang = localStorage.getItem("site-language") || detectPreferredLanguage();
    applyLanguage(activeLang);
  };

  const loadSiteContentOverrides = async () => {
    const data = await fetchFirstJson("/api/site-content");

    if (!data || typeof data !== "object") {
      siteContentOverrides = { textByKey: {}, imageByKey: {} };
      applyImageOverrides();
      return;
    }

    siteContentOverrides = {
      textByKey: typeof data.textByKey === "object" && data.textByKey ? data.textByKey : {},
      imageByKey: typeof data.imageByKey === "object" && data.imageByKey ? data.imageByKey : {}
    };

    applyImageOverrides();
    wireLiveEditableNodes();
    const activeLang = localStorage.getItem("site-language") || detectPreferredLanguage();
    applyLanguage(activeLang);
  };

  const loadHomepageContent = async () => {
    try {
      const data = await fetchFirstJson("/api/homepage-content");
      if (!data) {
        applyHomepageContent(fallbackHomepageContent);
        return;
      }

      applyHomepageContent(data);
    } catch {
      applyHomepageContent(fallbackHomepageContent);
    }
  };

  void loadSiteContentOverrides();
  void loadHomepageContent();

  if (languageButtons.length) {
    languageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        applyLanguage(button.dataset.lang || "en");
      });
    });
  }

  window.addEventListener("resize", () => {
    applyLayoutOverrides();
  });

  const setMenuState = (open) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileMenu.hidden = !open;
    mobileMenu.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenuState(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 960) setMenuState(false);
    });
  }

  /* ----------------------------------------------------------
     1. Scroll-reveal observer
     ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll(".reveal-alt");
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revealObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealObs.observe(el));

  /* ----------------------------------------------------------
     2. Staggered reveal for grid children
     ---------------------------------------------------------- */
  const staggerContainers = document.querySelectorAll("[data-stagger]");
  const staggerObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const kids = e.target.children;
          [...kids].forEach((child, i) => {
            child.style.transitionDelay = `${i * 110}ms`;
            child.classList.add("visible");
          });
          staggerObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  staggerContainers.forEach((el) => staggerObs.observe(el));

  /* ----------------------------------------------------------
     4. Ticker marquee — clone text for seamless infinite loop
     ---------------------------------------------------------- */
  const tickerTrack = document.querySelector(".ticker-track");
  if (tickerTrack) {
    const clone = tickerTrack.innerHTML;
    tickerTrack.innerHTML += clone + clone;
  }

  /* ----------------------------------------------------------
     4b. Hero f1 vegan dishes slideshow (smooth crossfade)
     ---------------------------------------------------------- */
  const heroSlideWrap = document.querySelector(".hero-f1-slideshow");
  if (heroSlideWrap) {
    const heroSlides = [...heroSlideWrap.querySelectorAll(".hero-slide")];

    // Fisher-Yates shuffle so every page load starts with a different order
    for (let i = heroSlides.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [heroSlides[i], heroSlides[j]] = [heroSlides[j], heroSlides[i]];
    }

    heroSlides.forEach((slide, idx) => {
      heroSlideWrap.appendChild(slide);
      slide.classList.toggle("is-active", idx === 0);
    });

    if (heroSlides.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let active = 0;
    window.setInterval(() => {
      heroSlides[active].classList.remove("is-active");
      active = (active + 1) % heroSlides.length;
      heroSlides[active].classList.add("is-active");
    }, 3800);
    }
  }

  /* ----------------------------------------------------------
     5. FAQ accordion — close siblings on open
     ---------------------------------------------------------- */
  const faqDetails = document.querySelectorAll(".faq details");
  faqDetails.forEach((d) => {
    d.addEventListener("toggle", () => {
      if (d.open) {
        faqDetails.forEach((other) => {
          if (other !== d) other.removeAttribute("open");
        });
      }
    });
  });

  /* ----------------------------------------------------------
     6. Parallax float on all images (desktop only)
     ---------------------------------------------------------- */
  const heroParallaxEls = document.querySelectorAll(
    ".hero-float.f1, .hero-float.f2, .hero-float.f3, .hero-profile"
  );
  const imageParallaxEls = document.querySelectorAll(
    ".leaf-image, .hero-f1-slideshow"
  );

  if (
    (heroParallaxEls.length || imageParallaxEls.length)
    && window.matchMedia("(pointer:fine)").matches
    && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    document.addEventListener("pointermove", (e) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;

      heroParallaxEls.forEach((el, i) => {
        const depth = (i + 1) * 6;
        el.style.translate = `${cx * depth}px ${cy * depth}px`;
      });

      imageParallaxEls.forEach((el, i) => {
        const depth = 1.8 + (i % 4) * 0.8;
        el.style.translate = `${cx * depth}px ${cy * depth}px`;
      });
    });
  }

  /* ----------------------------------------------------------
     7. Counter badge animation on story cards
     ---------------------------------------------------------- */
  const counters = document.querySelectorAll(".story-grid article .counter");
  const counterObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("pop");
          counterObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => counterObs.observe(c));

  /* ----------------------------------------------------------
     8. Smooth-scroll anchor links (offset for sticky header)
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id === "#" || id === "#top") return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const headerH = document.querySelector(".site-header")?.offsetHeight || 0;
        const y = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });
})();
