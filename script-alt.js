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

  let siteContentOverrides = {
    textByKey: {},
    imageByKey: {}
  };

  const fallbackHomepageContent = {
    title: i18nDict.en["story.title"],
    description: i18nDict.en["story.body"]
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
  };

  const initialLang = localStorage.getItem("site-language") || detectPreferredLanguage();
  applyLanguage(initialLang);

  /* ----------------------------------------------------------
     0c. Live key inspector (for fast content mapping)
     ---------------------------------------------------------- */
  const INSPECTOR_STORAGE_KEY = "nutristika-key-inspector";
  const params = new URLSearchParams(window.location.search);
  const inspectorParam = params.get("inspector");

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
    return target.closest("[data-i18n], [data-i18n-placeholder], [data-image-key]");
  };

  const getInspectorDetails = (node) => {
    const i18nKey = node.getAttribute("data-i18n");
    const placeholderKey = node.getAttribute("data-i18n-placeholder");
    const imageKey = node.getAttribute("data-image-key");

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
