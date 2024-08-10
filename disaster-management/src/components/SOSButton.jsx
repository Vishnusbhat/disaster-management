import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import './SOSButton.css'; // Import the CSS for styling

const SOSButton = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    email: 'johndoe@example.com',
  });

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

    try {
      const result = await emailjs.send(
        'service_vifv5t2',    // Replace with your EmailJS Service ID
        'template_pukzjig',   // Replace with your EmailJS Template ID
        templateParams,
        'J_RNHYKAMZO3CPfd4'        // Replace with your EmailJS User ID
      );
      console.log('SOS sent successfully', result.text);

      // Show an alert after successful email sending
      alert('SOS email sent successfully!');

      // Optionally, send the SOS to your backend
      await axios.post('http://localhost:3000/api/send-sos', { latitude: userData.latitude, longitude: userData.longitude });
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