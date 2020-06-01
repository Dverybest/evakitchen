import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './adminNavBar.css';
const NavBar = ({ navColor,callback }) => {

    const [openNav, setOpenNav] = useState(false);
    const handleNavClick = (e,name)=>{
        e.preventDefault();
        callback(e,name);
        setOpenNav(!openNav)
    }
    return (
        <div>
            <nav className="adminNav sticky" style={{ background: '#000' }}>
                <div>
                    <Link to='/adminDashboard'>EVA-KITCHEN</Link>
                </div>

                <div id="nav-links">
                    <div className="dropdown">
                        <button className="dropbtn">Recipe <i class="fa fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <a href="#" onClick={(e) => handleNavClick(e, 'view-recipe')}>View Recipe</a>
                            <a href="#" onClick={(e) => handleNavClick(e, 'add-recipe')}>Add Recipe</a>  
                            
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Categories <i class="fa fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <a href="#" onClick={(e) => handleNavClick(e, 'view-category')}>View Category</a>
                            <a href="#" onClick={(e) => handleNavClick(e, 'add-category')}>Add Category</a>

                        </div>
                    </div>
                    <Link to='/signout' className="mx-5">Logout</Link>
                </div>
                <div className="mobile-nav-links">
                    <div className="pr-4">
                        <span className="fa fa-bars" style={{ fontSize: 25 }} onClick={() => { setOpenNav(!openNav) }}
                        ></span>
                    </div>
                </div>
            </nav>
            <div className="mobile-nav-links">
                <div id="navSideBar" style={{width: openNav?"250px":'0px'}}>
                    <div className="dropdown">
                        <button className="dropbtn">Recipe <i class="fa fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <a href="#" onClick={(e)=>handleNavClick(e,'view-recipe')}>View Recipe</a>
                            <hr/>
                            <a href="#" onClick={(e) => handleNavClick(e, 'add-recipe')}>Add Recipe</a>   
                        </div>
                        <hr />
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Categories <i class="fa fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <a href="#" onClick={(e) => handleNavClick(e, 'view-category')}>View Category</a>
                            <hr />
                            <a href="#" onClick={(e) => handleNavClick(e, 'add-category')}>Add Category</a>
                        </div>
                        <hr />
                    </div>
                    <div id="logout" className="dropdown ">
                        <Link to='/signout' >Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(NavBar);