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

  const getBreakpointFromProfile = (profile) => {
    if (profile === "mobile" || profile === "tablet" || profile === "desktop") {
      return profile;
    }

    const match = String(profile || "").match(/^w(\d{3,4})$/);
    const width = Number.parseInt(match?.[1] || "", 10);
    if (Number.isFinite(width)) {
      if (width <= 640) return "mobile";
      if (width <= 960) return "tablet";
      return "desktop";
    }

    return getViewportBreakpoint();
  };

  const getActiveViewportProfile = () => {
    if (liveEditorViewport === "auto") {
      return getViewportBreakpoint();
    }

    const match = String(liveEditorViewport).match(/^w(\d{3,4})$/);
    if (match) {
      const width = Number.parseInt(match[1], 10);
      if (Number.isFinite(width)) {
        return `w${width}`;
      }
    }

    return liveEditorViewport;
  };

  const getActiveBreakpoint = () => getBreakpointFromProfile(getActiveViewportProfile());

  const getActiveLayoutProfiles = () => {
    const profile = getActiveViewportProfile();
    const bp = getBreakpointFromProfile(profile);
    if (profile === bp) return [bp];
    return [profile, bp];
  };

  const readStyleOverrideForActiveProfiles = (base) => {
    const profiles = getActiveLayoutProfiles();
    for (const profile of profiles) {
      const key = `${base}.${profile}`;
      const value = getTextOverride(key, "en") || getTextOverride(key, "all");
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
    }
    return "";
  };

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
    const profiles = getActiveLayoutProfiles();

    const readOverrideForProfiles = (base) => {
      for (const profile of profiles) {
        const key = `${base}.${profile}`;
        const value = getTextOverride(key, "en") || getTextOverride(key, "all");
        if (typeof value === "string" && value.trim()) {
          return value.trim();
        }
      }
      return "";
    };

    document.querySelectorAll("[data-i18n], [data-i18n-placeholder], [data-image-key], [data-icon-key], [data-layout-key]").forEach((el) => {
      if (!(el instanceof HTMLElement)) return;

      const key = el.getAttribute("data-i18n")
        || el.getAttribute("data-i18n-placeholder")
        || el.getAttribute("data-image-key")
        || el.getAttribute("data-icon-key")
        || el.getAttribute("data-layout-key");
      if (!key) return;

      const translate = readOverrideForProfiles(`layout.${key}.translate`);
      const hidden = readOverrideForProfiles(`layout.${key}.hidden`) || "0";
      const fontFamily = readOverrideForProfiles(`style.${key}.fontFamily`);
      const fontSize = readOverrideForProfiles(`style.${key}.fontSize`);
      const minHeight = readOverrideForProfiles(`style.${key}.minHeight`);

      el.style.transform = "";
      el.style.display = "";
      el.style.fontFamily = "";
      el.style.fontSize = "";
      el.style.minHeight = "";

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

      if (fontFamily) {
        el.style.fontFamily = fontFamily;
      }

      if (fontSize) {
        const raw = fontSize.trim();
        const parsed = Number.parseFloat(raw);
        el.style.fontSize = Number.isFinite(parsed) && /^\d+(\.\d+)?$/.test(raw)
          ? `${parsed}px`
          : raw;
      }

      if (minHeight) {
        const raw = minHeight.trim();
        const parsed = Number.parseFloat(raw);
        el.style.minHeight = Number.isFinite(parsed) && /^\d+(\.\d+)?$/.test(raw)
          ? `${parsed}px`
          : raw;
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
  const LIVE_EDITOR_HUD_VISIBLE_KEY = "nutristika-live-editor-hud-visible";
  const LIVE_EDITOR_DOCK_KEY = "nutristika-live-editor-dock";
  const LIVE_EDITOR_COMPACT_KEY = "nutristika-live-editor-compact";
  const LIVE_EDITOR_COLLAPSED_KEY = "nutristika-live-editor-collapsed";
  const LIVE_EDITOR_PANEL_OPACITY_KEY = "nutristika-live-editor-panel-opacity";
  const LIVE_EDITOR_BEGINNER_KEY = "nutristika-live-editor-beginner";
  const LIVE_EDITOR_COMMAND_RECENT_KEY = "nutristika-live-editor-command-recent";
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

  const findElementByLayoutKey = (layoutKey) => {
    if (!layoutKey) return null;
    const matches = document.querySelectorAll("[data-layout-key]");
    for (const node of matches) {
      if (!(node instanceof HTMLElement)) continue;
      if ((node.getAttribute("data-layout-key") || "") === layoutKey) {
        return node;
      }
    }
    return null;
  };

  const getNodeIdentityKey = (node) => {
    if (!(node instanceof HTMLElement)) return "";

    const layoutKey = node.getAttribute("data-layout-key");
    if (layoutKey) return `layout:${layoutKey}`;

    const i18nKey = node.getAttribute("data-i18n");
    if (i18nKey) return `i18n:${i18nKey}`;

    const placeholderKey = node.getAttribute("data-i18n-placeholder");
    if (placeholderKey) return `placeholder:${placeholderKey}`;

    const imageKey = node.getAttribute("data-image-key");
    if (imageKey) return `image:${imageKey}`;

    const iconKey = node.getAttribute("data-icon-key");
    if (iconKey) return `icon:${iconKey}`;

    return "";
  };

  const parseOrderListValue = (rawValue) => {
    if (typeof rawValue !== "string" || !rawValue.trim()) return [];
    try {
      const parsed = JSON.parse(rawValue);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .map((item) => (typeof item === "string" ? item.trim() : ""))
        .filter(Boolean);
    } catch {
      return [];
    }
  };

  const applyStoredParentOrders = () => {
    const byKey = siteContentOverrides?.textByKey || {};
    const orderKeys = Object.keys(byKey).filter((key) => key.startsWith("order.parent."));

    orderKeys.forEach((orderKey) => {
      const parentKey = orderKey.slice("order.parent.".length);
      if (!parentKey) return;

      const parent = findElementByLayoutKey(parentKey);
      if (!(parent instanceof HTMLElement)) return;

      const rawOrder = getTextOverride(orderKey, "all") || "";
      const orderList = parseOrderListValue(rawOrder);
      if (!orderList.length) return;

      const identityToNode = new Map();
      [...parent.children].forEach((child) => {
        if (!(child instanceof HTMLElement)) return;
        const identity = getNodeIdentityKey(child);
        if (!identity || identityToNode.has(identity)) return;
        identityToNode.set(identity, child);
      });

      orderList.forEach((identity) => {
        const node = identityToNode.get(identity);
        if (!(node instanceof HTMLElement)) return;
        parent.appendChild(node);
      });
    });
  };

  const rerenderLiveState = () => {
    applyImageOverrides();
    applyStoredDuplicateNodes();
    applyStoredParentOrders();
    applyLanguage(getActiveLang());
    wireLiveEditableNodes();
    renderLiveSectionsNavigator();
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

  const persistParentChildOrder = async (parent) => {
    if (!(parent instanceof HTMLElement)) return false;
    const parentKey = parent.getAttribute("data-layout-key") || "";
    if (!parentKey) return false;

    const orderList = [...parent.children]
      .map((child) => getNodeIdentityKey(child))
      .filter(Boolean);

    if (orderList.length < 2) return false;

    const orderKey = `order.parent.${parentKey}`;
    const encoded = JSON.stringify(orderList);
    const save = await saveLiveOverride({ key: orderKey, value: encoded, type: "text", language: "all" });
    if (!save.ok) return false;

    if (!siteContentOverrides.textByKey[orderKey]) {
      siteContentOverrides.textByKey[orderKey] = {};
    }
    siteContentOverrides.textByKey[orderKey].all = encoded;
    return true;
  };

  const applyStoredDuplicateNodes = () => {
    if (typeof ensureLayoutKeys === "function") {
      ensureLayoutKeys();
    }

    const byKey = siteContentOverrides?.textByKey || {};
    const duplicateIds = Object.keys(byKey)
      .map((key) => (key.match(/^dup\.node\.([^.]+)\.html$/) || [])[1] || "")
      .filter(Boolean);

    duplicateIds.forEach((dupId) => {
      if (document.querySelector(`[data-dup-id="${dupId}"]`)) return;

      const html = getTextOverride(`dup.node.${dupId}.html`, "all") || "";
      const parentKey = getTextOverride(`dup.node.${dupId}.parent`, "all") || "";
      const afterKey = getTextOverride(`dup.node.${dupId}.after`, "all") || "";
      const place = getTextOverride(`dup.node.${dupId}.place`, "all") || "";
      if (!html || !parentKey) return;

      const parent = document.querySelector(`[data-layout-key="${parentKey}"]`);
      if (!(parent instanceof HTMLElement)) return;

      const fragment = document.createElement("div");
      fragment.innerHTML = html;
      const node = fragment.firstElementChild;
      if (!(node instanceof HTMLElement)) return;

      node.setAttribute("data-dup-id", dupId);
      if (!node.hasAttribute("data-layout-key")) {
        node.setAttribute("data-layout-key", `layout.dup.${dupId}`);
      }
      node.removeAttribute("data-live-selected");
      node.removeAttribute("data-dragging");

      const afterNode = afterKey
        ? parent.querySelector(`[data-layout-key="${afterKey}"]`)
        : null;

      if (place === "start") {
        parent.insertBefore(node, parent.firstElementChild);
      } else if (afterNode instanceof HTMLElement && afterNode.parentElement === parent) {
        parent.insertBefore(node, afterNode.nextSibling);
      } else {
        parent.appendChild(node);
      }
    });
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
  const liveActionHistory = [];
  let liveActionHistorySeq = 0;
  let liveActionHistoryFilter = "all";

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

  const operationToLocalValue = (operation) => (operation.kind === "save" ? operation.payload.value : null);

  const formatOperationLabel = (operation) => {
    const kind = operation.kind === "save" ? "Saved" : "Deleted";
    const key = operation.payload?.key || "(unknown key)";
    const type = operation.payload?.type || "text";

    if (/^layout\..+\.translate\.(desktop|tablet|mobile|w\d{3,4})$/.test(key)) {
      return `${kind} position · ${key}`;
    }

    if (/^layout\..+\.hidden\.(desktop|tablet|mobile|w\d{3,4})$/.test(key)) {
      return `${kind} visibility · ${key}`;
    }

    return `${kind} ${type} · ${key}`;
  };

  const getOperationCategory = (operation) => {
    const key = operation.payload?.key || "";

    if (/^layout\..+\.translate\.(desktop|tablet|mobile|w\d{3,4})$/.test(key)) {
      return "position";
    }

    if (/^layout\..+\.hidden\.(desktop|tablet|mobile|w\d{3,4})$/.test(key)) {
      return "visibility";
    }

    return "content";
  };

  const updateHistoryFilterButtons = () => {
    liveEditorRoot.querySelectorAll("[data-history-filter]").forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      const value = button.getAttribute("data-history-filter") || "all";
      const active = value === liveActionHistoryFilter;
      button.setAttribute("data-active", String(active));
      button.setAttribute("aria-pressed", String(active));
    });
  };

  const renderLiveActionHistory = () => {
    const list = liveEditorRoot.querySelector(".live-editor-history__list");
    const clearButton = liveEditorRoot.querySelector('[data-history-action="clear-reverted"]');
    if (!(list instanceof HTMLElement)) return;

    list.innerHTML = "";

    const filtered = liveActionHistoryFilter === "all"
      ? liveActionHistory
      : liveActionHistory.filter((entry) => entry.category === liveActionHistoryFilter);

    if (clearButton instanceof HTMLButtonElement) {
      clearButton.disabled = !liveActionHistory.some((entry) => entry.reverted);
    }

    if (!filtered.length) {
      const empty = document.createElement("li");
      empty.className = "live-editor-history__item is-empty";
      empty.textContent = liveActionHistory.length
        ? "No matching actions for this filter."
        : "No actions yet.";
      list.appendChild(empty);
      updateHistoryFilterButtons();
      return;
    }

    [...filtered].reverse().forEach((entry) => {
      const item = document.createElement("li");
      item.className = "live-editor-history__item";

      const label = document.createElement("span");
      label.className = "live-editor-history__label";
      label.textContent = entry.label;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "live-editor-history__revert";
      button.setAttribute("data-history-action", "revert");
      button.setAttribute("data-history-id", String(entry.id));
      button.textContent = entry.reverted ? "Reverted" : "Revert";
      button.disabled = Boolean(entry.reverted);

      item.appendChild(label);
      item.appendChild(button);
      list.appendChild(item);
    });

    updateHistoryFilterButtons();
  };

  const addLiveActionHistoryEntry = (operation, inverseOperation) => {
    liveActionHistory.push({
      id: ++liveActionHistorySeq,
      label: formatOperationLabel(operation),
      category: getOperationCategory(operation),
      inverseOperation,
      reverted: false
    });

    while (liveActionHistory.length > 10) {
      liveActionHistory.shift();
    }

    renderLiveActionHistory();
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

      const inverse = buildInverseOperation(operation);
      undoStack.push(inverse);
      if (undoStack.length > 60) undoStack.shift();
      addLiveActionHistoryEntry(operation, inverse);
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
    <div class="live-editor-rail" data-live-rail>
      <button type="button" class="key-inspector__toggle" data-live-action="toggle-collapse" data-live-search-pin="true" data-tooltip="Collapse editor" aria-label="Collapse editor">◀</button>
      <button type="button" class="key-inspector__toggle" data-live-action="save-now" data-live-search-pin="true" data-tooltip="Save changes" aria-label="Save changes">💾</button>
      <button type="button" class="key-inspector__toggle" data-live-action="undo" data-live-search-pin="true" data-tooltip="Undo last action" aria-label="Undo last action">↶</button>
    </div>
    <p class="key-inspector__hint"><strong>Live Editor</strong> — click text/image to edit instantly.</p>
    <div class="live-editor-actions">
      <button type="button" class="key-inspector__toggle" data-live-action="toggle-beginner" data-active="true">Ease mode: On</button>
    </div>
    <label class="key-inspector__hint" for="live-action-search">Quick action search</label>
    <input id="live-action-search" type="search" placeholder="Type: font, section, hide, duplicate..." />
    <p class="key-inspector__hint" data-live-action-search-hint>Canva-like tip: search an action, then click once.</p>
    <div class="live-sections-navigator" data-live-sections-nav>
      <div class="live-sections-navigator__head">
        <p class="live-sections-navigator__title">Sections</p>
        <p class="live-sections-navigator__hint">Click to jump · Drag to reorder</p>
      </div>
      <div class="live-sections-navigator__batch" data-live-sections-batch>
        <p class="live-sections-navigator__count" data-live-sections-count>0 selected</p>
        <div class="live-sections-navigator__batch-actions">
          <button type="button" class="live-sections-navigator__batch-btn" data-live-sections-batch-action="show">Show</button>
          <button type="button" class="live-sections-navigator__batch-btn" data-live-sections-batch-action="hide">Hide</button>
          <button type="button" class="live-sections-navigator__batch-btn danger" data-live-sections-batch-action="remove">Remove</button>
        </div>
      </div>
      <ul class="live-sections-navigator__list" data-live-sections-list></ul>
    </div>
    <div class="live-editor-actions">
      <button type="button" class="key-inspector__toggle" data-live-action="viewport" data-viewport="desktop">Desktop</button>
      <button type="button" class="key-inspector__toggle" data-live-action="viewport" data-viewport="tablet">Tablet</button>
      <button type="button" class="key-inspector__toggle" data-live-action="viewport" data-viewport="mobile">Mobile</button>
      <button type="button" class="key-inspector__toggle" data-live-action="toggle-grid" data-live-advanced="true">Grid: Off</button>
      <button type="button" class="key-inspector__toggle" data-live-action="toggle-snap" data-active="false" data-live-advanced="true">Snap: Off</button>
      <button type="button" class="key-inspector__toggle" data-live-action="toggle-magnetic" data-active="false" data-live-advanced="true">Guides: Off</button>
    </div>
    <div class="live-editor-actions live-editor-actions--snap-sizes" data-live-advanced="true">
      <button type="button" class="key-inspector__toggle" data-live-action="snap-size" data-size="4">Snap 4</button>
      <button type="button" class="key-inspector__toggle" data-live-action="snap-size" data-size="8">Snap 8</button>
      <button type="button" class="key-inspector__toggle" data-live-action="snap-size" data-size="12">Snap 12</button>
      <button type="button" class="key-inspector__toggle" data-live-action="snap-size" data-size="24">Snap 24</button>
    </div>
    <div class="live-editor-actions">
      <button type="button" class="key-inspector__toggle" data-live-action="toggle-canvas" data-active="false">Canvas mode: Off</button>
    </div>
    <div class="live-editor-actions live-editor-actions--zoom">
      <button type="button" class="key-inspector__toggle" data-live-action="canvas-zoom" data-zoom="0.75">75%</button>
      <button type="button" class="key-inspector__toggle" data-live-action="canvas-zoom" data-zoom="0.9">90%</button>
      <button type="button" class="key-inspector__toggle" data-live-action="canvas-zoom" data-zoom="1">100%</button>
      <button type="button" class="key-inspector__toggle" data-live-action="canvas-zoom" data-zoom="fit">Fit</button>
    </div>
    <label class="key-inspector__hint" for="live-canvas-zoom-range">Canvas zoom slider</label>
    <input id="live-canvas-zoom-range" type="range" min="55" max="100" step="5" value="100" />
    <p class="key-inspector__hint" data-live-canvas-zoom-label>Canvas zoom: 100% · ⌘/Ctrl +/-/0</p>
    <div class="live-editor-minimap" data-live-minimap data-live-advanced="true">
      <div class="live-editor-minimap__head">
        <p class="live-editor-minimap__title">Minimap</p>
        <p class="live-editor-minimap__meta" data-live-minimap-meta>Canvas pan</p>
      </div>
      <div class="live-editor-minimap__stage" data-live-minimap-stage>
        <div class="live-editor-minimap__doc" data-live-minimap-doc></div>
        <div class="live-editor-minimap__viewport" data-live-minimap-viewport></div>
      </div>
    </div>
    <label class="key-inspector__hint" for="live-resolution-width">Screen resolution</label>
    <input id="live-resolution-width" type="range" min="320" max="1920" step="8" value="1280" />
    <p class="key-inspector__hint" data-live-resolution-label>Screen: auto</p>
    <div class="live-editor-actions">
      <button type="button" class="key-inspector__toggle" data-live-action="set-dock" data-dock="right">Panel: Right</button>
      <button type="button" class="key-inspector__toggle" data-live-action="set-dock" data-dock="left">Panel: Left</button>
      <button type="button" class="key-inspector__toggle" data-live-action="set-dock" data-dock="bottom">Panel: Bottom</button>
      <button type="button" class="key-inspector__toggle" data-live-action="toggle-compact" data-active="false">Minimal panel: Off</button>
      <button type="button" class="key-inspector__toggle" data-live-action="toggle-hud" data-active="true">Coords popup: On</button>
    </div>
    <label class="key-inspector__hint" for="live-panel-opacity">Panel transparency</label>
    <input id="live-panel-opacity" type="range" min="55" max="100" step="1" value="95" />
    <p class="key-inspector__hint" data-live-panel-opacity-label>Panel opacity: 95%</p>
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
      <button type="button" class="key-inspector__toggle" data-live-action="duplicate-selected">Duplicate selected</button>
      <button type="button" class="key-inspector__toggle" data-live-action="remove-selected">Remove selected</button>
      <button type="button" class="key-inspector__toggle" data-live-action="restore-selected">Restore selected</button>
    </div>
    <label class="key-inspector__hint" for="live-font-family">Font style (selected)</label>
    <select id="live-font-family">
      <option value="">Default</option>
      <option value='"Space Grotesk", system-ui, sans-serif'>Space Grotesk</option>
      <option value='"Bricolage Grotesque", system-ui, sans-serif'>Bricolage Grotesque</option>
      <option value='"Inter", system-ui, sans-serif'>Inter</option>
      <option value='"Manrope", system-ui, sans-serif'>Manrope</option>
      <option value='"Poppins", system-ui, sans-serif'>Poppins</option>
      <option value='"DM Sans", system-ui, sans-serif'>DM Sans</option>
      <option value='"Plus Jakarta Sans", system-ui, sans-serif'>Plus Jakarta Sans</option>
      <option value='"Allura", cursive'>Allura</option>
      <option value='"Playfair Display", Georgia, serif'>Playfair Display</option>
      <option value='"Merriweather", Georgia, serif'>Merriweather</option>
      <option value='Georgia, "Times New Roman", serif'>Serif</option>
      <option value="Arial, Helvetica, sans-serif">Arial</option>
      <option value='"Courier Prime", "Courier New", monospace'>Courier Prime</option>
    </select>
    <label class="key-inspector__hint" for="live-font-size">Font size (selected)</label>
    <input id="live-font-size" type="range" min="10" max="120" step="1" value="16" />
    <p class="key-inspector__hint" data-live-font-size-label>Font size: default</p>
    <label class="key-inspector__hint" for="live-slider-width">Hero slider width</label>
    <input id="live-slider-width" type="range" min="260" max="980" step="10" value="620" />
    <p class="key-inspector__status" role="status" aria-live="polite">Live editor idle</p>
    <div class="live-element-editor" data-live-element-editor>
      <p class="live-element-editor__title">Element editor</p>
      <p class="live-element-editor__meta" data-live-element-key>No element selected</p>
      <p class="live-element-editor__meta" data-live-element-type>Select an element to edit it directly.</p>
      <div class="live-element-editor__section" data-live-element-section="text">
        <label class="key-inspector__hint" for="live-element-text">Text content</label>
        <textarea id="live-element-text" rows="3" placeholder="Edit selected text..."></textarea>
        <div class="live-editor-actions">
          <button type="button" class="key-inspector__toggle" data-live-element-action="save-text">Save text</button>
        </div>
      </div>
      <div class="live-element-editor__section" data-live-element-section="image">
        <label class="key-inspector__hint" for="live-element-image-url">Image URL</label>
        <input id="live-element-image-url" type="url" placeholder="https://..." />
        <div class="live-editor-actions">
          <button type="button" class="key-inspector__toggle" data-live-element-action="save-image-url">Save image URL</button>
          <button type="button" class="key-inspector__toggle" data-live-element-action="upload-image">Upload + optimize</button>
        </div>
      </div>
      <div class="live-element-editor__section" data-live-element-section="section">
        <p class="key-inspector__hint">Section tools</p>
        <div class="live-section-template-grid" role="group" aria-label="Section template picker">
          <button type="button" class="live-section-template-btn" data-live-section-template="blank">
            <span class="live-section-template-btn__icon live-section-template-btn__icon--blank" aria-hidden="true"></span>
            <span class="live-section-template-btn__label">Blank</span>
          </button>
          <button type="button" class="live-section-template-btn" data-live-section-template="story">
            <span class="live-section-template-btn__icon live-section-template-btn__icon--story" aria-hidden="true"></span>
            <span class="live-section-template-btn__label">Story</span>
          </button>
          <button type="button" class="live-section-template-btn" data-live-section-template="cta">
            <span class="live-section-template-btn__icon live-section-template-btn__icon--cta" aria-hidden="true"></span>
            <span class="live-section-template-btn__label">CTA</span>
          </button>
          <button type="button" class="live-section-template-btn" data-live-section-template="faq">
            <span class="live-section-template-btn__icon live-section-template-btn__icon--faq" aria-hidden="true"></span>
            <span class="live-section-template-btn__label">FAQ</span>
          </button>
          <button type="button" class="live-section-template-btn" data-live-section-template="quote">
            <span class="live-section-template-btn__icon live-section-template-btn__icon--quote" aria-hidden="true"></span>
            <span class="live-section-template-btn__label">Quote</span>
          </button>
          <button type="button" class="live-section-template-btn" data-live-section-template="duplicate">
            <span class="live-section-template-btn__icon live-section-template-btn__icon--duplicate" aria-hidden="true"></span>
            <span class="live-section-template-btn__label">Duplicate</span>
          </button>
        </div>
        <label class="key-inspector__hint" for="live-section-template">New section type</label>
        <select id="live-section-template">
          <option value="blank">Blank section</option>
          <option value="story">Story section</option>
          <option value="cta">CTA section</option>
          <option value="faq">FAQ section</option>
          <option value="quote">Quote section</option>
          <option value="duplicate">Duplicate selected section</option>
        </select>
        <div class="live-editor-actions">
          <button type="button" class="key-inspector__toggle" data-live-element-action="add-section-above">+ Section above</button>
          <button type="button" class="key-inspector__toggle" data-live-element-action="add-section-below">+ Section below</button>
          <button type="button" class="key-inspector__toggle" data-live-element-action="remove-section">− Remove section</button>
        </div>
        <label class="key-inspector__hint" for="live-section-height">Section min height</label>
        <input id="live-section-height" type="range" min="160" max="1400" step="10" value="480" />
        <p class="key-inspector__hint" data-live-section-height-label>Section min height: auto</p>
      </div>
      <p class="key-inspector__hint">Move element</p>
      <div class="live-editor-actions live-editor-actions--move">
        <button type="button" class="key-inspector__toggle" data-live-element-action="move-up">↑ Up</button>
        <button type="button" class="key-inspector__toggle" data-live-element-action="move-down">↓ Down</button>
        <button type="button" class="key-inspector__toggle" data-live-element-action="move-top">⇤ Top</button>
        <button type="button" class="key-inspector__toggle" data-live-element-action="move-bottom">⇥ Bottom</button>
        <button type="button" class="key-inspector__toggle" data-live-element-action="move-left">← Left</button>
        <button type="button" class="key-inspector__toggle" data-live-element-action="move-right">→ Right</button>
      </div>
      <div class="live-editor-actions">
        <button type="button" class="key-inspector__toggle" data-live-element-action="normalize-spacing">Normalize spacing</button>
        <button type="button" class="key-inspector__toggle" data-live-element-action="toggle-visibility">Hide</button>
        <button type="button" class="key-inspector__toggle" data-live-element-action="duplicate">Duplicate</button>
        <button type="button" class="key-inspector__toggle" data-live-element-action="remove">Remove</button>
      </div>
    </div>
    <div class="live-editor-history" data-live-advanced="true">
      <div class="live-editor-history__head">
        <p class="live-editor-history__title">Recent actions</p>
        <button type="button" class="live-editor-history__clear" data-history-action="clear-reverted">Clear reverted</button>
      </div>
      <div class="live-editor-history__filters" role="group" aria-label="History filters">
        <button type="button" class="live-editor-history__filter" data-history-filter="all" aria-pressed="true">All</button>
        <button type="button" class="live-editor-history__filter" data-history-filter="position" aria-pressed="false">Position</button>
        <button type="button" class="live-editor-history__filter" data-history-filter="visibility" aria-pressed="false">Visibility</button>
        <button type="button" class="live-editor-history__filter" data-history-filter="content" aria-pressed="false">Content</button>
      </div>
      <ul class="live-editor-history__list"></ul>
    </div>
  `;

  const liveEditorStatus = liveEditorRoot.querySelector(".key-inspector__status");
  const liveWidthInput = liveEditorRoot.querySelector("#live-slider-width");
  const liveResolutionInput = liveEditorRoot.querySelector("#live-resolution-width");
  const liveResolutionLabel = liveEditorRoot.querySelector("[data-live-resolution-label]");
  const liveFontFamilyInput = liveEditorRoot.querySelector("#live-font-family");
  const liveFontSizeInput = liveEditorRoot.querySelector("#live-font-size");
  const liveFontSizeLabel = liveEditorRoot.querySelector("[data-live-font-size-label]");
  const liveCanvasZoomInput = liveEditorRoot.querySelector("#live-canvas-zoom-range");
  const liveCanvasZoomLabel = liveEditorRoot.querySelector("[data-live-canvas-zoom-label]");
  const liveActionSearchInput = liveEditorRoot.querySelector("#live-action-search");
  const liveActionSearchHint = liveEditorRoot.querySelector("[data-live-action-search-hint]");
  const liveSectionsNavigatorRoot = liveEditorRoot.querySelector("[data-live-sections-nav]");
  const liveSectionsNavigatorBatch = liveEditorRoot.querySelector("[data-live-sections-batch]");
  const liveSectionsNavigatorCount = liveEditorRoot.querySelector("[data-live-sections-count]");
  const liveSectionsNavigatorList = liveEditorRoot.querySelector("[data-live-sections-list]");
  const liveMinimapRoot = liveEditorRoot.querySelector("[data-live-minimap]");
  const liveMinimapStage = liveEditorRoot.querySelector("[data-live-minimap-stage]");
  const liveMinimapDoc = liveEditorRoot.querySelector("[data-live-minimap-doc]");
  const liveMinimapViewport = liveEditorRoot.querySelector("[data-live-minimap-viewport]");
  const liveMinimapMeta = liveEditorRoot.querySelector("[data-live-minimap-meta]");
  const livePanelOpacityInput = liveEditorRoot.querySelector("#live-panel-opacity");
  const livePanelOpacityLabel = liveEditorRoot.querySelector("[data-live-panel-opacity-label]");
  const liveElementEditorRoot = liveEditorRoot.querySelector("[data-live-element-editor]");
  const liveElementEditorKey = liveEditorRoot.querySelector("[data-live-element-key]");
  const liveElementEditorType = liveEditorRoot.querySelector("[data-live-element-type]");
  const liveElementTextInput = liveEditorRoot.querySelector("#live-element-text");
  const liveElementImageUrlInput = liveEditorRoot.querySelector("#live-element-image-url");
  const liveSectionTemplateSelect = liveEditorRoot.querySelector("#live-section-template");
  const liveSectionTemplateButtons = [...liveEditorRoot.querySelectorAll("[data-live-section-template]")]
    .filter((button) => button instanceof HTMLButtonElement);
  const liveSectionHeightInput = liveEditorRoot.querySelector("#live-section-height");
  const liveSectionHeightLabel = liveEditorRoot.querySelector("[data-live-section-height-label]");
  const liveEditorHud = document.createElement("div");
  liveEditorHud.className = "live-editor-hud";
  liveEditorHud.innerHTML = `
    <p class="live-editor-hud__key">No selection</p>
    <p class="live-editor-hud__coords">x: 0 · y: 0</p>
    <div class="live-editor-hud__actions">
      <button type="button" class="live-editor-hud__copy" data-live-hud-action="copy-coords">Copy coords</button>
      <button type="button" class="live-editor-hud__reset" data-live-hud-action="reset-coords">Reset 0,0</button>
      <button type="button" class="live-editor-hud__visibility" data-live-hud-action="reset-visibility">Reset visibility</button>
    </div>
  `;

  const liveEditorHudKey = liveEditorHud.querySelector(".live-editor-hud__key");
  const liveEditorHudCoords = liveEditorHud.querySelector(".live-editor-hud__coords");
  const liveEditorHudCopyButton = liveEditorHud.querySelector('[data-live-hud-action="copy-coords"]');
  const liveEditorHudResetButton = liveEditorHud.querySelector('[data-live-hud-action="reset-coords"]');
  const liveEditorHudVisibilityButton = liveEditorHud.querySelector('[data-live-hud-action="reset-visibility"]');
  const liveEditorQuickbar = document.createElement("div");
  liveEditorQuickbar.className = "live-editor-quickbar";
  liveEditorQuickbar.innerHTML = `
    <button type="button" class="live-editor-quickbar__btn" data-live-quick-action="edit">Edit</button>
    <button type="button" class="live-editor-quickbar__btn" data-live-quick-action="duplicate">Duplicate</button>
    <button type="button" class="live-editor-quickbar__btn" data-live-quick-action="toggle-visibility">Hide</button>
    <button type="button" class="live-editor-quickbar__btn danger" data-live-quick-action="remove">Remove</button>
    <button type="button" class="live-editor-quickbar__btn" data-live-quick-action="reset-pos">Reset position</button>
  `;
  const liveEditorQuickbarVisibilityButton = liveEditorQuickbar.querySelector('[data-live-quick-action="toggle-visibility"]');
  const liveEditorSelectionOverlay = document.createElement("div");
  liveEditorSelectionOverlay.className = "live-editor-selection-overlay";
  liveEditorSelectionOverlay.innerHTML = `
    <span class="live-editor-selection-overlay__handle tl" aria-hidden="true"></span>
    <span class="live-editor-selection-overlay__handle tr" aria-hidden="true"></span>
    <span class="live-editor-selection-overlay__handle bl" aria-hidden="true"></span>
    <span class="live-editor-selection-overlay__handle br" aria-hidden="true"></span>
    <span class="live-editor-selection-overlay__size" aria-hidden="true">0 × 0</span>
  `;
  const liveEditorSelectionOverlaySize = liveEditorSelectionOverlay.querySelector(".live-editor-selection-overlay__size");
  const liveEditorGuideVertical = document.createElement("div");
  liveEditorGuideVertical.className = "live-editor-guide live-editor-guide--vertical";
  const liveEditorGuideHorizontal = document.createElement("div");
  liveEditorGuideHorizontal.className = "live-editor-guide live-editor-guide--horizontal";
  const liveEditorSpacingHorizontal = document.createElement("div");
  liveEditorSpacingHorizontal.className = "live-editor-spacing live-editor-spacing--horizontal";
  liveEditorSpacingHorizontal.innerHTML = "<span class=\"live-editor-spacing__label\"></span>";
  const liveEditorSpacingHorizontalLabel = liveEditorSpacingHorizontal.querySelector(".live-editor-spacing__label");
  const liveEditorSpacingVertical = document.createElement("div");
  liveEditorSpacingVertical.className = "live-editor-spacing live-editor-spacing--vertical";
  liveEditorSpacingVertical.innerHTML = "<span class=\"live-editor-spacing__label\"></span>";
  const liveEditorSpacingVerticalLabel = liveEditorSpacingVertical.querySelector(".live-editor-spacing__label");
  const liveEditorContextMenu = document.createElement("div");
  liveEditorContextMenu.className = "live-editor-context-menu";
  liveEditorContextMenu.innerHTML = `
    <button type="button" class="live-editor-context-menu__item" data-live-context-action="edit">Edit</button>
    <button type="button" class="live-editor-context-menu__item" data-live-context-action="duplicate">Duplicate</button>
    <button type="button" class="live-editor-context-menu__item" data-live-context-action="toggle-visibility">Hide</button>
    <button type="button" class="live-editor-context-menu__item" data-live-context-action="reset-pos">Reset position</button>
    <button type="button" class="live-editor-context-menu__item danger" data-live-context-action="remove">Remove</button>
  `;
  const liveEditorCommandPalette = document.createElement("div");
  liveEditorCommandPalette.className = "live-editor-command";
  liveEditorCommandPalette.innerHTML = `
    <div class="live-editor-command__dialog" role="dialog" aria-modal="true" aria-label="Editor spotlight actions">
      <label class="live-editor-command__label" for="live-editor-command-input">Spotlight actions</label>
      <input id="live-editor-command-input" class="live-editor-command__input" type="search" placeholder="Type an action… (e.g. duplicate, section, snap)" autocomplete="off" />
      <ul class="live-editor-command__list" data-live-command-list></ul>
      <div class="live-editor-command__cheats" aria-hidden="true">
        <span class="live-editor-command__cheat"><kbd>Enter</kbd><span>Run</span></span>
        <span class="live-editor-command__cheat"><kbd>Tab</kbd><span>Complete</span></span>
        <span class="live-editor-command__cheat"><kbd>↑</kbd><kbd>↓</kbd><span>Navigate</span></span>
        <span class="live-editor-command__cheat"><kbd>Esc</kbd><span>Close</span></span>
      </div>
      <p class="live-editor-command__hint">Tip: start typing and press Tab to complete the top command.</p>
    </div>
  `;
  const liveEditorCommandInput = liveEditorCommandPalette.querySelector("#live-editor-command-input");
  const liveEditorCommandList = liveEditorCommandPalette.querySelector("[data-live-command-list]");
  const liveEditorContextMenuVisibilityButton = liveEditorContextMenu.querySelector('[data-live-context-action="toggle-visibility"]');
  let selectedHeroSlideKey = "";
  let selectedNodeKey = "";
  let selectedNode = null;
  let suppressLiveClickUntil = 0;
  let dragScopeMode = "child";
  let nudgeSaveTimer = null;
  let hudHideTimer = null;
  let duplicateCounter = 0;
  let liveSectionsNavigatorDragKey = "";
  let liveSectionsMultiSelectAnchorKey = "";
  const liveSectionsSelectedKeys = new Set();
  let liveCanvasMode = false;
  let liveCanvasZoom = 1;
  let liveCanvasZoomMode = "1";
  let liveSnapEnabled = true;
  let liveMagneticGuidesEnabled = true;
  let minimapPointerDown = false;
  let liveSnapGridSize = 8;
  let liveEditorHudEnabled = localStorage.getItem(LIVE_EDITOR_HUD_VISIBLE_KEY) !== "false";
  let liveEditorDock = ["right", "left", "bottom"].includes(localStorage.getItem(LIVE_EDITOR_DOCK_KEY) || "")
    ? (localStorage.getItem(LIVE_EDITOR_DOCK_KEY) || "left")
    : "left";
  let liveEditorCompact = localStorage.getItem(LIVE_EDITOR_COMPACT_KEY) !== "false";
  let liveEditorCollapsed = localStorage.getItem(LIVE_EDITOR_COLLAPSED_KEY) === "true";
  let liveEditorBeginner = localStorage.getItem(LIVE_EDITOR_BEGINNER_KEY) !== "false";
  let liveEditorCommandOpen = false;
  let liveEditorCommandActiveIndex = 0;
  let liveEditorCommandFilteredActions = [];
  let liveEditorCommandRecent = (() => {
    try {
      const raw = localStorage.getItem(LIVE_EDITOR_COMMAND_RECENT_KEY) || "";
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  })();
  let selectedNodeDetails = null;
  const savedPanelOpacityRaw = Number.parseInt(localStorage.getItem(LIVE_EDITOR_PANEL_OPACITY_KEY) || "95", 10);
  let liveEditorPanelOpacity = Number.isFinite(savedPanelOpacityRaw)
    ? Math.min(100, Math.max(55, savedPanelOpacityRaw))
    : 95;
  const liveMagneticThreshold = 10;

  const setLiveEditorStatus = (message, tone = "info") => {
    if (!liveEditorStatus) return;
    liveEditorStatus.textContent = message;
    liveEditorStatus.setAttribute("data-tone", tone);
  };

  const isSelectedNodeHiddenOnActiveProfile = () => {
    if (!selectedNodeKey) return false;
    const profile = getActiveViewportProfile();
    const hiddenKey = `layout.${selectedNodeKey}.hidden.${profile}`;
    return getTextOverride(hiddenKey, "all") === "1";
  };

  const updateLiveEditorQuickbarVisibilityLabel = () => {
    if (!(liveEditorQuickbarVisibilityButton instanceof HTMLButtonElement) || !selectedNodeKey) return;
    const isHidden = isSelectedNodeHiddenOnActiveProfile();
    liveEditorQuickbarVisibilityButton.textContent = isHidden ? "Show" : "Hide";
  };

  const updateLiveEditorContextMenuVisibilityLabel = () => {
    if (!(liveEditorContextMenuVisibilityButton instanceof HTMLButtonElement) || !selectedNodeKey) return;
    const isHidden = isSelectedNodeHiddenOnActiveProfile();
    liveEditorContextMenuVisibilityButton.textContent = isHidden ? "Show" : "Hide";
  };

  const hideLiveEditorContextMenu = () => {
    liveEditorContextMenu.classList.remove("is-visible");
  };

  const showLiveEditorContextMenu = (clientX, clientY) => {
    updateLiveEditorContextMenuVisibilityLabel();

    const maxX = Math.max(8, window.innerWidth - 220);
    const maxY = Math.max(8, window.innerHeight - 240);
    const left = Math.min(maxX, Math.max(8, Math.round(clientX)));
    const top = Math.min(maxY, Math.max(8, Math.round(clientY)));

    liveEditorContextMenu.style.left = `${left}px`;
    liveEditorContextMenu.style.top = `${top}px`;
    liveEditorContextMenu.classList.add("is-visible");
  };

  const updateLiveEditorQuickbarPosition = () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) {
      liveEditorQuickbar.classList.remove("is-visible");
      return;
    }

    updateLiveEditorQuickbarVisibilityLabel();

    const rect = selectedNode.getBoundingClientRect();
    const panelWidth = liveEditorRoot instanceof HTMLElement
      ? Math.round(liveEditorRoot.getBoundingClientRect().width)
      : 0;
    const minLeft = liveEditorDock === "left"
      ? Math.max(16, panelWidth + 16)
      : 16;
    const maxRight = liveEditorDock === "right"
      ? Math.max(minLeft, window.innerWidth - panelWidth - 16)
      : Math.max(minLeft, window.innerWidth - 16);

    let left = Math.round(rect.left + rect.width / 2);
    let top = Math.round(rect.top - 14);

    if (!Number.isFinite(left) || !Number.isFinite(top) || (rect.width <= 2 && rect.height <= 2)) {
      left = Math.max(26, maxRight - 160);
      top = 74;
    }

    const clampedLeft = Math.min(maxRight, Math.max(minLeft, left));
    const clampedTop = Math.min(window.innerHeight - 18, Math.max(56, top));

    liveEditorQuickbar.style.left = `${clampedLeft}px`;
    liveEditorQuickbar.style.top = `${clampedTop}px`;
    liveEditorQuickbar.classList.add("is-visible");
  };

  const updateLiveEditorSelectionOverlay = () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) {
      liveEditorSelectionOverlay.classList.remove("is-visible");
      return;
    }

    const rect = selectedNode.getBoundingClientRect();
    const visibleEnough = Number.isFinite(rect.width)
      && Number.isFinite(rect.height)
      && rect.width > 1
      && rect.height > 1;

    if (!visibleEnough || selectedNode.offsetParent === null) {
      liveEditorSelectionOverlay.classList.remove("is-visible");
      return;
    }

    liveEditorSelectionOverlay.style.left = `${Math.round(rect.left)}px`;
    liveEditorSelectionOverlay.style.top = `${Math.round(rect.top)}px`;
    liveEditorSelectionOverlay.style.width = `${Math.round(rect.width)}px`;
    liveEditorSelectionOverlay.style.height = `${Math.round(rect.height)}px`;
    liveEditorSelectionOverlay.classList.add("is-visible");

    if (liveEditorSelectionOverlaySize instanceof HTMLElement) {
      liveEditorSelectionOverlaySize.textContent = `${Math.round(rect.width)} × ${Math.round(rect.height)}`;
    }
  };

  const showLiveEditorHud = ({ key, x, y }) => {
    if (!liveEditorHudEnabled) return;

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

  const updateLiveHudToggleButton = () => {
    const button = liveEditorRoot.querySelector('[data-live-action="toggle-hud"]');
    if (!(button instanceof HTMLElement)) return;
    button.setAttribute("data-active", String(liveEditorHudEnabled));
    button.textContent = `Coords popup: ${liveEditorHudEnabled ? "On" : "Off"}`;
  };

  const applyLiveEditorPanelPlacement = () => {
    document.body.classList.remove("live-editor-dock-right", "live-editor-dock-left", "live-editor-dock-bottom");
    document.body.classList.add(`live-editor-dock-${liveEditorDock}`);
    document.body.classList.toggle("live-editor-panel-compact", liveEditorCompact);

    liveEditorRoot.querySelectorAll('[data-live-action="set-dock"]').forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      const dock = button.getAttribute("data-dock") || "";
      const isActive = dock === liveEditorDock;
      button.setAttribute("data-active", String(isActive));
      button.setAttribute("aria-pressed", String(isActive));
    });

    const compactButton = liveEditorRoot.querySelector('[data-live-action="toggle-compact"]');
    if (compactButton instanceof HTMLElement) {
      compactButton.setAttribute("data-active", String(liveEditorCompact));
      compactButton.textContent = `Minimal panel: ${liveEditorCompact ? "On" : "Off"}`;
    }
  };

  const applyLiveEditorBeginnerMode = () => {
    document.body.classList.toggle("live-editor-beginner", liveEditorBeginner);

    const button = liveEditorRoot.querySelector('[data-live-action="toggle-beginner"]');
    if (button instanceof HTMLElement) {
      button.setAttribute("data-active", String(liveEditorBeginner));
      button.textContent = `Ease mode: ${liveEditorBeginner ? "On" : "Off"}`;
    }

    if (liveActionSearchHint instanceof HTMLElement) {
      liveActionSearchHint.textContent = liveEditorBeginner
        ? "Canva-like tip: search an action, then click once. ⌘/Ctrl+E toggles panel, ⌘/Ctrl+S saves."
        : "Advanced mode: all controls visible. ⌘/Ctrl+E toggles panel, ⌘/Ctrl+S saves.";
    }
  };

  const applyLiveActionSearchFilter = (rawQuery) => {
    const query = String(rawQuery || "").trim().toLowerCase();
    const allButtons = [
      ...liveEditorRoot.querySelectorAll(".key-inspector__toggle"),
      ...liveEditorRoot.querySelectorAll(".live-section-template-btn"),
      ...liveEditorRoot.querySelectorAll(".live-editor-history__filter"),
      ...liveEditorRoot.querySelectorAll(".live-editor-history__clear")
    ].filter((node) => node instanceof HTMLElement);

    allButtons.forEach((button) => {
      if (button.getAttribute("data-live-search-pin") === "true") {
        button.classList.remove("is-filter-hidden");
        return;
      }
      const text = (button.textContent || "").toLowerCase();
      const action = (button.getAttribute("data-live-action") || "").toLowerCase();
      const elementAction = (button.getAttribute("data-live-element-action") || "").toLowerCase();
      const template = (button.getAttribute("data-live-section-template") || "").toLowerCase();
      const searchable = `${text} ${action} ${elementAction} ${template}`;
      const visible = !query || searchable.includes(query);
      button.classList.toggle("is-filter-hidden", !visible);
    });

    liveEditorRoot.querySelectorAll(".live-editor-actions, .live-section-template-grid").forEach((group) => {
      if (!(group instanceof HTMLElement)) return;
      const hasVisible = [...group.querySelectorAll(".key-inspector__toggle, .live-section-template-btn")]
        .some((node) => node instanceof HTMLElement && !node.classList.contains("is-filter-hidden"));
      group.classList.toggle("is-filter-hidden", !hasVisible && Boolean(query));
    });
  };

  const getLiveSearchCandidateButtons = () => {
    const selectors = [
      ".key-inspector__toggle",
      ".live-section-template-btn",
      ".live-editor-history__filter",
      ".live-editor-history__clear"
    ];

    return [...liveEditorRoot.querySelectorAll(selectors.join(","))]
      .filter((node) => {
        if (!(node instanceof HTMLButtonElement)) return false;
        if (node.disabled) return false;
        if (node.classList.contains("is-filter-hidden")) return false;
        if (!node.offsetParent && !liveEditorRoot.classList.contains("is-collapsed")) return false;
        return true;
      });
  };

  const triggerFirstVisibleLiveSearchAction = () => {
    const candidates = getLiveSearchCandidateButtons();
    const first = candidates[0];
    if (!(first instanceof HTMLButtonElement)) {
      setLiveEditorStatus("No matching action for this search.", "info");
      return false;
    }

    first.focus({ preventScroll: true });
    first.click();
    return true;
  };

  const persistLiveCommandRecent = () => {
    try {
      localStorage.setItem(LIVE_EDITOR_COMMAND_RECENT_KEY, JSON.stringify(liveEditorCommandRecent));
    } catch {
      // Ignore storage quota and serialization edge cases.
    }
  };

  const recordLiveCommandUsage = (commandId) => {
    if (!commandId) return;
    const now = Date.now();
    const current = liveEditorCommandRecent?.[commandId];
    const count = Number.isFinite(Number(current?.count)) ? Number(current.count) : 0;
    liveEditorCommandRecent[commandId] = {
      count: Math.min(999, count + 1),
      lastUsedAt: now
    };

    const entries = Object.entries(liveEditorCommandRecent || {})
      .filter(([, value]) => value && typeof value === "object")
      .sort((a, b) => {
        const aTime = Number(a?.[1]?.lastUsedAt || 0);
        const bTime = Number(b?.[1]?.lastUsedAt || 0);
        return bTime - aTime;
      });

    if (entries.length > 160) {
      liveEditorCommandRecent = Object.fromEntries(entries.slice(0, 160));
    }

    persistLiveCommandRecent();
  };

  const getLiveCommandActionItems = () => {
    const resolveCommandCategory = ({ liveAction, elementAction, sectionAction, batchAction, templateAction, historyFilter, historyAction }) => {
      if (elementAction) return "Element";
      if (sectionAction || batchAction || templateAction) return "Sections";

      if (historyFilter || historyAction) return "History";

      if (liveAction) {
        if (["viewport", "toggle-grid", "toggle-snap", "toggle-magnetic", "toggle-canvas", "canvas-zoom", "snap-size"].includes(liveAction)) {
          return "Canvas";
        }

        if (["set-dock", "toggle-compact", "toggle-collapse", "toggle-hud", "toggle-beginner", "toggle-autosave", "save-now", "undo"].includes(liveAction)) {
          return "Editor";
        }
      }

      return "Actions";
    };

    const resolveCommandMeta = ({ liveAction, elementAction, sectionAction, batchAction, templateAction, historyFilter, historyAction }) => {
      const raw = liveAction || elementAction || sectionAction || batchAction || templateAction || historyFilter || historyAction || "action";
      return String(raw)
        .replace(/[-_]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    };

    const resolveCommandShortcut = ({ liveAction, dataZoom }) => {
      if (liveAction === "save-now") return "⌘/Ctrl+S";
      if (liveAction === "toggle-collapse") return "⌘/Ctrl+E";
      if (liveAction === "duplicate-selected") return "⌘/Ctrl+D";
      if (liveAction === "canvas-zoom") {
        if (dataZoom === "1") return "⌘/Ctrl+0";
        return "⌘/Ctrl +/-/0";
      }
      return "";
    };

    const actionButtons = [...liveEditorRoot.querySelectorAll("button")]
      .filter((node) => node instanceof HTMLButtonElement)
      .filter((button) => {
        if (button.disabled) return false;
        const hasAction = button.hasAttribute("data-live-action")
          || button.hasAttribute("data-live-element-action")
          || button.hasAttribute("data-live-section-template")
          || button.hasAttribute("data-live-sections-batch-action")
          || button.hasAttribute("data-live-section-action")
          || button.hasAttribute("data-history-filter")
          || button.hasAttribute("data-history-action");
        return hasAction;
      });

    const dedupe = new Set();
    return actionButtons
      .map((button) => {
        const label = (button.textContent || "")
          .replace(/\s+/g, " ")
          .trim();
        const liveAction = button.getAttribute("data-live-action") || "";
        const elementAction = button.getAttribute("data-live-element-action") || "";
        const sectionAction = button.getAttribute("data-live-section-action") || "";
        const batchAction = button.getAttribute("data-live-sections-batch-action") || "";
        const templateAction = button.getAttribute("data-live-section-template") || "";
        const historyFilter = button.getAttribute("data-history-filter") || "";
        const historyAction = button.getAttribute("data-history-action") || "";
        const dataViewport = button.getAttribute("data-viewport") || "";
        const dataDock = button.getAttribute("data-dock") || "";
        const dataSize = button.getAttribute("data-size") || "";
        const dataZoom = button.getAttribute("data-zoom") || "";
        const commandId = [
          liveAction,
          elementAction,
          sectionAction,
          batchAction,
          templateAction,
          historyFilter,
          historyAction,
          dataViewport,
          dataDock,
          dataSize,
          dataZoom,
          label
        ].join("|");
        const key = `${label}|${liveAction}|${elementAction}|${sectionAction}|${batchAction}|${templateAction}|${historyFilter}|${historyAction}`;

        const category = resolveCommandCategory({
          liveAction,
          elementAction,
          sectionAction,
          batchAction,
          templateAction,
          historyFilter,
          historyAction
        });

        const meta = resolveCommandMeta({
          liveAction,
          elementAction,
          sectionAction,
          batchAction,
          templateAction,
          historyFilter,
          historyAction
        });

        const shortcut = resolveCommandShortcut({ liveAction, dataZoom });
        const usage = liveEditorCommandRecent?.[commandId] || {};
        const usageCount = Number.isFinite(Number(usage?.count)) ? Number(usage.count) : 0;
        const lastUsedAt = Number.isFinite(Number(usage?.lastUsedAt)) ? Number(usage.lastUsedAt) : 0;

        return {
          key,
          commandId,
          label: label || "Action",
          searchable: `${label} ${liveAction} ${elementAction} ${sectionAction} ${batchAction} ${templateAction} ${historyFilter} ${historyAction}`.toLowerCase(),
          category,
          meta,
          shortcut,
          usageCount,
          lastUsedAt,
          button
        };
      })
      .filter((item) => {
        if (!item.label) return false;
        if (dedupe.has(item.key)) return false;
        dedupe.add(item.key);
        return true;
      });
  };

  const scoreLiveCommandItem = (item, rawQuery) => {
    const query = String(rawQuery || "").trim().toLowerCase();
    const label = String(item?.label || "").toLowerCase();
    const searchable = String(item?.searchable || "").toLowerCase();
    const usageCount = Number.isFinite(Number(item?.usageCount)) ? Number(item.usageCount) : 0;
    const lastUsedAt = Number.isFinite(Number(item?.lastUsedAt)) ? Number(item.lastUsedAt) : 0;
    const usageBoost = Math.min(90, usageCount * 9);
    const ageHours = lastUsedAt > 0 ? Math.max(0, (Date.now() - lastUsedAt) / (1000 * 60 * 60)) : Number.POSITIVE_INFINITY;
    const freshnessBoost = Number.isFinite(ageHours) ? Math.max(0, 28 - (ageHours * 0.35)) : 0;

    if (!query) {
      return 1 + usageBoost + freshnessBoost;
    }

    let score = usageBoost + freshnessBoost;

    if (label.startsWith(query)) score += 120;
    if (label.includes(query)) score += 70;
    if (searchable.includes(query)) score += 36;

    const tokens = query.split(/\s+/).filter(Boolean);
    tokens.forEach((token) => {
      if (label.startsWith(token)) {
        score += 30;
      } else if (label.includes(token)) {
        score += 16;
      } else if (searchable.includes(token)) {
        score += 8;
      } else {
        score -= 24;
      }
    });

    const compactLabel = label.replace(/\s+/g, "");
    const compactQuery = query.replace(/\s+/g, "");
    let qIndex = 0;
    for (let i = 0; i < compactLabel.length && qIndex < compactQuery.length; i += 1) {
      if (compactLabel[i] === compactQuery[qIndex]) {
        qIndex += 1;
      }
    }
    if (compactQuery && qIndex === compactQuery.length) {
      score += 18;
    }

    score += Math.max(0, 14 - Math.max(0, label.length - query.length));
    return score;
  };

  const setLiveCommandActiveItem = (nextIndex) => {
    if (!(liveEditorCommandList instanceof HTMLElement) || !liveEditorCommandFilteredActions.length) {
      liveEditorCommandActiveIndex = 0;
      return;
    }

    const max = liveEditorCommandFilteredActions.length - 1;
    const safeIndex = Math.min(max, Math.max(0, nextIndex));
    liveEditorCommandActiveIndex = safeIndex;

    const rows = [...liveEditorCommandList.querySelectorAll(".live-editor-command__item")]
      .filter((node) => node instanceof HTMLButtonElement);

    rows.forEach((row, index) => {
      row.setAttribute("data-active", String(index === safeIndex));
      if (index === safeIndex) {
        row.scrollIntoView({ block: "nearest" });
      }
    });
  };

  const runLiveCommandAtIndex = (index) => {
    const item = liveEditorCommandFilteredActions[index];
    if (!item || !(item.button instanceof HTMLButtonElement)) {
      setLiveEditorStatus("No action available for this query.", "info");
      return false;
    }

    recordLiveCommandUsage(item.commandId || item.key || "");
    item.button.click();
    return true;
  };

  const completeLiveCommandFromTopResult = () => {
    if (!(liveEditorCommandInput instanceof HTMLInputElement)) return false;

    const query = String(liveEditorCommandInput.value || "").trim();
    if (!query) return false;

    const top = liveEditorCommandFilteredActions[0];
    const topLabel = String(top?.label || "").trim();
    if (!topLabel) return false;

    if (topLabel.toLowerCase() === query.toLowerCase()) {
      setLiveCommandActiveItem(0);
      return true;
    }

    liveEditorCommandInput.value = topLabel;
    renderLiveCommandPalette(topLabel);
    setLiveEditorStatus(`Completed command: ${topLabel}`, "info");
    return true;
  };

  const appendLiveCommandHighlightedText = (container, text, rawQuery) => {
    if (!(container instanceof HTMLElement)) return;

    const source = String(text || "");
    const query = String(rawQuery || "").trim().toLowerCase();
    container.textContent = "";

    if (!query || !source) {
      container.textContent = source;
      return;
    }

    const tokens = query
      .split(/\s+/)
      .map((token) => token.trim())
      .filter((token) => token.length >= 2)
      .sort((a, b) => b.length - a.length)
      .slice(0, 6);

    if (!tokens.length) {
      container.textContent = source;
      return;
    }

    const lower = source.toLowerCase();
    const ranges = [];

    tokens.forEach((token) => {
      let fromIndex = 0;
      while (fromIndex < lower.length) {
        const start = lower.indexOf(token, fromIndex);
        if (start < 0) break;
        ranges.push({ start, end: start + token.length });
        fromIndex = start + token.length;
      }
    });

    if (!ranges.length) {
      container.textContent = source;
      return;
    }

    ranges.sort((a, b) => {
      if (a.start !== b.start) return a.start - b.start;
      return (b.end - b.start) - (a.end - a.start);
    });

    const merged = [];
    ranges.forEach((range) => {
      const prev = merged[merged.length - 1];
      if (!prev || range.start >= prev.end) {
        merged.push({ ...range });
        return;
      }
      prev.end = Math.max(prev.end, range.end);
    });

    let cursor = 0;
    merged.forEach((range) => {
      if (range.start > cursor) {
        container.appendChild(document.createTextNode(source.slice(cursor, range.start)));
      }

      const mark = document.createElement("mark");
      mark.className = "live-editor-command__match";
      mark.textContent = source.slice(range.start, range.end);
      container.appendChild(mark);
      cursor = range.end;
    });

    if (cursor < source.length) {
      container.appendChild(document.createTextNode(source.slice(cursor)));
    }
  };

  const renderLiveCommandPalette = (rawQuery = "") => {
    if (!(liveEditorCommandList instanceof HTMLElement)) return;
    const query = String(rawQuery || "").trim().toLowerCase();
    const all = getLiveCommandActionItems();
    liveEditorCommandFilteredActions = query
      ? all
        .map((item) => ({ item, score: scoreLiveCommandItem(item, query) }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          return a.item.label.localeCompare(b.item.label);
        })
        .map((entry) => entry.item)
      : all
        .slice()
        .sort((a, b) => {
          const aScore = scoreLiveCommandItem(a, "");
          const bScore = scoreLiveCommandItem(b, "");
          if (bScore !== aScore) return bScore - aScore;
          return a.label.localeCompare(b.label);
        });

    liveEditorCommandList.innerHTML = "";

    if (!liveEditorCommandFilteredActions.length) {
      const empty = document.createElement("li");
      empty.className = "live-editor-command__empty";
      empty.textContent = "No matching actions";
      liveEditorCommandList.appendChild(empty);
      liveEditorCommandActiveIndex = 0;
      return;
    }

    liveEditorCommandFilteredActions.forEach((item, index) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "live-editor-command__item";
      button.setAttribute("data-live-command-index", String(index));
      button.setAttribute("data-active", String(index === 0));

      const main = document.createElement("span");
      main.className = "live-editor-command__item-main";

      const label = document.createElement("span");
      label.className = "live-editor-command__item-label";
      appendLiveCommandHighlightedText(label, item.label, query);

      const category = document.createElement("span");
      category.className = "live-editor-command__item-category";
      category.textContent = item.category || "Actions";

      const right = document.createElement("span");
      right.className = "live-editor-command__item-right";

      if (item.shortcut) {
        const shortcut = document.createElement("span");
        shortcut.className = "live-editor-command__item-shortcut";
        shortcut.textContent = item.shortcut;
        right.appendChild(shortcut);
      }

      right.appendChild(category);

      main.appendChild(label);
      main.appendChild(right);

      const meta = document.createElement("span");
      meta.className = "live-editor-command__item-meta";
      appendLiveCommandHighlightedText(meta, item.meta || "action", query);

      button.appendChild(main);
      button.appendChild(meta);
      li.appendChild(button);
      liveEditorCommandList.appendChild(li);
    });

    setLiveCommandActiveItem(0);
  };

  const closeLiveCommandPalette = ({ focusSearch = false } = {}) => {
    if (!liveEditorCommandOpen) return;
    liveEditorCommandOpen = false;
    liveEditorCommandPalette.classList.remove("is-visible");
    document.body.classList.remove("live-editor-command-open");

    if (focusSearch && liveActionSearchInput instanceof HTMLInputElement) {
      liveActionSearchInput.focus({ preventScroll: true });
    }
  };

  const openLiveCommandPalette = () => {
    if (!(liveEditorCommandInput instanceof HTMLInputElement)) return;
    liveEditorCommandOpen = true;
    liveEditorCommandPalette.classList.add("is-visible");
    document.body.classList.add("live-editor-command-open");
    liveEditorCommandInput.value = "";
    renderLiveCommandPalette("");
    window.requestAnimationFrame(() => {
      liveEditorCommandInput.focus({ preventScroll: true });
      liveEditorCommandInput.select();
    });
    setLiveEditorStatus("Spotlight open — search and press Enter.", "info");
  };

  const applyLiveEditorCollapsedState = () => {
    document.body.classList.toggle("live-editor-panel-collapsed", liveEditorCollapsed);
    liveEditorRoot.classList.toggle("is-collapsed", liveEditorCollapsed);

    const button = liveEditorRoot.querySelector('[data-live-action="toggle-collapse"]');
    if (button instanceof HTMLElement) {
      button.setAttribute("data-active", String(liveEditorCollapsed));
      button.textContent = liveEditorCollapsed ? "▶" : "◀";
      button.setAttribute("data-tooltip", liveEditorCollapsed ? "Expand editor" : "Collapse editor");
      button.setAttribute("aria-label", liveEditorCollapsed ? "Expand editor" : "Collapse editor");
    }
  };

  const getTopLevelEditableSections = () => {
    const main = document.querySelector("main");
    if (!(main instanceof HTMLElement)) return [];
    return [...main.querySelectorAll(":scope > section[data-layout-key]")]
      .filter((section) => section instanceof HTMLElement);
  };

  const getSectionDisplayName = (section) => {
    if (!(section instanceof HTMLElement)) return "Section";
    const heading = section.querySelector("h1, h2, h3");
    const headingText = heading instanceof HTMLElement ? (heading.textContent || "").trim() : "";
    if (headingText) return headingText;

    const key = section.getAttribute("data-layout-key") || "section";
    return key
      .replace(/^layout\./, "")
      .replace(/\./g, " ")
      .slice(0, 46);
  };

  const toggleSectionVisibilityByKey = async (sectionKey) => {
    if (!sectionKey) return;
    const section = document.querySelector(`section[data-layout-key="${sectionKey}"]`);
    if (!(section instanceof HTMLElement)) return;

    const profile = getActiveViewportProfile();
    const hiddenKey = `layout.${sectionKey}.hidden.${profile}`;
    const isHidden = getTextOverride(hiddenKey, "all") === "1";

    if (isHidden) {
      await deleteLiveOverride({ key: hiddenKey, type: "text", language: "all" });
      delete siteContentOverrides.textByKey[hiddenKey];
    } else {
      await saveLiveOverride({ key: hiddenKey, value: "1", type: "text", language: "all" });
      if (!siteContentOverrides.textByKey[hiddenKey]) {
        siteContentOverrides.textByKey[hiddenKey] = {};
      }
      siteContentOverrides.textByKey[hiddenKey].all = "1";
    }

    applyLayoutOverrides();
    renderLiveSectionsNavigator();
    updateLiveEditorSelectionOverlay();
    updateLiveEditorQuickbarPosition();
    setLiveEditorStatus(`${isHidden ? "Shown" : "Hidden"} section on ${profile}.`, "success");
  };

  const setSectionVisibilityByKey = async (sectionKey, hidden) => {
    if (!sectionKey) return;
    const profile = getActiveViewportProfile();
    const hiddenKey = `layout.${sectionKey}.hidden.${profile}`;

    if (hidden) {
      await saveLiveOverride({ key: hiddenKey, value: "1", type: "text", language: "all" });
      if (!siteContentOverrides.textByKey[hiddenKey]) {
        siteContentOverrides.textByKey[hiddenKey] = {};
      }
      siteContentOverrides.textByKey[hiddenKey].all = "1";
      return;
    }

    await deleteLiveOverride({ key: hiddenKey, type: "text", language: "all" });
    delete siteContentOverrides.textByKey[hiddenKey];
  };

  const removeSectionByKey = async (sectionKey) => {
    if (!sectionKey) return false;
    const section = document.querySelector(`section[data-layout-key="${sectionKey}"]`);
    if (!(section instanceof HTMLElement)) return false;

    const dupId = section.getAttribute("data-dup-id") || "";
    if (dupId) {
      const htmlKey = `dup.node.${dupId}.html`;
      const parentKeyStore = `dup.node.${dupId}.parent`;
      const afterKeyStore = `dup.node.${dupId}.after`;
      const placeKeyStore = `dup.node.${dupId}.place`;

      await deleteLiveOverride({ key: htmlKey, type: "text", language: "all" });
      await deleteLiveOverride({ key: parentKeyStore, type: "text", language: "all" });
      await deleteLiveOverride({ key: afterKeyStore, type: "text", language: "all" });
      await deleteLiveOverride({ key: placeKeyStore, type: "text", language: "all" });

      delete siteContentOverrides.textByKey[htmlKey];
      delete siteContentOverrides.textByKey[parentKeyStore];
      delete siteContentOverrides.textByKey[afterKeyStore];
      delete siteContentOverrides.textByKey[placeKeyStore];
      section.remove();
      return true;
    }

    await setSectionVisibilityByKey(sectionKey, true);
    return true;
  };

  const getNavigatorSectionKeys = () => getTopLevelEditableSections()
    .map((section) => section.getAttribute("data-layout-key") || "")
    .filter(Boolean);

  const updateLiveSectionsBatchUi = () => {
    if (!(liveSectionsNavigatorBatch instanceof HTMLElement) || !(liveSectionsNavigatorCount instanceof HTMLElement)) return;
    const count = liveSectionsSelectedKeys.size;
    liveSectionsNavigatorCount.textContent = `${count} selected`;
    liveSectionsNavigatorBatch.classList.toggle("is-active", count > 0);
    liveSectionsNavigatorBatch.querySelectorAll("[data-live-sections-batch-action]").forEach((node) => {
      if (node instanceof HTMLButtonElement) {
        node.disabled = count === 0;
      }
    });
  };

  const renderLiveSectionsNavigator = () => {
    if (!(liveSectionsNavigatorList instanceof HTMLElement)) return;

    const sections = getTopLevelEditableSections();
    const selectedSection = (() => {
      if (!(selectedNode instanceof HTMLElement)) return null;
      if (selectedNode.matches("section[data-layout-key]")) return selectedNode;
      const closest = selectedNode.closest("section[data-layout-key]");
      return closest instanceof HTMLElement ? closest : null;
    })();
    const selectedSectionKey = selectedSection instanceof HTMLElement
      ? (selectedSection.getAttribute("data-layout-key") || "")
      : "";

    if (!liveSectionsSelectedKeys.size && selectedSectionKey) {
      liveSectionsSelectedKeys.add(selectedSectionKey);
    }

    liveSectionsNavigatorList.innerHTML = "";

    if (!sections.length) {
      const empty = document.createElement("li");
      empty.className = "live-sections-navigator__empty";
      empty.textContent = "No sections found";
      liveSectionsNavigatorList.appendChild(empty);
      return;
    }

    sections.forEach((section, index) => {
      const key = section.getAttribute("data-layout-key") || "";
      if (!key) return;

      const item = document.createElement("li");
      item.className = "live-sections-navigator__item";
      item.setAttribute("data-section-key", key);
      item.setAttribute("draggable", "true");
      item.classList.toggle("is-selected", key === selectedSectionKey);
      item.classList.toggle("is-multi-selected", liveSectionsSelectedKeys.has(key));

      item.innerHTML = `
        <span class="live-sections-navigator__drag" aria-hidden="true">⋮⋮</span>
        <button type="button" class="live-sections-navigator__jump" data-live-section-jump="${key}">
          <span class="live-sections-navigator__index">${index + 1}</span>
          <span class="live-sections-navigator__label">${getSectionDisplayName(section)}</span>
        </button>
        <div class="live-sections-navigator__actions">
          <button type="button" class="live-sections-navigator__action" data-live-section-action="duplicate" title="Duplicate section">⧉</button>
          <button type="button" class="live-sections-navigator__action" data-live-section-action="toggle-visibility" title="Hide/show section">${getTextOverride(`layout.${key}.hidden.${getActiveViewportProfile()}`, "all") === "1" ? "👁" : "🙈"}</button>
          <button type="button" class="live-sections-navigator__action danger" data-live-section-action="remove" title="Remove section">✕</button>
        </div>
      `;

      liveSectionsNavigatorList.appendChild(item);
    });

    updateLiveSectionsBatchUi();
  };

  const applyLiveEditorPanelOpacity = () => {
    const clamped = Math.min(100, Math.max(55, liveEditorPanelOpacity));
    liveEditorPanelOpacity = clamped;
    document.body.style.setProperty("--live-editor-panel-opacity", String(clamped / 100));

    if (livePanelOpacityInput instanceof HTMLInputElement) {
      livePanelOpacityInput.value = String(clamped);
    }

    if (livePanelOpacityLabel instanceof HTMLElement) {
      livePanelOpacityLabel.textContent = `Panel opacity: ${clamped}%`;
    }
  };

  const updateLiveElementEditorPanel = () => {
    if (!(liveElementEditorKey instanceof HTMLElement)
      || !(liveElementEditorType instanceof HTMLElement)
      || !(liveElementTextInput instanceof HTMLTextAreaElement)
      || !(liveElementImageUrlInput instanceof HTMLInputElement)
      || !(liveElementEditorRoot instanceof HTMLElement)) {
      return;
    }

    const hasSelection = selectedNode instanceof HTMLElement && selectedNodeKey;
    const details = hasSelection ? (selectedNodeDetails || getInspectorDetails(selectedNode)) : null;
    const type = details?.type || "none";
    const canEditText = type === "text" || type === "placeholder" || type === "icon";
    const canEditImage = type === "image";
    const selectedSection = (() => {
      if (!(selectedNode instanceof HTMLElement)) return null;
      if (selectedNode.matches("section[data-layout-key]")) return selectedNode;
      const closestSection = selectedNode.closest("section[data-layout-key]");
      if (closestSection instanceof HTMLElement) return closestSection;
      return null;
    })();
    const canEditSection = selectedSection instanceof HTMLElement;
    const isEditableType = canEditText || canEditImage || canEditSection;

    liveElementEditorKey.textContent = hasSelection
      ? `Key: ${selectedNodeKey}`
      : "No element selected";

    liveElementEditorType.textContent = hasSelection
      ? `Type: ${type}`
      : "Select an element to edit it directly.";

    liveElementTextInput.value = canEditText ? (details?.value || "") : "";
    liveElementTextInput.disabled = !canEditText;

    liveElementImageUrlInput.value = canEditImage ? (details?.value || "") : "";
    liveElementImageUrlInput.disabled = !canEditImage;

    liveElementEditorRoot.querySelectorAll("[data-live-element-action]").forEach((button) => {
      if (!(button instanceof HTMLButtonElement)) return;
      const action = button.getAttribute("data-live-element-action") || "";
      button.disabled = !hasSelection;
      if ((action === "save-text" && !canEditText) || ((action === "save-image-url" || action === "upload-image") && !canEditImage)) {
        button.disabled = true;
      }
      if (["add-section-above", "add-section-below", "remove-section"].includes(action) && !canEditSection) {
        button.disabled = true;
      }
    });

    const textSection = liveElementEditorRoot.querySelector('[data-live-element-section="text"]');
    if (textSection instanceof HTMLElement) {
      textSection.classList.toggle("is-hidden", !canEditText);
    }

    const imageSection = liveElementEditorRoot.querySelector('[data-live-element-section="image"]');
    if (imageSection instanceof HTMLElement) {
      imageSection.classList.toggle("is-hidden", !canEditImage);
    }

    const sectionSection = liveElementEditorRoot.querySelector('[data-live-element-section="section"]');
    if (sectionSection instanceof HTMLElement) {
      sectionSection.classList.toggle("is-hidden", !canEditSection);
    }

    if (liveSectionTemplateSelect instanceof HTMLSelectElement) {
      liveSectionTemplateSelect.disabled = !canEditSection;
    }

    liveSectionTemplateButtons.forEach((button) => {
      if (!(button instanceof HTMLButtonElement)) return;
      button.disabled = !canEditSection;
      const value = button.getAttribute("data-live-section-template") || "";
      const activeValue = liveSectionTemplateSelect instanceof HTMLSelectElement
        ? liveSectionTemplateSelect.value
        : "blank";
      const active = value === activeValue;
      button.setAttribute("data-active", String(active));
      button.setAttribute("aria-pressed", String(active));
    });

    if (liveSectionHeightInput instanceof HTMLInputElement) {
      liveSectionHeightInput.disabled = !canEditSection;
      if (canEditSection) {
        const sectionKey = selectedSection.getAttribute("data-layout-key") || "";
        const override = readStyleOverrideForActiveProfiles(`style.${sectionKey}.minHeight`);
        const computed = Number.parseInt(window.getComputedStyle(selectedSection).minHeight || "", 10);
        const fromOverride = Number.parseInt(String(override || ""), 10);
        const fallback = Number.isFinite(computed) && computed > 0 ? computed : 480;
        const nextValue = Number.isFinite(fromOverride) && fromOverride > 0 ? fromOverride : fallback;
        liveSectionHeightInput.value = String(Math.max(160, Math.min(1400, nextValue)));
      }
    }

    if (liveSectionHeightLabel instanceof HTMLElement) {
      if (!canEditSection) {
        liveSectionHeightLabel.textContent = "Section min height: auto";
      } else if (liveSectionHeightInput instanceof HTMLInputElement) {
        liveSectionHeightLabel.textContent = `Section min height: ${liveSectionHeightInput.value}px`;
      }
    }

    liveElementEditorRoot.classList.toggle("is-generic-selection", hasSelection && !isEditableType);

    const toggleButton = liveElementEditorRoot.querySelector('[data-live-element-action="toggle-visibility"]');
    if (toggleButton instanceof HTMLButtonElement && hasSelection) {
      toggleButton.textContent = isSelectedNodeHiddenOnActiveProfile() ? "Show" : "Hide";
    }
  };

  const saveSelectedElementTextFromPanel = async () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey || !(liveElementTextInput instanceof HTMLTextAreaElement)) return;
    if (!selectedNodeDetails || !["text", "placeholder", "icon"].includes(selectedNodeDetails.type)) return;

    const activeLang = localStorage.getItem("site-language") || detectPreferredLanguage();
    const nextValue = liveElementTextInput.value.trim();
    const save = await saveLiveOverride({
      key: selectedNodeDetails.key,
      value: nextValue,
      type: "text",
      language: activeLang
    });

    if (!save.ok) {
      setLiveEditorStatus(`Save failed: ${save.message}`, "error");
      return;
    }

    if (!siteContentOverrides.textByKey[selectedNodeDetails.key]) {
      siteContentOverrides.textByKey[selectedNodeDetails.key] = {};
    }
    siteContentOverrides.textByKey[selectedNodeDetails.key][activeLang] = nextValue;
    applyLanguage(activeLang);
    selectedNodeDetails = getInspectorDetails(selectedNode);
    updateLiveElementEditorPanel();
    setLiveEditorStatus(`Saved ${selectedNodeDetails.key} (${activeLang.toUpperCase()})`, "success");
  };

  const saveSelectedElementImageUrlFromPanel = async () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey || !(liveElementImageUrlInput instanceof HTMLInputElement)) return;
    if (!selectedNodeDetails || selectedNodeDetails.type !== "image") return;

    const trimmed = liveElementImageUrlInput.value.trim();
    if (!trimmed) {
      const deletion = await deleteLiveOverride({ key: selectedNodeDetails.key, type: "image", language: "all" });
      if (!deletion.ok) {
        setLiveEditorStatus(`Delete failed: ${deletion.message}`, "error");
        return;
      }
      delete siteContentOverrides.imageByKey[selectedNodeDetails.key];
      applyImageOverrides();
      selectedNodeDetails = getInspectorDetails(selectedNode);
      updateLiveElementEditorPanel();
      setLiveEditorStatus(`Deleted image override for ${selectedNodeDetails.key}`, "success");
      return;
    }

    if (!/^https?:\/\//i.test(trimmed)) {
      setLiveEditorStatus("Image URL must start with http:// or https://", "error");
      return;
    }

    const save = await saveLiveOverride({ key: selectedNodeDetails.key, value: trimmed, type: "image", language: "all" });
    if (!save.ok) {
      setLiveEditorStatus(`Save failed: ${save.message}`, "error");
      return;
    }

    siteContentOverrides.imageByKey[selectedNodeDetails.key] = trimmed;
    applyImageOverrides();
    selectedNodeDetails = getInspectorDetails(selectedNode);
    updateLiveElementEditorPanel();
    setLiveEditorStatus(`Saved image ${selectedNodeDetails.key}`, "success");
  };

  const uploadSelectedElementImageFromPanel = async () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) return;
    if (!selectedNodeDetails || selectedNodeDetails.type !== "image") return;

    try {
      const file = await selectLocalImageFile();
      if (!file) {
        setLiveEditorStatus("Image upload canceled.", "info");
        return;
      }

      const optimized = await optimizeImageFileForWeb(file);
      const save = await saveLiveOverride({
        key: selectedNodeDetails.key,
        value: optimized.dataUrl,
        type: "image",
        language: "all"
      });

      if (!save.ok) {
        setLiveEditorStatus(`Upload failed: ${save.message}`, "error");
        return;
      }

      siteContentOverrides.imageByKey[selectedNodeDetails.key] = optimized.dataUrl;
      applyImageOverrides();
      selectedNodeDetails = getInspectorDetails(selectedNode);
      updateLiveElementEditorPanel();
      setLiveEditorStatus(`Uploaded + optimized ${selectedNodeDetails.key} (${optimized.width}×${optimized.height})`, "success");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not process selected image.";
      setLiveEditorStatus(message, "error");
    }
  };

  const moveSelectedNodeInFlow = async (direction) => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) return false;
    if (!["up", "down", "top", "bottom"].includes(direction)) return false;

    const parent = selectedNode.parentElement;
    if (!(parent instanceof HTMLElement)) return false;

    const siblings = [...parent.children].filter((child) => child instanceof HTMLElement);
    const index = siblings.indexOf(selectedNode);
    if (index < 0) return false;

    if (direction === "top") {
      if (index === 0) {
        setLiveEditorStatus("Already at top of this group.", "info");
        return true;
      }
      parent.insertBefore(selectedNode, siblings[0]);
    } else if (direction === "bottom") {
      if (index === siblings.length - 1) {
        setLiveEditorStatus("Already at bottom of this group.", "info");
        return true;
      }
      parent.appendChild(selectedNode);
    } else if (direction === "up") {
      const previous = siblings[index - 1];
      if (!(previous instanceof HTMLElement)) {
        setLiveEditorStatus("Already at top of this group.", "info");
        return true;
      }
      parent.insertBefore(selectedNode, previous);
    } else {
      const next = siblings[index + 1];
      if (!(next instanceof HTMLElement)) {
        setLiveEditorStatus("Already at bottom of this group.", "info");
        return true;
      }
      parent.insertBefore(next, selectedNode);
    }

    const persisted = await persistParentChildOrder(parent);

    selectedNodeDetails = getInspectorDetails(selectedNode);
    updateLiveElementEditorPanel();
    updateLiveEditorQuickbarPosition();
    updateLiveEditorSelectionOverlay();
    setLiveEditorStatus(
      `Moved ${selectedNodeKey} ${direction} in flow for auto spacing/alignment${persisted ? " (saved)" : ""}.`,
      "success"
    );
    return true;
  };

  const normalizeSelectedParentSpacing = async () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) return false;

    const parent = selectedNode.parentElement;
    if (!(parent instanceof HTMLElement)) return false;

    const profile = getActiveViewportProfile();
    const siblings = [...parent.children].filter((child) => child instanceof HTMLElement);
    let resetCount = 0;

    for (const sibling of siblings) {
      const key = sibling.getAttribute("data-layout-key") || "";
      if (!key) continue;

      const translateKey = `layout.${key}.translate.${profile}`;
      sibling.style.transform = "translate(0px, 0px)";

      await deleteLiveOverride({ key: translateKey, type: "text", language: "all" });

      if (siteContentOverrides.textByKey[translateKey]) {
        delete siteContentOverrides.textByKey[translateKey].all;
        if (!Object.keys(siteContentOverrides.textByKey[translateKey]).length) {
          delete siteContentOverrides.textByKey[translateKey];
        }
      }

      resetCount += 1;
    }

    applyLayoutOverrides();
    selectedNodeDetails = getInspectorDetails(selectedNode);
    updateLiveElementEditorPanel();
    updateLiveEditorQuickbarPosition();
    updateLiveEditorSelectionOverlay();
    setLiveEditorStatus(`Normalized spacing for ${resetCount} sibling layer${resetCount === 1 ? "" : "s"} on ${profile}.`, "success");
    return true;
  };

  const getSelectedSectionNode = () => {
    if (!(selectedNode instanceof HTMLElement)) return null;
    if (selectedNode.matches("section[data-layout-key]")) return selectedNode;
    const closestSection = selectedNode.closest("section[data-layout-key]");
    return closestSection instanceof HTMLElement ? closestSection : null;
  };

  const saveSelectedSectionMinHeight = async () => {
    const sectionNode = getSelectedSectionNode();
    if (!(sectionNode instanceof HTMLElement) || !(liveSectionHeightInput instanceof HTMLInputElement)) {
      setLiveEditorStatus("Select a section first to adjust height.", "info");
      return;
    }

    const sectionKey = sectionNode.getAttribute("data-layout-key") || "";
    if (!sectionKey) return;

    const profile = getActiveViewportProfile();
    const nextValue = Number.parseInt(liveSectionHeightInput.value, 10);
    if (!Number.isFinite(nextValue) || nextValue < 160) {
      setLiveEditorStatus("Section min height must be at least 160px.", "error");
      return;
    }

    const key = `style.${sectionKey}.minHeight.${profile}`;
    const save = await saveLiveOverride({ key, value: String(nextValue), type: "text", language: "all" });
    if (!save.ok) {
      setLiveEditorStatus(`Height save failed: ${save.message}`, "error");
      return;
    }

    if (!siteContentOverrides.textByKey[key]) {
      siteContentOverrides.textByKey[key] = {};
    }
    siteContentOverrides.textByKey[key].all = String(nextValue);

    applyLayoutOverrides();
    updateLiveElementEditorPanel();
    setLiveEditorStatus(`Saved section min height ${nextValue}px on ${profile}.`, "success");
  };

  const addSectionNearSelected = async (position) => {
    const sectionNode = getSelectedSectionNode();
    if (!(sectionNode instanceof HTMLElement)) {
      setLiveEditorStatus("Select a section first.", "info");
      return false;
    }

    const sectionKey = sectionNode.getAttribute("data-layout-key") || "";
    if (!sectionKey) return false;

    const parent = sectionNode.parentElement;
    if (!(parent instanceof HTMLElement)) {
      setLiveEditorStatus("Could not resolve section container.", "error");
      return false;
    }

    const parentKey = parent.getAttribute("data-layout-key") || "";
    if (!parentKey) {
      setLiveEditorStatus("Section container lacks a layout key.", "error");
      return false;
    }

    const template = liveSectionTemplateSelect instanceof HTMLSelectElement
      ? (liveSectionTemplateSelect.value || "blank")
      : "blank";

    if (template === "duplicate") {
      setSelectedNode(sectionNode, sectionKey);
      await duplicateSelectedNode();

      if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) {
        setLiveEditorStatus("Could not create a new section.", "error");
        return false;
      }

      if (position === "above") {
        await moveSelectedNodeInFlow("up");
      }

      setLiveEditorStatus(`Added duplicated section ${position === "above" ? "above" : "below"}.`, "success");
      return true;
    }

    const dupId = `${Date.now().toString(36)}${(++duplicateCounter).toString(36)}`;
    const dupLayoutKey = `layout.dup.${dupId}`;
    const titleKey = `custom.${dupId}.title`;
    const bodyKey = `custom.${dupId}.body`;
    const buttonKey = `custom.${dupId}.button`;
    const qKey = `custom.${dupId}.question`;
    const aKey = `custom.${dupId}.answer`;

    const newSection = document.createElement("section");
    newSection.setAttribute("data-dup-id", dupId);
    newSection.setAttribute("data-layout-key", dupLayoutKey);

    if (template === "story") {
      newSection.className = "story reveal-alt";
      newSection.innerHTML = `
        <h2 data-i18n="${titleKey}">New story section</h2>
        <p data-i18n="${bodyKey}">Share a meaningful story about this part of your website.</p>
      `;
    } else if (template === "cta") {
      newSection.className = "cta reveal-alt";
      newSection.innerHTML = `
        <h2 data-i18n="${titleKey}">Ready to take the next step?</h2>
        <p data-i18n="${bodyKey}">Add your call-to-action message here.</p>
        <a href="#inquiry" class="btn btn-accent" data-i18n="${buttonKey}">Let’s talk</a>
      `;
    } else if (template === "faq") {
      newSection.className = "faq reveal-alt";
      newSection.innerHTML = `
        <h2 data-i18n="${titleKey}">Frequently asked questions</h2>
        <details open>
          <summary data-i18n="${qKey}">What should visitors know first?</summary>
          <p data-i18n="${aKey}">Add a concise and clear answer that helps your visitors quickly.</p>
        </details>
      `;
    } else if (template === "quote") {
      newSection.className = "quotes reveal-alt";
      newSection.innerHTML = `
        <h2 data-i18n="${titleKey}">What people say</h2>
        <blockquote>
          <p data-i18n="${bodyKey}">“Replace this with a testimonial or a quote.”</p>
          <cite>Client Name</cite>
        </blockquote>
      `;
    } else {
      newSection.className = "story reveal-alt";
      newSection.innerHTML = `
        <h2 data-i18n="${titleKey}">New section title</h2>
        <p data-i18n="${bodyKey}">Write your content here.</p>
      `;
    }

    if (position === "above") {
      parent.insertBefore(newSection, sectionNode);
    } else {
      parent.insertBefore(newSection, sectionNode.nextSibling);
    }

    const htmlKey = `dup.node.${dupId}.html`;
    const parentKeyStore = `dup.node.${dupId}.parent`;
    const afterKeyStore = `dup.node.${dupId}.after`;
    const placeKeyStore = `dup.node.${dupId}.place`;

    const previousSibling = newSection.previousElementSibling;
    const previousSiblingKey = previousSibling instanceof HTMLElement
      ? (previousSibling.getAttribute("data-layout-key") || "")
      : "";
    const placeValue = previousSiblingKey ? "" : "start";

    await saveLiveOverride({ key: htmlKey, value: newSection.outerHTML, type: "text", language: "all" });
    await saveLiveOverride({ key: parentKeyStore, value: parentKey, type: "text", language: "all" });
    await saveLiveOverride({ key: afterKeyStore, value: previousSiblingKey, type: "text", language: "all" });
    if (placeValue) {
      await saveLiveOverride({ key: placeKeyStore, value: placeValue, type: "text", language: "all" });
    }

    if (!siteContentOverrides.textByKey[htmlKey]) siteContentOverrides.textByKey[htmlKey] = {};
    if (!siteContentOverrides.textByKey[parentKeyStore]) siteContentOverrides.textByKey[parentKeyStore] = {};
    if (!siteContentOverrides.textByKey[afterKeyStore]) siteContentOverrides.textByKey[afterKeyStore] = {};
    siteContentOverrides.textByKey[htmlKey].all = newSection.outerHTML;
    siteContentOverrides.textByKey[parentKeyStore].all = parentKey;
    siteContentOverrides.textByKey[afterKeyStore].all = previousSiblingKey;

    if (placeValue) {
      if (!siteContentOverrides.textByKey[placeKeyStore]) siteContentOverrides.textByKey[placeKeyStore] = {};
      siteContentOverrides.textByKey[placeKeyStore].all = placeValue;
    } else if (siteContentOverrides.textByKey[placeKeyStore]) {
      delete siteContentOverrides.textByKey[placeKeyStore];
    }

    await persistParentChildOrder(parent);
    wireLiveEditableNodes();
    setSelectedNode(newSection, dupLayoutKey);
    setLiveEditorStatus(`Added ${template} section ${position === "above" ? "above" : "below"}.`, "success");
    return true;
  };

  const removeSelectedSection = async () => {
    const sectionNode = getSelectedSectionNode();
    if (!(sectionNode instanceof HTMLElement)) {
      setLiveEditorStatus("Select a section first.", "info");
      return false;
    }

    const sectionKey = sectionNode.getAttribute("data-layout-key") || "";
    if (!sectionKey) return false;

    const confirmed = window.confirm("Remove this section from the current viewport profile?");
    if (!confirmed) return false;

    setSelectedNode(sectionNode, sectionKey);
    await removeSelectedNode();
    return true;
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

  const resetSelectedCoords = async () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) {
      setLiveEditorStatus("Select an element first to reset coordinates.", "info");
      return;
    }

    if (nudgeSaveTimer) {
      window.clearTimeout(nudgeSaveTimer);
      nudgeSaveTimer = null;
    }

    selectedNode.style.transform = "translate(0px, 0px)";
    showLiveEditorHud({ key: selectedNodeKey, x: 0, y: 0 });
    updateLiveEditorQuickbarPosition();
    updateLiveEditorSelectionOverlay();
    await saveLayoutTranslate(selectedNodeKey, selectedNode);
    setLiveEditorStatus(`Reset ${selectedNodeKey} to 0,0 on ${getActiveBreakpoint()}`, "success");
  };

  const resetSelectedVisibility = async () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) {
      setLiveEditorStatus("Select an element first to reset visibility.", "info");
      return;
    }

    const bp = getActiveBreakpoint();
    const hiddenKey = `layout.${selectedNodeKey}.hidden.${bp}`;

    await deleteLiveOverride({
      key: hiddenKey,
      type: "text",
      language: "all"
    });

    if (siteContentOverrides.textByKey[hiddenKey]) {
      delete siteContentOverrides.textByKey[hiddenKey].all;
      if (!Object.keys(siteContentOverrides.textByKey[hiddenKey]).length) {
        delete siteContentOverrides.textByKey[hiddenKey];
      }
    }

    selectedNode.style.display = "";
    applyLayoutOverrides();
    const coords = getTranslateFromElement(selectedNode);
    showLiveEditorHud({ key: selectedNodeKey, x: coords.x, y: coords.y });
    updateLiveEditorSelectionOverlay();
    hideLiveEditorHudSoon(1800);
    setLiveEditorStatus(`Reset visibility for ${selectedNodeKey} on ${bp}`, "success");
  };

  const saveSelectedTypography = async ({ family, size }) => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) {
      setLiveEditorStatus("Select an element first to style typography.", "info");
      return;
    }

    const profile = getActiveViewportProfile();

    if (typeof family === "string") {
      const key = `style.${selectedNodeKey}.fontFamily.${profile}`;
      if (family) {
        await saveLiveOverride({ key, value: family, type: "text", language: "all" });
        if (!siteContentOverrides.textByKey[key]) siteContentOverrides.textByKey[key] = {};
        siteContentOverrides.textByKey[key].all = family;
      } else {
        await deleteLiveOverride({ key, type: "text", language: "all" });
        delete siteContentOverrides.textByKey[key];
      }
    }

    if (typeof size === "string") {
      const key = `style.${selectedNodeKey}.fontSize.${profile}`;
      if (size) {
        await saveLiveOverride({ key, value: size, type: "text", language: "all" });
        if (!siteContentOverrides.textByKey[key]) siteContentOverrides.textByKey[key] = {};
        siteContentOverrides.textByKey[key].all = size;
      } else {
        await deleteLiveOverride({ key, type: "text", language: "all" });
        delete siteContentOverrides.textByKey[key];
      }
    }

    applyLayoutOverrides();
    updateSelectedTypographyControls();
  };

  const duplicateSelectedNode = async () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) {
      setLiveEditorStatus("Select an element first to duplicate.", "info");
      return;
    }

    const parent = selectedNode.parentElement;
    if (!(parent instanceof HTMLElement)) {
      setLiveEditorStatus("Could not duplicate this element.", "error");
      return;
    }

    const parentKey = parent.getAttribute("data-layout-key");
    if (!parentKey) {
      setLiveEditorStatus("Parent lacks layout key. Select a structured element.", "error");
      return;
    }

    const clone = selectedNode.cloneNode(true);
    if (!(clone instanceof HTMLElement)) {
      setLiveEditorStatus("Could not duplicate this element.", "error");
      return;
    }

    const dupId = `${Date.now().toString(36)}${(++duplicateCounter).toString(36)}`;
    const dupLayoutKey = `layout.dup.${dupId}`;
    clone.removeAttribute("id");
    clone.removeAttribute("data-live-selected");
    clone.removeAttribute("data-dragging");
    clone.setAttribute("data-dup-id", dupId);
    clone.setAttribute("data-layout-key", dupLayoutKey);

    selectedNode.insertAdjacentElement("afterend", clone);

    const htmlKey = `dup.node.${dupId}.html`;
    const parentKeyStore = `dup.node.${dupId}.parent`;
    const afterKeyStore = `dup.node.${dupId}.after`;

    await saveLiveOverride({ key: htmlKey, value: clone.outerHTML, type: "text", language: "all" });
    await saveLiveOverride({ key: parentKeyStore, value: parentKey, type: "text", language: "all" });
    await saveLiveOverride({ key: afterKeyStore, value: selectedNodeKey, type: "text", language: "all" });

    if (!siteContentOverrides.textByKey[htmlKey]) siteContentOverrides.textByKey[htmlKey] = {};
    if (!siteContentOverrides.textByKey[parentKeyStore]) siteContentOverrides.textByKey[parentKeyStore] = {};
    if (!siteContentOverrides.textByKey[afterKeyStore]) siteContentOverrides.textByKey[afterKeyStore] = {};
    siteContentOverrides.textByKey[htmlKey].all = clone.outerHTML;
    siteContentOverrides.textByKey[parentKeyStore].all = parentKey;
    siteContentOverrides.textByKey[afterKeyStore].all = selectedNodeKey;

    wireLiveEditableNodes();
    setSelectedNode(clone, dupLayoutKey);
    setLiveEditorStatus(`Duplicated ${selectedNodeKey}`, "success");
  };

  const removeSelectedNode = async () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) {
      setLiveEditorStatus("Select an element first to remove.", "info");
      return;
    }

    const dupId = selectedNode.getAttribute("data-dup-id");
    if (dupId) {
      const htmlKey = `dup.node.${dupId}.html`;
      const parentKeyStore = `dup.node.${dupId}.parent`;
      const afterKeyStore = `dup.node.${dupId}.after`;
      const placeKeyStore = `dup.node.${dupId}.place`;

      await deleteLiveOverride({ key: htmlKey, type: "text", language: "all" });
      await deleteLiveOverride({ key: parentKeyStore, type: "text", language: "all" });
      await deleteLiveOverride({ key: afterKeyStore, type: "text", language: "all" });
      await deleteLiveOverride({ key: placeKeyStore, type: "text", language: "all" });

      delete siteContentOverrides.textByKey[htmlKey];
      delete siteContentOverrides.textByKey[parentKeyStore];
      delete siteContentOverrides.textByKey[afterKeyStore];
      delete siteContentOverrides.textByKey[placeKeyStore];

      selectedNode.remove();
      setSelectedNode(null, "");
      setLiveEditorStatus("Removed duplicated element.", "success");
      return;
    }

    const profile = getActiveViewportProfile();
    const hiddenKey = `layout.${selectedNodeKey}.hidden.${profile}`;
    await saveLiveOverride({ key: hiddenKey, value: "1", type: "text", language: "all" });
    if (!siteContentOverrides.textByKey[hiddenKey]) siteContentOverrides.textByKey[hiddenKey] = {};
    siteContentOverrides.textByKey[hiddenKey].all = "1";
    applyLayoutOverrides();
    setLiveEditorStatus(`Removed (hidden) ${selectedNodeKey} on ${profile}`, "success");
  };

  const setSelectedNode = (node, key) => {
    if (selectedNode instanceof HTMLElement) {
      selectedNode.removeAttribute("data-live-selected");
    }

    selectedNode = node instanceof HTMLElement ? node : null;
    selectedNodeKey = key || "";
    selectedNodeDetails = selectedNode ? getInspectorDetails(selectedNode) : null;

    if (selectedNode instanceof HTMLElement) {
      selectedNode.setAttribute("data-live-selected", "true");
      const coords = getTranslateFromElement(selectedNode);
      showLiveEditorHud({ key: selectedNodeKey, x: coords.x, y: coords.y });
    }

    updateSelectedTypographyControls();
    updateLiveElementEditorPanel();
    renderLiveSectionsNavigator();
    updateLiveEditorQuickbarPosition();
    updateLiveEditorSelectionOverlay();
    if (!(selectedNode instanceof HTMLElement)) {
      clearLiveSpacingIndicators();
      hideLiveEditorContextMenu();
    }
  };

  const beginInlineTextEditing = (node, details, activeLang) => {
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
  };

  const editNodeByDetails = async (node, details) => {
    if (!details?.key) return;

    const activeLang = localStorage.getItem("site-language") || detectPreferredLanguage();

    if (details.type === "layout") {
      setLiveEditorStatus(`Selected ${details.key}. Drag to move.`, "info");
      return;
    }

    if (details.type === "image") {
      const wantsUpload = window.confirm(
        `Edit image for ${details.key}\n\nOK = upload from local computer\nCancel = use image URL`
      );

      if (wantsUpload) {
        try {
          const file = await selectLocalImageFile();
          if (!file) {
            setLiveEditorStatus("Image upload canceled.", "info");
            return;
          }

          const optimized = await optimizeImageFileForWeb(file);
          const save = await saveLiveOverride({
            key: details.key,
            value: optimized.dataUrl,
            type: "image",
            language: "all"
          });

          if (!save.ok) {
            setLiveEditorStatus(`Upload failed: ${save.message}`, "error");
            return;
          }

          siteContentOverrides.imageByKey[details.key] = optimized.dataUrl;
          applyImageOverrides();
          setLiveEditorStatus(
            `Uploaded + optimized ${details.key} (${optimized.width}×${optimized.height}, ~${optimized.estimatedKb}KB)`,
            "success"
          );
          return;
        } catch (error) {
          const message = error instanceof Error ? error.message : "Could not process the selected image.";
          setLiveEditorStatus(message, "error");
          return;
        }
      }

      const nextUrl = window.prompt(`Edit image URL for ${details.key}:`, details.value || "");
      if (nextUrl === null) {
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
      return;
    }

    if (details.type === "placeholder" || details.type === "icon") {
      const promptLabel = details.type === "icon" ? "Edit icon name" : "Edit placeholder";
      const placeholderText = window.prompt(`${promptLabel} for ${details.key}:`, details.value || "");
      if (placeholderText === null) {
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
      return;
    }

    beginInlineTextEditing(node, details, activeLang);
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
      const isActive = viewport === getBreakpointFromProfile(getActiveViewportProfile());
      button.setAttribute("data-active", String(isActive));
      button.setAttribute("aria-pressed", String(isActive));
    });

    const activeProfile = getActiveViewportProfile();

    if (liveResolutionInput instanceof HTMLInputElement) {
      const match = String(activeProfile).match(/^w(\d{3,4})$/);
      if (match) {
        liveResolutionInput.value = match[1];
      }
    }

    if (liveResolutionLabel instanceof HTMLElement) {
      const bp = getBreakpointFromProfile(activeProfile);
      if (/^w\d{3,4}$/.test(String(activeProfile))) {
        liveResolutionLabel.textContent = `Screen: ${String(activeProfile).slice(1)}px (${bp})`;
      } else {
        liveResolutionLabel.textContent = `Screen: ${bp}`;
      }
    }
  };

  const applyViewportProfileToBody = () => {
    const profile = getActiveViewportProfile();
    const bp = getBreakpointFromProfile(profile);
    const profileWidth = (() => {
      const match = String(profile).match(/^w(\d{3,4})$/);
      if (match) {
        const parsed = Number.parseInt(match[1], 10);
        if (Number.isFinite(parsed)) return parsed;
      }
      if (bp === "mobile") return 390;
      if (bp === "tablet") return 1024;
      return 1280;
    })();

    const computeCanvasFitZoom = () => {
      const panelWidth = liveEditorRoot instanceof HTMLElement
        ? Math.max(0, Math.round(liveEditorRoot.getBoundingClientRect().width))
        : 0;
      const gutter = 40;
      const dockConsumesWidth = liveEditorDock === "left" || liveEditorDock === "right";
      const availableWidth = Math.max(320, window.innerWidth - (dockConsumesWidth ? panelWidth : 0) - gutter);
      const ratio = availableWidth / profileWidth;
      return Math.min(1, Math.max(0.55, Number.isFinite(ratio) ? ratio : 1));
    };

    const resolvedZoom = (() => {
      if (liveCanvasZoomMode === "fit") {
        return computeCanvasFitZoom();
      }
      const parsed = Number.parseFloat(liveCanvasZoomMode);
      if (Number.isFinite(parsed)) {
        return Math.min(1, Math.max(0.55, parsed));
      }
      return 1;
    })();

    liveCanvasZoom = resolvedZoom;

    document.body.classList.remove(
      "live-editor-vp-desktop",
      "live-editor-vp-tablet",
      "live-editor-vp-mobile",
      "live-editor-vp-custom"
    );
    document.body.classList.add(`live-editor-vp-${bp}`);
    document.body.classList.toggle("live-editor-canvas", liveCanvasMode);
    document.body.style.setProperty("--live-editor-preview-width", `${profileWidth}px`);
    document.body.style.setProperty("--live-editor-canvas-zoom", String(resolvedZoom));
    document.body.classList.toggle("live-editor-canvas-fit", liveCanvasZoomMode === "fit");

    const customMatch = String(profile).match(/^w(\d{3,4})$/);
    if (customMatch) {
      document.body.classList.add("live-editor-vp-custom");
    }
  };

  const updateCanvasModeButton = () => {
    const button = liveEditorRoot.querySelector('[data-live-action="toggle-canvas"]');
    if (!(button instanceof HTMLElement)) return;
    button.setAttribute("data-active", String(liveCanvasMode));
    button.textContent = `Canvas mode: ${liveCanvasMode ? "On" : "Off"}`;
  };

  const updateSnapButton = () => {
    const button = liveEditorRoot.querySelector('[data-live-action="toggle-snap"]');
    if (!(button instanceof HTMLElement)) return;
    button.setAttribute("data-active", String(liveSnapEnabled));
    button.textContent = `Snap: ${liveSnapEnabled ? `On (${liveSnapGridSize}px)` : "Off"}`;
  };

  const updateMagneticButton = () => {
    const button = liveEditorRoot.querySelector('[data-live-action="toggle-magnetic"]');
    if (!(button instanceof HTMLElement)) return;
    button.setAttribute("data-active", String(liveMagneticGuidesEnabled));
    button.textContent = `Guides: ${liveMagneticGuidesEnabled ? "On" : "Off"}`;
  };

  const setLiveGuideLine = (el, active, axis, position = 0) => {
    if (!(el instanceof HTMLElement)) return;
    if (!active) {
      el.classList.remove("is-active");
      return;
    }

    el.classList.add("is-active");
    if (axis === "x") {
      el.style.left = `${Math.round(position)}px`;
    } else {
      el.style.top = `${Math.round(position)}px`;
    }
  };

  const clearLiveGuideLines = () => {
    setLiveGuideLine(liveEditorGuideVertical, false, "x");
    setLiveGuideLine(liveEditorGuideHorizontal, false, "y");
  };

  const setSpacingIndicator = ({
    el,
    labelEl,
    active,
    axis,
    left = 0,
    top = 0,
    length = 0,
    label = ""
  }) => {
    if (!(el instanceof HTMLElement)) return;

    if (!active || !Number.isFinite(length) || length <= 0) {
      el.classList.remove("is-active");
      return;
    }

    el.classList.add("is-active");
    el.style.left = `${Math.round(left)}px`;
    el.style.top = `${Math.round(top)}px`;

    if (axis === "x") {
      el.style.width = `${Math.max(1, Math.round(length))}px`;
      el.style.height = "0px";
    } else {
      el.style.height = `${Math.max(1, Math.round(length))}px`;
      el.style.width = "0px";
    }

    if (labelEl instanceof HTMLElement) {
      labelEl.textContent = label;
    }
  };

  const clearLiveSpacingIndicators = () => {
    setSpacingIndicator({ el: liveEditorSpacingHorizontal, labelEl: liveEditorSpacingHorizontalLabel, active: false, axis: "x" });
    setSpacingIndicator({ el: liveEditorSpacingVertical, labelEl: liveEditorSpacingVerticalLabel, active: false, axis: "y" });
  };

  const updateLiveSpacingIndicators = (movingRect, candidates) => {
    if (!movingRect || !Array.isArray(candidates) || !candidates.length) {
      clearLiveSpacingIndicators();
      return;
    }

    const maxGap = 240;
    let bestHorizontal = null;
    let bestVertical = null;

    candidates.forEach((rect) => {
      if (!rect
        || !Number.isFinite(rect.left)
        || !Number.isFinite(rect.top)
        || !Number.isFinite(rect.right)
        || !Number.isFinite(rect.bottom)) {
        return;
      }

      const overlapY = Math.min(movingRect.bottom, rect.bottom) - Math.max(movingRect.top, rect.top);
      if (overlapY > 8) {
        const y = Math.max(movingRect.top, rect.top) + (overlapY / 2);

        if (movingRect.right <= rect.left) {
          const gap = rect.left - movingRect.right;
          if (gap <= maxGap && (!bestHorizontal || gap < bestHorizontal.gap)) {
            bestHorizontal = { gap, x1: movingRect.right, x2: rect.left, y };
          }
        } else if (rect.right <= movingRect.left) {
          const gap = movingRect.left - rect.right;
          if (gap <= maxGap && (!bestHorizontal || gap < bestHorizontal.gap)) {
            bestHorizontal = { gap, x1: rect.right, x2: movingRect.left, y };
          }
        }
      }

      const overlapX = Math.min(movingRect.right, rect.right) - Math.max(movingRect.left, rect.left);
      if (overlapX > 8) {
        const x = Math.max(movingRect.left, rect.left) + (overlapX / 2);

        if (movingRect.bottom <= rect.top) {
          const gap = rect.top - movingRect.bottom;
          if (gap <= maxGap && (!bestVertical || gap < bestVertical.gap)) {
            bestVertical = { gap, y1: movingRect.bottom, y2: rect.top, x };
          }
        } else if (rect.bottom <= movingRect.top) {
          const gap = movingRect.top - rect.bottom;
          if (gap <= maxGap && (!bestVertical || gap < bestVertical.gap)) {
            bestVertical = { gap, y1: rect.bottom, y2: movingRect.top, x };
          }
        }
      }
    });

    if (bestHorizontal) {
      const left = Math.min(bestHorizontal.x1, bestHorizontal.x2);
      const length = Math.abs(bestHorizontal.x2 - bestHorizontal.x1);
      setSpacingIndicator({
        el: liveEditorSpacingHorizontal,
        labelEl: liveEditorSpacingHorizontalLabel,
        active: true,
        axis: "x",
        left,
        top: bestHorizontal.y,
        length,
        label: `${Math.round(bestHorizontal.gap)}px`
      });
    } else {
      setSpacingIndicator({ el: liveEditorSpacingHorizontal, labelEl: liveEditorSpacingHorizontalLabel, active: false, axis: "x" });
    }

    if (bestVertical) {
      const top = Math.min(bestVertical.y1, bestVertical.y2);
      const length = Math.abs(bestVertical.y2 - bestVertical.y1);
      setSpacingIndicator({
        el: liveEditorSpacingVertical,
        labelEl: liveEditorSpacingVerticalLabel,
        active: true,
        axis: "y",
        left: bestVertical.x,
        top,
        length,
        label: `${Math.round(bestVertical.gap)}px`
      });
    } else {
      setSpacingIndicator({ el: liveEditorSpacingVertical, labelEl: liveEditorSpacingVerticalLabel, active: false, axis: "y" });
    }
  };

  const updateSnapSizeButtons = () => {
    liveEditorRoot.querySelectorAll('[data-live-action="snap-size"]').forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      const value = Number.parseInt(button.getAttribute("data-size") || "", 10);
      const active = Number.isFinite(value) && value === liveSnapGridSize;
      button.setAttribute("data-active", String(active));
      button.setAttribute("aria-pressed", String(active));
    });
  };

  const clampBetween = (value, min, max) => Math.min(max, Math.max(min, value));

  const updateCanvasMinimap = () => {
    if (!(liveMinimapRoot instanceof HTMLElement)
      || !(liveMinimapStage instanceof HTMLElement)
      || !(liveMinimapDoc instanceof HTMLElement)
      || !(liveMinimapViewport instanceof HTMLElement)) {
      return;
    }

    if (!liveCanvasMode) {
      liveMinimapRoot.classList.add("is-hidden");
      return;
    }

    liveMinimapRoot.classList.remove("is-hidden");

    const stageRect = liveMinimapStage.getBoundingClientRect();
    const stageWidth = Math.max(1, Math.round(stageRect.width));
    const stageHeight = Math.max(1, Math.round(stageRect.height));

    const docEl = document.documentElement;
    const bodyEl = document.body;
    const contentWidth = Math.max(
      docEl.scrollWidth,
      bodyEl?.scrollWidth || 0,
      window.innerWidth
    );
    const contentHeight = Math.max(
      docEl.scrollHeight,
      bodyEl?.scrollHeight || 0,
      window.innerHeight
    );

    const scale = Math.max(0.001, Math.min(stageWidth / contentWidth, stageHeight / contentHeight));
    const scaledWidth = contentWidth * scale;
    const scaledHeight = contentHeight * scale;
    const offsetX = (stageWidth - scaledWidth) / 2;
    const offsetY = (stageHeight - scaledHeight) / 2;

    liveMinimapDoc.style.width = `${scaledWidth}px`;
    liveMinimapDoc.style.height = `${scaledHeight}px`;
    liveMinimapDoc.style.left = `${offsetX}px`;
    liveMinimapDoc.style.top = `${offsetY}px`;

    const viewportWidth = clampBetween(window.innerWidth * scale, 16, scaledWidth);
    const viewportHeight = clampBetween(window.innerHeight * scale, 16, scaledHeight);

    const maxScrollX = Math.max(0, contentWidth - window.innerWidth);
    const maxScrollY = Math.max(0, contentHeight - window.innerHeight);

    const viewportLeft = offsetX + (maxScrollX
      ? (window.scrollX / maxScrollX) * (scaledWidth - viewportWidth)
      : 0);
    const viewportTop = offsetY + (maxScrollY
      ? (window.scrollY / maxScrollY) * (scaledHeight - viewportHeight)
      : 0);

    liveMinimapViewport.style.width = `${viewportWidth}px`;
    liveMinimapViewport.style.height = `${viewportHeight}px`;
    liveMinimapViewport.style.left = `${viewportLeft}px`;
    liveMinimapViewport.style.top = `${viewportTop}px`;

    liveMinimapStage.dataset.mapScale = String(scale);
    liveMinimapStage.dataset.mapOffsetX = String(offsetX);
    liveMinimapStage.dataset.mapOffsetY = String(offsetY);
    liveMinimapStage.dataset.mapContentWidth = String(contentWidth);
    liveMinimapStage.dataset.mapContentHeight = String(contentHeight);

    if (liveMinimapMeta instanceof HTMLElement) {
      liveMinimapMeta.textContent = `Zoom ${Math.round(liveCanvasZoom * 100)}% · Y ${Math.round(window.scrollY)}px`;
    }
  };

  const panCanvasFromMinimapPointer = (clientX, clientY) => {
    if (!(liveMinimapStage instanceof HTMLElement)) return;

    const scale = Number.parseFloat(liveMinimapStage.dataset.mapScale || "");
    const offsetX = Number.parseFloat(liveMinimapStage.dataset.mapOffsetX || "");
    const offsetY = Number.parseFloat(liveMinimapStage.dataset.mapOffsetY || "");
    const contentWidth = Number.parseFloat(liveMinimapStage.dataset.mapContentWidth || "");
    const contentHeight = Number.parseFloat(liveMinimapStage.dataset.mapContentHeight || "");

    if (![scale, offsetX, offsetY, contentWidth, contentHeight].every(Number.isFinite) || scale <= 0) {
      return;
    }

    const rect = liveMinimapStage.getBoundingClientRect();
    const localX = clampBetween(clientX - rect.left, 0, rect.width);
    const localY = clampBetween(clientY - rect.top, 0, rect.height);

    const docX = clampBetween((localX - offsetX) / scale, 0, contentWidth);
    const docY = clampBetween((localY - offsetY) / scale, 0, contentHeight);

    const maxScrollX = Math.max(0, contentWidth - window.innerWidth);
    const maxScrollY = Math.max(0, contentHeight - window.innerHeight);

    const targetX = clampBetween(docX - (window.innerWidth / 2), 0, maxScrollX);
    const targetY = clampBetween(docY - (window.innerHeight / 2), 0, maxScrollY);

    window.scrollTo({ left: targetX, top: targetY, behavior: "auto" });
  };

  const clampCanvasZoomPercent = (value) => Math.min(100, Math.max(55, value));

  const normalizeCanvasZoomMode = (value) => {
    if (value === "fit") return "fit";
    const parsed = Number.parseFloat(String(value));
    if (!Number.isFinite(parsed)) return "1";
    const clamped = Math.min(1, Math.max(0.55, parsed));
    return String(Math.round(clamped * 100) / 100);
  };

  const setCanvasZoomMode = (nextMode, { announce = false } = {}) => {
    liveCanvasZoomMode = normalizeCanvasZoomMode(nextMode);
    applyViewportProfileToBody();
    updateCanvasZoomButtons();
    updateCanvasMinimap();

    if (!announce) return;

    if (liveCanvasZoomMode === "fit") {
      setLiveEditorStatus(`Canvas zoom set to Fit (${Math.round(liveCanvasZoom * 100)}%).`, "info");
      return;
    }

    setLiveEditorStatus(`Canvas zoom set to ${Math.round(liveCanvasZoom * 100)}%.`, "info");
  };

  const updateCanvasZoomButtons = () => {
    liveEditorRoot.querySelectorAll('[data-live-action="canvas-zoom"]').forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      const value = button.getAttribute("data-zoom") || "";
      const active = value === liveCanvasZoomMode;
      button.setAttribute("data-active", String(active));
      button.setAttribute("aria-pressed", String(active));
    });

    if (liveCanvasZoomInput instanceof HTMLInputElement) {
      liveCanvasZoomInput.value = String(clampCanvasZoomPercent(Math.round(liveCanvasZoom * 100)));
      liveCanvasZoomInput.disabled = liveCanvasZoomMode === "fit";
    }

    if (!(liveCanvasZoomLabel instanceof HTMLElement)) return;

    if (liveCanvasZoomMode === "fit") {
      liveCanvasZoomLabel.textContent = `Canvas zoom: Fit (${Math.round(liveCanvasZoom * 100)}%) · ⌘/Ctrl +/-/0`;
      return;
    }

    liveCanvasZoomLabel.textContent = `Canvas zoom: ${Math.round(liveCanvasZoom * 100)}% · ⌘/Ctrl +/-/0`;
  };

  const updateSelectedTypographyControls = () => {
    if (!(selectedNode instanceof HTMLElement) || !selectedNodeKey) {
      if (liveFontFamilyInput instanceof HTMLSelectElement) {
        liveFontFamilyInput.value = "";
      }
      if (liveFontSizeLabel instanceof HTMLElement) {
        liveFontSizeLabel.textContent = "Font size: default";
      }
      return;
    }

    const profiles = getActiveLayoutProfiles();
    let family = "";
    let size = "";
    for (const profile of profiles) {
      family = family || getTextOverride(`style.${selectedNodeKey}.fontFamily.${profile}`, "all") || "";
      size = size || getTextOverride(`style.${selectedNodeKey}.fontSize.${profile}`, "all") || "";
    }

    if (liveFontFamilyInput instanceof HTMLSelectElement) {
      liveFontFamilyInput.value = family || "";
    }

    if (liveFontSizeInput instanceof HTMLInputElement) {
      const parsed = Number.parseInt(String(size || ""), 10);
      liveFontSizeInput.value = Number.isFinite(parsed) ? String(parsed) : "16";
    }

    if (liveFontSizeLabel instanceof HTMLElement) {
      liveFontSizeLabel.textContent = size ? `Font size: ${size}` : "Font size: default";
    }
  };

  const updateVisibilityButtons = () => {
    const profile = getActiveViewportProfile();
    liveEditorRoot.querySelectorAll('[data-live-action="hide-selected"]').forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      button.textContent = `Hide (${profile})`;
    });

    liveEditorRoot.querySelectorAll('[data-live-action="show-selected"]').forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      button.textContent = `Show (${profile})`;
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
    const profile = getActiveViewportProfile();
    const translateKey = `layout.${key}.translate.${profile}`;

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
    setLiveEditorStatus(`Saved position (${profile}) for ${key}`, "success");
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
    updateLiveEditorSelectionOverlay();

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
    let originRect = null;
    let guideTargets = { x: [], y: [] };
    let spacingCandidates = [];

    const buildGuideTargets = () => {
      if (!(el instanceof HTMLElement)) return { x: [], y: [] };

      const candidates = [...document.querySelectorAll("[data-layout-key], [data-i18n], [data-i18n-placeholder], [data-image-key], [data-icon-key]")]
        .filter((node) => node instanceof HTMLElement && node !== el && node.offsetParent !== null);

      const x = [];
      const y = [];
      candidates.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (!Number.isFinite(rect.left) || !Number.isFinite(rect.top)) return;
        x.push(rect.left, rect.left + rect.width / 2, rect.right);
        y.push(rect.top, rect.top + rect.height / 2, rect.bottom);
      });

      return { x, y };
    };

    const buildSpacingCandidates = () => {
      if (!(el instanceof HTMLElement)) return [];

      return [...document.querySelectorAll("[data-layout-key], [data-i18n], [data-i18n-placeholder], [data-image-key], [data-icon-key]")]
        .filter((node) => node instanceof HTMLElement && node !== el && node.offsetParent !== null)
        .map((node) => node.getBoundingClientRect())
        .filter((rect) => Number.isFinite(rect.left) && Number.isFinite(rect.top) && Number.isFinite(rect.right) && Number.isFinite(rect.bottom));
    };

    const resolveMagneticAlignment = (rawNextX, rawNextY, shiftKey) => {
      if (!liveMagneticGuidesEnabled
        || shiftKey
        || !originRect
        || !Number.isFinite(originRect.left)
        || !Number.isFinite(originRect.top)) {
        clearLiveGuideLines();
        return {
          nextX: rawNextX,
          nextY: rawNextY,
          snappedX: false,
          snappedY: false
        };
      }

      const deltaX = rawNextX - originX;
      const deltaY = rawNextY - originY;
      const candidateRect = {
        left: originRect.left + deltaX,
        right: originRect.right + deltaX,
        top: originRect.top + deltaY,
        bottom: originRect.bottom + deltaY,
        centerX: originRect.left + (originRect.width / 2) + deltaX,
        centerY: originRect.top + (originRect.height / 2) + deltaY
      };

      const xSources = [candidateRect.left, candidateRect.centerX, candidateRect.right];
      const ySources = [candidateRect.top, candidateRect.centerY, candidateRect.bottom];

      let bestXAdjust = null;
      let bestXTarget = null;
      guideTargets.x.forEach((target) => {
        xSources.forEach((source) => {
          const adjust = target - source;
          if (Math.abs(adjust) > liveMagneticThreshold) return;
          if (bestXAdjust === null || Math.abs(adjust) < Math.abs(bestXAdjust)) {
            bestXAdjust = adjust;
            bestXTarget = target;
          }
        });
      });

      let bestYAdjust = null;
      let bestYTarget = null;
      guideTargets.y.forEach((target) => {
        ySources.forEach((source) => {
          const adjust = target - source;
          if (Math.abs(adjust) > liveMagneticThreshold) return;
          if (bestYAdjust === null || Math.abs(adjust) < Math.abs(bestYAdjust)) {
            bestYAdjust = adjust;
            bestYTarget = target;
          }
        });
      });

      const nextX = rawNextX + (bestXAdjust || 0);
      const nextY = rawNextY + (bestYAdjust || 0);

      setLiveGuideLine(liveEditorGuideVertical, bestXTarget !== null, "x", bestXTarget || 0);
      setLiveGuideLine(liveEditorGuideHorizontal, bestYTarget !== null, "y", bestYTarget || 0);

      return {
        nextX,
        nextY,
        snappedX: bestXAdjust !== null,
        snappedY: bestYAdjust !== null
      };
    };

    const onMove = (moveEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      if (!didMove && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
        didMove = true;
      }
      const rawNextX = originX + dx;
      const rawNextY = originY + dy;
      const aligned = resolveMagneticAlignment(rawNextX, rawNextY, moveEvent.shiftKey);
      const shouldSnap = liveSnapEnabled && !moveEvent.shiftKey;
      const nextX = shouldSnap && !aligned.snappedX
        ? Math.round(aligned.nextX / liveSnapGridSize) * liveSnapGridSize
        : aligned.nextX;
      const nextY = shouldSnap && !aligned.snappedY
        ? Math.round(aligned.nextY / liveSnapGridSize) * liveSnapGridSize
        : aligned.nextY;
      el.style.transform = `translate(${nextX}px, ${nextY}px)`;
      showLiveEditorHud({ key, x: nextX, y: nextY });
      updateLiveEditorQuickbarPosition();
      updateLiveEditorSelectionOverlay();

      if (originRect && Number.isFinite(originRect.left) && Number.isFinite(originRect.top)) {
        const deltaX = nextX - originX;
        const deltaY = nextY - originY;
        const movingRect = {
          left: originRect.left + deltaX,
          right: originRect.right + deltaX,
          top: originRect.top + deltaY,
          bottom: originRect.bottom + deltaY
        };
        updateLiveSpacingIndicators(movingRect, spacingCandidates);
      } else {
        clearLiveSpacingIndicators();
      }
    };

    const onUp = async () => {
      el.removeAttribute("data-dragging");
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      clearLiveGuideLines();
      clearLiveSpacingIndicators();

      if (didMove) {
        suppressLiveClickUntil = Date.now() + 260;
      }

      updateLiveEditorSelectionOverlay();

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
      originRect = el.getBoundingClientRect();
      guideTargets = buildGuideTargets();
      spacingCandidates = buildSpacingCandidates();
      clearLiveGuideLines();
      clearLiveSpacingIndicators();

      document.addEventListener("pointermove", onMove);
      document.addEventListener("pointerup", onUp);
    });
  };

  const ensureLayoutKeys = () => {
    const layoutSelectors = [
      "main",
      ".site-header",
      ".hero",
      ".hero-headline",
      ".hero-cta",
      ".hero-profile",
      ".hero-float.f1",
      ".hero-float.f2",
      ".hero-float.f3",
      ".hero-slide",
      ".leaf-image",
      ".product-card-media",
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
    document.body.appendChild(liveEditorQuickbar);
    document.body.appendChild(liveEditorSelectionOverlay);
    document.body.appendChild(liveEditorGuideVertical);
    document.body.appendChild(liveEditorGuideHorizontal);
    document.body.appendChild(liveEditorSpacingHorizontal);
    document.body.appendChild(liveEditorSpacingVertical);
    document.body.appendChild(liveEditorContextMenu);
    document.body.appendChild(liveEditorCommandPalette);
    document.body.classList.add("live-editor-enabled");

    liveEditorViewport = getViewportBreakpoint();
    liveCanvasMode = true;
    liveCanvasZoomMode = "fit";
    applyLiveEditorPanelPlacement();
    applyLiveEditorCollapsedState();
    applyLiveEditorBeginnerMode();
    applyLiveEditorPanelOpacity();
    updateLiveHudToggleButton();
    if (!liveEditorHudEnabled) {
      liveEditorHud.classList.remove("is-visible");
    }
    applyViewportProfileToBody();
    updateViewportButtons();
    updateVisibilityButtons();
    updateDragScopeButton();
    updateCanvasModeButton();
    updateSnapButton();
    updateMagneticButton();
    updateSnapSizeButtons();
    updateCanvasZoomButtons();
    updateCanvasMinimap();
    updateLiveElementEditorPanel();

    if (liveEditorEnabled) {
      document.body.classList.add("inspector-enabled");
      setLiveEditorStatus("Live editor active. Click content to edit.", "success");
    } else {
      setLiveEditorStatus("Missing token. Open this page from admin → Open live editor.", "error");
    }

    wireLiveEditableNodes();
    renderLiveSectionsNavigator();
    renderLiveActionHistory();
  }

  if (liveActionSearchInput instanceof HTMLInputElement) {
    liveActionSearchInput.addEventListener("input", () => {
      applyLiveActionSearchFilter(liveActionSearchInput.value);
    });

    liveActionSearchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        triggerFirstVisibleLiveSearchAction();
        return;
      }

      if (event.key === "Escape" && liveActionSearchInput.value) {
        event.preventDefault();
        liveActionSearchInput.value = "";
        applyLiveActionSearchFilter("");
        setLiveEditorStatus("Quick action search cleared.", "info");
      }
    });
  }

  if (liveEditorCommandPalette instanceof HTMLElement) {
    liveEditorCommandPalette.addEventListener("click", (event) => {
      if (event.target === liveEditorCommandPalette) {
        closeLiveCommandPalette({ focusSearch: true });
        return;
      }

      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const actionRow = target.closest("[data-live-command-index]");
      if (!(actionRow instanceof HTMLElement)) return;

      const index = Number.parseInt(actionRow.getAttribute("data-live-command-index") || "", 10);
      if (!Number.isFinite(index)) return;

      const ran = runLiveCommandAtIndex(index);
      closeLiveCommandPalette({ focusSearch: true });
      if (!ran) {
        setLiveEditorStatus("Action unavailable.", "info");
      }
    });
  }

  if (liveEditorCommandInput instanceof HTMLInputElement) {
    liveEditorCommandInput.addEventListener("input", () => {
      renderLiveCommandPalette(liveEditorCommandInput.value);
    });

    liveEditorCommandInput.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setLiveCommandActiveItem(liveEditorCommandActiveIndex + 1);
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setLiveCommandActiveItem(liveEditorCommandActiveIndex - 1);
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        const ran = runLiveCommandAtIndex(liveEditorCommandActiveIndex);
        closeLiveCommandPalette({ focusSearch: true });
        if (!ran) {
          setLiveEditorStatus("No matching action to run.", "info");
        }
        return;
      }

      if (event.key === "Tab" && !event.shiftKey) {
        event.preventDefault();
        completeLiveCommandFromTopResult();
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeLiveCommandPalette({ focusSearch: true });
      }
    });
  }

  if (liveSectionsNavigatorRoot instanceof HTMLElement && liveSectionsNavigatorList instanceof HTMLElement) {
    liveSectionsNavigatorRoot.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const batchButton = target.closest("[data-live-sections-batch-action]");
      if (batchButton instanceof HTMLElement) {
        const action = batchButton.getAttribute("data-live-sections-batch-action") || "";
        const keys = [...liveSectionsSelectedKeys];
        if (!keys.length) return;

        if (action === "show" || action === "hide") {
          const hidden = action === "hide";
          void (async () => {
            for (const key of keys) {
              await setSectionVisibilityByKey(key, hidden);
            }
            applyLayoutOverrides();
            renderLiveSectionsNavigator();
            setLiveEditorStatus(`${hidden ? "Hidden" : "Shown"} ${keys.length} section${keys.length === 1 ? "" : "s"}.`, "success");
          })();
          return;
        }

        if (action === "remove") {
          const confirmed = window.confirm(`Remove ${keys.length} selected section${keys.length === 1 ? "" : "s"}?`);
          if (!confirmed) return;

          void (async () => {
            let removed = 0;
            for (const key of keys) {
              const done = await removeSectionByKey(key);
              if (done) removed += 1;
            }
            liveSectionsSelectedKeys.clear();
            applyLayoutOverrides();
            renderLiveSectionsNavigator();
            setLiveEditorStatus(`Removed ${removed} section${removed === 1 ? "" : "s"}.`, "success");
          })();
          return;
        }
      }

      const actionButton = target.closest("[data-live-section-action]");
      if (actionButton instanceof HTMLElement) {
        const action = actionButton.getAttribute("data-live-section-action") || "";
        const item = actionButton.closest(".live-sections-navigator__item");
        const key = item instanceof HTMLElement ? (item.getAttribute("data-section-key") || "") : "";
        if (!key) return;

        const section = document.querySelector(`section[data-layout-key="${key}"]`);
        if (!(section instanceof HTMLElement)) return;

        setSelectedNode(section, key);

        if (action === "duplicate") {
          void duplicateSelectedNode().then(() => {
            renderLiveSectionsNavigator();
          });
          return;
        }

        if (action === "toggle-visibility") {
          void toggleSectionVisibilityByKey(key);
          return;
        }

        if (action === "remove") {
          void removeSectionByKey(key).then(() => {
            renderLiveSectionsNavigator();
          });
          return;
        }
      }

      const jumpButton = target.closest("[data-live-section-jump]");
      if (!(jumpButton instanceof HTMLElement)) return;

      const key = jumpButton.getAttribute("data-live-section-jump") || "";
      if (!key) return;

      const section = document.querySelector(`section[data-layout-key="${key}"]`);
      if (!(section instanceof HTMLElement)) return;

      const isRangeSelect = event.shiftKey;
      const isAdditive = event.metaKey || event.ctrlKey;

      if (isRangeSelect && liveSectionsMultiSelectAnchorKey) {
        const keys = getNavigatorSectionKeys();
        const anchorIndex = keys.indexOf(liveSectionsMultiSelectAnchorKey);
        const targetIndex = keys.indexOf(key);
        if (anchorIndex >= 0 && targetIndex >= 0) {
          const [start, end] = anchorIndex < targetIndex
            ? [anchorIndex, targetIndex]
            : [targetIndex, anchorIndex];
          liveSectionsSelectedKeys.clear();
          keys.slice(start, end + 1).forEach((k) => liveSectionsSelectedKeys.add(k));
        }
      } else if (isAdditive) {
        if (liveSectionsSelectedKeys.has(key)) {
          liveSectionsSelectedKeys.delete(key);
        } else {
          liveSectionsSelectedKeys.add(key);
        }
        liveSectionsMultiSelectAnchorKey = key;
      } else {
        liveSectionsSelectedKeys.clear();
        liveSectionsSelectedKeys.add(key);
        liveSectionsMultiSelectAnchorKey = key;
      }

      setSelectedNode(section, key);
      section.scrollIntoView({ behavior: "smooth", block: "center" });
      setLiveEditorStatus(`Jumped to section: ${getSectionDisplayName(section)} · ${liveSectionsSelectedKeys.size} selected`, "info");
    });

    liveSectionsNavigatorList.addEventListener("dragstart", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const item = target.closest(".live-sections-navigator__item");
      if (!(item instanceof HTMLElement)) return;

      const key = item.getAttribute("data-section-key") || "";
      if (!key) return;

      liveSectionsNavigatorDragKey = key;
      item.classList.add("is-dragging");
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", key);
      }
    });

    liveSectionsNavigatorList.addEventListener("dragend", () => {
      liveSectionsNavigatorDragKey = "";
      liveSectionsNavigatorList.querySelectorAll(".live-sections-navigator__item").forEach((node) => {
        if (node instanceof HTMLElement) {
          node.classList.remove("is-dragging", "is-drop-target");
        }
      });
    });

    liveSectionsNavigatorList.addEventListener("dragover", (event) => {
      event.preventDefault();
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const item = target.closest(".live-sections-navigator__item");
      if (!(item instanceof HTMLElement)) return;

      liveSectionsNavigatorList.querySelectorAll(".live-sections-navigator__item").forEach((node) => {
        if (node instanceof HTMLElement) node.classList.remove("is-drop-target");
      });
      item.classList.add("is-drop-target");
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "move";
      }
    });

    liveSectionsNavigatorList.addEventListener("drop", (event) => {
      event.preventDefault();
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const targetItem = target.closest(".live-sections-navigator__item");
      if (!(targetItem instanceof HTMLElement)) return;

      const targetKey = targetItem.getAttribute("data-section-key") || "";
      const sourceKey = liveSectionsNavigatorDragKey || (event.dataTransfer?.getData("text/plain") || "");
      if (!sourceKey || !targetKey || sourceKey === targetKey) return;

      const sourceSection = document.querySelector(`section[data-layout-key="${sourceKey}"]`);
      const targetSection = document.querySelector(`section[data-layout-key="${targetKey}"]`);
      if (!(sourceSection instanceof HTMLElement) || !(targetSection instanceof HTMLElement)) return;
      if (sourceSection.parentElement !== targetSection.parentElement) return;

      const parent = sourceSection.parentElement;
      if (!(parent instanceof HTMLElement)) return;

      parent.insertBefore(sourceSection, targetSection);
      void persistParentChildOrder(parent);
      renderLiveSectionsNavigator();
      setSelectedNode(sourceSection, sourceKey);
      setLiveEditorStatus(`Reordered section: ${getSectionDisplayName(sourceSection)}`, "success");
    });
  }

  if (liveEditorHudCopyButton instanceof HTMLButtonElement) {
    liveEditorHudCopyButton.addEventListener("click", () => {
      void copySelectedCoords();
    });
  }

  if (liveEditorHudResetButton instanceof HTMLButtonElement) {
    liveEditorHudResetButton.addEventListener("click", () => {
      void resetSelectedCoords();
    });
  }

  if (liveEditorHudVisibilityButton instanceof HTMLButtonElement) {
    liveEditorHudVisibilityButton.addEventListener("click", () => {
      void resetSelectedVisibility();
    });
  }

  liveEditorQuickbar.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const action = target.getAttribute("data-live-quick-action");
    if (!action) return;

    if (!selectedNodeKey || !(selectedNode instanceof HTMLElement)) {
      setLiveEditorStatus("Select an element first.", "info");
      return;
    }

    if (action === "edit") {
      const details = getInspectorDetails(selectedNode);
      await editNodeByDetails(selectedNode, details);
      return;
    }

    if (action === "duplicate") {
      await duplicateSelectedNode();
      return;
    }

    if (action === "remove") {
      await removeSelectedNode();
      updateLiveEditorQuickbarPosition();
      return;
    }

    if (action === "reset-pos") {
      await resetSelectedCoords();
      return;
    }

    if (action === "toggle-visibility") {
      const profile = getActiveViewportProfile();
      const hiddenKey = `layout.${selectedNodeKey}.hidden.${profile}`;
      const isHidden = isSelectedNodeHiddenOnActiveProfile();

      if (isHidden) {
        await deleteLiveOverride({ key: hiddenKey, type: "text", language: "all" });
        delete siteContentOverrides.textByKey[hiddenKey];
      } else {
        await saveLiveOverride({ key: hiddenKey, value: "1", type: "text", language: "all" });
        if (!siteContentOverrides.textByKey[hiddenKey]) {
          siteContentOverrides.textByKey[hiddenKey] = {};
        }
        siteContentOverrides.textByKey[hiddenKey].all = "1";
      }

      applyLayoutOverrides();
      selectedNodeDetails = getInspectorDetails(selectedNode);
      updateLiveElementEditorPanel();
      updateLiveEditorQuickbarPosition();
      updateLiveEditorSelectionOverlay();
      setLiveEditorStatus(`${isHidden ? "Shown" : "Hidden"} ${selectedNodeKey} on ${profile}`, "success");
    }
  });

  liveEditorContextMenu.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const action = target.getAttribute("data-live-context-action");
    if (!action) return;

    if (!selectedNodeKey || !(selectedNode instanceof HTMLElement)) {
      hideLiveEditorContextMenu();
      setLiveEditorStatus("Select an element first.", "info");
      return;
    }

    if (action === "edit") {
      await editNodeByDetails(selectedNode, getInspectorDetails(selectedNode));
      hideLiveEditorContextMenu();
      return;
    }

    if (action === "duplicate") {
      await duplicateSelectedNode();
      hideLiveEditorContextMenu();
      return;
    }

    if (action === "reset-pos") {
      await resetSelectedCoords();
      hideLiveEditorContextMenu();
      return;
    }

    if (action === "remove") {
      await removeSelectedNode();
      hideLiveEditorContextMenu();
      return;
    }

    if (action === "toggle-visibility") {
      const profile = getActiveViewportProfile();
      const hiddenKey = `layout.${selectedNodeKey}.hidden.${profile}`;
      const isHidden = isSelectedNodeHiddenOnActiveProfile();

      if (isHidden) {
        await deleteLiveOverride({ key: hiddenKey, type: "text", language: "all" });
        delete siteContentOverrides.textByKey[hiddenKey];
      } else {
        await saveLiveOverride({ key: hiddenKey, value: "1", type: "text", language: "all" });
        if (!siteContentOverrides.textByKey[hiddenKey]) {
          siteContentOverrides.textByKey[hiddenKey] = {};
        }
        siteContentOverrides.textByKey[hiddenKey].all = "1";
      }

      applyLayoutOverrides();
      selectedNodeDetails = getInspectorDetails(selectedNode);
      updateLiveElementEditorPanel();
      updateLiveEditorSelectionOverlay();
      updateLiveEditorQuickbarPosition();
      updateLiveEditorContextMenuVisibilityLabel();
      hideLiveEditorContextMenu();
      setLiveEditorStatus(`${isHidden ? "Shown" : "Hidden"} ${selectedNodeKey} on ${profile}`, "success");
    }
  });

  if (liveResolutionInput instanceof HTMLInputElement) {
    liveResolutionInput.addEventListener("input", () => {
      liveEditorViewport = `w${liveResolutionInput.value}`;
      applyViewportProfileToBody();
      updateCanvasZoomButtons();
      updateCanvasMinimap();
      updateViewportButtons();
      updateVisibilityButtons();
      applyLayoutOverrides();
      updateSelectedTypographyControls();
      updateLiveEditorSelectionOverlay();
      setLiveEditorStatus(`Editing custom resolution ${liveResolutionInput.value}px`, "info");
    });
  }

  if (liveCanvasZoomInput instanceof HTMLInputElement) {
    liveCanvasZoomInput.addEventListener("input", () => {
      const percent = clampCanvasZoomPercent(Number.parseInt(liveCanvasZoomInput.value, 10) || 100);
      setCanvasZoomMode(String(percent / 100));
    });

    liveCanvasZoomInput.addEventListener("change", () => {
      setLiveEditorStatus(`Canvas zoom set to ${Math.round(liveCanvasZoom * 100)}%.`, "info");
    });
  }

  if (livePanelOpacityInput instanceof HTMLInputElement) {
    livePanelOpacityInput.addEventListener("input", () => {
      const parsed = Number.parseInt(livePanelOpacityInput.value, 10);
      liveEditorPanelOpacity = Number.isFinite(parsed)
        ? Math.min(100, Math.max(55, parsed))
        : 95;
      applyLiveEditorPanelOpacity();
    });

    livePanelOpacityInput.addEventListener("change", () => {
      localStorage.setItem(LIVE_EDITOR_PANEL_OPACITY_KEY, String(liveEditorPanelOpacity));
      setLiveEditorStatus(`Panel opacity set to ${liveEditorPanelOpacity}%.`, "info");
    });
  }

  if (liveSectionHeightInput instanceof HTMLInputElement) {
    liveSectionHeightInput.addEventListener("input", () => {
      if (liveSectionHeightLabel instanceof HTMLElement) {
        liveSectionHeightLabel.textContent = `Section min height: ${liveSectionHeightInput.value}px`;
      }
    });

    liveSectionHeightInput.addEventListener("change", () => {
      void saveSelectedSectionMinHeight();
    });
  }

  if (liveSectionTemplateSelect instanceof HTMLSelectElement) {
    liveSectionTemplateSelect.addEventListener("change", () => {
      setLiveEditorStatus(`Section template: ${liveSectionTemplateSelect.value}`, "info");
      updateLiveElementEditorPanel();
    });
  }

  if (liveElementEditorRoot instanceof HTMLElement) {
    liveElementEditorRoot.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const template = target.getAttribute("data-live-section-template") || "";
      if (!template || !(liveSectionTemplateSelect instanceof HTMLSelectElement)) return;

      if (liveSectionTemplateSelect.value !== template) {
        liveSectionTemplateSelect.value = template;
        setLiveEditorStatus(`Section template: ${template}`, "info");
      }

      updateLiveElementEditorPanel();
    });
  }

  if (liveMinimapStage instanceof HTMLElement) {
    const onMinimapPointerMove = (event) => {
      if (!minimapPointerDown) return;
      panCanvasFromMinimapPointer(event.clientX, event.clientY);
    };

    const onMinimapPointerUp = (event) => {
      minimapPointerDown = false;
      liveMinimapStage.classList.remove("is-dragging");
      if (liveMinimapStage.hasPointerCapture(event.pointerId)) {
        liveMinimapStage.releasePointerCapture(event.pointerId);
      }
    };

    liveMinimapStage.addEventListener("pointerdown", (event) => {
      if (!liveCanvasMode) return;
      event.preventDefault();
      minimapPointerDown = true;
      liveMinimapStage.classList.add("is-dragging");
      liveMinimapStage.setPointerCapture(event.pointerId);
      panCanvasFromMinimapPointer(event.clientX, event.clientY);
    });

    liveMinimapStage.addEventListener("pointermove", onMinimapPointerMove);
    liveMinimapStage.addEventListener("pointerup", onMinimapPointerUp);
    liveMinimapStage.addEventListener("pointercancel", onMinimapPointerUp);
  }

  if (liveFontFamilyInput instanceof HTMLSelectElement) {
    liveFontFamilyInput.addEventListener("change", () => {
      void saveSelectedTypography({ family: liveFontFamilyInput.value.trim(), size: undefined });
    });
  }

  if (liveFontSizeInput instanceof HTMLInputElement) {
    liveFontSizeInput.addEventListener("input", () => {
      if (liveFontSizeLabel instanceof HTMLElement) {
        liveFontSizeLabel.textContent = `Font size: ${liveFontSizeInput.value}px`;
      }
    });

    liveFontSizeInput.addEventListener("change", () => {
      void saveSelectedTypography({ size: `${liveFontSizeInput.value}px`, family: undefined });
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

    if (target.getAttribute("data-history-action") === "clear-reverted") {
      const before = liveActionHistory.length;
      const kept = liveActionHistory.filter((entry) => !entry.reverted);
      const removed = before - kept.length;

      if (!removed) {
        setLiveEditorStatus("No reverted actions to clear.", "info");
        return;
      }

      liveActionHistory.length = 0;
      liveActionHistory.push(...kept);
      renderLiveActionHistory();
      setLiveEditorStatus(`Cleared ${removed} reverted action${removed === 1 ? "" : "s"}.`, "success");
      return;
    }

    const historyFilter = target.getAttribute("data-history-filter");
    if (historyFilter === "all" || historyFilter === "position" || historyFilter === "visibility" || historyFilter === "content") {
      liveActionHistoryFilter = historyFilter;
      renderLiveActionHistory();
      return;
    }

    const historyAction = target.getAttribute("data-history-action");
    if (historyAction === "revert") {
      const idRaw = target.getAttribute("data-history-id") || "";
      const id = Number.parseInt(idRaw, 10);
      if (!Number.isFinite(id)) return;

      const entry = liveActionHistory.find((item) => item.id === id);
      if (!entry || entry.reverted) return;

      if (pendingOperations.length) {
        await flushPendingOperations();
      }

      const result = await executeOperation(entry.inverseOperation);
      if (!result.ok) {
        setLiveEditorStatus(`History revert failed: ${result.message}`, "error");
        return;
      }

      setLocalValue({
        key: entry.inverseOperation.payload.key,
        type: entry.inverseOperation.payload.type,
        language: entry.inverseOperation.payload.language,
        value: operationToLocalValue(entry.inverseOperation)
      });

      const redo = buildInverseOperation(entry.inverseOperation);
      undoStack.push(redo);
      if (undoStack.length > 60) undoStack.shift();

      entry.reverted = true;
      renderLiveActionHistory();
      setLiveEditorStatus(`Reverted: ${entry.label}`, "success");
      return;
    }

    const elementAction = target.getAttribute("data-live-element-action");
    if (elementAction) {
      if (!selectedNodeKey || !(selectedNode instanceof HTMLElement)) {
        setLiveEditorStatus("Select an element first.", "info");
        return;
      }

      if (elementAction === "save-text") {
        await saveSelectedElementTextFromPanel();
        return;
      }

      if (elementAction === "save-image-url") {
        await saveSelectedElementImageUrlFromPanel();
        return;
      }

      if (elementAction === "upload-image") {
        await uploadSelectedElementImageFromPanel();
        return;
      }

      if (elementAction === "add-section-above") {
        await addSectionNearSelected("above");
        return;
      }

      if (elementAction === "add-section-below") {
        await addSectionNearSelected("below");
        return;
      }

      if (elementAction === "remove-section") {
        await removeSelectedSection();
        return;
      }

      if (elementAction === "move-up") {
        if (!await moveSelectedNodeInFlow("up")) {
          nudgeSelectedNode(0, -liveSnapGridSize);
        }
        return;
      }

      if (elementAction === "move-down") {
        if (!await moveSelectedNodeInFlow("down")) {
          nudgeSelectedNode(0, liveSnapGridSize);
        }
        return;
      }

      if (elementAction === "move-top") {
        if (!await moveSelectedNodeInFlow("top")) {
          setLiveEditorStatus("Move to top is unavailable for this selection.", "info");
        }
        return;
      }

      if (elementAction === "move-bottom") {
        if (!await moveSelectedNodeInFlow("bottom")) {
          setLiveEditorStatus("Move to bottom is unavailable for this selection.", "info");
        }
        return;
      }

      if (elementAction === "move-left") {
        nudgeSelectedNode(-liveSnapGridSize, 0);
        return;
      }

      if (elementAction === "move-right") {
        nudgeSelectedNode(liveSnapGridSize, 0);
        return;
      }

      if (elementAction === "duplicate") {
        await duplicateSelectedNode();
        return;
      }

      if (elementAction === "normalize-spacing") {
        if (!await normalizeSelectedParentSpacing()) {
          setLiveEditorStatus("Normalize spacing is unavailable for this selection.", "info");
        }
        return;
      }

      if (elementAction === "remove") {
        await removeSelectedNode();
        return;
      }

      if (elementAction === "toggle-visibility") {
        const profile = getActiveViewportProfile();
        const hiddenKey = `layout.${selectedNodeKey}.hidden.${profile}`;
        const isHidden = isSelectedNodeHiddenOnActiveProfile();

        if (isHidden) {
          await deleteLiveOverride({ key: hiddenKey, type: "text", language: "all" });
          delete siteContentOverrides.textByKey[hiddenKey];
        } else {
          await saveLiveOverride({ key: hiddenKey, value: "1", type: "text", language: "all" });
          if (!siteContentOverrides.textByKey[hiddenKey]) {
            siteContentOverrides.textByKey[hiddenKey] = {};
          }
          siteContentOverrides.textByKey[hiddenKey].all = "1";
        }

        applyLayoutOverrides();
        selectedNodeDetails = getInspectorDetails(selectedNode);
        updateLiveElementEditorPanel();
        updateLiveEditorQuickbarPosition();
        updateLiveEditorSelectionOverlay();
        setLiveEditorStatus(`${isHidden ? "Shown" : "Hidden"} ${selectedNodeKey} on ${profile}`, "success");
        return;
      }
    }

    const action = target.getAttribute("data-live-action");
    if (!action) return;

    if (action === "viewport") {
      const viewport = target.getAttribute("data-viewport");
      if (viewport !== "desktop" && viewport !== "tablet" && viewport !== "mobile") return;

      liveEditorViewport = viewport;
      applyViewportProfileToBody();
      updateCanvasZoomButtons();
      updateCanvasMinimap();
      updateViewportButtons();
      updateVisibilityButtons();
      applyLayoutOverrides();
      updateSelectedTypographyControls();
      updateLiveEditorSelectionOverlay();
      setLiveEditorStatus(`Editing ${viewport} layout`, "info");
      return;
    }

    if (action === "viewport-profile") {
      return;
    }

    if (action === "set-dock") {
      const dock = target.getAttribute("data-dock") || "";
      if (!(dock === "right" || dock === "left" || dock === "bottom")) return;
      liveEditorDock = dock;
      localStorage.setItem(LIVE_EDITOR_DOCK_KEY, liveEditorDock);
      applyLiveEditorPanelPlacement();
      applyViewportProfileToBody();
      updateCanvasZoomButtons();
      updateCanvasMinimap();
      updateLiveEditorQuickbarPosition();
      updateLiveEditorSelectionOverlay();
      setLiveEditorStatus(`Editor panel moved to ${dock}.`, "info");
      return;
    }

    if (action === "toggle-compact") {
      liveEditorCompact = !liveEditorCompact;
      localStorage.setItem(LIVE_EDITOR_COMPACT_KEY, String(liveEditorCompact));
      applyLiveEditorPanelPlacement();
      applyViewportProfileToBody();
      updateCanvasZoomButtons();
      updateCanvasMinimap();
      updateLiveEditorQuickbarPosition();
      updateLiveEditorSelectionOverlay();
      setLiveEditorStatus(`Minimal panel ${liveEditorCompact ? "enabled" : "disabled"}.`, "info");
      return;
    }

    if (action === "toggle-collapse") {
      liveEditorCollapsed = !liveEditorCollapsed;
      localStorage.setItem(LIVE_EDITOR_COLLAPSED_KEY, String(liveEditorCollapsed));
      applyLiveEditorCollapsedState();
      applyViewportProfileToBody();
      updateCanvasZoomButtons();
      updateCanvasMinimap();
      updateLiveEditorQuickbarPosition();
      updateLiveEditorSelectionOverlay();
      setLiveEditorStatus(`Editor ${liveEditorCollapsed ? "collapsed" : "expanded"}.`, "info");
      return;
    }

    if (action === "toggle-beginner") {
      liveEditorBeginner = !liveEditorBeginner;
      localStorage.setItem(LIVE_EDITOR_BEGINNER_KEY, String(liveEditorBeginner));
      applyLiveEditorBeginnerMode();
      setLiveEditorStatus(`Ease mode ${liveEditorBeginner ? "enabled" : "disabled"}.`, "info");
      return;
    }

    if (action === "toggle-hud") {
      liveEditorHudEnabled = !liveEditorHudEnabled;
      localStorage.setItem(LIVE_EDITOR_HUD_VISIBLE_KEY, String(liveEditorHudEnabled));
      updateLiveHudToggleButton();
      if (!liveEditorHudEnabled) {
        liveEditorHud.classList.remove("is-visible");
      } else if (selectedNode instanceof HTMLElement && selectedNodeKey) {
        const { x, y } = getTranslateFromElement(selectedNode);
        showLiveEditorHud({ key: selectedNodeKey, x, y });
      }
      setLiveEditorStatus(`Coordinates popup ${liveEditorHudEnabled ? "enabled" : "disabled"}.`, "info");
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

    if (action === "toggle-snap") {
      liveSnapEnabled = !liveSnapEnabled;
      updateSnapButton();
      updateSnapSizeButtons();
      setLiveEditorStatus(
        liveSnapEnabled
          ? `Snap enabled (${liveSnapGridSize}px). Hold Shift while dragging to bypass.`
          : "Snap disabled.",
        "info"
      );
      return;
    }

    if (action === "toggle-magnetic") {
      liveMagneticGuidesEnabled = !liveMagneticGuidesEnabled;
      if (!liveMagneticGuidesEnabled) {
        clearLiveGuideLines();
      }
      updateMagneticButton();
      setLiveEditorStatus(
        liveMagneticGuidesEnabled
          ? `Magnetic guides enabled (±${liveMagneticThreshold}px). Hold Shift while dragging to bypass.`
          : "Magnetic guides disabled.",
        "info"
      );
      return;
    }

    if (action === "snap-size") {
      const next = Number.parseInt(target.getAttribute("data-size") || "", 10);
      if (![4, 8, 12, 24].includes(next)) return;
      liveSnapGridSize = next;
      updateSnapButton();
      updateSnapSizeButtons();
      setLiveEditorStatus(`Snap size set to ${liveSnapGridSize}px.`, "info");
      return;
    }

    if (action === "toggle-canvas") {
      liveCanvasMode = !liveCanvasMode;
      applyViewportProfileToBody();
      updateCanvasModeButton();
      updateCanvasZoomButtons();
      updateCanvasMinimap();
      setLiveEditorStatus(`Canvas mode ${liveCanvasMode ? "enabled" : "disabled"}.`, "info");
      return;
    }

    if (action === "canvas-zoom") {
      const zoom = target.getAttribute("data-zoom") || "";
      if (!(zoom === "fit" || /^(0\.75|0\.9|1)$/.test(zoom))) return;
      setCanvasZoomMode(zoom, { announce: true });
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

    if (action === "duplicate-selected") {
      await duplicateSelectedNode();
      return;
    }

    if (action === "remove-selected") {
      await removeSelectedNode();
      return;
    }

    if (action === "restore-selected") {
      if (!selectedNodeKey) {
        setLiveEditorStatus("Select any editable element first.", "info");
        return;
      }
      const profile = getActiveViewportProfile();
      const hiddenKey = `layout.${selectedNodeKey}.hidden.${profile}`;
      await deleteLiveOverride({ key: hiddenKey, type: "text", language: "all" });
      delete siteContentOverrides.textByKey[hiddenKey];
      applyLayoutOverrides();
      updateLiveEditorSelectionOverlay();
      setLiveEditorStatus(`Restored ${selectedNodeKey} on ${profile}`, "success");
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

      const profile = getActiveViewportProfile();
      const hiddenKey = `layout.${selectedNodeKey}.hidden.${profile}`;
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
      updateLiveEditorSelectionOverlay();
      setLiveEditorStatus(
        `${action === "hide-selected" ? "Hidden" : "Shown"} ${selectedNodeKey} on ${profile}`,
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

  const selectLocalImageFile = () => new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.style.position = "fixed";
    input.style.opacity = "0";
    input.style.pointerEvents = "none";
    document.body.appendChild(input);

    const cleanup = () => {
      input.remove();
    };

    input.addEventListener("change", () => {
      const file = input.files && input.files[0] ? input.files[0] : null;
      cleanup();
      resolve(file);
    }, { once: true });

    input.click();

    window.setTimeout(() => {
      if (!document.body.contains(input)) return;
      if (input.files && input.files.length) return;
      cleanup();
      resolve(null);
    }, 60000);
  });

  const loadImageElementFromFile = (file) => new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not decode selected image file."));
    };
    image.src = url;
  });

  const optimizeImageFileForWeb = async (file) => {
    const sourceImage = await loadImageElementFromFile(file);
    const maxDimension = 1920;
    const quality = 0.82;

    const sourceWidth = Math.max(1, sourceImage.naturalWidth || sourceImage.width || 1);
    const sourceHeight = Math.max(1, sourceImage.naturalHeight || sourceImage.height || 1);
    const scale = Math.min(1, maxDimension / Math.max(sourceWidth, sourceHeight));
    const targetWidth = Math.max(1, Math.round(sourceWidth * scale));
    const targetHeight = Math.max(1, Math.round(sourceHeight * scale));

    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      throw new Error("Unable to initialize image optimizer canvas.");
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(sourceImage, 0, 0, targetWidth, targetHeight);

    let dataUrl = canvas.toDataURL("image/webp", quality);
    if (!/^data:image\/webp/i.test(dataUrl)) {
      dataUrl = canvas.toDataURL("image/jpeg", 0.84);
    }

    const base64Payload = dataUrl.split(",")[1] || "";
    const estimatedBytes = Math.ceil(base64Payload.length * 0.75);

    return {
      dataUrl,
      width: targetWidth,
      height: targetHeight,
      estimatedKb: Math.max(1, Math.round(estimatedBytes / 1024))
    };
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

      if (liveEditorRoot.contains(event.target)
        || liveEditorHud.contains(event.target)
        || liveEditorContextMenu.contains(event.target)
        || inspectorRoot.contains(event.target)) return;

      hideLiveEditorContextMenu();

      const node = getInspectorNode(event.target);
      if (!node) return;

      const details = getInspectorDetails(node);
      if (!details.key) return;

      if (node instanceof HTMLElement) {
        setSelectedNode(node, details.key);
      }

      if (details.type === "layout") {
        setLiveEditorStatus(`Selected ${details.key}. Drag to move.`, "info");
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (details.type === "image" && /^hero\.slide\.\d+$/.test(details.key)) {
        selectedHeroSlideKey = details.key;
      }

      if (details.type === "image") {
        setLiveEditorStatus(`Selected ${details.key}. Double-click (or Edit) to change image.`, "info");
      } else {
        setLiveEditorStatus(`Selected ${details.key}. Double-click (or Edit) to modify.`, "info");
      }

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

  document.addEventListener("dblclick", (event) => {
    if (!liveEditorEnabled) return;
    if (liveEditorRoot.contains(event.target)
      || liveEditorHud.contains(event.target)
      || liveEditorQuickbar.contains(event.target)
      || liveEditorContextMenu.contains(event.target)
      || inspectorRoot.contains(event.target)) return;

    const node = getInspectorNode(event.target);
    if (!(node instanceof HTMLElement)) return;

    const details = getInspectorDetails(node);
    if (!details.key || details.type === "layout") return;

    event.preventDefault();
    event.stopPropagation();
    void editNodeByDetails(node, details);
  }, true);

  document.addEventListener("contextmenu", (event) => {
    if (!liveEditorEnabled) return;
    if (liveEditorRoot.contains(event.target)
      || liveEditorHud.contains(event.target)
      || liveEditorQuickbar.contains(event.target)
      || liveEditorContextMenu.contains(event.target)
      || inspectorRoot.contains(event.target)) {
      return;
    }

    const node = getInspectorNode(event.target);
    if (!(node instanceof HTMLElement)) {
      hideLiveEditorContextMenu();
      return;
    }

    const details = getInspectorDetails(node);
    if (!details.key) {
      hideLiveEditorContextMenu();
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    setSelectedNode(node, details.key);
    showLiveEditorContextMenu(event.clientX, event.clientY);
  }, true);

  document.addEventListener("keydown", (event) => {
    if (editorParam === "1" && (event.metaKey || event.ctrlKey) && !event.altKey && event.key.toLowerCase() === "k") {
      event.preventDefault();
      event.stopPropagation();

      if (liveEditorCommandOpen) {
        closeLiveCommandPalette({ focusSearch: true });
      } else {
        openLiveCommandPalette();
      }
      return;
    }

    if (liveEditorCommandOpen && event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      closeLiveCommandPalette({ focusSearch: true });
      return;
    }

    if (liveEditorEnabled && (event.metaKey || event.ctrlKey) && !event.altKey) {
      if (isTextInputContext(event.target)) return;

      const key = event.key;
      const isZoomIn = key === "+" || key === "=";
      const isZoomOut = key === "-" || key === "_";
      const isZoomReset = key === "0";
      const isDuplicate = key.toLowerCase() === "d";
      const isToggleEditor = key.toLowerCase() === "e";
      const isSaveNow = key.toLowerCase() === "s";

      if (isToggleEditor) {
        event.preventDefault();
        event.stopPropagation();
        liveEditorCollapsed = !liveEditorCollapsed;
        localStorage.setItem(LIVE_EDITOR_COLLAPSED_KEY, String(liveEditorCollapsed));
        applyLiveEditorCollapsedState();
        applyViewportProfileToBody();
        updateCanvasZoomButtons();
        updateCanvasMinimap();
        updateLiveEditorQuickbarPosition();
        updateLiveEditorSelectionOverlay();
        setLiveEditorStatus(`Editor ${liveEditorCollapsed ? "collapsed" : "expanded"}.`, "info");
        return;
      }

      if (isSaveNow) {
        event.preventDefault();
        event.stopPropagation();
        void flushPendingOperations();
        return;
      }

      if (isZoomIn || isZoomOut || isZoomReset) {
        event.preventDefault();
        event.stopPropagation();

        if (isZoomReset) {
          setCanvasZoomMode("1", { announce: true });
          return;
        }

        const currentPercent = clampCanvasZoomPercent(Math.round(liveCanvasZoom * 100));
        const nextPercent = clampCanvasZoomPercent(currentPercent + (isZoomIn ? 5 : -5));
        setCanvasZoomMode(String(nextPercent / 100), { announce: true });
        return;
      }

      if (isDuplicate) {
        event.preventDefault();
        event.stopPropagation();
        void duplicateSelectedNode();
        return;
      }
    }

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
      return;
    }

    if (liveEditorEnabled && event.key === "Escape") {
      hideLiveEditorContextMenu();
      return;
    }

    if (liveEditorEnabled && (event.key === "Delete" || event.key === "Backspace")) {
      if (isTextInputContext(event.target)) return;
      if (liveEditorRoot.contains(event.target) || liveEditorContextMenu.contains(event.target)) return;
      if (!selectedNodeKey) return;

      event.preventDefault();
      event.stopPropagation();
      void removeSelectedNode();
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
    applyStoredDuplicateNodes();
    applyStoredParentOrders();
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
    if (editorParam === "1" && liveCanvasZoomMode === "fit") {
      applyViewportProfileToBody();
      updateCanvasZoomButtons();
      updateCanvasMinimap();
    }

    if (editorParam === "1" && liveEditorViewport === "auto") {
      applyViewportProfileToBody();
      updateCanvasZoomButtons();
      updateCanvasMinimap();
      updateViewportButtons();
      updateVisibilityButtons();
    }
    applyLayoutOverrides();
    updateLiveEditorQuickbarPosition();
    updateLiveEditorSelectionOverlay();
  });

  window.addEventListener("scroll", () => {
    if (editorParam !== "1") return;
    if (liveCanvasMode) {
      updateCanvasMinimap();
    }
    updateLiveEditorQuickbarPosition();
    updateLiveEditorSelectionOverlay();
  }, { passive: true });

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
