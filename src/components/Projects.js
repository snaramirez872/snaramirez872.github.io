import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjContent from './ProjContent';
import './styles/Projects.css';

function Projects() {
    const [isProjOne, setProjOne] = useState(false);
    const [isProjTwo, setProjTwo] = useState(false);
    const [isProjThree, setProjThree] = useState(false);

    function openProjOne() {
        setProjOne(true);
        setProjTwo(false);
        setProjThree(false);
    }

    function openProjTwo() {
        setProjTwo(true);
        setProjOne(false);
        setProjThree(false);
    }
    function openProjThree() {
        setProjThree(true);
        setProjOne(false);
        setProjTwo(false);
    }

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
                        <div id="side-buttons" onClick={openProjOne} className={isProjOne ? "active-two" : ""}>
                            <p>"Band Geeks" News App</p>
                        </div>
                        <div id="side-buttons" onClick={openProjTwo} className={isProjTwo ? "active-two" : ""}>
                            <p>NJ Courts Notice Translation Service</p>
                        </div>
                        <div id="side-buttons" onClick={openProjThree} className={isProjThree ? "active-two" : ""}>
                            <p>ComPartAI Chatbot</p>
                        </div>
                    </div>
                    <Link to="/">
                        <button className="home-button">Back</button>
                    </Link>
                </div>
                <div className="project-content">
                    {isProjOne && (
                        <ProjContent>
                            <div className="proj-one">
                                <h1>[REPLACE WITH INFO ABOUT NEWS APP]</h1>
                            </div>
                        </ProjContent>
                    )}
                    {isProjTwo && (
                        <ProjContent>
                            <div className="proj-two">
                                <h1>[REPLACE WITH INFO ABOUT TRANSLATION SERVICE]</h1>
                            </div>
                        </ProjContent>
                    )}
                    {isProjThree && (
                        <ProjContent>
                            <div className="proj-three">
                                <h1>[REPLACE WITH INFO ABOUT COMPARTAI]</h1>
                            </div>
                        </ProjContent>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projects;
