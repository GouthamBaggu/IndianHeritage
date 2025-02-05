import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import bg from './static/images/bg.jpeg'; // Ensure this path is correct
import Navbar from './NavBar2.js';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.5);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
`;

// Updated background colors with image
const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bg}) no-repeat center center; /* Background image */
  background-size: cover; /* Ensure the image covers the entire container */
  background-blur: 5px; /* Optional: Add a blur effect */
  font-family: 'Poppins', sans-serif;
`;

const LoginForm = styled.form`
  background: rgba(255, 255, 255, 0.8); /* Adjusted for better readability on background image */
  padding: 50px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  width: 350px;
  animation: ${scaleIn} 0.6s ease-in-out;
  transition: transform 0.4s ease-in-out;

  h2 {
    text-align: center;
    color: #070707d7;
    font-size: 2rem;
    margin-bottom: 20px;
    animation: ${fadeIn} 0.6s ease forwards;
  }

  label {
    color: #070707d7;
    margin-bottom: 8px;
    font-size: 1rem;
  }

  input {
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 30px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: #070707d7;
    font-size: 1rem;
    transition: background 0.3s ease;

    &:focus {
      background: rgba(255, 255, 255, 1);
      outline: none;
    }
  }

  button {
    padding: 15px;
    border: none;
    border-radius: 30px;
    background-color: #ff69b4;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.4s ease;
    animation: ${glow} 2s infinite ease-in-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(255, 105, 180, 0.4);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  p, a {
    margin-top: 15px;
    text-align: center;
    color: #ff69b4;
    transition: color 0.3s ease;
  }
`;

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); 
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault(); 
    if (username && password) {
    //   try {
    //     const response = await fetch('http://localhost:8080/login', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ username, password }),
    //     });
        
    //     if (response.ok) {
    //       const data = await response.text();
    //       alert(data); // Show login success
    //       window.location.href = '/dashboard'; // Redirect to dashboard on successful login
    //     } else {
    //       const error = await response.text();
    //       alert(error); // Show error message (e.g., "Invalid username or password")
    //     }
    //   } catch (err) {
    //     console.error('Login failed:', err);
    //     alert('Error during login. Please try again.');
    //   }
    // } else {
    //   alert('Please enter a valid username and password');
    window.location.href = '/dashboard';
    }
  };

  return (
    <div>
      <Navbar />
      <LoginContainer>
        <LoginForm onSubmit={handleLogin} isVisible={isVisible}>
          <h2>Login</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </LoginForm>
      </LoginContainer>
    </div>
  );
};

export default LoginPage;
