import React from 'react';
import useGeolocation from '../hooks/useGeolocation';
import Map from '../components/map';
import Weather from '../components/Weather';

const Home = () => {
  const { coordinates, error } = useGeolocation();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', height: '80vh' }}>
      {error && <p>Error: {error}</p>}
      {coordinates ? (
        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <Map coordinates={coordinates} />
        </div>
      ) : (
        <p>Getting coordinates...</p>
      )}
      {coordinates && (
        <div style={{
          position: 'absolute', // Changed to 'absolute' for overlay effect
          top: '10px',
          right: '10px',
          width: '300px',
          zIndex: 10, // Ensure it's above the map
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slightly more opaque
          padding: '10px',
          borderRadius: '8px'
        }}>
          <Weather coordinates={coordinates} />
        </div>
      )}
    </div>
  );
};

export default Home;
