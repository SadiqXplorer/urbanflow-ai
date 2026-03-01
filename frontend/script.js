// Initialize map (Delhi default)
var map = L.map("map").setView([28.6139, 77.2090], 11);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);


// Dummy Congestion Zones (for demo)

// High Congestion
L.circle([28.6304, 77.2177], {
  color: "red",
  fillColor: "red",
  fillOpacity: 0.5,
  radius: 1500,
})
  .addTo(map)
  .bindPopup("High Congestion Zone");

// Medium Congestion
L.circle([28.5500, 77.2500], {
  color: "orange",
  fillColor: "orange",
  fillOpacity: 0.5,
  radius: 2000,
})
  .addTo(map)
  .bindPopup("Medium Congestion Zone");

// Low Congestion lc cl
L.circle([28.7000, 77.1000], {
  color: "green",
  fillColor: "green",
  fillOpacity: 0.5,
  radius: 2500,
})
  .addTo(map)
  .bindPopup("Low Congestion Zone");