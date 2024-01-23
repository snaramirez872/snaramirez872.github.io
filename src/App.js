import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import MobilePopUp from './components/MobilePopUp';
import './App.css';
import './components/styles/MobileScreen.css';

function App() {

  // Logic for Mobile Pop Ups
  const[isMobileAbout, setMobileAbout] = useState(false);
  const[isProject, setProject] = useState(false);
  const[isContact, setContact] = useState(false);

  function openMobileAbout() {
    setMobileAbout(true);
    setProject(false);
    setContact(false);
  }

  function openProjects() {
    setProject(true);
    setMobileAbout(false);
    setContact(false);
  }

  function openContacts() {
    setContact(true);
    setProject(false);
    setMobileAbout(false);
  }

  function closeMobileAbout() {
    setMobileAbout(false);
  }

  function closeProjects() {
    setProject(false);
  }

  function closeContacts() {
    setContact(false);
  }

  return (
      <div className="App">
        <div className="larger-screens">
          <Router>
            <Routes>
              <Route path="/projects" element={<Projects />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>

        {/* For Mobile Screens + Tablets */}
        <div className="mobile-screens">
          <div className="mobile-layer-bg">
            <h1 className="mobile-title">
                Hello World, I'm Sean Ramirez. 
            </h1>
            <div className="mobile-buttons">
              <button id="list-buttons" onClick={openMobileAbout} className={isMobileAbout ? "mobile-active" : ""}>About Me</button>

              {/* About Me Pop Up */}
              {isMobileAbout && (
                <MobilePopUp onClose={closeMobileAbout}>
                  <h1>About Me</h1>
                  <p>
                    I am a Software Developer who is passionate about all things Frontend and 
                    Web Development. I also have a solid foundation in other aspects of Software 
                    Engineering such as Data Engineering and other Backend Development disciplines.
                    <br />
                    <br />
                    <br />
                    I have varying levels of experience with the following:
                  </p>
                  <ul>
                      <li><b>Programming: </b>JavaScript (ES6, ReactJS, NodeJS), Python3, CSS (3.0, Bootstrap, TailwindCSS), C/C++, SQL, MongoDB, Bash</li>
                      <li><b>Products & Services: </b>Git, GitHub, Figma, Firebase, AWS, Windows, WSL, UNIX, Pega Dev Studio</li>
                  </ul>
                </MobilePopUp>
              )}

              <button id="list-buttons" onClick={openProjects} className={isProject ? "mobile-active" : ""}>Projects</button>
              
              {/* Projects Pop Up */}
              {isProject && (
                <MobilePopUp onClose={closeProjects}>
                  <h1>Projects</h1>
                  <div className="mobile-proj-list">
                    <a href="https://github.com/ppauliuchenka02/bandgeeks-news-app" target="_blank" rel="noreferrer">
                      "The Bikini Bottom News" Web App
                    </a>
                    <a href="https://njcts-njcc-dt2.pegacloud.net/prweb/PRServletPublicAuth/app/capstone-translation-service/tZu9sgxwjr34J3noXRAlyg*/!STANDARD?AppName=CTS&NoticeID=NJCRT1234567890" target="_blank" rel="noreferrer">
                      Court Notice Translation Service
                    </a>
                    <a href="https://github.com/snaramirez872/SeanVGO" target="_blank" rel="noreferrer">
                      Video Game Organizer
                    </a>
                  </div>
                </MobilePopUp>
              )}

              <button id="list-buttons" onClick={openContacts} className={isContact ? "mobile-active" : ""}>Contact Me</button>
              
              {/* Contact Info Pop Up */}
              {isContact && (
                <MobilePopUp onClose={closeContacts}>
                  <h1>Contact Info</h1>
                  <div className="mobile-contact-list">
                    <a href="mailto:snaramirez872@gmail.com" target="_blank" rel="noreferrer">
                      Email
                    </a>
                    <a href="https://linkedin.com/in/seanaramirez">
                      LinkedIn
                    </a>
                  </div>
                </MobilePopUp>
              )}

              {/* Link for Resume on Mobile */}
              <a href="https://drive.google.com/file/d/1WGO-CtOyMdrpwwlUtWWhwkdogJMmyuuZ/view?usp=sharing" target="_blank" rel="noreferrer">
                <button id="resume-button">Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
