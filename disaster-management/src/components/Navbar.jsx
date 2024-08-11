import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Flex, 
  Button, 
  Text, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton, 
  ModalBody, 
  ModalFooter, 
  useDisclosure 
} from '@chakra-ui/react';
import ReportsDisplay from '../components/reportsDisplay'; // Import the ReportsDisplay component

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="blue.500" px={4}>
      <Flex 
        h={16} 
        alignItems="center" 
        justifyContent="space-between" 
        wrap="wrap"
      >
        <Text fontSize="xl" fontWeight="bold" color="white">
          Disaster Management
        </Text>
        <Flex alignItems="center" justifyContent="flex-end" flexWrap="wrap">
          <Link to="/">
            <Button variant="ghost" colorScheme="whiteAlpha" mx={1}>
              Home
            </Button>
          </Link>
          <Button variant="ghost" colorScheme="whiteAlpha" mx={1} onClick={onOpen}>
            Reports
          </Button>
          <Link to="/disaster-details">
            <Button variant="ghost" colorScheme="whiteAlpha" mx={1}>
              Disaster Details
            </Button>
          </Link>
          <Link to="/resources">
            <Button variant="ghost" colorScheme="whiteAlpha" mx={1}>
              Resources
            </Button>
          </Link>
          <Link to="/emergency-contacts">
            <Button variant="ghost" colorScheme="whiteAlpha" mx={1}>
              Emergency Contacts
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="ghost" colorScheme="whiteAlpha" mx={1}>
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="ghost" colorScheme="whiteAlpha" mx={1}>
              Signup
            </Button>
          </Link>
        </Flex>
      </Flex>

      {/* Reports Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent 
          maxWidth="90vw" 
          maxHeight="90vh" 
          margin="auto" 
          borderRadius="md"
          p={4}
        >
          <ModalHeader>Reports</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ReportsDisplay /> {/* Display reports */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
