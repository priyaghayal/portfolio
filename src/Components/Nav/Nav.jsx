import React from "react";
import { useRef } from "react";


import navCSS from './../Nav/Nav.module.css';

function Nav (){
 
    const menu = useRef();
    const nav = useRef();

    const menuHandler = () =>{
        menu.current.classList.toggle(navCSS.showNav);
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100){
            nav.current.classList.add(navCSS.navColor);
        }
        else{
            nav.current.classList.remove(navCSS.navColor);
        }
    })

    return (

        <div className={navCSS.nav_wrapper} ref={nav}>
            <div className={navCSS.logo}>
                <a href="#">Priya</a>

            </div>
            <ul ref={menu}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
              
        </div>
    )
}

export default Nav 