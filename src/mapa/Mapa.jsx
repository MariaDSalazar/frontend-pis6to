import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "./Mapa.css";

const Mapa = () => {
  const [dispositivos, setDispositivos] = useState([]);

  useEffect(() => {
    fetch('https://computacion.unl.edu.ec/uv/api/activos')
      .then(response => response.json())
      .then(data => {
        if (data && data.dispositivos) {
          setDispositivos(data.dispositivos);
        }
      })
      .catch(error => {
        console.error('Error al obtener los dispositivos:', error);
      });
  }, []);

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
        {dispositivos.map(dispositivo => (
          <Marker key={dispositivo.external_id} position={[dispositivo.latitud, dispositivo.longitud]} icon={customIcon}>
            <Popup position={[dispositivo.latitud, dispositivo.longitud]}>
              {dispositivo.nombre}
              <br />
              {dispositivo.uv ? `${dispositivo.uv} uv` : 'Información no disponible'}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapa;
