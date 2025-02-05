import React from 'react';
import styled from 'styled-components';
import Taj from './static/images/bg.jpeg'; // Ensure this path is correct
import Nabar from './NavBar2.js';
const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${Taj}) no-repeat center center;
  background-size: cover;
  background-blur: 10px; /* Optional: Add a blur effect */
  font-family: 'Poppins', sans-serif;
  color: #fff;
`;

const AboutContent = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 15px;
  backdrop-filter: blur(15px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 800px;
  width: 90%;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #ffddc1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  button {
    padding: 15px 30px;
    border: none;
    border-radius: 30px;
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    &:hover {
      background: linear-gradient(135deg, #feb47b, #ff7e5f);
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

const AboutPage = () => {
  return (
    <div>
      <Nabar />
    <AboutContainer>
      <AboutContent>
        <h1>Explore Indian Culture</h1>
        
        <p>
          Discover the rich heritage, vibrant traditions, and the incredible diversity of India.
          From its ancient history and beautiful monuments to its diverse cultures and vibrant festivals,
          explore the essence of India and immerse yourself in its timeless beauty.
        </p>
        <button onClick={() => (window.location.href = '/login')}>Learn More</button>
      </AboutContent>
    </AboutContainer>
    </div>
  );
};

export default AboutPage;
