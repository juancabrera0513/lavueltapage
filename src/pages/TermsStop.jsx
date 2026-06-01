import { LAST_UPDATED } from "../data/copy";

export default function TermsStop({ t }) {
  return (
    <section className="legal-section">
      <div className="container legal-container">
        <p className="eyebrow">La Vuelta Labs</p>
        <h1>{t.terms.title}</h1>

        <p className="legal-intro">{t.terms.intro}</p>

        <p className="updated">
          {t.common.lastUpdated}: {LAST_UPDATED}
        </p>

        <div className="legal-content">
          {t.terms.sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}