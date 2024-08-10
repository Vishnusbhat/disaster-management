import React from 'react';
import useGeolocation from '../hooks/useGeolocation';
import Map from '../components/Map';
import Weather from '../components/Weather';

const Home = () => {
  const { coordinates, error } = useGeolocation();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {error && <p>Error: {error}</p>}
      {coordinates ? (
        <div style={{ flex: 1 }}>
          <Map coordinates={coordinates} />
        </div>
      ) : (
        <p>Getting coordinates...</p>
      )}
      {coordinates && (
        <div style={{ flex: 0.3, marginLeft: '20px' }}>
          <Weather coordinates={coordinates} />
        </div>
      )}
    </div>
  );
};

export default Home;
