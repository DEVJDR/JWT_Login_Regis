import React, { useState } from 'react';
import axios from 'axios';
import Logout from './Logout';
import './styles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      console.log(response.data.token);
      // Store the token in local storage or session storage
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

 
  return (
    <div>
      {isLoggedIn ? (
        <Logout/>
      ) : (
        <div className="form-container">
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
      )}
    </div>
  );
};

export default Login;
