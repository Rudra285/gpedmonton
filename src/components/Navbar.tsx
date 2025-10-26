import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { FaChevronDown } from "react-icons/fa";
import logo from '../assets/images/logo.png';
import './Navbar.css';

interface NavbarProps {
  className?: string; // <-- allow className as optional prop
}

const Navbar: React.FC<NavbarProps> = ({ className, /*onDonateClick*/ }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${className || ''}`}>
      <div className="navbar-content">
        <div className='brand-container'>
          <Link to="/" className="brand">
            <img src={logo} alt="Logo" className="logo" />
            Gayatri Pariwar Edmonton|</Link>
          <Link to="/admin" className="nav-link">Admin</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/events" className="nav-link">Events</Link></li> 
          <li className="nav-item dropdown">
            <li><span className="nav-link">Resources <FaChevronDown className="dropdown-arrow" /></span></li> {/* Page about books, recordings */}
            <ul className="dropdown-menu">
              <li><Link to="/resources">Audio/Video</Link></li> {/* Page about books, recordings */}
              <li><a href="https://www.awgp.org/en/read" target="_blank" rel="noopener noreferrer">Literature</a></li>
            </ul>
          </li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><HashLink smooth to="/#support-us" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="support-link">Support Us</HashLink></li>
          <li className="nav-item dropdown">
            <li><span className="nav-link">More <FaChevronDown className="dropdown-arrow" /></span></li> {/* Page about books, recordings */}
            <ul className="dropdown-menu">
              <li><Link to="/photos">Photo Gallery</Link></li>
              {/* <li><Link to="/resources">Pragyakunj</Link></li> */}
              {/* <li><Link to="/resources">Pooja Prep</Link></li> */}
              <li><a href="https://www.gptoronto.org/about-3-1" target="_blank" rel="noopener noreferrer">Shantikunj & DSVV</a></li>
              <li><a href="https://www.awgp.org/en/contact_us/global_contacts" target="_blank" rel="noopener noreferrer">AWGP Contacts</a></li>
            </ul>
          </li>
          {/* This button will be changed to go elsewhere or it will become a admin login later on */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
