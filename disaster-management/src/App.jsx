import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Footer from './components/Footer';
import Home from './pages/Home';
import DisasterDetails from './pages/DisasterDetails';
import Resources from './pages/Resources';
import EmergencyContacts from './pages/EmergencyContacts';
import Login from './components/Login';
import Signup from './components/signup';
import FloatingActionButton from './components/FloatingActionButton';
import SOSButton from './components/SOSButton';
import AddDisasterForm from './components/AddDisasterForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);


  // Handler to open the form
  const handleFABClick = () => {
    setIsFormOpen(true);
  };

  // Handler to close the form
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <FloatingActionButton onClick={handleFABClick} />
      <AddDisasterForm isOpen={isFormOpen} onClose={handleCloseForm} />
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
        <Route path="/disaster-details" element={<DisasterDetails />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/login" element={<Login setUser/>} />
        <Route path="/signup" element={<Signup setUser />} />
      </Routes>
      {location.pathname === '/' && <SOSButton />}
    </>
  );
}


export default App;
