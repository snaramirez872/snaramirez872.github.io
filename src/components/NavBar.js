import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
                        <a href="https://drive.google.com/file/d/198LbuaKU9B7b15KVDh45nmcDu5nKALNM/view?usp=sharing" target="_blank">View Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
