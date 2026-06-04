import { BIBLE_PRIVACY_LAST_UPDATED } from "../data/copy";

export default function PrivacyBibleGame({ t }) {
  return (
    <section className="legal-section">
      <div className="container legal-container">
        <p className="eyebrow">La Vuelta Labs</p>
        <h1>{t.biblePrivacy.title}</h1>

        <p className="legal-intro">{t.biblePrivacy.intro}</p>
        <p className="legal-app-info">{t.biblePrivacy.appInfo}</p>

        <p className="updated">
          {t.common.lastUpdated}: {BIBLE_PRIVACY_LAST_UPDATED}
        </p>

        <div className="legal-content">
          {t.biblePrivacy.sections.map((section) => (
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
