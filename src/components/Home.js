import React, { useState } from 'react';
import AboutPopUp from './AboutPopUp';
import { Link } from 'react-router-dom';
import sean from '../components/styles/pictures/profile-picture.jpg';
import './styles/Home.css';

function Home() {
    const [isAbout, setAbout] = useState(false);
    
    function openAbout() {
        setAbout(true);
    }

    function closeAbout() {
        setAbout(false);
    }

    return(
        <div className="home">
            <div className="header">
                <p>
                    Hello World,<br />
                    I'm Sean Ramirez.
                </p>
            </div>
            <ul className="menu">
                <li id="row" onClick={openAbout} className={isAbout ? "active" : ""}>
                    <div className="content"><p>ABOUT ME</p></div>
                </li>

                {isAbout && (
                    <AboutPopUp onClose={closeAbout}>
                        <div className="kadabra">
                            <div className="title-container">
                                <p className="title">About Me</p>
                            </div>
                            <div className="great-ball">
                                <div className="phanpy">
                                    <img src={sean} alt="" />
                                    <div className="donphan">
                                        <div className="links">
                                            <a href="mailto:snaramirez872@gmail.com" target="_blank" rel="noreferrer">Email</a>
                                            <a href="https://linkedin.com/in/seanaramirez/" target="_blank" rel="noreferrer">LinkedIn</a>
                                            <a href="https://drive.google.com/file/d/1yc97EAJDTOZdX6oLHBkkONfTdNEY9yst/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-content">
                                    <p>
                                        I am a Software Developer who is passionate about all things Frontend and 
                                        Web Development. I also have a solid foundation in other aspects of Software 
                                        Engineering such as Data Engineering and other Backend Development disciplines.
                                        <br />
                                        <br />
                                        <br />
                                        I have varying levels of experience with the following:
                                    </p>
                                    <ul className="skills-list">
                                        <li><b>Programming: </b>JavaScript (ES6, ReactJS, NodeJS), Python3, CSS (3.0, Bootstrap, TailwindCSS), C/C++, SQL, MongoDB, Bash</li>
                                        <li><b>Products & Services: </b>Git, GitHub, Figma, Firebase, AWS, Windows, WSL, UNIX, Pega Dev Studio</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AboutPopUp>
                )}

                <Link to="/projects">
                    <li id="row">
                        <div className="content"><p>PROJECTS</p></div>
                    </li>
                </Link>
        
            </ul>
        </div>
    );
}

export default Home;
