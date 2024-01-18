import React from 'react';
import { Link } from 'react-router-dom'; 
import './styles/Projects.css';

function Projects() {
    return(
        <div className="dive-ball">
            <div className="header">
                <p>
                    Hello World,<br />
                    I'm Sean Ramirez.
                </p>
            </div>
            <ul className="menu-two">
                <li id="row-two">
                    <div className="content-two"><p id="ab">ABOUT ME</p></div>
                </li>
                <li id="row-three">
                    <div className="content-three"><p id="proj">PROJECTS</p></div>
                </li>
            </ul>
            <div className="background">
                <div className="side-bar">
                    <h1>Projects</h1>
                    <div className="tabs">
                        <div className="side-buttons">
                            <p>"Band Geeks" News App</p>
                        </div>
                        <div className="side-buttons">
                            <p>NJ Courts Notice Translation Service</p>
                        </div>
                        <div className="side-buttons">
                            <p>ComPartAI Chatbot</p>
                        </div>
                    </div>
                    <Link to="/">
                        <button className="home-button">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Projects;
