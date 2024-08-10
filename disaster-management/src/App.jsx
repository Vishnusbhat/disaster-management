import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DisasterDetails from './pages/DisasterDetails'; // Import the new page
import Resources from './pages/Resources';
import EmergencyContacts from './pages/EmergencyContacts';
import Login from './components/Login';
import Signup from './components/signup';
import SOSButton from './components/SOSButton'; // Import SOSButton component

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disaster-details" element={<DisasterDetails />} /> {/* Updated route */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* Conditionally render SOSButton only on the home page */}
      {location.pathname === '/' && <SOSButton />}
    </>
  );
}

export default App;
