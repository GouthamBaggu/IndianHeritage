import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Images for cards
import monumentsImg from './static/images/monuments.jpg';
import festivalsImg from './static/images/festivals.jpg';
import cuisineImg from './static/images/cuisine.jpg';
import musicImg from './static/images/music.avif';
import artCraftImg from './static/images/art-craft.jpg';
import languagesImg from './static/images/languages.jpg';
import Navbar from './NavBar3.js';
import Religious from './static/images/Religious-Festivals.jpeg';
import Kasi from './static/images/Kasi.jpg';
import JammuMasjid from './static/images/JammuMasjid.jpg';
import Church from './static/images/Church.jpg';
import Namaz from './static/images/Namaz.jpg';
import Ganesh from './static/images/Ganesh.jpg';
import TajScroll from './static/images/TajScroll.jpg';

// Animations
const fadeIn = keyframes`


  from {
    opacity: 0;
    transform: translateY(-30px);
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

// In Dashboard.js or your component file
const ScrollingImagesContainer = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  overflow: hidden; /* Ensure no horizontal scroll */
  background: #f8f8f8;
`;

const ScrollingImages = styled.div`
  width: 100%; /* Adjust based on the number of images */
  height: 100%;
  display: flex; /* Ensure images align correctly */
  transition: transform 1.5s ease;
`;

const ScrollingImage = styled.img`
  flex: 0 0 100vw; /* Ensure each image takes up full viewport width */
  height: 90%;
  object-fit: cover;
`;


// Arrow Buttons
const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  font-size: 2rem;
  padding: 10px;
  z-index: 10;
  border-radius: 50%;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }

  ${({ left }) => left && `
    left: 10px;
  `}

  ${({ right }) => right && `
    right: 10px;
  `}
`;

// Container for Dashboard
const DashboardContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  font-family: 'Poppins', sans-serif;
`;

// Dashboard Content
const DashboardContent = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 50px;
  border-radius: 0px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 94%;
  animation: ${scaleIn} 0.6s ease-in-out;
`;

const DashboardHeader = styled.h2`
  color: #070707d7;
  font-size: 2.5rem;
  margin-bottom: 50px;
  animation: ${fadeIn} 0.6s ease forwards;
`;

const Section = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  width: 25%;
  text-align: center;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  animation: ${scaleIn} 0.5s ease-in-out;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: translateY(-5px);
box-shadow: 0 12px 24px rgba(0, 0, 0, 1.5);
  }

  h3 {
    color: #ff69b4;
    margin-bottom: 15px;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  p {
    color: #333;
  }
`;

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollRef = useRef(null);
  const images = [
    monumentsImg,
    festivalsImg,
    Namaz,
    cuisineImg,
    JammuMasjid,
    musicImg,
    Ganesh,
    artCraftImg,
    TajScroll,
    languagesImg,
    Religious,
    Kasi,
    Church
  ];

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateX(-${index * 100}vw)`;
    }
  };

  const handleArrowClick = (direction) => {
    setAutoScroll(false);
    setCurrentIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex > 0 ? prevIndex - 1 : images.length - 1;
      } else {
        return prevIndex < images.length - 1 ? prevIndex + 1 : 0;
      }
    });
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const interval = autoScroll ? setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, 5000) : null;

    return () => clearInterval(interval);
  }, [autoScroll, images.length]); // Include images.length in the dependency array

  return (
    <div>
      <Navbar />
    <div>
      {/* Scrolling Images */}
      <ScrollingImagesContainer>
        <ArrowButton left onClick={() => handleArrowClick('left')}>
          &lt;
        </ArrowButton>
        <ScrollingImages ref={scrollRef}>
          {images.map((img, index) => (
            <ScrollingImage key={index} src={img} alt={`Image ${index}`} />
          ))}
        </ScrollingImages>
        <ArrowButton right onClick={() => handleArrowClick('right')}>
          &gt;
        </ArrowButton>
      </ScrollingImagesContainer>

      <DashboardContainer>
        <DashboardContent>
          <DashboardHeader>Welcome to Indian Culture Dashboard</DashboardHeader>
          <Section>
            <Card>
              <img src={monumentsImg} alt="Monuments" />
              <h3>Monuments</h3>
              <p>Discover the historical wonders of India</p>
            </Card>
            <Card>
              <img src={festivalsImg} alt="Festivals" />
              <h3>Festivals</h3>
              <p>Explore the vibrant festivals across the country</p>
            </Card>
            <Card>
              <img src={cuisineImg} alt="Cuisine" />
              <h3>Cuisine</h3>
              <p>Savor the rich diversity of Indian food</p>
            </Card>
          </Section>
          <Section>
            <Card>
              <img src={musicImg} alt="Music & Dance" />
              <h3>Music & Dance</h3>
              <p>Immerse yourself in classical and folk traditions</p>
            </Card>
            <Card>
              <img src={artCraftImg} alt="Art & Craft" />
              <h3>Art & Craft</h3>
              <p>Discover traditional Indian art forms</p>
            </Card>
            <Card>
              <img src={languagesImg} alt="Languages" />
              <h3>Languages</h3>
              <p>Learn about the diverse languages spoken in India</p>
            </Card>
          </Section>
        </DashboardContent>
      </DashboardContainer>
    </div>
    </div>
  );
};

export default Dashboard;
