import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogInHome.css';

const LogInHome = () => {
  const navigate = useNavigate();

  return (
    <div className='logInHome'>
      <div className='nav-btns'>
        <div className='btns'>
          <button onClick={() => navigate('/add')}>Add Employee</button>
        </div>
        <div className='btns'>
          <button onClick={() => navigate('/update')}>Update Employee</button>
        </div>
        <div className='btns'>
          <button onClick={() => navigate('/view')}>View Employees</button>
        </div>
      </div>
    </div>
  );
}

export default LogInHome;
