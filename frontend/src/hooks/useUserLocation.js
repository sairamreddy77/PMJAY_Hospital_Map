// src/hooks/useUserLocation.js
import { useState } from "react";

export default function useUserLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  const detectLocation = (callback) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const current = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        };

        setLocation(current);
        setError("");

        if (callback) callback(current); // <-- NEW
      },
      () => {
        setError("Location blocked. Enter PIN instead.");
      }
    );
  };

  return { location, error, detectLocation };
}
