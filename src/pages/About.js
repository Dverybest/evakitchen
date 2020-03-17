import React,{useState,useEffect} from 'react';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
const About = () => {
    const [navColor, setNavColor] = useState('#000000')

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "#000000" : "#000000";
            setNavColor(backgroundcolor);
        });
    })
    return (
        <div className="Contact d-flex flex-column">
            
            <Navbar navColor={navColor} />
        </div>
    )
}

export default About;
