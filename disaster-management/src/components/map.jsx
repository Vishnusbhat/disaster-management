import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Default icon for markers
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Map = ({ coordinates }) => {
  // Default coordinates if none are provided
  const defaultCoordinates = [51.505, -0.09];
  
  const position = coordinates ? [coordinates.latitude, coordinates.longitude] : defaultCoordinates;

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      style={{ height: '100vh', width: '100%' }} // Adjusted height
      aria-label="Map showing user location"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates && (
        <Marker 
          position={position}
          icon={defaultIcon} // Use the default icon
        >
          <Popup>
            You are here!<br />
            Latitude: {coordinates.latitude}<br />
            Longitude: {coordinates.longitude}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
