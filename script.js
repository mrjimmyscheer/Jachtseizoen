// Include Leaflet CSS and JavaScript libraries (CDN links)
const leafletCssLink = document.createElement('link');
leafletCssLink.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
leafletCssLink.rel = 'stylesheet';
document.head.appendChild(leafletCssLink);

const leafletJsScript = document.createElement('script');
leafletJsScript.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
leafletJsScript.async = true;
document.body.appendChild(leafletJsScript);

// Function to initialize the map
function initMap() {
    // Create a map centered at a default location
    const map = L.map('map').setView([0, 0], 4); // Default to the center of the world

    // Add OpenStreetMap tiles as the base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Get the user's current location
    navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = [position.coords.latitude, position.coords.longitude];

        // Center the map on the user's location
        map.setView(userLocation, 13); // Adjust the zoom level as needed

        // Add a marker at the user's location
        L.marker(userLocation).addTo(map)
            .bindPopup('Your Location')
            .openPopup();
    });
}
