import { Link } from "react-router-dom";

export default function BibleGamePage({ t }) {
  return (
    <>
      <section className="product-hero bible-hero">
        <div className="container product-grid">
          <div>
            <p className="eyebrow">{t.bibleGame.eyebrow}</p>
            <h1>{t.bibleGame.title}</h1>
            <p className="hero-text">{t.bibleGame.subtitle}</p>

            <div className="button-row">
              <span className="btn btn-primary btn-static">
                {t.bibleGame.primary}
              </span>

              <Link className="btn btn-secondary" to="/privacy/quien-soy-biblia">
                {t.bibleGame.secondary}
              </Link>
            </div>
          </div>

          <div
            className="phone-mockup bible-phone"
            aria-label="¿Quién Soy? Biblia game preview"
          >
            <div className="phone-top" />

            <div className="game-screen bible-screen">
              <span className="game-badge bible-badge">¿Quién Soy?</span>
              <p className="clue-label">Pista 1 de 4</p>
              <h2>Fui vendido por mis hermanos.</h2>

              <div className="answer-row bible-answer">Moisés</div>
              <div className="answer-row bible-answer is-correct">José</div>
              <div className="answer-row bible-answer">David</div>

              <div className="timer-pill bible-timer">Personaje bíblico</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">{t.bibleGame.howTitle}</p>
            <h2>{t.bibleGame.statusTitle}</h2>
            <p>{t.bibleGame.statusText}</p>
          </div>

          <div className="step-list">
            {t.bibleGame.how.map((item, index) => (
              <div className="step-item" key={item}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{t.bibleGame.featuresTitle}</p>
            <h2>{t.bibleGame.featuresHeading}</h2>
          </div>

          <div className="pill-grid">
            {t.bibleGame.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
