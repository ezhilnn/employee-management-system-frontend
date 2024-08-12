import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ logInStatus, setLogInStatus }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setLogInStatus(false);
        navigate('/');
    };

    const navigateToLogin = () => {
        navigate('/login');
    }
    const navigateToHome = () => {
        navigate('/home');
    }

    return (
        <div className='head-top'>
            <div className='lists'>
                {!logInStatus && <div className='btns' onClick={navigateToLogin}>
                    Log In
                </div>}
                {logInStatus && <div className='btns' onClick={navigateToHome}>
                    Home
                </div>}
                {logInStatus && <div className='btns' onClick={handleLogout}>
                    Log Out
                </div>}
            </div>
        </div>
    );
}

export default Header;
