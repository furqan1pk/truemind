// Homepage body sections — concerns, how, therapists, trust, privacy, download, faq

const ConcernsSection = ({ lang = "en" }) => {
  const c = (COPY[lang] || COPY.en).concerns || COPY.en.concerns;
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
          {c.items.map((it, i) => (
            <a key={i} href="how-it-works.html" className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", aspectRatio: "3/4", padding: 22 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: ["var(--terracotta)","var(--sage)","var(--gold)","var(--sage-soft)","var(--ink)"][i % 5], opacity: 0.9 }}/>
              <div>
                <div className="h-3" style={{ marginBottom: 6 }}>{it.name}</div>
                <div className="muted" style={{ fontSize: 13 }}>{it.count}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .concerns-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
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
