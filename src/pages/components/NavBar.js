import React from 'react';
import {Link, withRouter } from 'react-router-dom';

const NavBar = ({navColor}) => {

    return (
        <nav className="navbar navbar-expand-sm navb fixed-top" style={{background:navColor}}>
            <div>
                <Link to='/' className="navbar-brand">EVA_KITCHEN</Link>
            </div>
            {/* <!-- Toggler/collapsibe Button --> */}
            <button  className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span  className="navbar-toggler-icon"></span>
            </button>
            
            <div  className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul  className="navbar-nav ">
                <li  className="nav-item">
                    <Link to='/' className="nav-link mx-3">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Best-Headlines/sports' className="nav-link mx-3">About</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Best-Headlines/technology'  className="nav-link mx-3">Recipes</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Contact' className="nav-link mx-3">Contact</Link>
                </li>
                {/* <li className="nav-item">
                    <Link to='/Best-Headlines/health'  className="nav-link">Health</Link>
                </li> */}
            </ul>
            </div>
        </nav>
    )
}
export default withRouter(NavBar);