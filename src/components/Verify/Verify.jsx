import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Verify = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    ssn: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/dashboard');
  };

  return (
    <div style={{ maxWidth: '400px' }}>
      <h1>Verify My Identity</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Address:</label><br />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>SSN:</label><br />
          <input
            type="text"
            name="ssn"
            value={formData.ssn}
            onChange={handleChange}
            placeholder="123-45-6789"
            style={{ width: '100%' }}
          />
        </div>

        <button type="submit" className="blue-button">Verify My Identity</button>
      </form>
    </div>
  );
};

export default Verify;
