import { Link } from "react-router-dom";

export default function NotFound({ t }) {
  return (
    <section className="simple-page">
      <div className="container simple-card">
        <p className="eyebrow">{t.notFound.eyebrow}</p>
        <h1>{t.notFound.title}</h1>
        <p>{t.notFound.text}</p>

        <Link className="btn btn-primary" to="/">
          {t.notFound.cta}
        </Link>
      </div>
    </section>
  );
}