from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# allow frontend to access API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/congestion")
def get_congestion():

    data = {
        "zones": [
            {"name": "Connaught Place", "lat": 28.6304, "lng": 77.2177, "level": "high"},
            {"name": "Saket", "lat": 28.5245, "lng": 77.2066, "level": "medium"},
            {"name": "Rohini", "lat": 28.7041, "lng": 77.1025, "level": "low"}
        ]
    }

    return data

    from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)