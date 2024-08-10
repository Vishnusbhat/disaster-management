import { Box, Heading, Text } from '@chakra-ui/react';
import Map from '../components/Map';

const Home = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Welcome to Disaster Management
      </Heading>
      <Text fontSize="lg" mb={6}>
        Stay informed and prepared with real-time updates and resources.
      </Text>
      <Map />
    </Box>
  );
};

export default Home;
