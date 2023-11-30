import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/NavBar.css';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="about" smooth duration={500} className="navbar-logo">
                    Sean Ramirez
                </Link>

                <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <Link to="about" smooth duration={500} onClick={toggleMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="projects" smooth duration={500} onClick={toggleMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="contact" smooth duration={500} onClick={toggleMobileMenu}>
                            Contact Me
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <a href="../public/test.txt" target="_blank" rel="noopener noreferrer">View Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
