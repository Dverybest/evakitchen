import React,{useState,useEffect} from 'react';
import {Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {handleGetAllCategory} from '../../store/actions/CategoryAction';
const NavBar = (props) => {
    const { navColor } = props;
    const [categories, setCategories] = useState([...props.categories]);
   
    useEffect(()=>{
        if(!categories.length){
            props.handleGetAllCategory()
            .then(result=>{
                setCategories(result.data)
            })
        }
    })
    const openNav=()=> {
        document.getElementById("mySidenav").style.width = "250px";
    }

    const closeNav=() =>{
        document.getElementById("mySidenav").style.width = "0";
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
                                {
                                   categories.map((cat,index)=>{
                                       return(
                                           <Link key={`categories/${index}`} to={`/categories/${cat.name}`}>{cat.name}</Link>
                                       )
                                   })
                                }
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
                        {
                            categories.map((cat, index) => {
                                return (
                                    <Link key={`categories/${index}`} to={`/categories/${cat.name}`}>{cat.name}</Link>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.categories,
    }
}

export default connect(mapStateToProps, {handleGetAllCategory})(withRouter(NavBar));