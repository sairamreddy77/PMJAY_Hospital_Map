from flask import Flask, request, jsonify
import json
from geopy.distance import geodesic
from flask_cors import CORS
import requests


app = Flask(__name__)
CORS(app)

def geocode_pin_osm(pin):
    url = f"https://nominatim.openstreetmap.org/search?postalcode={pin}&country=India&format=json"
    
    headers = {
        "User-Agent": "Mozilla/5.0"
    }

    res = requests.get(url, headers=headers).json()

    if len(res) == 0:
        return None

    lat = float(res[0]["lat"])
    lon = float(res[0]["lon"])
    return lat, lon



# Load your Assam JSON
with open("data/hm_hospitals_geocoded.json") as f:
    HOSPITALS = json.load(f)


@app.route("/nearest", methods=["GET"])
def nearest():
    pin = request.args.get("pin")
    lat = request.args.get("lat")
    lon = request.args.get("lon")
    limit = int(request.args.get("limit", 7))

    # Case 1 — PIN provided
    if pin:
        coords = geocode_pin_osm(pin)
        if not coords:
            return jsonify({"error": "Invalid or unknown PIN code"}), 400
        lat, lon = coords


    user_coords = (float(lat), float(lon))

    distances = []
    for h in HOSPITALS:
        d = geodesic(user_coords, (h["lat"], h["lon"])).km
        h_copy = h.copy()
        h_copy["distance_km"] = round(d, 2)
        distances.append(h_copy)

    distances.sort(key=lambda x: x["distance_km"])

    return jsonify(distances[:limit])




if __name__ == "__main__":
    app.run(debug=True)
