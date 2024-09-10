import React, { useState } from 'react';
import '../Css/login.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/public/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName: username, password: password })
            });

            if (response.status === 201) {
                // Signup successful
                setSuccessMessage('Signup successful!');
                setErrorMessage('');
            } else if (response.status === 409) {
                // Username already exists
                setErrorMessage('Username already exists. Please choose another one.');
                setSuccessMessage('');
            } else {
                // Other error
                setErrorMessage('Signup failed. Please try again.');
                setSuccessMessage('');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSignup}>
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <i className="bx bx-user"></i>
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
                <button type="submit">Sign Up</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
            </form>
        </div>
    );
};

export default Signup;
