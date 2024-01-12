import React, { useState } from 'react';
import Modal from './Modal';
import './styles/Home.css';

function Home() {
    const [isAbout, setAbout] = useState(false);
    const [isProject, setProject] = useState(false);
    
    const openAbout = () => {
        setAbout(true);
        setProject(false);
    }

    const closeAbout = () => {
        setAbout(false);
    }
    
    const openProject = () => {
        setProject(true);
        setAbout(false);
    }

    const closeProject = () => {
        setProject(false);
    }

    return(
        <div className="home">
            <div className="header">
                <p>
                    Hello World, <br />
                    I'm Sean Ramirez.
                </p>
            </div>
            <ul className="menu">
                <li onClick={openAbout} className={isAbout ? "active" : ""}>
                    <div className="content"><p>ABOUT ME</p></div>
                </li>

                {isAbout && (
                    <Modal onClose={closeAbout}>
                        <p>About Me</p>
                    </Modal>
                )}

                <li onClick={openProject} className={isProject ? "active" : ""}>
                    <div className="content"><p>PROJECTS</p></div>
                </li>

                {isProject && (
                    <Modal onClose={closeProject}>
                        <p>Projects</p>
                    </Modal>
                )}
            </ul>
        </div>
    );
}

export default Home;
