import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate firstName
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
      valid = false;
    } else {
      newErrors.firstName = '';
    }

    // Validate lastName
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
      valid = false;
    } else {
      newErrors.lastName = '';
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    } else {
      newErrors.email = '';
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted with data:', formData);
      // Add your form submission logic here
    }
  };

  return (
    <div className='registration-form'>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <span className="error">{errors.firstName}</span>
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <span className="error">{errors.lastName}</span>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
           <span className="error">{errors.email}</span>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="error">{errors.password}</span>
        </div>
        
        {/* ...other fields with error spans */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
