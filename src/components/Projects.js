import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjContent from './ProjContent';
import projOneIMGOne from './styles/pictures/projects/1/light-mode-homepage.jpg';
import projOneIMGTwo from './styles/pictures/projects/1/sign-up.png';
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

    const projectTwoImages = require.context(
        './styles/pictures/projects/2', 
        false, 
        /\.(png|jpg|jpeg)$/
    );
    
    const imageMapProjTwo = {};
    
    projectTwoImages.keys().forEach((filename) => {
        const projTwoImgNames = filename.replace('./', '').replace(/\.(png|jpg|jpeg)$/, '');
        imageMapProjTwo[projTwoImgNames] = projectTwoImages(filename);
    });

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
                    <h1>PROJECTS</h1>
                    <div className="tabs">
                        <div id="side-buttons" onClick={openProjOne} className={isProjOne ? "active-two" : ""}>
                            <p>"The Bikini Bottom News" Web App</p>
                        </div>
                        <div id="side-buttons" onClick={openProjTwo} className={isProjTwo ? "active-two" : ""}>
                            <p>Court Notice Translation Service</p>
                        </div>
                        <div id="side-buttons" onClick={openProjThree} className={isProjThree ? "active-two" : ""}>
                            <p>Video Game Organizer</p>
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
                                <div className="proj-info">
                                    <div className="features">
                                        <p>News Web Application made with:</p>
                                        <ul>
                                            <li><a href="https://redwoodjs.com/docs/introduction">RedwoodJS</a></li>
                                            <ul>
                                                <li>Yarn</li>
                                                <li>ReactJS</li>
                                                <li>GraphQL and <a href="https://www.prisma.io/docs/orm/overview/databases/sqlite">Prisma SQLite</a></li>
                                            </ul>
                                            <li>TailwindCSS</li>
                                            <li><a href="https://newsapi.org/docs">NewsAPI</a></li>
                                        </ul>
                                        <p>Features:</p>
                                        <ul>
                                            <li>User Athenitcation</li>
                                            <li>User Personalization</li>
                                            <li>Search Articles</li>
                                        </ul>
                                    </div>
                                    <div className="proj-one-demo">
                                        <div className="image-container">
                                            <img src={projOneIMGOne} alt="" />
                                            <img src={projOneIMGTwo} alt="" />
                                        </div>
                                        <Link to="https://github.com/ppauliuchenka02/bandgeeks-news-app" target="_blank" rel="noreferrer">
                                            <button className="github-repo">GitHub Repository</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ProjContent>
                    )}
                    {isProjTwo && (
                        <ProjContent>
                            <div className="proj-two">
                                <div className="proj-info">
                                    <div className="features">
                                        <p>Mobile-First Web Application made with:</p>
                                        <ul>
                                            <li><a href="https://docs-previous.pega.com/application-development/87/dev-studio-overview">Pega Dev Studio</a></li>
                                            <li><a href="https://docs.aws.amazon.com/translate/latest/APIReference/welcome.html">AWS Translate</a> API</li>
                                            <ul>
                                                <li><a href="https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html">TranslateDocument</a> Action</li>
                                            </ul>
                                        </ul>
                                        <p>Features:</p>
                                        <ul>
                                            <li>Launches via scanning a QR Code</li>
                                            <li>Translation available in 11 languages</li>
                                        </ul>
                                    </div>
                                    <div className="proj-two-demo">
                                        <div className="image-container">
                                            <img src={imageMapProjTwo['NJJ-Translation-Screen-1']} alt="" />
                                            <img src={imageMapProjTwo['NJJ-Translation-Screen-2']} alt="" />
                                            <img src={imageMapProjTwo['NJJ-Translation-Screen-3']} alt="" />
                                        </div>
                                        <Link to="https://njcts-njcc-dt2.pegacloud.net/prweb/PRServletPublicAuth/app/capstone-translation-service/tZu9sgxwjr34J3noXRAlyg*/!STANDARD?AppName=CTS&NoticeID=NJCRT1234567890" target="_blank" rel="noreferrer">
                                            <button className="prototype-link">Prototype Link</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ProjContent>
                    )}
                    {isProjThree && (
                        <ProjContent>
                            <div className="proj-three">
                                <div className="proj-info">
                                    <div className="features">
                                        <p>Video Game Organizer made with:</p>
                                        <ul>
                                            <li>ReactJS</li>
                                            <li>CSS3</li>
                                            <li>Firebase</li>
                                            <li>Twitch <a href="https://api-docs.igdb.com/#getting-started">IGDB</a> API</li>
                                        </ul>
                                        <p>Features:</p>
                                        <ul>
                                            <li>Forms to Add/Remove Games</li>
                                            <li>Search Games</li>
                                        </ul>
                                    </div>
                                    <div className="proj-three-demo">
                                        <h1>Nothing to show here for now.</h1>
                                        <Link to="https://github.com/snaramirez872/SeanVGO" target="_blank" rel="noreferrer">
                                            <button className="github-repo">GitHub Repository</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ProjContent>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projects;
