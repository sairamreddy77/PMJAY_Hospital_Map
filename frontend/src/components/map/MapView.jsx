// src/components/map/MapView.jsx

import { MapContainer, TileLayer } from "react-leaflet";
import UserMarker from "./UserMarker";
import HospitalMarker from "./HospitalMarker";
import RecenterButton from "./RecenterButton";
import FlyToLocation from "./FlyToLocation";

export default function MapView({ userLocation, hospitals , selectedLocation}) {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[userLocation.lat, userLocation.lon]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Map Tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />


        {/* Fly when a hospital from sidebar is clicked */}
        {selectedLocation &&
          selectedLocation.lat &&
          selectedLocation.lon &&
          !isNaN(selectedLocation.lat) &&
          !isNaN(selectedLocation.lon) && (
            <FlyToLocation position={selectedLocation} />
        )}

        
        {/* User marker */}
        <UserMarker position={[userLocation.lat, userLocation.lon]} />

        {/* Hospital markers */}
        {hospitals.map((h, i) => (
          <HospitalMarker key={i} hospital={h} />
        ))}

        {/* Recenter button */}
        <RecenterButton position={[userLocation.lat, userLocation.lon]} />
      </MapContainer>
    </div>
  );
}
