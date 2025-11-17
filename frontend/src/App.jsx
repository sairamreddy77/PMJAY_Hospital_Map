// src/App.jsx

import { useState } from "react";
import useUserLocation from "./hooks/useUserLocation";
import { getNearestByGPS, getNearestByPIN } from "./api/backend";

import Sidebar from "./components/sidebar/Sidebar";
import MapView from "./components/map/MapView";




export default function App() {
  const { location: userLocation, error: locationError, detectLocation } = useUserLocation();

  const [hospitals, setHospitals] = useState([]);
  const [pin, setPin] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);


  // ------------------------------
  // Handle GPS "Find Nearest"
  // ------------------------------
  const handleFindNearest = () => {
    detectLocation(async (coords) => {
      // coords = {lat, lon}

      try {
        const data = await getNearestByGPS(coords.lat, coords.lon, 7);
        setHospitals(data);
        setErrorMsg("");
      } catch (err) {
        setErrorMsg("Failed to fetch hospitals.");
      }
    });
  };

  // ------------------------------
  // Handle PIN "Search by PIN"
  // ------------------------------
  const searchByPIN = async () => {
    if (!pin) {
      setErrorMsg("Enter a valid PIN code.");
      return;
    }
    
    try {
      const data = await getNearestByPIN(pin, 7);

      if (data.length === 0) {
        setErrorMsg("No hospitals found for this PIN.");
        return;
      }

      // Center map to first hospital in PIN area
      setHospitals(data);
      setErrorMsg("");
    } catch (err) {
      setErrorMsg("Invalid PIN or server error.");
    }
  };

  // Filter hospitals using search bar
  const filteredHospitals = hospitals.filter((h) =>
    h.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ------------------------------
  // RENDER UI
  // ------------------------------
  return (
    <div style={{ padding: "20px" }}>
      <h1>MediMap PMJAY Hospital Locator</h1>

      {/* Main buttons */}
      <button onClick={handleFindNearest}>Find Nearest Hospitals</button>

      {/* If GPS blocked */}
      {locationError && (
        <div style={{ marginTop: "15px" }}>
          <p style={{ color: "red" }}>{locationError}</p>

          <input
            type="text"
            placeholder="Enter PIN code"
            value={pin}
            maxLength={6}
            onChange={(e) => setPin(e.target.value)}
            style={{ padding: "8px", marginRight: "10px" }}
          />

          <button onClick={searchByPIN}>Search</button>
        </div>
      )}

      {/* Additional error messages */}
      {errorMsg && <p style={{ color: "red", marginTop: "10px" }}>{errorMsg}</p>}

      {/* Layout: Sidebar + Map */}
      <div style={{ display: "flex", marginTop: "25px" }}>
        {/* Left panel */}
        <Sidebar
          hospitals={filteredHospitals}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onHospitalSelect={(loc) => setSelectedLocation(loc)}
        />

        {/* Map panel */}
        <div style={{ width: "70%", paddingLeft: "15px" }}>
          {userLocation && (
            <MapView
              userLocation={userLocation}
              hospitals={filteredHospitals}
              selectedLocation={selectedLocation}
            />
          )}
        </div>
      </div>
    </div>
  );
}
