import React from 'react';
import SpotifyPlayer  from './components/SpotifyPlayer'

const WelcomeScreen = ({ onStart }) => {
  return (
    <>
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>Welcome to NY State of Health</h1>
        <h2 style={subtitleStyle}>Medicaid Application Portal</h2>
        <p style={textStyle}>
          This application will guide you through the steps to apply for Medicaid coverage in New York State. Please have the following information ready:
        </p>
        <ul style={listStyle}>
          <li>Proof of identity</li>
          <li>Proof of income</li>
          <li>Proof of residence</li>
        </ul>
        <button style={buttonStyle} onClick={onStart}>
          Start Application
        </button>
      </div>
    </div>
    <SpotifyPlayer/>
    </>
  );
};

// --- Styles ---

const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#f0f4f8',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
};

const boxStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  width: '100%',
  padding: '40px',
  textAlign: 'center',
};

const titleStyle = {
  color: '#0072CE', // NY State blue
  marginBottom: '10px',
};

const subtitleStyle = {
  color: '#333',
  marginBottom: '20px',
};

const textStyle = {
  fontSize: '16px',
  color: '#444',
  marginBottom: '10px',
};

const listStyle = {
  textAlign: 'left',
  margin: '0 auto 30px auto',
  paddingLeft: '20px',
  maxWidth: '400px',
  color: '#333',
};

const buttonStyle = {
  padding: '12px 24px',
  backgroundColor: '#0072CE',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default WelcomeScreen;
