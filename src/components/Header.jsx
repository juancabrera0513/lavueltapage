import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header({ lang, setLang, t }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/stop", label: t.nav.stop },
    { to: "/quien-soy-biblia", label: t.nav.bible },
    { to: "/privacy/stop", label: t.nav.privacy },
    { to: "/terms/stop", label: t.nav.terms },
    { to: "/support/stop", label: t.nav.support },
    { to: "/contact", label: t.nav.contact }
  ];

  const handleLanguageClick = () => {
    setLang(lang === "en" ? "es" : "en");
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isMenuOpen ? "is-menu-open" : ""}`}>
      <Link
        to="/"
        className="brand brand-with-logo"
        aria-label="La Vuelta Labs home"
        onClick={() => setIsMenuOpen(false)}
      >
        <img
          src="/assets/la-vuelta-logo.png"
          alt="La Vuelta Labs"
          className="brand-logo"
        />
      </Link>

      <button
        className="menu-btn"
        type="button"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        className="language-btn"
        type="button"
        onClick={handleLanguageClick}
      >
        {t.common.language}
      </button>
    </header>
  );
}
