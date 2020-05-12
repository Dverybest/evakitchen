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
            <nav className="d-flex justify-content-between align-items-center sticky" id="nav-bar" style={{ background: navColor }}>
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
                <Link to="javascript:void(0)" className="icon mr-3"
                    onClick={openNav}>&#9776;</Link>
            </nav>
            <div id="mySidenav"
                className="sidenav">
                <Link to="javascript:void(0)"
                    className="closebtn"
                    onClick={closeNav}>&times;</Link>
                <Link to="/"
                    className="nav-link">HOME</Link>
                <Link to="/about-us"
                    className="nav-link">ABOUT-US</Link>
                <Link to="/contact-us"
                    className="nav-link">CONTACT-US</Link>
            </div>
        </div>
        // <nav classNameName="navbar navbar-expand-sm navb sticky-top" style={{background:navColor}}>
        //     <div>
        //         <Link to='/' classNameName="navbar-brand">EVA-KITCHEN</Link>
        //     </div>
        //     {/* <!-- Toggler/collapsibe Button --> */}
        //     <button  classNameName="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        //         <span  classNameName="navbar-toggler-icon"></span>
        //     </button>
            
        //     <div  classNameName="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        //     <ul  classNameName="navbar-nav ">
        //         <li  classNameName="nav-item">
        //             <Link to='/' classNameName="nav-link mx-3">Home</Link>
        //         </li>
        //         <li classNameName="nav-item">
        //             <Link to='/About' classNameName="nav-link mx-3">About</Link>
        //         </li>
        //         {/* <li classNameName="nav-item">
        //             <Link to='/Recipes'  classNameName="nav-link mx-3">Recipes</Link>
        //         </li> */}
        //         <li classNameName="nav-item">
        //             <Link to='/Contact' classNameName="nav-link mx-3">Contact</Link>
        //         </li>
        //         {/* <li classNameName="nav-item">
        //             <Link to='/Best-Headlines/health'  classNameName="nav-link">Health</Link>
        //         </li> */}
        //     </ul>
        //     </div>
        // </nav>
    )
}
export default withRouter(NavBar);