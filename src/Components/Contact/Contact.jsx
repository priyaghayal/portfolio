import React from "react";
import contactCSS from './../Contact/Contact.module.css';

function Contact() {
    return (
        <div className={`${contactCSS.Contact_wrapper} section`} id="contact">
            <div className="Section_title">
                <p>Let's Get to Know Each Other</p>
                <h2>Contact</h2>
            </div>
            <div className={contactCSS.contact_card}>
                <div className={contactCSS.contact_detail}>
                    <i className="ri-building-line"></i>
                    <p>Pune, India</p>
                </div>
                <div className={contactCSS.contact_detail}>
                    <i className="ri-mail-line"></i>
                    <p><a href="priyaghayal28@gmail.com" target="_blank">Gmail</a></p>
                </div>
                <div className={contactCSS.contact_detail}>
                    <i className="ri-github-line"></i>
                    <p><a href="https://github.com/priyaghayal" target="_blank">GitHub</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
