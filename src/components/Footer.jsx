import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function Footer({ t }) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <strong>La Vuelta Labs</strong>
          <p>{t.footer.text}</p>
        </div>

        <nav className="footer-col" aria-label="Games">
          <span className="footer-col-heading">{t.footer.gamesHeading}</span>
          <Link to="/stop">{t.nav.stop}</Link>
          <Link to="/quien-soy-biblia">{t.nav.bible}</Link>
        </nav>

        <nav className="footer-col" aria-label="Legal">
          <span className="footer-col-heading">{t.footer.legalHeading}</span>
          <Link to="/privacy/stop">{t.footer.stopPrivacy}</Link>
          <Link to="/terms/stop">{t.footer.stopTerms}</Link>
          <Link to="/privacy/quien-soy-biblia">{t.footer.biblePrivacyShort}</Link>
        </nav>

        <nav className="footer-col" aria-label="Company">
          <span className="footer-col-heading">{t.footer.companyHeading}</span>
          <Link to="/support/stop">{t.nav.support}</Link>
          <Link to="/contact">{t.nav.contact}</Link>
        </nav>
      </div>

      <div className="container copyright">
        © {year} La Vuelta Labs. {t.footer.rights}
      </div>
    </footer>
  );
}
