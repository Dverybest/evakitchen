import React, { useState, useEffect } from 'react';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Me from '../assets/me.jpg'

const About = () => {
    const [navColor, setNavColor] = useState('#000000')

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "#000000" : "#000000";
            setNavColor(backgroundcolor);
        });
    })

    return (
        <div className="about ">
           <header>
           <div className="abouthead text-center py-5">
                <h1>More About Us</h1>
                <p>Eva-Kitchen</p>
            </div>
           </header>
            <Navbar navColor={navColor} />
            <div className="aboutBody">
            
            <div className="whatsNewDiv">
                <div className="container ">
                    <div className="container card py-5">
                    <div className="row ">
                    <div className="col-sm-4 px-2">
                        <div className=" d-flex justify-content-center align-content-center my-3">

                           
                            <img src={Me}  alt="food" />
                           
                        
                        </div>
                    </div>
                        <div className="col-sm-8 ">
                            <div className="d-flex flex-column  justify-content-center align-content-center mx-2 " style={{height:"100%"}}>
                            <h2>About Eva-Kitchen</h2>
                            <p> Redundant alt attribute. Screen-readers already announce `img` 
                                tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop</p>
                                <p> Redundant alt attribute. Screen-readers already announce `img` 
                                tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop
                                Redundant alt attribute. Screen-readers already announce `img` 
                                tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop</p>
                            
                                <p> Redundant alt attribute. Screen-readers already announce `img` 
                                tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop</p>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer className="align-self-flex-end" />
        </div>
    )
}

export default About;
