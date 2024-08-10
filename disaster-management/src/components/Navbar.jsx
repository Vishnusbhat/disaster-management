import { Link } from 'react-router-dom';
import { Box, Flex, Button, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Disaster Management
        </Text>
        <Flex>
          <Link to="/">
            <Button variant="ghost" colorScheme="whiteAlpha">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" colorScheme="whiteAlpha">
              About
            </Button>
          </Link>
          <Link to="/resources">
            <Button variant="ghost" colorScheme="whiteAlpha">
              Resources
            </Button>
          </Link>
          <Link to="/emergency-contacts">
            <Button variant="ghost" colorScheme="whiteAlpha">
              Emergency Contacts
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
