import React from "react";
import projectsCSS from './../Projects/Project.module.css';

function Projects() {
    return (
        <>
            <div className={`${projectsCSS.projects_wrapper} section`} id="projects">
                <h2>Projects</h2>
                <div className={projectsCSS.projects_container}>
                    <div className={projectsCSS.project_card}>
                        <h3>Job Referral Mobile App</h3>
                        <p>
                        A react-native application which provides functionality to post job availability and refer people for that job
                        <br /><br />
                        React Native, Parse Server, PostgreSQL, AWS Cloud
                        </p>

                        <a href="https://github.com/priyaghayal/jobReferralSystem/" className={projectsCSS.project_link}><i className="ri-github-line"></i></a>
                        
                    </div>
                    <div className={projectsCSS.project_card}>
                        <h3>Budget Manager Website</h3>
                        <p>
                        Budget Buddy is a web based application to keep a record of user’s daily/monthly expenses.
                        <br /><br />
                        HTML, CSS, Javascript, PHP, MySQL, Google API
                        </p>
                        <a href="https://github.com/priyaghayal/Budget-Manager/" className={projectsCSS.project_link}><i className="ri-github-line"></i></a>
                        
                    </div>
                    <div className={projectsCSS.project_card}>
                        <h3>Workload Evaluation</h3>
                        <p>
                        Project to analyze and classify users’ mental workload while performing cognitive tasks. Used deep learning techniques on EEG signals for classifying Cognitive Workload.
                        <br /><br/>Python, Matlab, Flask, Deep Neural Network
                        </p>
                        <a href="https://github.com/priyaghayal/CognitiveWorkloadEvaluation/" className={projectsCSS.project_link}><i className="ri-github-line"></i></a>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
