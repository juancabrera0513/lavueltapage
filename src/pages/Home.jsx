import { Link } from "react-router-dom";

export default function Home({ t }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-bg hero-bg-one" />
        <div className="hero-bg hero-bg-two" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{t.home.eyebrow}</p>
            <h1>{t.home.title}</h1>
            <p className="hero-text">{t.home.subtitle}</p>

            <div className="button-row">
              <Link className="btn btn-primary" to="/stop">
                {t.home.primary}
              </Link>

              <Link className="btn btn-secondary" to="/contact">
                {t.home.secondary}
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="orbit-card orbit-card-main">
              <span>STOP</span>
              <strong>Word Game</strong>
              <small>Spanish mobile experience</small>
            </div>

            <div className="mini-card mini-card-top">Games</div>
            <div className="mini-card mini-card-bottom">Apps</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{t.home.whatTitle}</p>
            <h2>{t.home.whatText}</h2>
          </div>

          <div className="cards-grid">
            {t.home.cards.map((card) => (
              <article className="feature-card" key={card.title}>
                <div className="card-icon">{card.title.charAt(0)}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container featured-grid">
          <div className="featured-card">
            <p className="eyebrow">{t.home.featuredLabel}</p>
            <h2>{t.home.featuredTitle}</h2>
            <p>{t.home.featuredText}</p>

            <Link className="text-link" to="/stop">
              View STOP
            </Link>
          </div>

          <div className="about-card">
            <p className="eyebrow">{t.home.aboutTitle}</p>
            <p>{t.home.aboutText}</p>
          </div>
        </div>
      </section>
    </>
  );
}