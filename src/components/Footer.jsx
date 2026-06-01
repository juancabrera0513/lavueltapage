import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function Footer({ t }) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>La Vuelta Labs</strong>
          <p>{t.footer.text}</p>
        </div>

        <div className="footer-links">
          <Link to="/stop">STOP</Link>
          <Link to="/privacy/stop">Privacy</Link>
          <Link to="/terms/stop">Terms</Link>
          <Link to="/support/stop">Support</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="container copyright">
        © {year} La Vuelta Labs. {t.footer.rights}
      </div>
    </footer>
  );
}