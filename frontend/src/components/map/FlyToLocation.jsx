// src/components/map/FlyToLocation.jsx

import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function FlyToLocation({ position }) {
  const map = useMap();

  useEffect(() => {
    if (
      position &&
      typeof position.lat === "number" &&
      typeof position.lon === "number"
    ) {
      map.flyTo([position.lat, position.lon], 14, { duration: 1.2 });
    }
  }, [position]);

  return null;
}
