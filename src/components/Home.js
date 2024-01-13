import React, { useState } from 'react';
import Modal from './Modal';
import sean from '../components/styles/pictures/profile-picture.jpg';
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
                <li id="row" onClick={openAbout} className={isAbout ? "active" : ""}>
                    <div className="content"><p>ABOUT ME</p></div>
                </li>

                {isAbout && (
                    <Modal onClose={closeAbout}>
                        <div class="about-header">
                            <div className="title-container">
                                <p className="title">About Me</p>
                            </div>
                            <div className="great-ball">
                                <div className="phanpy">
                                    <img src={sean} />
                                    <div className="donphan">
                                        <div className="links">
                                            <a href="mailto:snaramirez872@gmail.com" target="_blank">Email</a>
                                            <a href="https://linkedin.com/in/seanaramirez/" target="_blank">LinkedIn</a>
                                            <a href="https://drive.google.com/file/d/1FCXQ7hJ5MTmXSxri3LKIcxtjz2EaBoik/view?usp=sharing" target="_blank">View Resume</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-content">
                                    <p>
                                        I am an upcoming Software Developer who is passionate about all things 
                                        Web Development. I also have a solid foundation in other aspects of Software 
                                        Engineering such as Data Engineering and other backend development disciplines.
                                        <br />
                                        I have various levels of experience with the following:
                                    </p>
                                    <ul className="skills-list">
                                        <li><b>Programming: </b>JavaScript(ES6, ReactJS, NodeJS), Python3, CSS(3.0, Bootstrap, TailwindCSS), C/C++, Bash</li>
                                        <li><b>Products & Services: </b>Git, GitHub, Figma, Firebase, AWS, Windows, UNIX, Pega</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}

                <li id="row" onClick={openProject} className={isProject ? "active" : ""}>
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
