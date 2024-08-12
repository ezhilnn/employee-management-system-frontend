import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css';

const SignIn = ({ logInStatus, setLogInStatus }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return pattern.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validatePassword(password)) {
      setError('Password must contain at least one number, one lowercase and one uppercase letter, and at least 8 or more characters');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/sign_in', {
        username,
        password,
        email,
      });
      navigate('/home')

      console.log('Response:', response.data); // Debugging response data

      if (response.data.success) {
        setLogInStatus(true);
        navigate('/home');
      } else {
        setError('Sign in failed');
      }
    } catch (error) {
      console.error('Sign in error:', error); // Debugging error
      setError('Error signing in. Please try again.');
    }
  };

  return (
    <div className='customSignInForm'>
      <div className='customFormContainer'>
        <form onSubmit={handleSubmit}>
          <div className='customInput'>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type='text'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='customInput'>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='customInput'>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number, one lowercase and one uppercase letter, and at least 8 or more characters"
            />
          </div>
          {error && <p className='customError'>{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <Link to="/login">Already have an account? Log in</Link>
      </div>
    </div>
  );
}

export default SignIn;
