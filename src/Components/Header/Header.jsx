import React from "react";
import headerCSS from "./../Header/Header.module.css";




import headerimage1 from './../../assets/header-image-01.jpg';
import headerimage2 from './../../assets/header-image-02.jpg';
import headerimage3 from './../../assets/header-image-03.jpg';
import headerimage4 from './../../assets/header-image-04.jpg';



function Header () {
    return (
        <div className={`${headerCSS.header_wrapper} section`} id="home">
            
            <div className={headerCSS.social}>
            <a href="https://www.linkedin.com/in/priya-ghayal-5595b81a4/" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-line"></i>
            </a>
            <a href="https://github.com/priyaghayal" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-line"></i>
            </a>                
            <a href="https://drive.google.com/file/d/1TbW2n1J6tMUXlxO_3m-KRZd5w7JtDkyb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <i className="ri-file-line"></i>
            </a>

        
            </div>
            
            
                    <div className={headerCSS.Header_slide}>
                        <div className={headerCSS.header_content}>
                            <small>A Software Engineer from India</small>
                            <h2>Hi! I'm Priya Ghayal</h2>
                            <p>An avid person who is always curious about the working of technology around her.<br></br>
                            Technical skills:- Python, HTML, CSS, JavaScript, Git, GitHub, SQL.<br></br>
                            Possess good communication skills and flexible to work in any environment as required.</p>
                            <button>Download CV 
                            <a href="https://drive.google.com/file/d/1TbW2n1J6tMUXlxO_3m-KRZd5w7JtDkyb/view?usp=sharing" target="_blank">
                            <i className="ri-arrow-right-up-line"></i>
                            </a></button>
                        </div>
                        <div className={headerCSS.header_images}>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage1} alt="header-image" />
                            </div>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage2} alt="header-image" />
                            </div>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage3} alt="header-image" />
                            </div>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage4} alt="header-image" />
                            </div>
                        </div>
                    </div>
                
        </div>
    )
}

export default Header
