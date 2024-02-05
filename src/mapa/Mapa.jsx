import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "./Mapa.css";

const Mapa = () => {
  const customIcon = new L.Icon({
    iconUrl: '/icons/puntero.ico',
    iconSize: [64, 64], // Ajusta el tamaño según tus necesidades
    iconAnchor: [33, 48], // Ajusta el punto de anclaje según sea necesario
    popupAnchor: [0, -64], // Ajusta el punto de anclaje del popup según sea necesario
  });

  return (
    <div className="map-container">
      <MapContainer center={[-4.030256, -79.199463]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          
        />
        <Marker position={[-4.030256, -79.199463]} icon={customIcon}>
          <Popup position={[-4.030256, -79.199463]}>
            Facultad de la salud humana
            <br />
            8.45 uv
          </Popup>
        </Marker>
        
      </MapContainer>
      
    </div>
  );
}

export default Mapa;
