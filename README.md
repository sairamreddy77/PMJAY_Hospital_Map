# 🩺 MediMap – PMJAY Hospital Locator

A **location-based hospital discovery platform** built with **React, Leaflet, and Flask** that helps users find the nearest **PMJAY (Ayushman Bharat)** empanelled hospitals.

---

## 🌟 Overview

While Google Maps lists all hospitals, it doesn’t allow filtering by PMJAY eligibility—leading many low-income families to visit non-empanelled hospitals unknowingly.

**MediMap** bridges this gap by:

- Filtering only PMJAY-approved hospitals  
- Ranking hospitals by distance  
- Displaying them on an interactive map  
- Providing fly-to navigation and Google Maps directions  
- Supporting both **GPS location** and **PIN code fallback**

This project highlights **geospatial search**, **frontend mapping**, and **API development**—serving as a small but impactful full-stack project.

---

## 🧰 Tech Stack

### Frontend
- React.js  
- Leaflet.js (map rendering, markers, fly-to animation)  
- Axios  
- Custom modular components

### Backend
- Python + Flask  
- Haversine distance algorithm  
- Preprocessed CSV of PMJAY hospitals (Assam subset for demo)

---

## 🌍 Core Features

### 1. GPS-Based Hospital Search
- Detects the user’s live GPS location (browser-based).
- Queries backend with latitude & longitude.
- Returns nearest hospitals sorted by distance.
- Automatically zooms and centers the map.

### 2. PIN Code Fallback
- If location access is denied:
  - User enters a PIN code.
  - Backend finds hospitals nearest to that PIN.
  - Map centers on the top results.

### 3. Interactive Map (Leaflet.js)
- User location marker.  
- Hospital markers with distance.  
- Smooth fly-to transitions when selecting hospitals.  
- Directions via Google Maps integration.

### 4. Sidebar with Search
- Search hospital by name.  
- Clicking navigates the map to the hospital location.  
- Clean, modular UI components.

### 5. Backend Geospatial API
- Haversine-based distance sorting.  
- Supports requests like:
/nearest?lat=xx&lon=yy&limit=10
/nearest?pin=xxxxx&limit=10

text
- Returns clean JSON responses.

---

## 🗂 Project Structure

medi-map/
│
├── backend/
│ ├── app.py
│ ├── hospitals.csv
│ ├── requirements.txt
│
├── src/
│ ├── App.jsx
│ ├── hooks/
│ │ └── useUserLocation.js
│ ├── services/
│ │ └── backend.js
│ ├── components/
│ │ ├── map/
│ │ │ ├── MapView.jsx
│ │ │ ├── UserMarker.jsx
│ │ │ └── HospitalMarkers.jsx
│ │ ├── ui/
│ │ │ ├── Button.jsx
│ │ │ └── Input.jsx
│ │ └── sidebar/
│ │ ├── Sidebar.jsx
│ │ ├── HospitalList.jsx
│ │ └── HospitalListItem.jsx
│ ├── index.js
│ └── App.css
│
└── README.md

text

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
git clone https://github.com/yourusername/medi-map.git
cd medi-map

text

---

### 🖥️ Frontend Setup (React)

Install dependencies:
cd medi-map
npm install

text

Run the development server:
npm start

text

---

### 🐍 Backend Setup (Flask)

Install dependencies:
cd backend
pip install -r requirements.txt

text

Run the backend server:
python app.py

text

Backend runs at: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 📡 API Endpoints

### 1. Nearest by GPS
GET /nearest?lat=26.12&lon=91.75&limit=10

text

### 2. Nearest by PIN
GET /nearest?pin=781001&limit=10

text

**Example JSON Response:**
[
{
"name": "GMCH Guwahati",
"state": "Assam",
"district": "Kamrup",
"lat": 26.123,
"lon": 91.789,
"distance_km": 2.45
}
]

text

---

## 📸 Screenshots (Add Actual Images)

- [ ] Home Screen  
- [ ] Map + Sidebar View  
- [ ] PIN-based Search  
- [ ] Marker Popups  

---

## 🧠 How It Works

### Frontend Flow
1. User clicks “Find Nearest Hospitals”.
2. `useUserLocation()` fetches GPS coordinates.
3. `backend.js` requests hospital data from Flask API.
4. Sidebar lists nearby hospitals.
5. Map centers and displays markers dynamically.

### Backend Flow
1. CSV loaded into memory.
2. If GPS query → compute Haversine distance.  
3. If PIN query → find coordinates from PIN → nearest hospitals.  
4. Sort hospitals by distance.  
5. Return structured JSON response.

---

## 📦 Data Preprocessing

- Original PMJAY list: ~16,000 hospitals.  
- MVP uses **Assam subset (~136 hospitals)**.  
- Geocoded using OpenStreetMap API.  
- Stored as CSV for quick demo loading.

---

## 🚀 Future Improvements

### 🟦 Nationwide Coverage
- Expand dataset to all 16,000+ PMJAY hospitals.  
- Implement faster search (KD-Tree / GeoIndex).

### 🟩 Database Integration
- Move from CSV → MongoDB.  
- Store GeoJSON coordinates.  
- Use `$nearSphere` for instant geospatial queries.

### 🐳 Dockerization
- Create Docker containers for both frontend & backend.  
- Use `docker-compose` for one-step deployment.

### ☁️ Azure Deployment
- Push containers to **Azure Container Registry**.  
- Deploy on **Azure App Service** or **Container Instances**.

### ⚖️ Autoscaling
- Use **Azure Kubernetes Service (AKS)** for real scaling.  
- Add replicas with load balancing and autoscaler.

### 🧭 More User Features
- “Call 108” emergency button.  
- Hospital specialty filters.  
- Bed availability integration.  
- Appointment booking (when API available).

---

## 🏁 Conclusion

**MediMap** is a small yet impactful project built to improve healthcare accessibility under the PMJAY scheme.

It demonstrates skills in:
- Full-stack development  
- Geolocation and mapping  
- RESTful API design  
- Modular React architecture  
- Flask backend development  
- Data preprocessing and geocoding  

Perfect as a **portfolio project** and a strong addition to **interview discussions**.

---

### 👨‍💻 Author
Developed by **[Your Name]**  
📧 Email: your.email@example.com  
🌐 GitHub: [https://github.com/yourusername](https://github.com/yourusername)
