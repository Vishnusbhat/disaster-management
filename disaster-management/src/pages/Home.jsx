import React from 'react';
import useGeolocation from '../hooks/useGeolocation';
import Map from '../components/Map';

const Home = () => {
  const { coordinates, error } = useGeolocation();

  return (
    <div>
      {/* <h1>Home Page</h1> */}
      {error && <p>Error: {error}</p>}
      {coordinates ? (
        <div>
          {/* <p>Latitude: {coordinates.latitude}</p>
          <p>Longitude: {coordinates.longitude}</p> */}
          <Map coordinates={coordinates} />
        </div>
      ) : (
        <p>Getting coordinates...</p>
      )}
    </div>
  );
};

export default Home;
