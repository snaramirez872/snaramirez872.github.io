import React from 'react';
import "./styles/AboutMe.css";
import "../App.css";

const AboutMe = () => {
    return(
        <section id="about">
            <div>
                <h1>About Me</h1>
                <a href="https://drive.google.com/file/d/198LbuaKU9B7b15KVDh45nmcDu5nKALNM/view?usp=sharing" target="_blank">View Resume</a>
                <p className="about-content-one">
                    I am currently pursuing my Bachelor's Degree in Computer Science from
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
                    <li>HTML</li>
                    <li>CSS</li>
                    <ul className="tech-sub-list">
                        <li>BootStrap</li>
                        <li>TailWindCSS</li>
                    </ul>
                    <li>C/C++</li>
                    <li>Python</li>
                    <li>MongoDB</li>
                    <li>WSL</li>
                </ul>
            </div>
        </section>
    );
}

export default AboutMe;
