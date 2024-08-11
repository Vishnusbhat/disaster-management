import React, { useState } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
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
  Text,
  useToast,
} from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e, provider = null) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth(app);
    const db = getFirestore(app);

    try {
      let userCredential;

      if (provider) {
        // Google login
        userCredential = await signInWithPopup(auth, provider);
      } else {
        // Email and password login
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }

      const user = userCredential.user;

      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        await setDoc(
          doc(db, 'Users', user.uid),
          {
            email: user.email,
            lastLogin: new Date().toISOString(),
            latitude,
            longitude,
          },
          { merge: true }
        );

        navigate('/');
      });
    } catch (err) {
      setError(err.message);
      toast({
        title: provider ? 'Google Login Failed' : 'Login Failed',
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
        <VStack spacing={6} as="form" onSubmit={(e) => handleLogin(e)}>
          <Heading as="h2" size="xl" color="blue.600" textAlign="center">
            Login
          </Heading>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              focusBorderColor="blue.500"
            />
          </FormControl>
          <FormControl id="password">
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
            loadingText="Logging In"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </Button>
          <Button
            mt={4}
            colorScheme="red"
            isFullWidth
            onClick={(e) => handleLogin(e, new GoogleAuthProvider())}
            isLoading={loading}
            loadingText="Logging In"
          >
            Login with Google
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
