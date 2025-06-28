import React from 'react';

const Spinner = () => {
  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>

      <div style={overlayStyle}>
        <div style={spinnerStyle} />
      </div>
    </>
  );
};

const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const spinnerStyle = {
  boxSizing: 'border-box',
  width: '60px',
  height: '60px',
  border: '6px solid #0072CE',
  borderTopColor: 'transparent',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
};

export default Spinner;
