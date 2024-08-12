import React, { useState } from 'react';
import { useNavigate,} from 'react-router-dom';
import axios from 'axios';
import './LogIn.css';

const LogIn = ({logInStatus,setLogInStatus}) => {
    
    const navigate = useNavigate();
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(logInStatus);
        try {
            const response = await axios.post('http://localhost:8080/log_in', {
                username,
                password
            });
            if (response.data) {
                setLogInStatus(true);
                navigate('/home');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('Error logging in. Please try again.');
        }
        console.log(logInStatus);
    };

    return (
        <div className='logInForm'>
            <div className='ff'>
            <form onSubmit={handleSubmit}>
                <div className='input'>
                    <label htmlFor="user_name">Username</label>
                    <input 
                        id="user_name" 
                        type='text' 
                        name='username' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </div>
                <div className='input'>
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type='password' 
                        name='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        
                        title="Must contain at least one number, one lowercase and one uppercase letter, and at least 8 or more characters" 
                    />
                </div>
                {error && <p className='error'>{error}</p>}
                <button type="submit">Log In</button>
            </form>

            <div onClick={() => navigate('/sign-in')} className='sign-up'>Sign Up</div>
            </div>
        </div>
    );
}

export default LogIn;
