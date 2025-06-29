import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Household = () => {
  const { formData, setFormData } = useOutletContext();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    // Optionally reset the form
    setFormData({ name: '', address: '', phone: '' });
  };

  return (
    <div className='section'>
      <h2>Personal Information</h2>
      <form>
        {/* Name Field */}
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>

        {/* Address Field */}
        <div style={{ marginBottom: '15px' }}>
          <label>Address:</label><br />
          <input
            type="text"
            name="address"
            value={formData?.address}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}
        </div>

        {/* Phone Field */}
        <div style={{ marginBottom: '15px' }}>
          <label>Phone:</label><br />
          <input
            type="text"
            name="phone"
            value={formData?.phone}
            onChange={handleChange}
            placeholder="1234567890"
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
        </div>
      </form>
    </div>
  );
};

export default Household;
