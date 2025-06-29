import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import SignupForm from './Pages/Auth/SignupForm';
import React, { useState } from 'react';
import Verify from './components/Verify/Verify';
import Dashboard from './Pages/Dashboard/Userprofile/Userprofile';
import Household from './Pages/Sections/Household';
import Section from './Pages/Sections/Section';
import Start from './Pages/Sections/Start';
import People from './Pages/Sections/People';
import Congrats from './Pages/Sections/Congrats';
import Benefits from './Pages/Dashboard/BenefitDashboard';
import ContactInfo from './Pages/Dashboard/ContactInfo';
import Documents from './Pages/Dashboard/Documents'
import footer from './assets/footer.png';
import WelcomeScreen from './Welcome'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Header>
      <div className='app-margin'>
        <Routes>
          <Route path="/Customer-Portal" element={<WelcomeScreen />} />
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignupForm  />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<Navigate to="benefits" replace />} />
            <Route path="benefits" element={<Benefits />} />
            <Route path="contact" element={<ContactInfo />} />
            <Route path="documents" element={<Documents />} />
          </Route>
          <Route path="/application" element={<Section />} >
            <Route index element={<Navigate to="START" replace />} />
            <Route path="START" element={<Start />} />
            <Route path="HHAPL" element={<Household />} />
            <Route path="HHIND" element={<People />} />
            <Route path="CNGRTS" element={<Congrats />} />
          </Route>
        </Routes>
      </div>
      <div className="footer">
        <img src={footer} alt="Logo" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
}

export default App;
