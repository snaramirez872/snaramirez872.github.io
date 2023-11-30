import React from "react";
import "./styles/Contact.css";
import "../App.css";

const Contact = () => {
    return(
        <section id="contact">
            <div>
                <h1>Contact Me</h1>
                <ul>
                    <li><a href="mailto:sr2338@njit.edu"><i class='bx bx-envelope'></i>Email</a></li>
                    <li><a href="https://linkedin.com/in/seanaramirez" target="_blank"><i class='bx bxl-linkedin-square' id="linkedin-logo"></i>LinkedIn</a></li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;
