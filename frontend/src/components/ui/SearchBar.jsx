// src/components/ui/SearchBar.jsx

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search hospital..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "95%",
        padding: "10px",
        marginBottom: "12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
      }}
    />
  );
}
