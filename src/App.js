import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './LogIn';
import Home from './Home';
import LogInHome from './LogInHome';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './updateEmployee';
import ViewEmployee from './viewEmployee';
import UpdateForm from './UpdateForm';
import ProtectedRoute from './ProtectedRoute';
import SignIn from './SignIn';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header 
          logInStatus={loggedIn}
          setLogInStatus={setLoggedIn}
        />
        <Routes>
          <Route path="/login" element={<LogIn logInStatus={loggedIn} setLogInStatus={setLoggedIn} />} />
          <Route path="/" element={<Home logInStatus={loggedIn} setLogInStatus={setLoggedIn} />} />
          <Route path="/home" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <LogInHome />
            </ProtectedRoute>
          } />
          <Route path="/add" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <AddEmployee />
            </ProtectedRoute>
          } />
          <Route path="/update" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <UpdateEmployee />
            </ProtectedRoute>
          } />
          <Route path="/view" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <ViewEmployee />
            </ProtectedRoute>
          } />
          <Route path="/update/:id" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <UpdateForm />
            </ProtectedRoute>
          } />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
