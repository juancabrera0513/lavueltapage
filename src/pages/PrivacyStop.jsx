import { STOP_PRIVACY_LAST_UPDATED } from "../data/copy";

export default function PrivacyStop({ t }) {
  return (
    <section className="legal-section">
      <div className="container legal-container">
        <p className="eyebrow">La Vuelta Labs</p>
        <h1>{t.privacy.title}</h1>

        <p className="legal-intro">{t.privacy.intro}</p>
        <p className="legal-app-info">{t.privacy.appInfo}</p>

        <p className="updated">
          {t.common.lastUpdated}: {STOP_PRIVACY_LAST_UPDATED}
        </p>

        <div className="legal-content">
          {t.privacy.sections.map((section) => (
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