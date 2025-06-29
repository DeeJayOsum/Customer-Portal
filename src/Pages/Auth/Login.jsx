import React, { useState }  from 'react';
import { useNavigate  } from 'react-router-dom';
import logo from '../../assets/person-icon.svg';
import emitter from '../../components/EventEmitter';
import { login } from "../../authService";

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      
      e.preventDefault();
      emitter.emit('login', email)
      // For now, just log the input
      console.log('Email:', email);
      console.log('Password:', password);
      // TODO: Add actual sign-in logic here
      setIsLoggedIn(true)
      navigate('/verify');
    };

    const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      //alert("Account created!");
      setIsLoggedIn(true)
      navigate('/verify');
    } catch (err) {
      alert(err.message);
    }
  };
  
    return (
      <div style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
        <h2 style={{ textAlign: 'center' }}><img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} /></h2>
        <form onSubmit={handleSignup}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: 4 }}>
            Email:
          </label>
          <input
            id="email"
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: 8, marginBottom: 12, boxSizing: 'border-box' }}
          />
  
          <label htmlFor="password" style={{ display: 'block', marginBottom: 4 }}>
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: 8, marginBottom: 16, boxSizing: 'border-box' }}
          />
  
          <button type="submit" className='blue-button' style={{ width: '100%', padding: 10, color: 'white', border: 'none', borderRadius: 4 }}>
            Sign In
          </button>
        </form>
      </div>
    );
  };

export default Login;
