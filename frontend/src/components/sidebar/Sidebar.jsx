// src/components/sidebar/Sidebar.jsx

import SearchBar from "../ui/SearchBar";
import HospitalListItem from "./HospitalListItem";

export default function Sidebar({
  hospitals,
  searchTerm,
  setSearchTerm,
  onHospitalSelect,
}) {
  return (
    <div
      style={{
        width: "30%",
        maxHeight: "500px",
        overflowY: "auto",
        paddingRight: "12px",
        borderRight: "1px solid #ddd",
      }}
    >
      <h3>Nearby Hospitals</h3>

      {/* Search Bar */}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {/* Hospital List */}
      {hospitals.length > 0 ? (
        hospitals.map((hospital, i) => (
          <HospitalListItem
            key={i}
            hospital={hospital}
            onClick={() =>
              onHospitalSelect({ lat: hospital.lat, lon: hospital.lon })
            }
          />
        ))
      ) : (
        <p>No hospitals found.</p>
      )}
    </div>
  );
}
