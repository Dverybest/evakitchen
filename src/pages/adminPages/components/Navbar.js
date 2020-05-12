import React from 'react';
import {Link, withRouter } from 'react-router-dom';

const NavBar = ({navColor}) => {

    return (
        <nav className="navbar navbar-expand-sm navb sticky-top" style={{background:'#000'}}>
            <div>
                <Link to='/adminDashboard' className="navbar-brand">EVA-KITCHEN</Link>
            </div>
            {/* <!-- Toggler/collapsibe Button --> */}
            <button  className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span  className="navbar-toggler-icon"></span>
            </button>
            
            <div  className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul  className="navbar-nav ">
                <li className="nav-item">
                    <Link to='/adminDashboard' className="nav-link mx-3">Recipe</Link>
                </li>
                <li className="nav-item">
                    <Link to='/signout' className="nav-link mx-3">Logout</Link>
                </li>
               
            </ul>
            </div>
        </nav>
    )
}
export default withRouter(NavBar);