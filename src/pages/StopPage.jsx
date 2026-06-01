import { Link } from "react-router-dom";

export default function StopPage({ t }) {
  return (
    <>
      <section className="product-hero">
        <div className="container product-grid">
          <div>
            <p className="eyebrow">{t.stop.eyebrow}</p>
            <h1>{t.stop.title}</h1>
            <p className="hero-text">{t.stop.subtitle}</p>

            <div className="button-row">
              <span className="btn btn-primary btn-static">
                {t.stop.primary}
              </span>

              <Link className="btn btn-secondary" to="/privacy/stop">
                {t.stop.secondary}
              </Link>
            </div>
          </div>

          <div className="phone-mockup" aria-label="STOP game preview">
            <div className="phone-top" />

            <div className="game-screen">
              <span className="game-badge">STOP</span>
              <h2>Letra: M</h2>

              <div className="answer-row">Nombre</div>
              <div className="answer-row">País</div>
              <div className="answer-row">Comida</div>

              <div className="timer-pill">00:45</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">{t.stop.howTitle}</p>
            <h2>{t.stop.statusTitle}</h2>
            <p>{t.stop.statusText}</p>
          </div>

          <div className="step-list">
            {t.stop.how.map((item, index) => (
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
            <p className="eyebrow">{t.stop.featuresTitle}</p>
            <h2>Built for fast rounds, replay value, and simple fun.</h2>
          </div>

          <div className="pill-grid">
            {t.stop.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}