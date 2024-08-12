import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './update.css'; // Import the CSS file

const UpdateEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/employee');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/employee/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee', error);
    }
  };

  const handleUpdate = (employee) => {
    navigate(`/update/${employee.id}`, { state: { employee } });
  };

  return (
    <div className="employee-container">
      <h2>Employees</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.address}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
              <td>{employee.position}</td>
              <td>
                <button className="update-btn" onClick={() => handleUpdate(employee)}>Update</button>
                <button className="delete-btn" onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateEmployee;
