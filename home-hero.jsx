// Homepage sections — used by index.html
// Hero variants A1, A2, A3 selectable via Tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "editorial",
  "language": "en"
}/*EDITMODE-END*/;

const HeroEditorial = ({ lang }) => {
  const c = (COPY[lang] || COPY.en).hero;
  const isUr = lang === "ur";
  return (
    <section style={{ paddingTop: "clamp(60px, 7vw, 96px)", paddingBottom: 0 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "end" }} className="hero-grid-editorial">
          <div>
            <div className="chip" style={{ marginBottom: 32 }}>
              <span className="dot" /> {c.eyebrow}
            </div>
            <h1 className="h-display" lang={lang} style={isUr ? { textAlign: "right", lineHeight: 1.4 } : {}}>
              {isUr ? (
                <>
                  سکون پائیں،<br/>
                  <span className="accent" style={{ color: "var(--terracotta)" }}>اعتماد کے ساتھ۔</span>
                </>
              ) : (
                <>
                  Find clarity,<br/>
                  <span className="accent" style={{ color: "var(--terracotta)" }}>in confidence.</span>
                </>
              )}
            </h1>
            <p className="lede" lang={lang} style={{ marginTop: 28, maxWidth: 540, ...(isUr ? { textAlign: "right", marginLeft: "auto" } : {}) }}>
              {c.lede}
            </p>
            <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap", ...(isUr ? { justifyContent: "flex-end" } : {}) }}>
              <a href="download.html" className="btn btn-primary">
                {c.ctaPrimary} <Arrow />
              </a>
              <a href="for-therapists.html" className="btn btn-ghost">
                {c.ctaSecondary}
              </a>
            </div>
            <div style={{ marginTop: 44, display: "flex", gap: 28, flexWrap: "wrap", ...(isUr ? { justifyContent: "flex-end" } : {}) }}>
              {c.bullets.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--ink-soft)" }}>
                  <Check color="var(--sage)" />
                  <span lang={lang}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — 3D orb behind phone preview */}
          <div style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: "-40px", zIndex: 0 }}>
              {typeof ThreeOrb !== "undefined" && <ThreeOrb height="100%" />}
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <PhonePreview />
            </div>
          </div>
        </div>

        {/* Big stat row anchoring hero */}
        <div style={{
          marginTop: "clamp(60px, 7vw, 96px)",
          paddingTop: 36, paddingBottom: 36,
          borderTop: "1px solid var(--line-soft)",
          borderBottom: "1px solid var(--line-soft)",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }} className="stat-row">
          <Stat n="600+" l="Verified therapists" />
          <Stat n="40k+" l="Sessions completed" />
          <Stat n="4.8" l={<><Star color="var(--terracotta)" size={12}/> avg. session rating</>} />
          <Stat n="< 24h" l="Avg. time to first session" />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-grid-editorial { grid-template-columns: 1fr !important; }
          .stat-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

const Stat = ({ n, l }) => (
  <div>
    <div style={{ fontFamily: "var(--sans)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 500, letterSpacing: "-0.025em", color: "var(--ink)" }}>{n}</div>
    <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 6, display: "flex", alignItems: "center", gap: 6 }}>{l}</div>
  </div>
);

// Hero B — large centered with full-bleed photo collage
const HeroFullbleed = ({ lang }) => {
  const c = (COPY[lang] || COPY.en).hero;
  const isUr = lang === "ur";
  return (
    <section style={{ paddingTop: "clamp(40px, 5vw, 64px)", paddingBottom: 0 }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 880, margin: "0 auto", paddingBottom: 56 }}>
          <div className="chip" style={{ marginBottom: 24 }}>
            <span className="dot" /> {c.eyebrow}
          </div>
          <h1 className="h-display" lang={lang}>
            {isUr ? (
              <>ذہنی صحت، <span className="accent" style={{ color: "var(--terracotta)" }}>بغیر انتظار کے۔</span></>
            ) : (
              <>Mental health care, <span className="accent" style={{ color: "var(--terracotta)" }}>without the wait.</span></>
            )}
          </h1>
          <p className="lede" lang={lang} style={{ marginTop: 24, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            {c.lede}
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="download.html" className="btn btn-primary">{c.ctaPrimary} <Arrow /></a>
            <a href="for-therapists.html" className="btn btn-ghost">{c.ctaSecondary}</a>
          </div>
        </div>
      </div>
      {/* Image strip collage */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1fr", gap: 16, padding: "0 32px", maxWidth: 1600, margin: "0 auto" }} className="hero-collage">
        <div className="photo" style={{ aspectRatio: "3/4", marginTop: 40 }}>
          <PlaceholderPhoto label="Listening" tone="terracotta" />
        </div>
        <div className="photo" style={{ aspectRatio: "4/3" }}>
          <PlaceholderPhoto label="A quiet conversation" tone="sage" />
        </div>
        <div className="photo" style={{ aspectRatio: "3/4", marginTop: 80 }}>
          <PlaceholderPhoto label="Morning routine" tone="cream" />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-collage { grid-template-columns: 1fr !important; }
          .hero-collage > * { margin-top: 0 !important; }
        }
      `}</style>
    </section>
  );
};

// Hero C — split panel, sage left
const HeroSplit = ({ lang }) => {
  const c = (COPY[lang] || COPY.en).hero;
  const isUr = lang === "ur";
  return (
    <section style={{ padding: 0 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", minHeight: "min(720px, 80vh)" }} className="hero-split">
        <div className="surface-sage" style={{ padding: "clamp(48px, 6vw, 96px)", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          <div className="chip" style={{ marginBottom: 28, background: "rgba(244,239,230,0.12)", borderColor: "rgba(244,239,230,0.2)", color: "rgba(244,239,230,0.85)" }}>
            <span className="dot" style={{ background: "var(--terracotta)" }}/> {c.eyebrow}
          </div>
          <h1 className="h-display" lang={lang} style={{ color: "var(--bg-elev)" }}>
            {isUr ? <>سکون پائیں،<br/><span className="accent" style={{ color: "var(--gold)" }}>اعتماد کے ساتھ۔</span></> : <>Find clarity,<br/><span className="accent" style={{ color: "var(--gold)" }}>in confidence.</span></>}
          </h1>
          <p className="lede" lang={lang} style={{ color: "rgba(244,239,230,0.78)", marginTop: 24, maxWidth: 480 }}>{c.lede}</p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="download.html" className="btn" style={{ background: "var(--bg-elev)", color: "var(--ink)" }}>{c.ctaPrimary} <Arrow /></a>
            <a href="for-therapists.html" className="btn" style={{ background: "transparent", color: "var(--bg-elev)", border: "1px solid rgba(244,239,230,0.3)" }}>{c.ctaSecondary}</a>
          </div>
          {/* Decorative breathing circle */}
          <div className="breath" style={{
            position: "absolute", right: -120, bottom: -120,
            width: 360, height: 360, borderRadius: "50%",
            border: "1px solid rgba(244,239,230,0.15)",
          }}/>
          <div className="breath" style={{
            position: "absolute", right: -60, bottom: -60,
            width: 240, height: 240, borderRadius: "50%",
            border: "1px solid rgba(244,239,230,0.2)",
            animationDelay: "1.5s",
          }}/>
        </div>
        <div style={{ background: "var(--bg-deep)", display: "grid", placeItems: "center", padding: 32 }}>
          <PhonePreview />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-split { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// Phone with app preview
const PhonePreview = () => (
  <div style={{
    width: "min(340px, 100%)",
    aspectRatio: "9/19",
    background: "var(--ink)",
    borderRadius: 44,
    padding: 10,
    boxShadow: "0 30px 80px rgba(31,36,33,0.18), 0 8px 30px rgba(31,36,33,0.1)",
    margin: "0 auto",
    position: "relative",
  }}>
    <div style={{
      width: "100%", height: "100%",
      background: "var(--bg-elev)",
      borderRadius: 36,
      overflow: "hidden",
      display: "flex", flexDirection: "column",
      position: "relative",
    }}>
      {/* status bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 24px 8px", fontSize: 13, fontWeight: 600 }}>
        <span>9:41</span>
        <div style={{ width: 80, height: 22, background: "var(--ink)", borderRadius: 12, position: "absolute", left: "50%", top: 8, transform: "translateX(-50%)" }} />
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <svg width="16" height="10" viewBox="0 0 16 10"><rect x="0" y="6" width="3" height="4" fill="currentColor"/><rect x="4" y="4" width="3" height="6" fill="currentColor"/><rect x="8" y="2" width="3" height="8" fill="currentColor"/><rect x="12" y="0" width="3" height="10" fill="currentColor"/></svg>
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: "20px 22px 8px" }}>
        <div style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Tuesday, May 5</div>
        <div style={{ fontFamily: "var(--sans)", fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 4 }}>Good morning, Aisha</div>
      </div>

      {/* Next session card */}
      <div style={{ margin: "16px 18px 12px", padding: 16, background: "var(--sage)", color: "var(--bg-elev)", borderRadius: 18 }}>
        <div style={{ fontSize: 11, opacity: 0.7, letterSpacing: "0.08em", textTransform: "uppercase" }}>Next session</div>
        <div style={{ fontSize: 17, fontWeight: 500, marginTop: 6 }}>Dr. Hira Khan</div>
        <div style={{ fontSize: 13, opacity: 0.85, marginTop: 2 }}>Today · 6:30 PM · Video</div>
        <div style={{ marginTop: 12, padding: "8px 14px", background: "rgba(244,239,230,0.18)", borderRadius: 999, display: "inline-block", fontSize: 12, fontWeight: 500 }}>
          Join in 4h 12m
        </div>
      </div>

      {/* Quick check-in */}
      <div style={{ margin: "0 18px 12px", padding: 14, background: "var(--bg-deep)", borderRadius: 14 }}>
        <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>How are you feeling today?</div>
        <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
          {["😔", "😐", "🙂", "😊", "🌤"].map((m, i) => (
            <div key={i} style={{
              flex: 1, padding: "8px 0", textAlign: "center",
              background: i === 2 ? "var(--terracotta)" : "var(--bg-elev)",
              borderRadius: 10, fontSize: 18,
              border: i === 2 ? "none" : "1px solid var(--line-soft)",
            }}>{m}</div>
          ))}
        </div>
      </div>

      {/* Therapists */}
      <div style={{ margin: "8px 18px 0", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: "var(--ink-soft)" }}>Your therapy team</div>
          <div style={{ fontSize: 11, color: "var(--ink-mute)" }}>See all</div>
        </div>
        {[
          { name: "Dr. Hira Khan", spec: "Anxiety · CBT", color: "var(--terracotta)" },
          { name: "Dr. Asad Mahmood", spec: "Couples · EFT", color: "var(--sage-soft)" },
        ].map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderTop: i > 0 ? "1px solid var(--line-soft)" : "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{t.name}</div>
              <div style={{ fontSize: 11, color: "var(--ink-mute)" }}>{t.spec}</div>
            </div>
            <div style={{ fontSize: 10, padding: "3px 8px", background: "var(--bg-deep)", borderRadius: 999, color: "var(--ink-soft)" }}>Verified</div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 0 14px", borderTop: "1px solid var(--line-soft)" }}>
        {["Home", "Sessions", "Journal", "You"].map((t, i) => (
          <div key={i} style={{ fontSize: 10, color: i === 0 ? "var(--ink)" : "var(--ink-mute)", fontWeight: i === 0 ? 600 : 400 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: i === 0 ? "var(--terracotta)" : "transparent", margin: "0 auto 4px" }}/>
            {t}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PlaceholderPhoto = ({ label, tone = "sage" }) => {
  const palette = {
    sage: { bg: "var(--sage)", fg: "rgba(244,239,230,0.85)" },
    terracotta: { bg: "var(--terracotta)", fg: "rgba(244,239,230,0.92)" },
    cream: { bg: "var(--bg-deep)", fg: "var(--ink-soft)" },
    deep: { bg: "var(--ink)", fg: "rgba(244,239,230,0.7)" },
  }[tone];
  return (
    <div style={{
      width: "100%", height: "100%",
      background: palette.bg,
      display: "flex", alignItems: "flex-end",
      padding: 24,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Soft organic shape */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.18), transparent 60%)`,
      }}/>
      <div style={{ position: "relative", color: palette.fg, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 16, opacity: 0.85 }}>
        {label}
      </div>
      <div style={{
        position: "absolute", top: 16, right: 16,
        padding: "4px 10px", background: "rgba(0,0,0,0.25)", color: "rgba(255,255,255,0.85)",
        borderRadius: 999, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
      }}>Photo placeholder</div>
    </div>
  );
};

Object.assign(window, { HeroEditorial, HeroFullbleed, HeroSplit, Stat, PhonePreview, PlaceholderPhoto, TWEAK_DEFAULTS });
