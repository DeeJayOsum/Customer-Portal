import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import React, { useState } from 'react';
import Verify from './components/Verify/Verify';
import Dashboard from './components/Userprofile/Userprofile';
import Household from './components/Sections/Household';
import Section from './components/Sections/Section';
import Start from './components/Sections/Start';
import People from './components/Sections/People';
import Congrats from './components/Sections/Congrats';
import Benefits from './components/BenefitDashboard/BenefitDashboard';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Documents from './components/Documents/Documents';
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
