import React from "react";
import "./styles/Contact.css";
import "../App.css";

const Contact = () => {
    return(
        <section id="contact">
            <div>
                <h1>Contact Me</h1>
                <ul>
                    <li><a href="mailto:snaramirez872@gmail.com" title="snaramirez872@gmail.com">Email</a></li>
                    <li><a href="https://linkedin.com/in/seanaramirez" title="LinkedIn: seanaramirez" target="_blank">LinkedIn</a></li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;
