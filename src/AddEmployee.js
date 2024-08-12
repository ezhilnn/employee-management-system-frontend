import React, { useState } from 'react';
import axios from 'axios';
import './AddEmployee.css';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        first_name: '',
        last_name: '',
        age: '',
        gender: '',
        address: '',
        phone: '',
        email: '',
        salary: '',
        position:''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
      console.log(e.target);
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/employee', employee);
            if (response.status === 201) {
                setMessage('Employee added successfully');
                setEmployee({
                    first_name: '',
                    last_name: '',
                    age: '',
                    gender: '',
                    address: '',
                    phone: '',
                    email: '',
                    salary: '',
                    position:''
                });
            } else {
                setMessage('Failed to add employee');
            }
        } catch (error) {
            setMessage('Error adding employee');
        }
    };

    return (
        <div className='add-employee-form'>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>First Name</label>
                    <input type='text' name='first_name' value={employee.first_name} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <input type='text' name='last_name' value={employee.last_name} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label>Age</label>
                    <input type='number' name='age' value={employee.age} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <input type='text' name='gender' value={employee.gender} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label>Address</label>
                    <input type='text' name='address' value={employee.address} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label>Phone</label>
                    <input type='text' name='phone' value={employee.phone} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' name='email' value={employee.email} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label>Salary</label>
                    <input type='number' name='salary' value={employee.salary} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label>Position</label>
                    <input type='text' name='position' value={employee.position} onChange={handleChange} required />
                </div>
                <button type='submit'>Add Employee</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddEmployee;
