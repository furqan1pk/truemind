// Shared page header — used across sub-pages
const PageHeader = ({ eyebrow, title, lede, accent = "var(--terracotta)" }) => (
  <section style={{ paddingTop: 80, paddingBottom: 48 }}>
    <div className="container">
      <div className="eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</div>
      <h1 className="h-display" style={{ fontSize: "clamp(44px, 5vw, 76px)", maxWidth: 900 }}>
        {title}
      </h1>
      {lede && <p className="lede" style={{ marginTop: 24, maxWidth: 640 }}>{lede}</p>}
    </div>
  </section>
);

const CTABlock = ({ title, sub, ctaLabel = "Book a free first session", ctaHref = "download.html", secondary }) => (
  <section>
    <div className="container">
      <div className="surface-deep" style={{ borderRadius: 28, padding: "clamp(48px, 6vw, 80px)", textAlign: "center" }}>
        <h2 className="h-1" style={{ color: "var(--bg-elev)", maxWidth: 680, margin: "0 auto" }}>{title}</h2>
        {sub && <p className="lede" style={{ marginTop: 18, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>{sub}</p>}
        <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={ctaHref} className="btn" style={{ background: "var(--bg-elev)", color: "var(--ink)" }}>{ctaLabel} <Arrow/></a>
          {secondary && <a href={secondary.href} className="btn" style={{ background: "transparent", color: "var(--bg-elev)", border: "1px solid rgba(244,239,230,0.3)" }}>{secondary.label}</a>}
        </div>
      </div>
    </div>
  </section>
);

const Page = ({ current, children }) => {
  const [lang, setLang] = React.useState("en");
  return (
    <>
      <Nav lang={lang} setLang={setLang} current={current} />
      <main>{typeof children === "function" ? children(lang) : children}</main>
      <Footer lang={lang} />
    </>
  );
};

Object.assign(window, { PageHeader, CTABlock, Page });
