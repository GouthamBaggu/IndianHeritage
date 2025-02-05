import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomePage.css';
import Taj from './static/images/Taj.jpeg';
import Qutub from './static/images/Qutub.jpg';
import Sun from './static/images/SunTemple.jpg';
import Diwali from './static/images/Diwali.jpg';
import Ramzan from './static/images/Ramzan.jpg';
import Chiris from './static/images/Chiris.jpg';
import Biri from './static/images/Biriyani.jpg';
import Panner from './static/images/Panner.jpg';
import Sitar from './static/images/Sitar.jpg';
import Tabala from './static/images/Tabala.jpg';
import Ji from './static/images/Jalebi.jpg';
import Veena from './static/images/Veena.jpeg';
import Kowshik from './static/images/Kowshik.jpg';
import Goutham from './static/images/face.jpg';
import Shakeer from './static/images/Shakeer.jpg';

import Navbar from './NavBar.js';


const IndianCultureHomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div> 
      <Navbar />
    <div className="culture-homepage">
      <div className={`hero-section ${isVisible ? 'animate' : ''}`}>
        <h1 className="hero-title">Discover the Richness of Indian Culture</h1>
        <p>
          Explore the heritage, festivals, and traditions of India.
        </p>
        <a href="#heritage" className="hero-button">Start Your Journey</a>
      </div>

      <div className="section heritage-section" id="heritage">
       
        <h3 className="section-title">Monumnets of India</h3>
        <p className="section-description">
          From ancient temples to historical monuments, India's heritage is a treasure trove of art, architecture, and tradition.
        </p>
        <div className="heritage-gallery">
          <Link to="/login" className="gallery-item" style={{ backgroundImage: `url(${Taj})` }}>
            <h3>Taj Mahal</h3>
          </Link>
          <Link to="/login" className="gallery-item" style={{ backgroundImage: `url(${Qutub})` }}>
            <h3>Qutub Minar</h3>
          </Link>
          <Link to="/login" className="gallery-item" style={{ backgroundImage: `url(${Sun})` }}>
            <h3>Konark Sun Temple</h3>
          </Link>
        </div>
      </div>

      <div className="section festivals-section">
        <h2 className="section-title">Festivals of India</h2>
        <p className="section-description">
          Celebrate the colorful and diverse festivals of India, from Diwali to Holi and many more.
        </p>
        <div className="festivals-grid">
          <Link to="/login" className="festival-item" style={{ backgroundImage: `url(${Diwali})` }}>
            <h3>Diwali</h3>
          </Link>
          <Link to="/login" className="festival-item" style={{ backgroundImage: `url(${Ramzan})` }}>
            <h3>Ramazan</h3>
          </Link>
          <Link to="/login" className="festival-item" style={{ backgroundImage: `url(${Chiris})` }}>
            <h3>Christmas</h3>
          </Link>
        </div>
      </div>

      <div className="section food-section">
        <h2 className="section-title">Indian Cuisine</h2>
        <p className="section-description">
          Taste the flavors of India, a land known for its spicy, savory, and sweet dishes.
        </p>
        <div className="food-gallery">
          <Link to="/login" className="gallery-item" style={{ backgroundImage: `url(${Biri})` }}>
            <h3>Biryani</h3>
          </Link>
          <Link to="/login" className="gallery-item" style={{ backgroundImage: `url(${Panner})` }}>
            <h3>Paneer Butter Masala</h3>
          </Link>
          <Link to="/login" className="gallery-item" style={{ backgroundImage: `url(${Ji})` }}>
            <h3>Jalebi</h3>
          </Link>
        </div>
      </div>

      <div className="section instruments-section">
        <h2 className="section-title">Indian Instruments</h2>
        <p className="section-description">
          Discover the soulful sounds of India's traditional musical instruments.
        </p>
        <div className="instruments-gallery">
          <Link to="/login" className="gallery-item" style={{ backgroundImage: `url(${Sitar})` }}>
            <h3>Sitar</h3>
          </Link>
          <Link to="/login" className="gallery-item" style={{ backgroundImage: `url(${Tabala})` }}>
            <h3>Tabla</h3>
          </Link>
          <Link to="/login" className="gallery-item" style={{ backgroundImage: `url(${Veena})` }}>
            <h3>Veena</h3>
          </Link>
        </div>
      </div>

      <div className="join-us-section">
        <h2 className="join">Meet Our Team</h2>
        <p className="section-description">.
        </p>
        
          <div className="team-member">
            <img src={Goutham} alt="Team Member 2" className="team-image" />
            <h3>Baggu Goutham</h3>
            
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default IndianCultureHomePage;
