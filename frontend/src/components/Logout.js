import React from 'react';
import axios from 'axios';
import './styles.css'
const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/logout', null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      console.log(response.data.message)
      // Clear the token from local storage
      localStorage.removeItem('token');
      // redirect the user to the login page
      window.location.href = '/login'; 
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="logout-container">
      <h2 className='head'>Welcome to the App</h2>
      <p>You are logged in.</p>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Logout;
