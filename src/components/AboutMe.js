import React from 'react';
import "./styles/AboutMe.css";
import "../App.css";

const AboutMe = () => {
    return(
        <section id="about">
            <div>
                <h1>About Me</h1>
                <a href="https://drive.google.com/file/d/1wyw9nqYt4CvE9YW9ZpVVtA5-tEFfjny1/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
                <p className="about-content-one">
                    I am a <b>Software Developer</b> that recently graduated with a Bachelor's Degree in Computer Science from 
                    <b> The New Jersey Institute of Technology</b>.
                    <br />
                    <br />
                    The technologies that I have recent experience with include:
                </p>
                <ul className="list-of-tech">
                    <li>JavaScript</li>
                    <ul className="tech-sub-list">
                        <li>ReactJS</li>
                        <li>RedwoodJS</li>
                    </ul>
                    <li>CSS</li>
                    <ul className="tech-sub-list">
                        <li>BootStrap</li>
                        <li>TailWindCSS</li>
                    </ul>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>MySQL</li>
                    <li>WSL</li>
                </ul>
            </div>
        </section>
    );
}

export default AboutMe;
