import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './update.css'; // Import the CSS file

const UpdateForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { employee } = location.state;

  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/employee/${formData.id}`, formData);
      navigate('/update');
    } catch (error) {
      console.error('Error updating employee', error);
    }
  };

  return (
    <div className="update-form">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Salary:</label>
          <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" name="position" value={formData.position} onChange={handleChange} required />
        </div>
        <button className="update-btn" type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default UpdateForm;
