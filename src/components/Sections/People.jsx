import React, { useState }  from 'react';
import { useOutletContext } from 'react-router-dom';

const People = () => {

    const { formData, setFormData } = useOutletContext();

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

    const [errors, setErrors] = useState({});

    return (
        <>
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

                </form>
            </div>
        </>
    )
}
export default People;