import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>        
      </div>
    </Router>
  );
}

const Home = () => {
  return (
   <>
   <h1 className="heading">Login/Registration page</h1>
    <div className="button-container"> 
         
          <Link to="/register">
            <button className="button">Register</button>
          </Link>
          <Link to="/login">
            <button className="button">Login</button>
          </Link>
        </div>
    </>
  )
 
}

export default App;
