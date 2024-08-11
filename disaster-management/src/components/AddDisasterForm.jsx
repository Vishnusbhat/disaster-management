import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  useToast,
  Text
} from '@chakra-ui/react';
import useGeolocation from '../hooks/useGeolocation';
import { storage, db } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

const AddDisasterForm = ({ isOpen, onClose }) => {
  const { coordinates } = useGeolocation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [upiId, setUpiId] = useState('');
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageName = null;

      if (file) {
        imageName = file.name; // Get the file name
        const storageRef = ref(storage, `disasters/${imageName}`);
        await uploadBytes(storageRef, file);
      }

      const disasterData = {
        title,
        description,
        latitude: coordinates?.latitude,
        longitude: coordinates?.longitude,
        upiId,
        imageName, // Store the image name in the Firestore document
      };

      const docRef = doc(db, 'Disasters', title);
      await setDoc(docRef, disasterData);

      toast({
        title: 'Disaster reported successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      toast({
        title: 'Error reporting disaster.',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Report a Disaster</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="title" mb={4}>
            <FormLabel>Disaster Title</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
            />
          </FormControl>
          <FormControl id="description" mb={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </FormControl>
          <FormControl id="upiId" mb={4}>
            <FormLabel>UPI ID for Fundraising</FormLabel>
            <Input
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="Enter UPI ID"
            />
          </FormControl>
          <FormControl id="file" mb={4}>
            <FormLabel>Upload Pictures</FormLabel>
            <Input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />
          </FormControl>
          <Box mt={4}>
            <Text>
              {coordinates
                ? `Coordinates: ${coordinates.latitude}, ${coordinates.longitude}`
                : 'Fetching coordinates...'}
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddDisasterForm;
