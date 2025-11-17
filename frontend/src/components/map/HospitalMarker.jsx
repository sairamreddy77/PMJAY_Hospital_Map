// src/components/map/HospitalMarker.jsx

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const hospitalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
  iconSize: [32, 32],
});

export default function HospitalMarker({ hospital }) {
  const { lat, lon, name, district, state } = hospital;

  const gmapsURL = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;

  return (
    <Marker position={[lat, lon]} icon={hospitalIcon}>
      <Popup>
        <strong>{name}</strong> <br />
        {district}, {state}
        <br />
        <a href={gmapsURL} target="_blank" rel="noreferrer">
          🔗 Directions
        </a>
      </Popup>
    </Marker>
  );
}
