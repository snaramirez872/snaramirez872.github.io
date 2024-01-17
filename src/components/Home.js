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
                                            <a href="https://drive.google.com/file/d/1FCXQ7hJ5MTmXSxri3LKIcxtjz2EaBoik/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
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
                    </Modal>
                )}

                <li id="row" onClick={openProject} className={isProject ? "active" : ""}>
                    <div className="content"><p>PROJECTS</p></div>
                </li>

                {isProject && (
                    <Modal onClose={closeProject}>
                        <div className="kadabra">
                            <div className="title-container">
                                <p className="title">Projects</p>
                            </div>
                            <div className="priemere-ball">
                                <div className="crobat">
                                    <p>I was a part of the Development Team for the following projects:</p>
                                    <ul>
                                        <li>The BandGeeks News Application | <a href="https://github.com/ppauliuchenka02/bandgeeks-news-app">GitHub Repository</a></li>
                                        <li>NJ Courts Notice Translation Service | <a href="https://njcts-njcc-dt2.pegacloud.net/prweb/PRServletPublicAuth/app/capstone-translation-service/tZu9sgxwjr34J3noXRAlyg*/!STANDARD?AppName=CTS&NoticeID=NJCRT1234567890">Prototype Link</a></li>
                                    </ul>
                                    <p>
                                        <br />
                                        <br />
                                        Currently, I am working on the following solo endeavor(s):
                                    </p>
                                    <ul>
                                        <li>ComPartAI Chatbot | <a href="https://github.com/snaramirez872/ComPartAI">GitHub Repository</a></li>
                                    </ul>
                                    <p>
                                        More Projects I made contributions to can be found here: <a href="https://github.com/snaramirez872">My GitHub</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </ul>
        </div>
    );
}

export default Home;
