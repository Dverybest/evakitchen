import React from 'react';
import {Link, withRouter } from 'react-router-dom';

const NavBar = ({navColor}) => {

    const openNav=()=> {

        document.getElementById("mySidenav").style.width = "250px";
    }

    const closeNav=() =>{
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center sticky" id="nav-bar" style={{ background: navColor||'transparent' }}>
            <div className="logo">
                <Link className="nav-link" to='/'>EVA-KITCHEN</Link>
            </div>
                <ul>
                    <li><Link to="/"
                        className="nav-link">HOME</Link></li>
                    <li><Link to="/about-us"
                        className="nav-link">ABOUT-US</Link></li>
                    <li><Link to="/contact-us"
                        className="nav-link">CONTACT-US</Link></li>
                </ul>
                <span className="icon mr-3"
                    onClick={openNav}>&#9776;</span>
            </nav>
            <div id="mySidenav"
                className="sidenav">
                <span
                    className="closebtn"
                    onClick={closeNav}>&times;</span>
                <Link to="/"
                    className="nav-link">HOME</Link>
                <Link to="/about-us"
                    className="nav-link">ABOUT-US</Link>
                <Link to="/contact-us"
                    className="nav-link">CONTACT-US</Link>
            </div>
        </div>
    )
}
export default withRouter(NavBar);