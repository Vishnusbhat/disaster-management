import React from 'react';
import useGeolocation from '../hooks/useGeolocation';
import Map from '../components/Map';
import Weather from '../components/Weather';

const Home = () => {
  const { coordinates, error } = useGeolocation();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', height: '80vh' }}>
      {error && <p>Error: {error}</p>}
      {coordinates ? (
        <div style={{ flex: 1 }}>
          <Map coordinates={coordinates} />
        </div>
      ) : (
        <p>Getting coordinates...</p>
      )}
      {coordinates && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '300px',
          zIndex: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          padding: '1px',
          borderRadius: '8px'
        }}>
          <Weather coordinates={coordinates} />
        </div>
      )}
    </div>
  );
};

export default Home;
