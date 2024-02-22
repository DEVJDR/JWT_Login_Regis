import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username: username,
        password: password,
      });

      console.log(response.data); 
      window.location.href = '/login';
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Registration</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
