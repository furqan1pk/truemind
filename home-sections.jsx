// Homepage body sections — concerns, how, therapists, trust, privacy, download, faq

// Abstract SVG illustrations per concern. Calm, brand-palette, no stock photos.
const ConcernArt = ({ kind, color, accent }) => {
  const stroke = { stroke: color, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  const fill = { fill: color };
  const accentStroke = { stroke: accent, strokeWidth: 1.4, strokeLinecap: "round", fill: "none", opacity: 0.7 };

  if (kind === "anxiety") {
    // Restless ripples — agitated wave lines
    return (
      <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
        <path {...stroke} d="M10 38 Q25 28, 40 38 T70 38 T100 38 T130 38" />
        <path {...stroke} d="M10 56 Q25 44, 40 56 T70 56 T100 56 T130 56" opacity="0.85" />
        <path {...stroke} d="M10 74 Q25 62, 40 74 T70 74 T100 74 T130 74" opacity="0.6" />
        <path {...accentStroke} d="M10 92 Q25 84, 40 92 T70 92 T100 92" />
        <circle cx="92" cy="32" r="3.5" {...fill} opacity="0.6" />
      </svg>
    );
  }
  if (kind === "depression") {
    // Heaviness — descending circles, like rain or weight
    return (
      <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
        <circle cx="36" cy="22" r="3" {...fill} opacity="0.45" />
        <circle cx="60" cy="32" r="4.5" {...fill} opacity="0.6" />
        <circle cx="84" cy="26" r="3" {...fill} opacity="0.45" />
        <line {...stroke} x1="36" y1="32" x2="36" y2="76" opacity="0.4" />
        <line {...stroke} x1="60" y1="42" x2="60" y2="92" />
        <line {...stroke} x1="84" y1="36" x2="84" y2="80" opacity="0.4" />
        <circle cx="36" cy="80" r="6" {...fill} opacity="0.6" />
        <circle cx="60" cy="96" r="9" {...fill} />
        <circle cx="84" cy="84" r="6" {...fill} opacity="0.6" />
        <path {...accentStroke} d="M22 108 Q60 102, 100 108" />
      </svg>
    );
  }
  if (kind === "burnout") {
    // Burning out — radiating lines from a fading center
    return (
      <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
        <circle cx="60" cy="60" r="14" {...fill} opacity="0.8" />
        <circle cx="60" cy="60" r="22" {...stroke} opacity="0.4" />
        {[...Array(8)].map((_, i) => {
          const a = (i * Math.PI * 2) / 8;
          const x1 = 60 + Math.cos(a) * 30;
          const y1 = 60 + Math.sin(a) * 30;
          const x2 = 60 + Math.cos(a) * 48;
          const y2 = 60 + Math.sin(a) * 48;
          return <line key={i} {...stroke} x1={x1} y1={y1} x2={x2} y2={y2} opacity={i % 2 ? 0.4 : 0.85} />;
        })}
        <path {...accentStroke} d="M14 60 Q24 50, 14 40" opacity="0.5" />
      </svg>
    );
  }
  if (kind === "relationships") {
    // Two overlapping circles, slightly off — connection + tension
    return (
      <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
        <circle cx="46" cy="56" r="26" {...stroke} />
        <circle cx="78" cy="64" r="26" {...stroke} opacity="0.85" />
        <circle cx="62" cy="60" r="3" {...fill} />
        <path {...accentStroke} d="M26 96 Q60 90, 96 96" />
        <circle cx="32" cy="34" r="2.5" {...fill} opacity="0.5" />
        <circle cx="92" cy="38" r="2.5" {...fill} opacity="0.5" />
      </svg>
    );
  }
  if (kind === "workplace") {
    // Stacking demands — layered rectangles like deadlines piling up
    return (
      <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
        <rect x="22" y="74" width="76" height="20" rx="4" {...stroke} />
        <rect x="28" y="58" width="64" height="16" rx="4" {...stroke} opacity="0.75" />
        <rect x="34" y="44" width="52" height="14" rx="3" {...stroke} opacity="0.55" />
        <rect x="40" y="32" width="40" height="12" rx="3" {...stroke} opacity="0.4" />
        <line {...accentStroke} x1="14" y1="100" x2="106" y2="100" />
        <circle cx="86" cy="84" r="2.5" {...fill} />
      </svg>
    );
  }
  return null;
};

const ConcernsSection = ({ lang = "en" }) => {
  const c = (COPY[lang] || COPY.en).concerns || COPY.en.concerns;
  const themes = [
    { kind: "anxiety",      bg: "linear-gradient(155deg, #F5DDD2 0%, #FBF8F1 100%)", color: "#A85F42", accent: "#3D5A4A" },
    { kind: "depression",   bg: "linear-gradient(155deg, #DDE6E0 0%, #FBF8F1 100%)", color: "#2A4135", accent: "#C97A5A" },
    { kind: "burnout",      bg: "linear-gradient(155deg, #F1E2C2 0%, #FBF8F1 100%)", color: "#A8843A", accent: "#A85F42" },
    { kind: "relationships",bg: "linear-gradient(155deg, #E2EAE4 0%, #FBF8F1 100%)", color: "#3D5A4A", accent: "#C97A5A" },
    { kind: "workplace",    bg: "linear-gradient(155deg, #E6DEC9 0%, #FBF8F1 100%)", color: "#1F2421", accent: "#A85F42" },
  ];
  return (
    <section className="surface-cream">
      <div className="container">
        <div className="section-head" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>{c.eyebrow}</div>
            <h2 className="h-1">{c.title}</h2>
          </div>
          <p className="lede" style={{ maxWidth: 480 }}>{c.lede}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }} className="concerns-grid">
          {c.items.map((it, i) => {
            const theme = themes[i % themes.length];
            return (
              <a
                key={i}
                href="how-it-works.html"
                className="card concern-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  aspectRatio: "3/4",
                  padding: 22,
                  background: theme.bg,
                  border: "1px solid var(--line-soft)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div style={{ flex: 1, marginBottom: 8, marginLeft: -6, marginTop: -6 }}>
                  <ConcernArt kind={theme.kind} color={theme.color} accent={theme.accent} />
                </div>
                <div>
                  <div className="h-3" style={{ marginBottom: 6, color: "var(--ink)" }}>{it.name}</div>
                  <div className="muted" style={{ fontSize: 13 }}>{it.count}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .concerns-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .concern-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .concern-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(31,36,33,0.08); }
      `}</style>
    </section>
  );
};

const HowSection = ({ lang = "en" }) => {
  const c = (COPY[lang] || COPY.en).how || COPY.en.how;
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">{c.eyebrow}</div>
          <h2 className="h-1" style={{ maxWidth: 760 }}>{c.title}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="how-grid">
          {c.steps.map((s, i) => (
            <div key={i} style={{ borderTop: "1px solid var(--ink)", paddingTop: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
                <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 18, color: "var(--terracotta)" }}>{s.n}</span>
                <span style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Step</span>
              </div>
              <h3 className="h-2" style={{ fontSize: 28, marginBottom: 12 }}>{s.title}</h3>
              <p className="body-lg">{s.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <a href="how-it-works.html" className="btn-link">See the full patient journey <Arrow/></a>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .how-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

const TherapistSection = ({ lang = "en" }) => {
  const c = (COPY[lang] || COPY.en).therapists || COPY.en.therapists;
  return (
    <section className="surface-deep">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="ther-grid">
          <div>
            <div className="eyebrow">{c.eyebrow}</div>
            <h2 className="h-1" style={{ marginTop: 14, color: "var(--bg-elev)" }}>
              Build your practice. <span className="accent" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, color: "var(--gold)" }}>Keep your boundaries.</span>
            </h2>
            <p className="lede" style={{ marginTop: 24, maxWidth: 520 }}>{c.lede}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0", display: "grid", gap: 14, maxWidth: 520 }}>
              {c.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, fontSize: 16, color: "rgba(244,239,230,0.85)" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(212,166,86,0.2)", display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                    <Check size={12} color="var(--gold)" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
            <a href="for-therapists.html" className="btn" style={{ background: "var(--gold)", color: "var(--ink)" }}>{c.cta} <Arrow /></a>
          </div>
          <div>
            <TherapistCard />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .ther-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

const TherapistCard = () => (
  <div style={{ background: "rgba(244,239,230,0.04)", border: "1px solid rgba(244,239,230,0.1)", borderRadius: 24, padding: 28 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, fontSize: 12, color: "rgba(244,239,230,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
      <span>This week</span>
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7AB59A" }}/>Live</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
      <Mini label="Sessions" value="24" />
      <Mini label="Earnings" value="PKR 96k" />
      <Mini label="No-shows" value="0" sub="protected" />
      <Mini label="Avg. rating" value="4.9" sub="↑ 0.2 vs last wk" />
    </div>
    <div style={{ borderTop: "1px solid rgba(244,239,230,0.1)", paddingTop: 20 }}>
      <div style={{ fontSize: 12, color: "rgba(244,239,230,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Tomorrow</div>
      {[
        { time: "10:00", who: "Sana K.", type: "Follow-up · Anxiety" },
        { time: "11:30", who: "Hassan R.", type: "Intake · 45min" },
        { time: "14:00", who: "Mehreen J.", type: "Couples session" },
      ].map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 0", borderTop: i > 0 ? "1px solid rgba(244,239,230,0.06)" : "none" }}>
          <div style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 500, width: 50, color: "var(--gold)" }}>{s.time}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, color: "var(--bg-elev)" }}>{s.who}</div>
            <div style={{ fontSize: 12, color: "rgba(244,239,230,0.55)" }}>{s.type}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Mini = ({ label, value, sub }) => (
  <div style={{ background: "rgba(244,239,230,0.04)", borderRadius: 14, padding: 16 }}>
    <div style={{ fontSize: 11, color: "rgba(244,239,230,0.5)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</div>
    <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--bg-elev)", marginTop: 4 }}>{value}</div>
    {sub && <div style={{ fontSize: 11, color: "rgba(244,239,230,0.5)", marginTop: 2 }}>{sub}</div>}
  </div>
);

const TickerSection = () => (
  <div className="ticker">
    <div className="ticker-row">
      <span>
        Anxiety <span className="star">✦</span>
        Depression <span className="star">✦</span>
        Burnout <span className="star">✦</span>
        Relationships <span className="star">✦</span>
        Workplace stress <span className="star">✦</span>
        Grief <span className="star">✦</span>
        Family conflict <span className="star">✦</span>
        Self-worth <span className="star">✦</span>
        Sleep <span className="star">✦</span>
      </span>
      <span aria-hidden>
        Anxiety <span className="star">✦</span>
        Depression <span className="star">✦</span>
        Burnout <span className="star">✦</span>
        Relationships <span className="star">✦</span>
        Workplace stress <span className="star">✦</span>
        Grief <span className="star">✦</span>
        Family conflict <span className="star">✦</span>
        Self-worth <span className="star">✦</span>
        Sleep <span className="star">✦</span>
      </span>
    </div>
  </div>
);

const TrustSection = ({ lang = "en" }) => {
  const c = (COPY[lang] || COPY.en).trust || COPY.en.trust;
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">{c.eyebrow}</div>
          <h2 className="h-1">{c.title}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="quotes-grid">
          {c.quotes.map((q, i) => (
            <figure key={i} className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", margin: 0, minHeight: 280 }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {[...Array(5)].map((_, k) => <Star key={k} size={14} color="var(--terracotta)" />)}
              </div>
              <blockquote style={{ margin: 0, fontFamily: "var(--serif)", fontSize: 20, lineHeight: 1.4, color: "var(--ink)", fontStyle: "italic", letterSpacing: "-0.01em", textWrap: "pretty" }}>
                "{q.q}"
              </blockquote>
              <figcaption style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--line-soft)", display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                <span style={{ fontWeight: 500 }}>{q.who}</span>
                <span className="muted">{q.where}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .quotes-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

const PrivacySection = ({ lang = "en" }) => {
  const c = (COPY[lang] || COPY.en).privacy || COPY.en.privacy;
  return (
    <section className="surface-cream">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }} className="privacy-grid">
          <div>
            <div className="eyebrow">{c.eyebrow}</div>
            <h2 className="h-1" style={{ marginTop: 14 }}>
              What you share, <span className="accent" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400 }}>stays</span> between you and your therapist.
            </h2>
            <p className="lede" style={{ marginTop: 20, maxWidth: 480 }}>{c.lede}</p>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            {c.points.map((p, i) => (
              <div key={i} className="card" style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--sage)", color: "var(--bg-elev)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <ShieldIcon size={20} />
                </div>
                <div>
                  <h3 className="h-3" style={{ fontSize: 17, marginBottom: 6 }}>{p.t}</h3>
                  <p className="body" style={{ margin: 0 }}>{p.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .privacy-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

const DownloadSection = ({ lang = "en" }) => {
  const c = (COPY[lang] || COPY.en).download || COPY.en.download;
  return (
    <section>
      <div className="container">
        <div className="surface-sage" style={{ borderRadius: 32, padding: "clamp(48px, 6vw, 96px)", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center", overflow: "hidden", position: "relative" }} className="dl-grid">
          <div style={{ position: "relative", zIndex: 2 }}>
            <div className="eyebrow">{c.eyebrow}</div>
            <h2 className="h-1" style={{ marginTop: 14, color: "var(--bg-elev)" }}>
              TrueMind lives on your phone — <span className="accent" style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>quietly.</span>
            </h2>
            <p className="lede" style={{ marginTop: 20, maxWidth: 460 }}>{c.lede}</p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="download.html" className="store-badge">
                <Apple size={22} />
                <div>
                  <div className="small">Download on the</div>
                  <div className="big">App Store</div>
                </div>
              </a>
              <a href="download.html" className="store-badge">
                <PlayStoreIcon size={22} />
                <div>
                  <div className="small">Get it on</div>
                  <div className="big">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <PhonePreview />
          </div>
          <div className="breath" style={{ position: "absolute", left: -150, top: -150, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(244,239,230,0.1)" }}/>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .dl-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

const FaqSection = ({ lang = "en", limit = 4 }) => {
  const c = (COPY[lang] || COPY.en).faq || COPY.en.faq;
  const [open, setOpen] = React.useState(0);
  const items = c.items.slice(0, limit);
  return (
    <section>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }} className="faq-grid">
          <div>
            <div className="eyebrow">{c.eyebrow}</div>
            <h2 className="h-1" style={{ marginTop: 14 }}>{c.title}</h2>
            <a href="faq.html" className="btn-link" style={{ marginTop: 24 }}>See all questions <Arrow/></a>
          </div>
          <div>
            {items.map((it, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--line)", padding: "24px 0" }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left", padding: 0 }}>
                  <span className="h-3" style={{ fontSize: 19 }}>{it.q}</span>
                  <span style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid var(--line)", display: "grid", placeItems: "center", flexShrink: 0, marginLeft: 16 }}>
                    {open === i ? <Minus/> : <Plus/>}
                  </span>
                </button>
                {open === i && (
                  <p className="body-lg fade-up" style={{ marginTop: 16, maxWidth: 640 }}>{it.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .faq-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

Object.assign(window, { ConcernsSection, HowSection, TherapistSection, TickerSection, TrustSection, PrivacySection, DownloadSection, FaqSection });
