import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

export const MapLocation = () => {
  useEffect(() => {
    // Inicializar el mapa
    const map = L.map("map").setView([41.6519264, -4.72848], 16); // Coordenadas de Madrid, España

    // Añadir el mapa base desde OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Añadir un marcador con una dirección específica
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
