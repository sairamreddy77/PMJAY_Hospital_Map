// src/api/backend.js

import axios from "axios";

const API_BASE = "http://127.0.0.1:5000"; // your Flask backend

// -------- Fetch nearest hospitals using lat/lon --------
export async function getNearestByGPS(lat, lon, limit = 7) {
  const res = await axios.get(
    `${API_BASE}/nearest?lat=${lat}&lon=${lon}&limit=${limit}`
  );
  return res.data;
}

// -------- Fetch nearest hospitals using PIN code --------
export async function getNearestByPIN(pin, limit = 7) {
  const res = await axios.get(`${API_BASE}/nearest?pin=${pin}&limit=${limit}`);
  // console.log(res.data);
  return res.data;
}
