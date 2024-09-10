import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../Css/login.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');  // State for error message
  const [successMessage, setSuccessMessage] = useState('');  // State for success message

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error message
    setSuccessMessage(''); // Clear any previous success message

    try {
      const response = await fetch('http://localhost:8080/public/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.text();
        localStorage.setItem('jwt', data);
        setIsLoggedIn(true); 
        setRedirect(true);  
        setSuccessMessage('Login successful!');  // Set success message
      } else {
        setErrorMessage('Login failed. Please check your username and password.'); // Set error message
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      setErrorMessage('An error occurred. Please try again later.'); // Set error message on exception
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        
        {errorMessage && <div className="error-message">{errorMessage}</div>}  {/* Display error message */}
        {successMessage && <div className="success-message">{successMessage}</div>}  {/* Display success message */}
        
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
