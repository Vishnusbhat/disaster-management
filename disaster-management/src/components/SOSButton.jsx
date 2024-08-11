import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebase';
import './SOSButton.css'; // Import the CSS for styling

const SOSButton = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    latitude: null,
    longitude: null,
  });

  const auth = getAuth(app);
  const db = getFirestore(app);

  // Function to fetch user data from Firestore
  const fetchUserData = async () => {
    const userId = auth.currentUser?.uid;
    if (!userId) return;

    try {
      const userDoc = await getDoc(doc(db, 'Users', userId));
      if (userDoc.exists()) {
        setUser(userDoc.data());
      } else {
        console.error('No user data found');
      }
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  // Fetch user data when component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  const storeUserData = async () => {
    try {
      await axios.post('http://localhost:3000/api/store-user', user);
      console.log('User data stored successfully');
    } catch (error) {
      console.error('Error storing user data', error);
    }
  };

  const handleSOS = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Update user data with current location
        const updatedUser = {
          ...user,
          latitude,
          longitude,
        };
        setUser(updatedUser);

        // Store updated user data
        await storeUserData();

        // Send the SOS signal with updated location
        await sendSOS(updatedUser);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const sendSOS = async (userData) => {
  const templateParams = {
    name: userData.name,
    age: userData.age,
    gender: userData.gender,
    email: userData.email,
    latitude: userData.latitude,
    longitude: userData.longitude,
  };

  // Log the details to be sent in the email
  console.log('Sending SOS with the following details:', templateParams);

  try {
    const result = await emailjs.send(
      'service_vifv5t2',    // Replace with your EmailJS Service ID
      'template_pukzjig',   // Replace with your EmailJS Template ID
      templateParams,
      'J_RNHYKAMZO3CPfd4'   // Replace with your EmailJS User ID
    );
    console.log('SOS sent successfully', result.text);

    // Show an alert after successful email sending
    alert('SOS email sent successfully!');

    // Optionally, send the SOS to your backend
    await axios.post('http://localhost:3000/api/send-sos', {
      latitude: userData.latitude,
      longitude: userData.longitude,
    });
  } catch (error) {
    console.error('Error sending SOS', error);
    alert('Failed to send SOS. Please try again.');
  }
};


  return (
    <div className="sos-button-container">
      <button className="sos-button" onClick={handleSOS}>
        Send SOS
      </button>
    </div>
  );
};

export default SOSButton;
