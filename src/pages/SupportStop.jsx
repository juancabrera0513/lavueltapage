import { CONTACT_EMAIL } from "../data/copy";
import InfoRow from "../components/InfoRow";

export default function SupportStop({ t }) {
  return (
    <section className="simple-page">
      <div className="container simple-card">
        <p className="eyebrow">La Vuelta Labs</p>
        <h1>{t.support.title}</h1>
        <p>{t.support.intro}</p>

        <div className="info-list">
          <InfoRow label={t.support.emailLabel} value={CONTACT_EMAIL} isEmail />
          <InfoRow label={t.support.appName} value="STOP" />
          <InfoRow label={t.support.developer} value="La Vuelta Labs" />
        </div>

        <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}`}>
          {t.common.emailUs}
        </a>
      </div>
    </section>
  );
}