export default function SectionHeader({ title, color }) {
  return (
    <div className="sectionTitle">
      <span className="t-large fw-m" style={{ color: color || 'white' }}>
        {title}
      </span>
    </div>
  );
}
