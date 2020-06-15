import React from 'react';
import {Link, withRouter } from 'react-router-dom';

const NavBar = ({navColor}) => {

    const openNav=()=> {

        document.getElementById("mySidenav").style.width = "250px";
    }

    const closeNav=() =>{
        document.getElementById("mySidenav").style.width = "0";
    }
    const handleNavClick =(e,name)=>{

    }
    return (
        <div>
            <nav className="" id="nav-bar" style={{ background: navColor||'transparent' }}>
            <div className="logo">
                <Link id="logo" className="nav-link" to='/'>EVA-KITCHEN</Link>
            </div>
                <ul>
                    <li><Link to="/"
                        className="nav-link">HOME</Link></li>
                    <li><Link to="/about-us"
                        className="nav-link">ABOUT-US</Link></li>
                    <li><Link to="/contact-us"
                        className="nav-link">CONTACT-US</Link></li>
                    <li>
                        <div className="dropdown">
                            <button className="dropbtn">CATEGORIES <i className="fa fa-caret-down"></i></button>
                            <div className="dropdown-content">
                                <a href="/" onClick={(e) => handleNavClick(e, 'view-category')}>View Category</a>
                                <a href="/" onClick={(e) => handleNavClick(e, 'add-category')}>Add Category</a>

                            </div>
                        </div>
                    </li>
                </ul>
                <span className="fa fa-bars icon mr-3" style={{ fontSize: 25 }} onClick={openNav}></span>
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
                <div className="dropdown">
                    <button className="dropbtn">CATEGORIES <i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                        <a href="/" onClick={(e) => handleNavClick(e, 'view-category')}>View Category</a>
                        <a href="/" onClick={(e) => handleNavClick(e, 'add-category')}>Add Category</a>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(NavBar);