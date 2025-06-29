import React from 'react';

const Congrats = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: '#0072CE',
          fontSize: '32px',
          marginBottom: '20px'
        }}>
          🎉 Congratulations!
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#333',
          marginBottom: '15px'
        }}>
          You’ve successfully submitted your Medicaid application through the New York State of Health.
        </p>
        <p style={{
          fontSize: '16px',
          color: '#555',
          marginBottom: '20px'
        }}>
          Your application will be reviewed, and you will receive a decision by mail or through your account.
        </p>
        <p style={{
          fontWeight: 'bold',
          fontSize: '16px',
          color: '#0072CE',
          marginBottom: '30px'
        }}>
          Thank you for applying!
        </p>
      </div>
    </div>
  );
};

export default Congrats;
