// Map.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
  // Coordenadas para el marcador (Londres)
  const position: LatLngExpression = [10.265011932147619, -85.5830017386428]; // Coordenadas de Londres

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        {/* Capa de los tiles del mapa */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Marcador con Popup */}
        <Marker position={position}>
          <Popup>
            ¡Hola! Este es Londres.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
