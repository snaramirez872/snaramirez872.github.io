import React from 'react';
import "./styles/Projects.css";
import "../App.css";

const Projects = () => {
    return(
        <section id="projects">
          <div>
            <h1>Projects | <a href="https://github.com/snaramirez872" title="GitHub Portfolio">GitHub</a></h1>
            <ul className="mobile-projects">
              <li>
                <a 
                  href="https://github.com/ppauliuchenka02/bandgeeks-news-app" 
                  title="GitHub Repo"
                >
                  BandGeeks News Application
                </a>
                <ul>
                  <li>A RedwoodJS application that serves as a personal news feed</li>
                  <li>Class Project for NJIT CS490 - Guided Software Engineering Design</li>
                </ul>
              </li>
              <li>
                <a href="https://njcts-njcc-dt2.pegacloud.net/prweb/PRServletPublicAuth/app/capstone-translation-service/tZu9sgxwjr34J3noXRAlyg*/!STANDARD?AppName=CTS&NoticeID=NJCRT1234567890" title="Prototype Web Page">Court Notice Translation Service Prototype</a>
                <ul>
                  <li>Worked with NJ Courts to develop a service that translates court documents into more languages</li>
                  <li>NJIT YWCC Capstone Industry-Sponsored Project</li>
                  <li>September 2023 to December 2023</li>
                </ul>
              </li>
              <li>
                <a href="https://github.com/snaramirez872/ComPartAI" title="ComPartAI GitHub Repo">ComPartAI Chatbot</a>
                <ul>
                  <li>An IT Consultant powered by GPT-3.5, ReactJS, and Firebase</li>
                </ul>
              </li>
            </ul>
            <table className="proj-table">
              <thead>
                <tr>
                  <td>Project Name</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a 
                      href="https://github.com/ppauliuchenka02/bandgeeks-news-app" 
                      title="GitHub Repo"
                    >
                      "BandGeeks" News Application
                    </a>
                  </td>
                  <td>
                    <ul>
                      <li>Personal News Application using <a href="https://redwoodjs.com/docs/introduction" title="RedwoodJS Docs">RedwoodJS</a>, <a href="https://tailwindcss.com/" title="Tailwind CSS Website">Tailwind CSS</a>, and <a href="https://newsapi.org/" title="NewsAPI Website">NewsAPI</a></li>
                      <li>Worked in a team of students, Assisted in the development of certain parts of the web application</li>
                      <li>Class Project for NJIT CS490: Guided Software Engineering Design</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                  <a href="https://njcts-njcc-dt2.pegacloud.net/prweb/PRServletPublicAuth/app/capstone-translation-service/tZu9sgxwjr34J3noXRAlyg*/!STANDARD?AppName=CTS&NoticeID=NJCRT1234567890" title="Prototype Web Page">Court Notice Translation Service Prototype</a>
                  </td>
                  <td>
                      <ul>
                        <li>Worked with NJ Courts to develop a service to translate court documents into more languages</li>
                        <li>Uses <a href="https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html" title="TranslateDocument Method Docs">AWS Translate API</a> for the translation of the court nortices</li>
                        <li><b>Roles: </b>Pega Developer and QA Lead</li>
                        <li><a href="https://ywcccapstone.com/" title="NJIT YWCC Capstone Homepage">NJIT YWCC Capstone</a> Industry-Sponsored Project</li>
                        <li><b>Recognition: </b> Third Place in Judging Panel 4 & Individual Team MVP at NJIT YWCC Showcase Fall 2023</li>
                      </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/snaramirez872/ComPartAI" title="ComPartAI GitHub Repo">ComPartAI Chatbot</a>
                  </td>
                  <td>
                    <ul>
                      <li>AI Chatbot that functions as an IT Consultant</li>
                      <li>Ongoing Development using ReactJS, Firebase, and GPT-3.5</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
    );
}

export default Projects;
