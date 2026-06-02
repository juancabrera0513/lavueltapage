import { Link, NavLink } from "react-router-dom";

export default function Header({ lang, setLang, t }) {
  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/stop", label: t.nav.stop },
    { to: "/privacy/stop", label: t.nav.privacy },
    { to: "/terms/stop", label: t.nav.terms },
    { to: "/support/stop", label: t.nav.support },
    { to: "/contact", label: t.nav.contact }
  ];

  return (
    <header className="site-header">
      <Link
        to="/"
        className="brand brand-with-logo"
        aria-label="La Vuelta Labs home"
      >
        <img
          src="/assets/la-vuelta-logo.png"
          alt="La Vuelta Labs"
          className="brand-logo"
        />
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        className="language-btn"
        type="button"
        onClick={() => setLang(lang === "en" ? "es" : "en")}
      >
        {t.common.language}
      </button>
    </header>
  );
}