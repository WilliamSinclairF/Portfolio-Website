export default function SectionHeader({ title, color }) {
  return (
    <div className="text-center m-l p-l">
      <span className="t-large fw-m" style={{ color: color || 'white' }}>
        {title}
      </span>
    </div>
  );
}
