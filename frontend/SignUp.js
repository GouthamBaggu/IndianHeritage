import React, { useState } from 'react';
//import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import Taj from './static/images/bg.jpeg'; 
import Navbar from './NavBar2';
import { useNavigate } from 'react-router-dom'; 

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
const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${Taj}) no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const SignupForm = styled.form`
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  width: 360px;
  animation: ${scaleIn} 0.6s ease-in-out;
  z-index: 2; /* Ensure form is above the overlay */
  transition: transform 0.4s ease-in-out;

  h2 {
    margin-bottom: 10px;
    color: #333;
    font-size: 24px;
    text-align: center;
    animation: ${fadeIn} 0.6s ease forwards;
  }

  label {
    color: #333;
    margin-bottom: 8px;
    font-size: 1rem;
  }

  input {
    width: 100%;
    padding: 10px;
    background: #f1f1f1;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 25px;
    outline: none;
    transition: background 0.3s ease;
    color: #333;

    &:focus {
      background: #fff;
      outline: none;
    }
  }

  button {
    width: 100%;
    padding: 15px;
    background: linear-gradient(45deg, #fc6076, #ff9a44);
    border: none;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease, transform 0.3s ease;
    animation: ${glow} 2s infinite ease-in-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(255, 105, 180, 0.4);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  p {
    margin-top: 15px;
    text-align: center;
    color: #ff7171;
    transition: color 0.3s ease;
  }

  a {
    color: #ff7171;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fc6076;
    }
  }
`;

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  

  const handleSignup = async (e) => {
    alert("Signup Successfull");
    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      <SignupContainer>
        <SignupForm onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <button type="submit">Sign Up</button>

          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </SignupForm>
      </SignupContainer>
    </div>
  );
};

export default SignupPage;
