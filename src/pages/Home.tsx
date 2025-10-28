import React, { forwardRef } from 'react';
import welcome from '../assets/images/slide_1.png';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import './Home.css';

const Home = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref} style={{ backgroundImage: `url(${welcome})` }} className='landing-zone'>
        <div id="mantra" className="fade-in">
            <h3>ॐ भूर्भुवः स्व: तत्सवितुर्वरेण्यं | भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥</h3>
            <h3>Om Bhur Bhuvah Svah Tat Savitur Varenyam | Bhargo Devasya Dhimahi Dhiyoyo Nah Prachodayat ||</h3>
        </div>
        <div id="welcome-text" className="fade-in">
            <h2> Welcome to</h2>
            <h1> All World Gayatri Pariwar Edmonton</h1>
        </div>
        <div className="home-buttons fade-in">
          <ul>
            <li><Link to="/about" className="button-link">About Us</Link></li>
            <li><Link to="/services" className="button-link">Services</Link></li>
            <li><Link to="/events" className="button-link">Events</Link></li>
            <li><Link to="/photos" className="button-link">Photo Gallery</Link></li>
            <li><Link to="/resources" className="button-link">Audio/Video</Link></li>
            <li><a href="https://www.awgp.org/en/read" target="_blank" rel="noopener noreferrer" className="button-link">Literature</a></li>
            {/* <li className="resources-group">
              <span className="button-link">Resources</span>
              <div className="sub-buttons">
                <Link to="/resources" className="button-link small">Audio/Video</Link>
                <a className="button-link small">
                  Literature
                </a>
              </div>
            </li> */}
            {/* <li><Link to="/contact" className="button-link">Pragyakunj</Link></li> */}
            {/* <li><Link to="/contact" className="button-link">Pooja Prep</Link></li> */}
            <li><a href="https://www.gptoronto.org/about-3-1" target="_blank" className="button-link">
              Shantikunj & DSVV
            </a></li>
            <li><a href="https://www.awgp.org/en/contact_us/global_contacts" target="_blank" rel="noopener noreferrer" className="button-link">
              AWGP Contacts
            </a></li>
            {/* <li><Link to="/contact" className="button-link">Contact</Link></li> */}
            <li><HashLink smooth to="/#support-us" className="button-link">Support Us</HashLink></li>
            {/* <li className="resources-group">
              <span className="button-link">More</span>
              <div className="sub-buttons">
                <Link to="/photos" className="button-link small">Photo Gallery</Link>
                <Link to="/photos" className="button-link small">Pragyakunj</Link>
                <Link to="/photos" className="button-link small">Pooja Prep</Link>
                <a href="https://www.gptoronto.org/about-3-1" target="_blank" rel="noopener noreferrer" className="button-link small">
                  Shantikunj & DSVV
                </a>
                <a href="https://www.awgp.org/en/contact_us/global_contacts" target="_blank" rel="noopener noreferrer" className="button-link small">
                  AWGP Contacts
                </a>
              </div>
            </li> */}
          </ul>
        </div>
    </section>
  );
});

export default Home;