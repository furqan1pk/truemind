// TrueMind — shared Nav + Footer
const Nav = ({ lang = "en", setLang, current = "home" }) => {
  const c = COPY[lang] || COPY.en;
  const links = [
    { id: "patients", href: "how-it-works.html", label: c.nav.forPatients },
    { id: "therapists", href: "for-therapists.html", label: c.nav.forTherapists },
    { id: "pricing", href: "pricing.html", label: c.nav.pricing },
    { id: "about", href: "about.html", label: c.nav.about },
    { id: "faq", href: "faq.html", label: c.nav.faq },
  ];
  return (
    <header className="nav-shell">
      <div className="container">
        <nav className="nav">
          <a href="index.html" className="nav-logo" aria-label="TrueMind home">
            <TrueMindMark size={28} color="var(--sage)" />
            <span>TrueMind</span>
          </a>
          <div className="nav-links">
            {links.map(l => (
              <a key={l.id} href={l.href} style={current === l.id ? { color: "var(--ink)", fontWeight: 500 } : {}}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-cta">
            {setLang && (
              <div className="lang-toggle" role="tablist" aria-label="Language">
                <button onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
                <button onClick={() => setLang("ur")} className={lang === "ur" ? "active" : ""}>اردو</button>
              </div>
            )}
            <a href="download.html" className="btn btn-primary">
              {c.nav.bookFree} <Arrow />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Footer = ({ lang = "en" }) => {
  const c = COPY[lang] || COPY.en;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <TrueMindMark size={28} color="#F4EFE6" />
              <span style={{ fontWeight: 600, fontSize: 19, letterSpacing: "-0.02em" }}>TrueMind</span>
            </div>
            <p style={{ color: "rgba(244, 239, 230, 0.65)", maxWidth: 320, fontSize: 14, lineHeight: 1.55, margin: "0 0 24px 0" }}>
              {c.footer.tagline}
            </p>
            <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
              <a href="download.html" className="store-badge" style={{ background: "rgba(244,239,230,0.1)", padding: "10px 14px" }}>
                <Apple size={18} />
                <div>
                  <div className="small">Download on</div>
                  <div className="big" style={{ fontSize: 14 }}>App Store</div>
                </div>
              </a>
              <a href="download.html" className="store-badge" style={{ background: "rgba(244,239,230,0.1)", padding: "10px 14px" }}>
                <PlayStoreIcon size={18} />
                <div>
                  <div className="small">Get it on</div>
                  <div className="big" style={{ fontSize: 14 }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="how-it-works.html">For patients</a></li>
              <li><a href="for-therapists.html">For therapists</a></li>
              <li><a href="download.html">Download app</a></li>
              <li><a href="pricing.html">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="about.html">Mission</a></li>
              <li><a href="about.html">Careers</a></li>
              <li><a href="about.html">Press</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="faq.html">Help centre</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="contact.html">Crisis support</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Clinical safety</a></li>
              <li><a href="#">Code of ethics</a></li>
            </ul>
          </div>
        </div>

        <div style={{
          background: "rgba(201, 122, 90, 0.12)",
          border: "1px solid rgba(201, 122, 90, 0.3)",
          borderRadius: 12,
          padding: "16px 20px",
          marginBottom: 32,
          display: "flex",
          gap: 14,
          alignItems: "flex-start",
          fontSize: 13.5,
          color: "rgba(244, 239, 230, 0.85)",
        }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--terracotta)", display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
            <span style={{ color: "#fff", fontWeight: 600, fontSize: 14, lineHeight: 1 }}>!</span>
          </div>
          <div>
            <strong style={{ color: "#fff", fontWeight: 500 }}>In a crisis?</strong> {c.footer.crisis}
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 TrueMind Health (Pvt) Ltd · Karachi, Pakistan</div>
          <div style={{ display: "flex", gap: 24 }}>
            <span>Pakistan 🇵🇰</span>
            <span>Coming soon: UAE 🇦🇪 · KSA 🇸🇦 · Bangladesh 🇧🇩</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Nav, Footer });
