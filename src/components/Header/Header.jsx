import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/nysoh-logo.png';
import emitter from '../EventEmitter';
import userIcon from '../../assets/person-icon.svg';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {

  const navigate = useNavigate();

  const [userId, setUserId] = useState('User');

  const menuRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    // Optionally redirect to home or signin page
    setUserId(null);
    navigate('/');
    setIsOpen(null)
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    const handler = msg => setUserId(msg);
    emitter.on('login', handler);

    return () => emitter.off('login', handler);
  }, []);

  return (
    <header className="header">
      <div className="login-button-div">
        <div className="header-logo" onClick={handleSignOut}>
          <img src={logo} alt="Logo" style={{ width: '250px', height: 'auto' }} />
        </div>
        <div className="login-button d-flex">
          {isLoggedIn ?
            <div style={{
              alignItems: 'center',
              display: 'flex',
            }}>
              <img src={userIcon} alt="Logo" style={{ width: '30px', height: 'auto' }} />
              <span>{userId}</span>
              <div ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
                {/* Down Arrow Icon */}
                <div onClick={() => setIsOpen(prev => !prev)} style={{ fontSize: '18px', cursor: 'pointer' }}>
                  ▼
                </div>

                {/* Dropdown Popup */}
                {isOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '30px',
                    right: 0,
                    background: 'white',
                    border: '1px solid #ccc',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    zIndex: 1000
                  }}>
                    <button onClick={handleSignOut} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div> :
            <Link to="/login">
              <button className='blue-button'>Login</button>
            </Link>}

        </div>
      </div>
      {
        isLoggedIn ?
          <div className='blue-header'>
            <Link to="/application">
              <div style={{color : 'white'}}>
                Apply
              </div>
            </Link>
          </div> : null
      }

    </header>
  );
};

export default Header;
