import React from 'react';
import { Box, Image, Text, Link, Stack, Container, Button, Grid, GridItem } from '@chakra-ui/react';

const Resources = () => {
  return (
    <Container maxW="container.xl" py={8} centerContent>
      <Stack spacing={8} textAlign="center">
        <Text fontSize="4xl" fontWeight="bold" color="blue.600">
          Essential Resources for Disaster Management
        </Text>
        <Box display="flex" justifyContent="center" mb={6}>
          <Image 
            src="https://www.indonesiawaterportal.com/storage/eb/articles/854/b2ap3_large_5d3be7f652dd5b6912ac5e1c0f474ee6.jpg" 
            alt="Disaster Management" 
            borderRadius="md" 
            boxSize="50%"  // Reduced size by 50%
            objectFit="cover"
          />
        </Box>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }} gap={6}>
          <GridItem>
            <Box 
              p={5} 
              shadow="md" 
              borderWidth="1px" 
              borderRadius="md" 
              bg="white" 
              textAlign="center" 
              minHeight="300px"
              display="flex" 
              flexDirection="column"
              justifyContent="space-between"
              transition="transform 0.2s" 
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={3}>
                National Disaster Management Authority (NDMA)
              </Text>
              <Link href="https://ndma.gov.in/" isExternal>
                <Button colorScheme="blue" size="lg">
                  Visit NDMA
                </Button>
              </Link>
              <Text mt={3}>
                NDMA is the apex body for disaster management in India, providing guidance and resources for managing and mitigating disasters.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box 
              p={5} 
              shadow="md" 
              borderWidth="1px" 
              borderRadius="md" 
              bg="white" 
              textAlign="center" 
              minHeight="300px"
              display="flex" 
              flexDirection="column"
              justifyContent="space-between"
              transition="transform 0.2s" 
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={3}>
                India Meteorological Department (IMD)
              </Text>
              <Link href="https://www.imd.gov.in/" isExternal>
                <Button colorScheme="teal" size="lg">
                  Visit IMD
                </Button>
              </Link>
              <Text mt={3}>
                IMD provides weather forecasts and warnings for cyclones and other extreme weather events in India.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box 
              p={5} 
              shadow="md" 
              borderWidth="1px" 
              borderRadius="md" 
              bg="white" 
              textAlign="center" 
              minHeight="300px"
              display="flex" 
              flexDirection="column"
              justifyContent="space-between"
              transition="transform 0.2s" 
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={3}>
                National Center for Seismology (NCS)
              </Text>
              <Link href="https://seismology.gov.in/" isExternal>
                <Button colorScheme="orange" size="lg">
                  Visit NCS
                </Button>
              </Link>
              <Text mt={3}>
                NCS monitors earthquake activity and provides information on seismic hazards in India.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box 
              p={5} 
              shadow="md" 
              borderWidth="1px" 
              borderRadius="md" 
              bg="white" 
              textAlign="center" 
              minHeight="300px"
              display="flex" 
              flexDirection="column"
              justifyContent="space-between"
              transition="transform 0.2s" 
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={3}>
                National Flood Forecasting and Warning Centre (NFFWC)
              </Text>
              <Link href="https://nffwc.gov.in/" isExternal>
                <Button colorScheme="purple" size="lg">
                  Visit NFFWC
                </Button>
              </Link>
              <Text mt={3}>
                NFFWC provides flood forecasts and warnings to help manage and mitigate flood impacts.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Resources;
