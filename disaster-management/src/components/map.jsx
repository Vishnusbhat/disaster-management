import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ coordinates }) => {
  // Default coordinates if no props are provided
  const defaultCoordinates = [51.505, -0.09];
  console.log(coordinates);

  return (
    <MapContainer 
      center={coordinates ? [coordinates.latitude, coordinates.longitude] : defaultCoordinates} 
      zoom={13} 
      style={{ height: '450px', width: '100%' }} // Adjusted height
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates && (
        <Marker position={[coordinates.latitude, coordinates.longitude]}>
          <Popup>
            You are here! <br /> Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
