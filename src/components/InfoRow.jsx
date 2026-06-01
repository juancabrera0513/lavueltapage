export default function InfoRow({ label, value, isEmail = false }) {
  return (
    <div className="info-row">
      <span>{label}</span>

      {isEmail ? (
        <a href={`mailto:${value}`}>{value}</a>
      ) : (
        <strong>{value}</strong>
      )}
    </div>
  );
}