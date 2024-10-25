import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export const MapLocation = () => {
  useEffect(() => {
    const map = L.map("map").setView([41.6519264, -4.72848], 16); // Coordenadas de Madrid, España
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([41.6519264, -4.72848])
      .addTo(map)
      .bindPopup("Valladolid, España")
      .openPopup();
  }, []);

  return (
    <div id="map" style={{ height: "300px", width: "100%" }}>
      {" "}
      mapa{" "}
    </div>
  );
};
