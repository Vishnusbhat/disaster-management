import React from 'react';
import { Box, Image, Text, Link, Stack, Container } from '@chakra-ui/react';

const DisasterDetails = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Stack spacing={6}>
        <Text fontSize="2xl" fontWeight="bold">
          Natural Disasters in India
        </Text>
        <Box>
          <Text fontSize="lg" mb={4}>
            India is prone to several types of natural disasters due to its geographical and climatic conditions. Here are some common types of natural disasters in India and resources where you can learn more about them:
          </Text>
          <Stack spacing={4}>
            <Box>
              <Link href="https://www.imd.gov.in/" isExternal>
                <Image 
                  src="https://s3.amazonaws.com/images.spaceref.com/news/2019/oo47755712991.jpg" 
                  alt="Cyclone" 
                  borderRadius="md" 
                  boxSize="300px" 
                  objectFit="cover"
                  mb={2}
                />
                <Text fontSize="lg" fontWeight="bold">
                  Cyclones
                </Text>
              </Link>
              <Text>
                Cyclones are severe weather systems characterized by strong winds and heavy rain. Learn more about cyclones and their impact on India from the India Meteorological Department (IMD).
              </Text>
            </Box>
            <Box>
              <Link href="https://seismology.gov.in/" isExternal>
                <Image 
                  src="https://www.iasexpress.net/wp-content/uploads/2020/03/earthquakes-and-its-management-in-india-upsc-essay-notes-mindmap-1.jpg" 
                  alt="Earthquake" 
                  borderRadius="md" 
                  boxSize="300px" 
                  objectFit="cover"
                  mb={2}
                />
                <Text fontSize="lg" fontWeight="bold">
                  Earthquakes
                </Text>
              </Link>
              <Text>
                India experiences earthquakes due to its location on the tectonic boundary. Learn more about earthquake zones and preparedness from the National Center for Seismology.
              </Text>
            </Box>
            <Box>
              <Link href="https://ndma.gov.in/" isExternal>
                <Image 
                  src="https://ichef.bbci.co.uk/news/624/mcs/media/images/77489000/jpg/_77489943_77489942.jpg" 
                  alt="Flood" 
                  borderRadius="md" 
                  boxSize="300px" 
                  objectFit="cover"
                  mb={2}
                />
                <Text fontSize="lg" fontWeight="bold">
                  Floods
                </Text>
              </Link>
              <Text>
                Floods are common in many parts of India, especially during the monsoon season. Find more information about flood management and response on the National Disaster Management Authority (NDMA) website.
              </Text>
            </Box>
            <Box>
              <Link href="https://ndma.gov.in/" isExternal>
                <Image 
                  src="https://cdn.siasat.com/wp-content/uploads/2023/08/2023_8img24_Aug_2023_PTI08_24_2023_000078B-1024x770.jpg" 
                  alt="Landslide" 
                  borderRadius="md" 
                  boxSize="300px" 
                  objectFit="cover"
                  mb={2}
                />
                <Text fontSize="lg" fontWeight="bold">
                  Landslides
                </Text>
              </Link>
              <Text>
                Landslides occur when there is a sudden and fast movement of earth material down a slope. Learn more about landslides and their impact on India from the National Disaster Management Authority (NDMA).
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default DisasterDetails;
