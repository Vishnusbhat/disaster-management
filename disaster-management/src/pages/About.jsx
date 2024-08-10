import { Box, Container, Heading, Text, Stack, Image } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={4}>
      <Container maxW="container.md">
        <Stack spacing={6} align="center">
          <Heading as="h1" size="xl">
            About Us
          </Heading>
          <Image 
            src="https://via.placeholder.com/600x400" 
            alt="About Us Image" 
            borderRadius="md" 
            boxShadow="lg"
          />
          <Text fontSize="lg">
            Welcome to the Disaster Management platform. Our mission is to provide timely and accurate information to help communities prepare for and respond to disasters. We leverage cutting-edge technology and reliable data sources to ensure that our users have access to the best resources available.
          </Text>
          <Text fontSize="lg">
            Our team consists of experts in disaster management, data analysis, and software development. We are committed to improving our services continuously and working with local authorities and organizations to enhance disaster response efforts.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;