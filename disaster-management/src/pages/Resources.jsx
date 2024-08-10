import { Box, Container, Heading, Text, Stack, Link, List, ListItem } from '@chakra-ui/react';

const Resources = () => {
  return (
    <Box p={4}>
      <Container maxW="container.md">
        <Stack spacing={6} align="center">
          <Heading as="h1" size="xl">
            Resources
          </Heading>
          <Text fontSize="lg">
            Here are some valuable resources for disaster management:
          </Text>
          <List spacing={4}>
            <ListItem>
              <Text fontWeight="bold">FEMA:</Text>
              <Link href="https://www.fema.gov" color="blue.500" isExternal>
                https://www.fema.gov
              </Link>
              <Text mt={2}>Federal Emergency Management Agency providing comprehensive information on disaster preparedness and response.</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">American Red Cross:</Text>
              <Link href="https://www.redcross.org" color="blue.500" isExternal>
                https://www.redcross.org
              </Link>
              <Text mt={2}>Offers emergency assistance, disaster relief, and education in the United States.</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Centers for Disease Control and Prevention (CDC):</Text>
              <Link href="https://www.cdc.gov" color="blue.500" isExternal>
                https://www.cdc.gov
              </Link>
              <Text mt={2}>Provides information on health and safety, including disaster preparedness and response.</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">National Weather Service:</Text>
              <Link href="https://www.weather.gov" color="blue.500" isExternal>
                https://www.weather.gov
              </Link>
              <Text mt={2}>Offers weather alerts and forecasts to help you prepare for and respond to severe weather events.</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">World Health Organization (WHO):</Text>
              <Link href="https://www.who.int" color="blue.500" isExternal>
                https://www.who.int
              </Link>
              <Text mt={2}>Provides international health guidance, including information on managing health crises.</Text>
            </ListItem>
          </List>
        </Stack>
      </Container>
    </Box>
  );
};

export default Resources;
