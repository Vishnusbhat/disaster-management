import React, { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Select,
  Text,
  useToast,
} from '@chakra-ui/react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleEmailPasswordSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth(app);
    const db = getFirestore(app);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          name,
          age,
          gender,
          latitude,
          longitude,
          createdAt: new Date().toISOString(),
        });

        navigate('/');
      });
    } catch (err) {
      setError(err.message);
      toast({
        title: 'Sign Up Failed',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const db = getFirestore(app);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          name: user.displayName || '',
          age: '',
          gender: '',
          latitude,
          longitude,
          createdAt: new Date().toISOString(),
        });

        navigate('/');
      });
    } catch (err) {
      setError(err.message);
      toast({
        title: 'Google Sign Up Failed',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="gray.50"
      px={4}
    >
      <Box
        w="full"
        maxW="md"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        <VStack spacing={6} as="form" onSubmit={handleEmailPasswordSignUp}>
          <Heading as="h2" size="xl" color="blue.600" textAlign="center">
            Sign Up
          </Heading>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              focusBorderColor="blue.500"
            />
          </FormControl>
          <FormControl id="age" isRequired>
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              focusBorderColor="blue.500"
            />
          </FormControl>
          <FormControl id="gender" isRequired>
            <FormLabel>Gender</FormLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              focusBorderColor="blue.500"
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              focusBorderColor="blue.500"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              focusBorderColor="blue.500"
            />
          </FormControl>
          {error && (
            <Text color="red.500" fontSize="sm">
              {error}
            </Text>
          )}
          <Button
            type="submit"
            colorScheme="blue"
            isFullWidth
            isLoading={loading}
            loadingText="Signing Up"
          >
            Sign Up
          </Button>
          <Button
            mt={4}
            colorScheme="red"
            isFullWidth
            onClick={handleGoogleSignUp}
            isLoading={loading}
            loadingText="Signing Up"
          >
            Sign Up with Google
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignUp;
