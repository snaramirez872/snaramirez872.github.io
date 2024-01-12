import React, { useState } from 'react';
import Modal from './Modal';
import './styles/Home.css';

function Home() {
    const [isAbout, setAbout] = useState(false);
    const [isProject, setProject] = useState(false);
    
    const openAbout = () => {
        setAbout(true);
    }

    const closeAbout = () => {
        setAbout(false);
    }
    
    const openProject = () => {
        setProject(true);
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
            <div className="menu-container">
                <table className="menu">
                    <tr onClick={ openAbout } className = { isAbout ? 'active' : '' }>
                        <td className="box"><span className="circle"></span></td>
                        <td className="content"><div>ABOUT ME</div></td>
                    </tr>

                    {isAbout && (
                        <Modal onClose={ closeAbout }>
                            <p>About Me</p>
                        </Modal>
                    )}

                    <tr onClick={ openProject } className={ isProject ? 'active' : '' }>
                        <td className="box"><span className="circle"></span></td>
                        <td className="content"><div>PROJECTS</div></td>
                    </tr>
                    
                    {isProject && (
                        <Modal onClose={ closeProject }>
                            <p>Projects</p>
                        </Modal>
                    )}

                </table>
            </div>
        </div>
    );
}

export default Home;
