// src/components/sidebar/HospitalListItem.jsx

export default function HospitalListItem({ hospital, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "12px",
        borderBottom: "1px solid #eee",
        cursor: "pointer",
        borderRadius: "6px",
        background: "#fafafa",
        marginBottom: "8px",
        transition: "0.2s",
      }}
    >
      <strong style={{ fontSize: "14px" }}>{hospital.name}</strong> <br />

      <small style={{ color: "#555" }}>
        {hospital.district}, {hospital.state}
      </small>
      <br />

      <em style={{ color: "#777" }}>{hospital.distance_km} km away</em>
    </div>
  );
}
