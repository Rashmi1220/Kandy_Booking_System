import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Leaflet marker icons setup
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const redIcon = new L.Icon({
    iconUrl: "https://i.ibb.co/wCXsxpc/toppng-com-41-pm-52474-free-map-marker-icon-red-1222016-blue-marker-map-335x478.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const touristicPlaces = [
    { name: "Temple of the Tooth", position: [7.2936, 80.6414] },
    { name: "Peradeniya Botanical Garden", position: [7.2715, 80.5953] },
    { name: "Kandy Lake", position: [7.2906, 80.6413] },
    { name: "Udawattakele Forest Reserve", position: [7.2995, 80.6388] },
];

function LocationMarker({ position }) {
    const map = useMap();

    if (position) {
        map.flyTo(position, 15);
    }

    return position === null ? null : (
        <Marker position={position} icon={redIcon}>
            <Popup>Search Result</Popup>
        </Marker>
    );
}

function KandyMap() {
    const [position, setPosition] = useState(null);
    const [search, setSearch] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!search) return;

        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${search},kandy,sri+lanka&format=json&limit=1`
            );
            const data = await response.json();
            if (data.length > 0) {
                const { lat, lon } = data[0];
                setPosition([parseFloat(lat), parseFloat(lon)]);
            }
        } catch (error) {
            console.error("Error fetching location data:", error);
        }
    };

    return (
        <div className="section section-tabs" id="map" style={{ border: "1px solid white", padding: "1px", borderRadius: "1px" }}>

            <h3 className="title">Kandy District Map</h3>
            <form onSubmit={handleSearch} style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search location"
                    style={{ padding: "10px", width: "70%", marginRight: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                />
                <button type="submit" style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", background: "#007bff", color: "white" }}>
                    Search
                </button>
            </form>

            <MapContainer
                center={[7.2906, 80.6337]}
                zoom={13}
                style={{ height: "600px", width: "100%", borderRadius: "1px" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {touristicPlaces.map((place, idx) => (
                    <Marker key={idx} position={place.position}>
                        <Popup>{place.name}</Popup>
                    </Marker>
                ))}
                <LocationMarker position={position} />
            </MapContainer>
        </div>
    );
}

export default KandyMap;
