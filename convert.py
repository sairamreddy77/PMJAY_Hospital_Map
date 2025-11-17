import pandas as pd
import time
import json
from geopy.geocoders import Nominatim
from geopy.extra.rate_limiter import RateLimiter

FILE_PATH = "filtered_data_HM.csv"  
df = pd.read_csv(FILE_PATH)

# Filter only Assam rows (if file contains whole India)
df = df[df["State"].str.lower() == "himachal pradesh"]

print(f"Total himachal pradhesh hospitals found: {len(df)}")


geolocator = Nominatim(user_agent="medimap_geocoder")
geocode = RateLimiter(geolocator.geocode, min_delay_seconds=1)


results = []

for idx, row in df.iterrows():
    name = row["Hospital Name"]
    district = row["District"]
    state = row["State"]

    # Build search query
    query = f"{name}, {district}, {state}, India"

    print(f"Geocoding: {query}")

    try:
        location = geocode(query)
    except:
        location = None

    if location:
        results.append({
            "name": name,
            "district": district,
            "state": state,
            "lat": location.latitude,
            "lon": location.longitude
        })
    else:
        print("❌ Could not geocode:", query)

    time.sleep(1)  # <-- Safety delay


OUTPUT_FILE = "hm_hospitals_geocoded.json"

with open(OUTPUT_FILE, "w") as f:
    json.dump(results, f, indent=4)

print(f"\n✅ Geocoding completed!")
print(f"➡ Output saved to: {OUTPUT_FILE}")
