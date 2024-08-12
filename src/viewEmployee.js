import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './update.css';

const ViewEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [errMsg, setErr] = useState('');
  const [err, setErrr] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/employee');
      if (response.data) {
        setEmployees(response.data);
      } else {
        setErr('No record found');
      }
    } catch (e) {
      setErr(e.message || 'An unexpected error occurred.');
      setErrr(true);
    }
  };

  const handleSearch = async () => {
    if (searchTerm === '') {
      fetchEmployees(); // Fetch all employees when search is cleared
      return;
    }
    
    try {
      const response = await axios.get(`http://localhost:8080/employee/search/${searchTerm}`);
      if (response.data) {
        setEmployees(response.data);
      } else {
        setErr('No matching records found');
      }
    } catch (e) {
      setErr(e.message || 'An unexpected error occurred.');
      setErrr(true);
    }
  };

  return (
    <div className='view-employees'>
      {err && <div className='errMsg'>{errMsg}</div>}
      {!err && (
        <div className="employee-container">
          <h2>Employees</h2>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
          </div>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewEmployee;
