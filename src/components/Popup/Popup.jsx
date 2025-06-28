import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Blurred background */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          zIndex: 999,
        }}
      />

      {/* Centered popup */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 0 15px rgba(0,0,0,0.3)',
          zIndex: 1000,
          maxWidth: '400px',
          width: '90%',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close popup"
          style={{
            float: 'right',
            border: 'none',
            background: 'transparent',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>

        <div style={{ clear: 'both' }}>{children}</div>
      </div>
    </>
  );
};

export default Popup;
