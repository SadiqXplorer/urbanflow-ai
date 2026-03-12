console.log("JS FILE LOADED");

// Create map
var map = L.map("map").setView([28.6139, 77.2090], 11);

// Add map tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
}).addTo(map);


// Fetch congestion data from backend
fetch("http://127.0.0.1:8000/api/congestion")
.then(res => res.json())
.then(data => {

    console.log("DATA:", data);
 //new version 
    // loop through zones
    data.zones.forEach(zone => {

        let color;

        if(zone.level === "high"){
            color = "red";
        }
        else if(zone.level === "medium"){
            color = "orange";
        }
        else{
            color = "green";
        }

        // draw circle
        L.circle([zone.lat, zone.lng], {
            color: color,
            fillColor: color,
            fillOpacity: 0.5,
            radius: 900
        })
        .addTo(map)
        .bindPopup(zone.name + " : " + zone.level);

    });

})
.catch(err => console.error(err));