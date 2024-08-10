// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Temporary in-memory storage for user data (you might want to use a database instead)
let userData = {};

// Endpoint to store user information
app.post('/api/store-user', (req, res) => {
  const { name, age, gender, email } = req.body;

  // Validate request body
  if (!name || !age || !gender || !email) {
    return res.status(400).json({ message: 'All user details are required' });
  }

  // Store the user data
  userData = { name, age, gender, email };

  res.status(200).json({ message: 'User data stored successfully' });
});

// Endpoint to handle SOS requests
app.post('/api/send-sos', (req, res) => {
  const { latitude, longitude } = req.body;

  // Validate request body
  if (!latitude || !longitude) {
    return res.status(400).json({ message: 'Latitude and longitude are required' });
  }

  if (!userData.name || !userData.age || !userData.gender || !userData.email) {
    return res.status(400).json({ message: 'User data not available' });
  }

  // Log the SOS request with user details
  console.log(`SOS Signal received from ${userData.name} (${userData.age}, ${userData.gender}, Email: ${userData.email})! Location: Latitude ${latitude}, Longitude ${longitude}`);

  // Respond to the frontend
  res.status(200).json({ message: 'SOS processed successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
