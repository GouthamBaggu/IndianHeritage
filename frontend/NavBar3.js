import React, { useState } from 'react';
import styled from 'styled-components';

// Navbar Container
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  width: 97%;
  height: 65px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// Logo
const Logo = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  margin: 0;
  cursor: pointer;
`;

// Hamburger Icon
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Navbar Links
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: ${({ open }) => (open ? '0' : '-100%')};
    flex-direction: column;
    background: #333;
    width: 100%;
    transition: left 0.3s ease-in-out;
    padding: 20px 0;
  }
`;

// NavItem for dropdown
const NavItem = styled.li`
  position: relative;
  cursor: pointer;

  &:hover > ul {
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;

    &:hover > ul {
      display: none;
    }
  }
`;

// NavLink
const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  padding: 5px 0;
  transition: color 0.3s ease;

  &:hover {
    color: #FF8C00;
  }

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background: #FF8C00;
    transform: scaleX(1);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 10px 20px;
  }
`;

// Dropdown Menu
const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 35px;
  left: 0;
  background: #444;
  padding: 10px 0;
  border-radius: 5px;
  min-width: 150px;
  z-index: 1000;

  & > li {
    padding: 8px 20px;

    &:hover {
      background: #555;
    }
  }

  & > li > a {
    color: #fff;
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    position: static;
    background: none;
    padding: 0;

    & > li {
      padding: 10px 20px;
    }

    & > li > a {
      color: #fff;
    }
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>IndianCulture</Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavLinks open={open}>
        <NavItem>
          <NavLink href="/monuments">Monuments</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/festivals">Festivals</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/cuisine">Cuisine</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/musicanddance">Music & Dance</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/artifacts">Art & Craft</NavLink>
        </NavItem>
        {/* Example Dropdown */}
        <NavItem>
          <NavLink href="#">Culture</NavLink>
          <DropdownMenu>
            <li><a href="/languages">Languages</a></li>
            <li><a href="/cloth">Traditional Clothing</a></li>
            <li><a href="/literature">Literature</a></li>
            <li><a href="/religion">Religion</a></li>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          <NavLink href="#">Heritage</NavLink>
          <DropdownMenu>
            <li><a href="/history">History</a></li>
            <li><a href="/wildlife">Wildlife</a></li>
            <li><a href="/traditional-sports">Traditional Sports</a></li>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          <NavLink href="/gallery">Gallery</NavLink>
        </NavItem>
        
        
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
