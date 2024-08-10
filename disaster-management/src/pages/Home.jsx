import React from 'react';
import useGeolocation from '../hooks/useGeolocation';
import Map from '../components/Map';
import { Box } from '@chakra-ui/react'; // Import Box from Chakra UI

const Home = () => {
  const { coordinates, error } = useGeolocation();

  return (
    <Box 
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      p={4}
    >
      <Box flex="1">
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
      </Box>
    </Box>
  );
};

export default Home;
