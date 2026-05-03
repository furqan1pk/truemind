// Shared TrueMind content — EN + UR
const COPY = {
  en: {
    nav: {
      forPatients: "For patients",
      forTherapists: "For therapists",
      pricing: "Pricing",
      about: "About",
      faq: "FAQ",
      download: "Download app",
      signIn: "Sign in",
      bookFree: "Book a free first session",
    },
    hero: {
      eyebrow: "Therapy that meets you where you are",
      titleA: ["Find clarity, ", "in confidence."],
      titleB: ["Mental health care, ", "without the wait."],
      lede: "TrueMind connects you with licensed therapists across Pakistan — entirely through our app. Book in minutes. Speak in private. Heal at your pace.",
      ctaPrimary: "Book a free first session",
      ctaSecondary: "I'm a therapist",
      bullets: ["Verified, licensed therapists", "Private & end-to-end encrypted", "First session free"],
    },
    concerns: {
      eyebrow: "What brings you here",
      title: "It's okay to start anywhere.",
      lede: "Whatever you're carrying, there's someone trained to help. Our therapists specialise across the most common reasons people reach out.",
      items: [
        { name: "Anxiety", count: "240+ therapists" },
        { name: "Depression", count: "210+ therapists" },
        { name: "Stress & burnout", count: "180+ therapists" },
        { name: "Relationship issues", count: "120+ therapists" },
        { name: "Workplace stress", count: "95+ therapists" },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "From first message to first session in under a day.",
      steps: [
        { n: "01", title: "Tell us what you need", body: "A short, private intake — what you're going through and what kind of therapist you'd feel safe with." },
        { n: "02", title: "Get matched in minutes", body: "We surface 3 therapists whose specialities, language, and availability fit you. You pick." },
        { n: "03", title: "Book and meet — in the app", body: "Schedule, video session, secure notes, follow-ups, prescriptions if needed. All in one place." },
      ],
    },
    therapists: {
      eyebrow: "For therapists",
      title: "Build your practice. Keep your boundaries.",
      lede: "TrueMind handles the scheduling, billing, intake, and reminders — so your hours stay clinical, not clerical. Join over 600 verified therapists already on the platform.",
      bullets: [
        "Smart scheduling with no-show protection",
        "Encrypted session notes & client history",
        "Billing in PKR, paid out weekly",
        "Verified-licence badge to build trust faster",
      ],
      cta: "Apply to join",
    },
    trust: {
      eyebrow: "What people say",
      title: "Quiet, lasting change.",
      quotes: [
        { q: "I'd been putting therapy off for years. Booking through the app meant I never had to explain myself to a receptionist. That changed everything.", who: "Aisha, 28", where: "Lahore" },
        { q: "My therapist understands code-switching, family expectations, all of it. I didn't have to translate myself.", who: "Bilal, 34", where: "Karachi" },
        { q: "Having my notes, prescriptions, and next appointment in one place — finally something that respects my time.", who: "Sana, 41", where: "Islamabad" },
      ],
    },
    privacy: {
      eyebrow: "Privacy by default",
      title: "What you share, stays between you and your therapist.",
      lede: "End-to-end encrypted sessions. Anonymous booking. No data sold, ever. Full HIPAA-grade safeguards on every record.",
      points: [
        { t: "End-to-end encrypted", b: "Video, chat, and notes — encrypted in transit and at rest." },
        { t: "Anonymous if you want", b: "Use a display name. Your therapist never sees more than you choose to share." },
        { t: "Yours to delete", b: "Export or permanently delete your record from settings, anytime." },
      ],
    },
    download: {
      eyebrow: "Get the app",
      title: "TrueMind lives on your phone — quietly.",
      lede: "No browser tabs. No awkward links. Just a calm, private space on your home screen.",
    },
    faq: {
      eyebrow: "Questions",
      title: "Things people ask before they start.",
      items: [
        { q: "How do I know my therapist is qualified?", a: "Every therapist on TrueMind is licence-verified by our clinical team. We check credentials with the Pakistan Psychological Association and equivalent bodies before they ever appear in your matches." },
        { q: "Is my first session really free?", a: "Yes. Your first 30-minute session is on us, no card needed. It's a chance to meet your therapist and decide if they're the right fit before committing." },
        { q: "Can I switch therapists?", a: "Anytime, with one tap. We'll re-match you within 24 hours and your history follows you only with your consent." },
        { q: "Do you offer Urdu sessions?", a: "Yes — most of our therapists speak Urdu fluently and many are bilingual. You can filter by language during matching." },
        { q: "Is my data really private?", a: "Yes. Sessions are end-to-end encrypted, notes are encrypted at rest, and we never sell or share data with third parties. You can delete your record at any time." },
        { q: "Do you take insurance?", a: "We're partnered with several Pakistani health insurers and corporate benefits providers. Check the in-app coverage tool, or ask your HR." },
      ],
    },
    footer: {
      tagline: "Therapy that meets you where you are. Built in Pakistan, expanding across South Asia and the Gulf.",
      crisis: "If you are in immediate danger, please call 1166 (Pakistan) or your local emergency line.",
      product: ["For patients", "For therapists", "Download app", "Pricing"],
      company: ["About", "Mission", "Careers", "Press"],
      support: ["Help centre", "FAQ", "Contact", "Crisis support"],
      legal: ["Privacy", "Terms", "Clinical safety", "Code of ethics"],
    },
  },
  ur: {
    nav: {
      forPatients: "مریضوں کے لیے",
      forTherapists: "معالجین کے لیے",
      pricing: "قیمتیں",
      about: "ہمارے بارے میں",
      faq: "عام سوالات",
      download: "ایپ ڈاؤن لوڈ کریں",
      signIn: "سائن ان",
      bookFree: "پہلا مفت سیشن بک کریں",
    },
    hero: {
      eyebrow: "آپ کی رفتار سے، آپ کی پرائیویسی میں",
      titleA: ["سکون پائیں، ", "اعتماد کے ساتھ۔"],
      titleB: ["ذہنی صحت، ", "بغیر انتظار کے۔"],
      lede: "ٹرومائنڈ آپ کو پاکستان بھر کے لائسنس یافتہ معالجین سے جوڑتا ہے — مکمل طور پر ہماری ایپ کے ذریعے۔ منٹوں میں بک کریں۔ خفیہ بات کریں۔ اپنی رفتار سے بہتر ہوں۔",
      ctaPrimary: "پہلا مفت سیشن بک کریں",
      ctaSecondary: "میں ایک معالج ہوں",
      bullets: ["تصدیق شدہ معالجین", "خفیہ اور محفوظ", "پہلا سیشن مفت"],
    },
  },
};

Object.assign(window, { COPY });
