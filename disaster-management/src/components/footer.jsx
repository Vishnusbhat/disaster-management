import { Box, Container, Text, Link, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="blue.600" color="white" py={6} mt={8}>
      <Container maxW="container.xl">
        <Stack spacing={4} align="center">
          <Text fontSize={{ base: 'sm', md: 'md' }} textAlign="center">
            &copy; {new Date().getFullYear()} Disaster Management. All rights reserved.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 2, md: 6 }}>
            <Link href="/" color="white" _hover={{ textDecoration: 'underline' }}>
              Home
            </Link>
            <Link href="/about" color="white" _hover={{ textDecoration: 'underline' }}>
              About
            </Link>
            <Link href="/resources" color="white" _hover={{ textDecoration: 'underline' }}>
              Resources
            </Link>
            <Link href="/emergency-contacts" color="white" _hover={{ textDecoration: 'underline' }}>
              Emergency Contacts
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
