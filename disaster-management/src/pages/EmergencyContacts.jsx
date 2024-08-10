import { Box, Container, Heading, Text, Stack, List, ListItem } from '@chakra-ui/react';

const EmergencyContacts = () => {
  return (
    <Box p={4}>
      <Container maxW="container.md">
        <Stack spacing={6} align="center">
          <Heading as="h1" size="xl">
            Emergency Contacts
          </Heading>
          <Text fontSize="lg">
            In case of an emergency, please reach out to the following contacts:
          </Text>
          <List spacing={4} textAlign="center">
            <ListItem>
              <Text fontWeight="bold">Emergency Services:</Text>
              <Text>911</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Fire Department:</Text>
              <Text>(123) 456-7890</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Police Department:</Text>
              <Text>(123) 456-7891</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Hospital:</Text>
              <Text>(123) 456-7892</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Local Red Cross:</Text>
              <Text>(123) 456-7893</Text>
            </ListItem>
          </List>
        </Stack>
      </Container>
    </Box>
  );
};

export default EmergencyContacts;
