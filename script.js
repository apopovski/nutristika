// ---- INTERNATIONALIZATION (i18n) ----
const translations = {
  en: {
    announcement: 'Today we launch a new nutrition coaching program for plant-based living',
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      resource: 'Resources',
    },
    hero: {
      eyebrow: 'PLANT-BASED NUTRITION COACHING',
      title: 'Simple Habits. Lasting Health.',
      subtitle: 'Personalized coaching for sustainable plant-based living.',
      ctaPrimary: 'Book Free Call',
      ctaSecondary: 'Learn more',
      tag1: 'Personal',
      tag2: 'Science-backed',
      tag3: 'Flexible',
      badge1: 'In Germany',
      badge2: 'Jasmina Pezo',
    },
    intro: {
      script: 'Who we are',
      title: 'Nutrition that feels good.',
      text: 'Simple habits create lasting change. We help you navigate plant-based living with confidence and joy.',
      feature1: 'Personalized nutrition plans',
      feature2: 'Weekly 1-on-1 coaching',
      feature3: 'Flexible scheduling',
    },
    services: {
      script: 'How we help',
      title: 'Intelligent coaching designed for you.',
      s1Title: 'Personal Health Coaching',
      s1Text: 'We develop customized nutrition plans aligned with your lifestyle and goals.',
      s2Title: 'Group Workshops',
      s2Text: 'Learn plant-based nutrition basics in interactive sessions with peers.',
      s3Title: 'Corporate Wellness',
      s3Text: 'Bring science-backed plant-based education to your team.',
      s4Title: 'Recipe & Meal Planning',
      s4Text: 'Practical guidance for preparing delicious, nutritious plant-based meals.',
    },
    resource: {
      eyebrow: 'TRUSTED RESOURCES',
      title: 'Everything you need to thrive on a plant-based diet.',
      li1: 'Free guides on plant-based nutrition essentials',
      li2: 'Downloadable meal plans and shopping lists',
      li3: 'Links to peer-reviewed research',
      li4: 'Access to our community forum',
      cta: 'Access Resources',
    },
    mission: {
      script: 'Our mission',
      title: 'Making plant-based living simple and accessible.',
      text: 'We believe everyone deserves access to nutrition guidance that supports their health and values. Through personalized coaching and science-backed education, we help you thrive on a plant-based diet.',
      support1Title: 'Science-Backed',
      support1Text: 'Evidence-based recommendations you can trust.',
      support2Title: 'Personalized',
      support2Text: 'Coaching tailored to your unique needs.',
      support3Title: 'Sustainable',
      support3Text: 'Habits that last a lifetime.',
      caption: 'Nutrition coaching that serves your values.',
    },
    professionals: {
      script: 'Meet the team',
      title: 'Our Professionals',
      intro: 'A supportive team focused on practical, science-based nutrition coaching for real life.',
      p1Name: 'Jasmina Pezo',
      p1Role: 'Registered Dietitian Nutritionist',
      p1Text: 'Specialized in anti-inflammatory and plant-forward coaching.',
      p2Name: 'Anna Müller',
      p2Role: 'Behavior Change Coach',
      p2Text: 'Helps clients build consistent routines, accountability, and lasting habits.',
      p3Name: 'Milan Petrović',
      p3Role: 'Clinical Nutrition Advisor',
      p3Text: 'Focuses on metabolic health, meal strategy, and sustainable energy support.',
    },
    community: {
      script: 'Join us',
      title: 'A growing community of plant-based enthusiasts.',
      text: 'Connect with others on their plant-based journey. Share recipes, ask questions, and support each other.',
      cta: 'Join Community',
    },
    plans: {
      script: 'Coaching plans',
      title: 'Choose the support level that fits your needs.',
      p1Title: 'Essentials',
      p1Text: 'Monthly check-in and guidance',
      p1Cta: 'Start',
      p2Title: 'Standard',
      p2Text: 'Weekly coaching & meal plans',
      p2Cta: 'Start',
      p3Title: 'Premium',
      p3Text: 'Unlimited support & custom planning',
      p3Cta: 'Start',
    },
    articles: {
      script: 'Learn',
      title: 'Plant-based tips & research.',
      a1Title: 'The Complete Guide to Plant-Based Protein',
      a1Text: 'Everything you need to know about plant-based protein sources.',
      a2Title: 'B12, Iron, and Other Nutrients of Focus',
      a2Text: 'Essential nutrients to monitor on a plant-based diet.',
      a3Title: 'Transitioning to Plant-Based Living',
      a3Text: 'A practical guide for making the switch.',
      readMore: 'Read more',
      cta: 'Read all articles',
    },
    finalCta: {
      title: 'Ready to get started?',
      text: 'Book your free consultation today.',
      button: 'Book Free Call',
    },
    footer: {
      copy: '© 2024 Nutristika. All rights reserved.',
    },
  },
  de: {
    announcement: 'Heute starten wir ein neues Ernährungscoaching-Programm für pflanzliche Ernährung',
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      about: 'Über uns',
      resource: 'Ressourcen',
    },
    hero: {
      eyebrow: 'PFLANZLICHE ERNÄHRUNGSBERATUNG',
      title: 'Einfache Gewohnheiten. Dauerhafte Gesundheit.',
      subtitle: 'Persönliche Beratung für nachhaltiges pflanzliches Leben.',
      ctaPrimary: 'Kostenlose Beratung buchen',
      ctaSecondary: 'Mehr erfahren',
      tag1: 'Persönlich',
      tag2: 'Wissenschaftlich fundiert',
      tag3: 'Flexibel',
      badge1: 'In Deutschland',
      badge2: 'Jasmina Pezo',
    },
    intro: {
      script: 'Wer wir sind',
      title: 'Ernährung, die sich gut anfühlt.',
      text: 'Einfache Gewohnheiten schaffen dauerhaften Wandel. Wir helfen dir, mit Vertrauen und Freude pflanzlich zu leben.',
      feature1: 'Personalisierte Ernährungspläne',
      feature2: 'Wöchentliche 1-zu-1-Beratung',
      feature3: 'Flexible Zeitplanung',
    },
    services: {
      script: 'Wie wir helfen',
      title: 'Intelligentes Coaching, das für dich gemacht ist.',
      s1Title: 'Persönliche Gesundheitsberatung',
      s1Text: 'Wir erstellen maßgeschneiderte Ernährungspläne, die deinen Lebensstil und deine Ziele berücksichtigen.',
      s2Title: 'Gruppen-Workshops',
      s2Text: 'Lerne die Grundlagen der pflanzlichen Ernährung in interaktiven Sessions mit anderen Teilnehmern.',
      s3Title: 'Unternehmens-Wellness',
      s3Text: 'Bringe wissenschaftlich fundierte pflanzliche Ernährung zu deinem Team.',
      s4Title: 'Rezepte & Essensplanung',
      s4Text: 'Praktische Anleitung zur Zubereitung köstlicher und nahrhafter pflanzlicher Mahlzeiten.',
    },
    resource: {
      eyebrow: 'VERTRAUENSWÜRDIGE RESSOURCEN',
      title: 'Alles, was du für eine pflanzliche Ernährung brauchst.',
      li1: 'Kostenlose Leitfäden zu pflanzlichen Ernährungsgrundlagen',
      li2: 'Herunterladbare Essenspläne und Einkaufslisten',
      li3: 'Links zu wissenschaftlichen Studien',
      li4: 'Zugang zu unserem Community-Forum',
      cta: 'Ressourcen nutzen',
    },
    mission: {
      script: 'Unsere Mission',
      title: 'Pflanzliches Leben einfach und zugänglich machen.',
      text: 'Wir glauben, dass jeder Zugang zu Ernährungsberatung verdient, die ihre Gesundheit und Werte unterstützt. Durch persönliche Beratung und wissenschaftlich fundierte Bildung helfen wir dir, bei einer pflanzlichen Ernährung zu gedeihen.',
      support1Title: 'Wissenschaftlich fundiert',
      support1Text: 'Evidenzbasierte Empfehlungen, denen du vertrauen kannst.',
      support2Title: 'Personalisiert',
      support2Text: 'Beratung, die auf deine einzigartigen Bedürfnisse zugeschnitten ist.',
      support3Title: 'Nachhaltig',
      support3Text: 'Gewohnheiten, die ein Leben lang halten.',
      caption: 'Ernährungsberatung, die deine Werte unterstützt.',
    },
    professionals: {
      script: 'Unser Team',
      title: 'Unsere Expert:innen',
      intro: 'Ein unterstützendes Team mit praxisnaher, wissenschaftlich fundierter Ernährungsbegleitung.',
      p1Name: 'Jasmina Pezo',
      p1Role: 'Registrierte Ernährungsberaterin',
      p1Text: 'Spezialisiert auf entzündungsarme und pflanzenbetonte Ernährung.',
      p2Name: 'Anna Müller',
      p2Role: 'Coach für Verhaltensänderung',
      p2Text: 'Hilft beim Aufbau stabiler Routinen, Verbindlichkeit und langfristiger Gewohnheiten.',
      p3Name: 'Milan Petrović',
      p3Role: 'Berater für klinische Ernährung',
      p3Text: 'Fokus auf Stoffwechselgesundheit, Mahlzeitenstrategie und nachhaltige Energie.',
    },
    community: {
      script: 'Mach mit',
      title: 'Eine wachsende Gemeinschaft von pflanzlichen Enthusiasten.',
      text: 'Verbinde dich mit anderen auf ihrer pflanzlichen Reise. Teile Rezepte, stelle Fragen und unterstütze dich gegenseitig.',
      cta: 'Community beitreten',
    },
    plans: {
      script: 'Coaching-Pläne',
      title: 'Wähle die Unterstützung, die deinen Bedürfnissen entspricht.',
      p1Title: 'Grundlagen',
      p1Text: 'Monatliches Check-in und Beratung',
      p1Cta: 'Starten',
      p2Title: 'Standard',
      p2Text: 'Wöchentliche Beratung & Essenspläne',
      p2Cta: 'Starten',
      p3Title: 'Premium',
      p3Text: 'Unbegrenzte Unterstützung & individuelle Planung',
      p3Cta: 'Starten',
    },
    articles: {
      script: 'Lernen',
      title: 'Tipps und Forschung zu pflanzlicher Ernährung.',
      a1Title: 'Der vollständige Leitfaden zu pflanzlichem Protein',
      a1Text: 'Alles, was du über pflanzliche Proteinquellen wissen musst.',
      a2Title: 'B12, Eisen und andere wichtige Nährstoffe',
      a2Text: 'Wichtige Nährstoffe, die es bei pflanzlicher Ernährung zu überwachen gilt.',
      a3Title: 'Umstellung auf pflanzliche Ernährung',
      a3Text: 'Ein praktischer Leitfaden für den Wechsel.',
      readMore: 'Mehr lesen',
      cta: 'Alle Artikel anzeigen',
    },
    finalCta: {
      title: 'Bereit anzufangen?',
      text: 'Buche deine kostenlose Beratung heute.',
      button: 'Kostenlose Beratung buchen',
    },
    footer: {
      copy: '© 2024 Nutristika. Alle Rechte vorbehalten.',
    },
  },
  sr: {
    announcement: 'Danas lansiramo novi program nutricionističkog treniranja za biljnu ishranu',
    nav: {
      home: 'Početak',
      services: 'Usluge',
      about: 'O nama',
      resource: 'Resursi',
    },
    hero: {
      eyebrow: 'BILJNO-BAZIRANA NUTRICIONISTIČKA COACHING',
      title: 'Jednostavne Navike. Trajna Zdravlja.',
      subtitle: 'Personalizovano usmerenje za održivu biljnu ishranu.',
      ctaPrimary: 'Zakažite besplatnu konsultaciju',
      ctaSecondary: 'Saznajte više',
      tag1: 'Lično',
      tag2: 'Naučno zasnovan',
      tag3: 'Fleksibilan',
      badge1: 'U Srbiji',
      badge2: 'Jasmina Pezo',
    },
    intro: {
      script: 'Ko smo mi',
      title: 'Ishrana koja se dobro osjeća.',
      text: 'Jednostavne navike stvaraju trajne procene. Pomažemo vam da sigurno i radosno živite biljno zasnovan život.',
      feature1: 'Personalizovani planovi ishrane',
      feature2: 'Sedmični 1-na-1 trening',
      feature3: 'Fleksibilni raspored',
    },
    services: {
      script: 'Kako pomagamo',
      title: 'Inteligentno usmerenje osmišljeno za vas.',
      s1Title: 'Lično Zdravstveno Usmerenje',
      s1Text: 'Kreiramo prilagođene planove ishrane usklađene s vašim načinom života i ciljevima.',
      s2Title: 'Grupne Radionice',
      s2Text: 'Naučite osnove biljne ishrane u interaktivnim sesijama s vršnjacima.',
      s3Title: 'Korporativni Wellness',
      s3Text: 'Dovedite naučno zasnovanu biljnu ishranu u vašu organizaciju.',
      s4Title: 'Recepti & Planiranje Ishrane',
      s4Text: 'Praktično usmerenje za pripremu ukusnih i hranjivih biljnih jela.',
    },
    resource: {
      eyebrow: 'POUZDANI RESURSI',
      title: 'Sve što trebate za napredovanje na biljnoj ishrani.',
      li1: 'Besplatni vodiči o osnovama biljne ishrane',
      li2: 'Preuzimljivi planovi ishrane i listi kupovanja',
      li3: 'Linkovi ka naučnim istraživanjima',
      li4: 'Pristup našem forum zajednice',
      cta: 'Pristupite Resursima',
    },
    mission: {
      script: 'Naša misija',
      title: 'Činjenje biljne ishrane jednostavnom i pristupačnom.',
      text: 'Vjerujemo da svako zaslužuje pristup nutricionističkom usmeravanju koja podržava njihovo zdravlje i vrijednosti. Kroz personalizovani trening i naučno zasnovanu edukaciju, pomažemo vam da napredujete na biljnoj ishrani.',
      support1Title: 'Naučno zasnovan',
      support1Text: 'Preporuke zasnovane na dokazima na koje možete računati.',
      support2Title: 'Personalizovan',
      support2Text: 'Usmerenje prilagođeno vašim jedinstvenim potrebama.',
      support3Title: 'Održiv',
      support3Text: 'Navike koje traju cijelog života.',
      caption: 'Nutricionističko usmerenje koje sledi vašim vrijednostima.',
    },
    professionals: {
      script: 'Naš tim',
      title: 'Naši stručnjaci',
      intro: 'Podržavajući tim fokusiran na praktično i naučno zasnovano nutricionističko vođenje.',
      p1Name: 'Jasmina Pezo',
      p1Role: 'Registrovana nutricionistkinja',
      p1Text: 'Specijalizovana za antiinflamatorni i biljnom hranom vođen pristup.',
      p2Name: 'Anna Müller',
      p2Role: 'Coach za promenu navika',
      p2Text: 'Pomaže klijentima da izgrade rutine, odgovornost i navike koje traju.',
      p3Name: 'Milan Petrović',
      p3Role: 'Savetnik za kliničku ishranu',
      p3Text: 'Fokus na metaboličko zdravlje, strategiju obroka i održivu energiju.',
    },
    community: {
      script: 'Uključite se',
      title: 'Rastuća zajednica ljubitelja biljne ishrane.',
      text: 'Povežite se s drugima na svojoj putnji biljne ishrane. Dijelite recepte, postavljajte pitanja i međusobno se podržavajte.',
      cta: 'Uključite se u Zajednicu',
    },
    plans: {
      script: 'Planovi Treniranja',
      title: 'Odaberite nivo podrške koji odgovara vašim potrebama.',
      p1Title: 'Osnovni',
      p1Text: 'Mjesečni pregled i usmerenje',
      p1Cta: 'Počnite',
      p2Title: 'Standardni',
      p2Text: 'Sedmični trening & planovi ishrane',
      p2Cta: 'Počnite',
      p3Title: 'Premium',
      p3Text: 'Neograničena podrška & prilagođeno planiranje',
      p3Cta: 'Počnite',
    },
    articles: {
      script: 'Učite',
      title: 'Savjeti o biljnoj ishrani i istraživanja.',
      a1Title: 'Kompletan Vodič za Biljni Protein',
      a1Text: 'Sve što trebate znati o izvorima biljnog proteina.',
      a2Title: 'B12, Gvožđe i Drugi Važni Nutrienti',
      a2Text: 'Bitni nutrienti koje trebate pratiti na biljnoj ishrani.',
      a3Title: 'Prijelaz na Biljnu Ishranu',
      a3Text: 'Praktičan vodič za promjenu.',
      readMore: 'Pročitajte više',
      cta: 'Pročitajte sve članke',
    },
    finalCta: {
      title: 'Spremni da počnete?',
      text: 'Zakažite besplatnu konsultaciju danas.',
      button: 'Zakažite besplatnu konsultaciju',
    },
    footer: {
      copy: '© 2024 Nutristika. Sva prava zadržana.',
    },
  },
};

// Translation function
function setLanguage(lang) {
  // Validate language
  if (!translations[lang]) {
    console.warn(`Language ${lang} not found, using English`);
    lang = 'en';
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Save language preference
  localStorage.setItem('language', lang);

  // Update select dropdown
  const select = document.querySelector('#language-switch');
  if (select) {
    select.value = lang;
  }

  // Apply translations to all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');

    // Navigate nested translation object
    let value = translations[lang];
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }

    // Update element text if translation found
    if (value) {
      element.textContent = value;
    } else {
      console.warn(`Translation not found for key: ${key}`);
    }
  });
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
  // Get saved language or default to browser language
  const savedLang = localStorage.getItem('language');
  const browserLang = document.documentElement.lang || 'en';
  const defaultLang = savedLang || (browserLang.startsWith('de') ? 'de' : browserLang === 'sr' ? 'sr' : 'en');

  // Set initial language
  setLanguage(defaultLang);

  // Wire up language switcher
  const langSwitch = document.querySelector('#language-switch');
  if (langSwitch) {
    langSwitch.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
});

// ---- NAVIGATION & REVEAL ANIMATIONS ----

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const mobileNav = document.querySelector('.nav-links');
    mobileNav.classList.remove('open');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);


document
  .querySelectorAll('.service-card, .about-card, .facts-card, .resource-card, .pro-card')
  .forEach((card) => {
    card.classList.add('reveal');
    observer.observe(card);
  });

const heroSlideA = document.querySelector('#hero-slide-a');
const heroSlideB = document.querySelector('#hero-slide-b');

if (heroSlideA && heroSlideB) {
  const unsplashCollectionId = '3395371';
  const slideQueueSize = 12;
  const poolRefreshMs = 10 * 60 * 1000;
  const fallbackSlides = [
    {
      src: 'https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=1600&auto=format&fit=crop',
      alt: 'Plant-based toast and fresh produce',
    },
    {
      src: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=1600&auto=format&fit=crop',
      alt: 'Avocado toast on a white plate',
    },
    {
      src: 'https://images.unsplash.com/photo-1551410224-699683e15636?q=80&w=1600&auto=format&fit=crop',
      alt: 'Citrus bowl in a minimal setting',
    },
    {
      src: 'https://images.unsplash.com/photo-1686226421696-c2ccf97eb475?q=80&w=1600&auto=format&fit=crop',
      alt: 'Fresh avocado on a colorful background',
    },
    {
      src: 'https://images.unsplash.com/photo-1524222835726-8e7d453fa83c?q=80&w=1600&auto=format&fit=crop',
      alt: 'Fresh stone fruit and plant-based ingredients',
    },
  ];

  const queue = [];
  let slidePool = [...fallbackSlides];
  let isAActive = true;

  const startZoom = (imageEl) => {
    imageEl.classList.remove('is-zooming');
    void imageEl.offsetWidth;
    imageEl.classList.add('is-zooming');
  };

  const preloadSlide = (url) => {
    const img = new Image();
    img.src = url;
  };

  const shuffleArray = (list) => {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const getUnsplashAccessKey = () => {
    const metaKey = document.querySelector('meta[name="unsplash-access-key"]')?.content?.trim();
    return window.UNSPLASH_ACCESS_KEY || metaKey || '';
  };

  const buildSizedUrl = (rawOrRegular) => {
    const separator = rawOrRegular.includes('?') ? '&' : '?';
    return `${rawOrRegular}${separator}auto=format&fit=crop&w=1600&q=80`;
  };

  const fetchCollectionSlides = async () => {
    const accessKey = getUnsplashAccessKey();
    if (!accessKey) {
      return [];
    }

    const endpoint = `https://api.unsplash.com/collections/${unsplashCollectionId}/photos?page=1&per_page=30&orientation=squarish&client_id=${encodeURIComponent(accessKey)}`;
    const response = await fetch(endpoint, {
      headers: {
        'Accept-Version': 'v1',
      },
    });

    if (!response.ok) {
      throw new Error(`Unsplash API error (${response.status})`);
    }

    const photos = await response.json();
    return photos
      .map((photo) => ({
        src: buildSizedUrl(photo.urls?.raw || photo.urls?.regular || ''),
        alt: photo.alt_description || photo.description || 'Plant-based food from Unsplash collection',
      }))
      .filter((photo) => photo.src);
  };

  const refillQueue = () => {
    while (queue.length < slideQueueSize) {
      if (slidePool.length === 0) {
        slidePool = shuffleArray(fallbackSlides);
      }

      const next = slidePool.shift();
      if (next) {
        queue.push(next);
      }
    }
  };

  const nextSlide = () => {
    refillQueue();
    return queue.shift();
  };

  const assignSlideToImage = (imageEl, slide) => {
    imageEl.onerror = () => {
      imageEl.onerror = null;
      imageEl.src = fallbackSlides[Math.floor(Math.random() * fallbackSlides.length)].src;
    };

    imageEl.src = slide.src;
    imageEl.alt = slide.alt;
  };

  const refreshSlidePool = async () => {
    try {
      const dynamicSlides = await fetchCollectionSlides();
      slidePool = dynamicSlides.length > 0 ? shuffleArray(dynamicSlides) : shuffleArray(fallbackSlides);
    } catch (error) {
      console.warn('Using fallback hero slides:', error);
      slidePool = shuffleArray(fallbackSlides);
    }

    queue.length = 0;
    refillQueue();
    queue.slice(0, 4).forEach((slide) => preloadSlide(slide.src));
  };

  slidePool = shuffleArray(fallbackSlides);
  const initialSlideA = nextSlide() || fallbackSlides[0];
  const initialSlideB = nextSlide() || fallbackSlides[1] || fallbackSlides[0];
  assignSlideToImage(heroSlideA, initialSlideA);
  assignSlideToImage(heroSlideB, initialSlideB);

  startZoom(heroSlideA);

  setInterval(() => {
    const upcomingSlide = nextSlide();

    const incoming = isAActive ? heroSlideB : heroSlideA;
    const outgoing = isAActive ? heroSlideA : heroSlideB;

    assignSlideToImage(incoming, upcomingSlide);
    incoming.setAttribute('aria-hidden', 'false');

    outgoing.classList.remove('is-active', 'is-zooming');
    outgoing.classList.add('is-inactive');
    outgoing.setAttribute('aria-hidden', 'true');
    outgoing.alt = '';

    incoming.classList.remove('is-inactive');
    incoming.classList.add('is-active');

    startZoom(incoming);

    isAActive = !isAActive;
  }, 5200);

  setInterval(() => {
    void refreshSlidePool();
  }, poolRefreshMs);

  void refreshSlidePool();
}

const heroSection = document.querySelector('.hero-modern');
const heroVisual = document.querySelector('.hero-visual');

if (heroSection && heroVisual && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const pointerRange = 10;
  const scrollRange = 16;
  const portraitParallaxFactor = 0.78;
  const portraitTiltRange = 4;

  let pointerX = 0;
  let pointerY = 0;

  const applyParallax = () => {
    const rect = heroSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;

    const sectionCenter = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;
    const scrollProgress = Math.max(-1, Math.min(1, (viewportCenter - sectionCenter) / viewportCenter));

    const heroX = pointerX * pointerRange;
    const heroY = pointerY * pointerRange + scrollProgress * scrollRange;

    heroVisual.style.setProperty('--hero-parallax-x', `${heroX.toFixed(2)}px`);
    heroVisual.style.setProperty('--hero-parallax-y', `${heroY.toFixed(2)}px`);
    heroVisual.style.setProperty('--portrait-parallax-x', `${(-heroX * portraitParallaxFactor).toFixed(2)}px`);
    heroVisual.style.setProperty('--portrait-parallax-y', `${(-heroY * portraitParallaxFactor).toFixed(2)}px`);
    heroVisual.style.setProperty('--portrait-parallax-tilt', `${(-pointerX * portraitTiltRange).toFixed(2)}deg`);
  };

  heroSection.addEventListener('pointermove', (event) => {
    const rect = heroSection.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    pointerX = Math.max(-1, Math.min(1, normalizedX));
    pointerY = Math.max(-1, Math.min(1, normalizedY));
    applyParallax();
  });

  heroSection.addEventListener('pointerleave', () => {
    pointerX = 0;
    pointerY = 0;
    applyParallax();
  });

  window.addEventListener('scroll', applyParallax, { passive: true });
  window.addEventListener('resize', applyParallax);

  applyParallax();
}
