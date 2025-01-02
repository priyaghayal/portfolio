import React from "react";
import aboutCSS from './../About/About.module.css';

function About() {
    return (
        <>
            <div className={`${aboutCSS.about_wrapper} section`} id="about">
                <div className={aboutCSS.Experience_education}>
                    {/* Experience Section */}
                    <div className={aboutCSS.experience_wrapper}>
                        <h2>Experience</h2>
                        <div className={aboutCSS.experience}>
                            <h3><i className="ri-briefcase-line"></i> Working Student – TransnetBW (Stuttgart, Germany)</h3>
                            <small>Mar 2024 – Mar 2025</small>
                            <p>
                                Increased performance efficiency in grid loss correlation analysis and related KPI using
                                data science - numpy, pandas, matplotlib, seaborn.
                                Continuous improvement of analytics criteria to deliver departmental goals through
                                analyzing Big data. Gathered technical competencies for increased company API's and libraries.
                                Software Testing - pytest, unittest, integration testing.
                            </p>
                        </div>
                        <div className={aboutCSS.experience}>
                            <h3><i className="ri-briefcase-line"></i> Software Support Engineer – Precisely Data & Software Pvt Ltd. (Pune, India)</h3>
                            <small>Jul 2021 – Sep 2023</small>
                            <p>
                                Analyzed, identified, troubleshooted, and debugged software products to resolve client tickets more than 20 per week.
                                Led training and peer-mentoring programs to help onboard 4 associates in 2022.
                                Documented and maintained technical documentation, 5 per week.
                            </p>
                        </div>
                        <div className={aboutCSS.experience}>
                            <h3><i className="ri-briefcase-line"></i> Intern – AI Adventures (Pune, India)</h3>
                            <small>Dec 2019 – Mar 2020</small>
                            <p>
                                Implemented Python and Data Science scripts to solve problems using the latest machine-learning techniques.
                                Developed an object classification model with 96% accuracy using advanced machine learning techniques such as SVM, PCA, and computer vision.
                            </p>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className={aboutCSS.education_wrapper}>
                        <h2>Education</h2>
                        <div className={aboutCSS.education}>
                            <h3><i className="ri-graduation-cap-line"></i> Masters in Software Technology - Hochschule für Technik, Stuttgart, Germany</h3>
                            <small>Oct 2023 – Present</small>
                            <p>
                                Data structures and algorithms, Software Architecture, Middleware Technology, Business Intelligence.
                                Thesis: Implementation of Post Quantum Crypto libraries on IoT hardware.
                            </p>
                        </div>
                        <div className={aboutCSS.education}>
                            <h3><i className="ri-graduation-cap-line"></i> Bachelor of Engineering (Computer) – Savitribai Phule Pune University, India</h3>
                            <small>Jul 2017 – Jul 2021</small>
                            <p>
                                Database Management System, Internet of Things, Artificial Intelligence, Machine Learning,
                                Information and Cybersecurity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
