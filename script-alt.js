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
     3. Floating CTA — show after scrolling past hero
     ---------------------------------------------------------- */
  const fab = document.getElementById("fab-cta");
  const hero = document.querySelector(".hero");
  if (fab && hero) {
    const fabObs = new IntersectionObserver(
      ([e]) => {
        fab.classList.toggle("show", !e.isIntersecting);
      },
      { threshold: 0 }
    );
    fabObs.observe(hero);
  }

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
