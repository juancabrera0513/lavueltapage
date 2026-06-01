import { CONTACT_EMAIL } from "../data/copy";
import InfoRow from "../components/InfoRow";

export default function Contact({ t }) {
  return (
    <section className="simple-page">
      <div className="container simple-card">
        <p className="eyebrow">La Vuelta Labs</p>
        <h1>{t.contact.title}</h1>
        <p>{t.contact.intro}</p>

        <div className="info-list">
          <InfoRow label={t.contact.emailLabel} value={CONTACT_EMAIL} isEmail />
        </div>

        <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}`}>
          {t.common.emailUs}
        </a>
      </div>
    </section>
  );
}