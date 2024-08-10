import React from 'react';
import { Box, Container, Text, Link, Stack, Grid, GridItem, Button, Image } from '@chakra-ui/react';

const EmergencyContacts = () => {
  return (
    <Container maxW="container.xl" py={8} centerContent>
      <Stack spacing={8} textAlign="center">
        <Text fontSize="4xl" fontWeight="bold" color="blue.600">
          Emergency Contacts in India
        </Text>
        <Box display="flex" justifyContent="center" mb={6}>
          <Image 
            src="https://responsiveweb.nz/storage/app/media/projects/gallery-my-emergency-app-home.jpg" 
            alt="Emergency Contacts" 
            borderRadius="md" 
            boxSize="50%"  // Reduced size by 50%
            objectFit="cover"
          />
        </Box>
        <Grid 
          templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} 
          gap={6}
          alignItems="center"
          justifyContent="center"
        >
          <GridItem>
            <Box 
              p={5} 
              shadow="lg" 
              borderWidth="1px" 
              borderRadius="md" 
              bg="white" 
              textAlign="center" 
              minHeight="200px"
              display="flex" 
              flexDirection="column"
              justifyContent="center"
              transition="transform 0.2s" 
              _hover={{ transform: 'scale(1.05)', shadow: 'xl' }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={3}>
                Police
              </Text>
              <Text fontSize="lg" mb={3}>
                100
              </Text>
              <Link href="https://www.mha.gov.in/sites/default/files/ImportantPhoneNumbers_22052019.pdf" isExternal>
                <Button colorScheme="blue">
                  More Details
                </Button>
              </Link>
            </Box>
          </GridItem>
          <GridItem>
            <Box 
              p={5} 
              shadow="lg" 
              borderWidth="1px" 
              borderRadius="md" 
              bg="white" 
              textAlign="center" 
              minHeight="200px"
              display="flex" 
              flexDirection="column"
              justifyContent="center"
              transition="transform 0.2s" 
              _hover={{ transform: 'scale(1.05)', shadow: 'xl' }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={3}>
                Fire
              </Text>
              <Text fontSize="lg" mb={3}>
                101
              </Text>
              <Link href="https://www.nfsc.gov.in/" isExternal>
                <Button colorScheme="red">
                  More Details
                </Button>
              </Link>
            </Box>
          </GridItem>
          <GridItem>
            <Box 
              p={5} 
              shadow="lg" 
              borderWidth="1px" 
              borderRadius="md" 
              bg="white" 
              textAlign="center" 
              minHeight="200px"
              display="flex" 
              flexDirection="column"
              justifyContent="center"
              transition="transform 0.2s" 
              _hover={{ transform: 'scale(1.05)', shadow: 'xl' }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={3}>
                Ambulance
              </Text>
              <Text fontSize="lg" mb={3}>
                102
              </Text>
              <Link href="https://www.ambulanceindia.com/" isExternal>
                <Button colorScheme="teal">
                  More Details
                </Button>
              </Link>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2, lg: 1 }} display="flex" justifyContent="center">
            <Box 
              p={5} 
              shadow="lg" 
              borderWidth="1px" 
              borderRadius="md" 
              bg="white" 
              textAlign="center" 
              minHeight="200px"
              display="flex" 
              flexDirection="column"
              justifyContent="center"
              transition="transform 0.2s" 
              _hover={{ transform: 'scale(1.05)', shadow: 'xl' }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={3}>
                Disaster Management
              </Text>
              <Text fontSize="lg" mb={3}>
                108 (Emergency Medical Services)
              </Text>
              <Link href="https://www.ndma.gov.in/" isExternal>
                <Button colorScheme="purple">
                  More Details
                </Button>
              </Link>
            </Box>
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  );
};

export default EmergencyContacts;
