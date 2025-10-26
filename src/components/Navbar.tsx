import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "./Navbar.css";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 850) {
        // 📱 Mobile: always visible
        setScrolled(menuOpen);
      } else {
        // 💻 Desktop: only visible after scroll
        setScrolled(window.scrollY > 50);
      }
    };

    handleScroll(); // Run once on load
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // handle viewport changes

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [menuOpen]);


  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle("menu-open", next);
      return next;
    });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${className || ""}`}>
      <div className="navbar-content">
        <div className="brand-container">
          <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Logo" className="logo"/>
            Gayatri Pariwar Edmonton|
          </Link>
          <Link to="/admin" className="nav-link admin-link" onClick={() => setMenuOpen(false)}>Admin</Link>
        </div>

        {/* ===== Hamburger Icon ===== */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* ===== Nav Links ===== */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/events" className="nav-link" onClick={() => setMenuOpen(false)}>Events</Link></li>

          <li className="nav-item dropdown">
            <span className="nav-link">Resources <FaChevronDown className="dropdown-arrow" /></span>
            <ul className="dropdown-menu">
              <li><Link to="/resources" onClick={() => setMenuOpen(false)}>Audio/Video</Link></li>
              <li><a href="https://www.awgp.org/en/read" target="_blank" rel="noopener noreferrer">Literature</a></li>
            </ul>
          </li>

          <li><Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <HashLink
              smooth
              to="/#support-us"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Support Us
            </HashLink>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link">More <FaChevronDown className="dropdown-arrow" /></span>
            <ul className="dropdown-menu">
              <li><Link to="/photos" onClick={() => setMenuOpen(false)}>Photo Gallery</Link></li>
              <li><a href="https://www.gptoronto.org/about-3-1" target="_blank" rel="noopener noreferrer">Shantikunj & DSVV</a></li>
              <li><a href="https://www.awgp.org/en/contact_us/global_contacts" target="_blank" rel="noopener noreferrer">AWGP Contacts</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;