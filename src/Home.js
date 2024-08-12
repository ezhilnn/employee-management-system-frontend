import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  
  const navigate = useNavigate();
  
  const navigateToLogin = () => {
    navigate('/login');
}

  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to Employee Management System</h1>
        <p>Please log in to manage employee records.</p>
        <button className="login-button"  onClick={navigateToLogin}>Log In</button>
      </div>
    </div>
  );
}

export default Home;
