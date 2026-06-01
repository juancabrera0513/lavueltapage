import { Link } from "react-router-dom";

export default function NotFound({ t }) {
  return (
    <section className="simple-page">
      <div className="container simple-card">
        <p className="eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>

        <Link className="btn btn-primary" to="/">
          {t.nav.home}
        </Link>
      </div>
    </section>
  );
}