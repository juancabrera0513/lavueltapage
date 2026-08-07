import { Link } from "react-router-dom";
import { STOP_PLAY_STORE_URL } from "../data/copy";

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
              <a
                className="btn btn-primary"
                href={STOP_PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.stop.primary}
              </a>

              <Link className="btn btn-secondary" to="/privacy/stop">
                {t.stop.secondary}
              </Link>
            </div>
          </div>

          <div className="phone-mockup" aria-label="STOP game preview">
            <div className="phone-top" />
            <img
              className="phone-screenshot"
              src="/assets/stop-screenshot-hero.png"
              alt="STOP gameplay screenshot from Google Play"
              loading="lazy"
            />
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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{t.common.official}</p>
            <h2>{t.stop.galleryTitle}</h2>
          </div>

          <div className="screens-strip">
            <img src="/assets/stop-screenshot-2.png" alt="STOP setup screen" loading="lazy" />
            <img src="/assets/stop-screenshot-3.png" alt="STOP results screen" loading="lazy" />
            <img src="/assets/stop-screenshot-hero.png" alt="STOP round in progress" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}