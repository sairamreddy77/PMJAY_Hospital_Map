// src/components/map/RecenterButton.jsx

import { useMap } from "react-leaflet";

export default function RecenterButton({ position }) {
  const map = useMap();

  const handleClick = () => {
    map.flyTo(position, 13);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "absolute",
        zIndex: 999,
        right: "15px",
        bottom: "15px",
        padding: "10px 14px",
        background: "#1976d2",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Recenter
    </button>
  );
}
