import React from 'react';
import "./styles/Projects.css";
import "../App.css";

const Projects = () => {
    return(
        <section id="projects">
          <div>
            <h1>Projects</h1>
            <table className="proj-table">
              <thead>
                <tr>
                  <td>Project Name</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tr>
                <td>
                  <a 
                    href="https://github.com/ppauliuchenka02/bandgeeks-news-app" 
                    title="GitHub Repo"
                  >
                    BandGeeks News Application
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
                    <a 
                      href="https://ywcccapstone.com/" 
                      title="NJIT YWCC Capstone Homepage"
                    >
                      NJIT YWCC Capstone
                    </a> Industry Sponsored Project
                  </td>
                  <td>
                      <ul>
                          <li>Worked with <a href="http://www.njcourts.gov/" title="NJ Courts Website">New Jersey Courts</a> on their project</li>
                          <li><b>Role:</b> Student Intern, Part of Team</li>
                          <li>September 2023 to December 2023</li>
                      </ul>
                  </td>
                </tr>
            </table>
          </div>
        </section>
    );
}

export default Projects;
