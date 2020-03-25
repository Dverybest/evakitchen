import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/NavBar';
import cook from '../assets/cook.png';
import soup from '../assets/img3.jpg';
import rice from '../assets/img1.jpg';
import ora from '../assets/img7.jpg';
import CustomView from '../pages/components/CustomView';
import {Article, ListItem} from './components/Articles'
import Footer from './components/Footer';
import { Link, withRouter } from 'react-router-dom';


const HomePage = (props) => {

    const [navColor, setNavColor] = useState('#000000');
    const whatsNew = useRef();
    const [categories,setCategories] = useState([
        {name:'Egusi Soup',},
        {name:'Jellof Rice',},
        {name:'Tomato Sauce',},
        {name:'Yam Potage',},
        {name:'Fried Rice',},
    ])

    const [articles,setArticles] =useState([
        {source:soup,title:'Egusi Soup',discription:''},
        {source:"https://www.youtube.com/embed/tgbNymZ7vqY",title:'White Egusi Soup',discription:''},
        {source:"https://www.youtube.com/embed/tgbNymZ7vqY",title:'Bitter leaf Egusi Soup',discription:''},
    ])
   
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "#ff000000" : "#000000";
            setNavColor(backgroundcolor);
        });
    })
    const handleClick = (e) => {
        e.preventDefault();
        whatsNew.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className="Home container-fluid px-0">
            <div className="darken" >

                <div className="jumbotron text-center">
                    <img src={cook} />
                    <h1>Discover the best of African dishes</h1>
                    <p>View our delicious meal recipes</p>
                </div>
                <Navbar navColor={navColor} />


                <div className="whatsNewDiv">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                {/* <h2>Eva_kitchen</h2>
                                <h5>Intro:</h5>
                                <div>
                                    <iframe width="100%" height="200px" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                </div> */}
                                <div>
                                    <h4 className="mt-2 bg-info text-light px-1 py-2">Recipe categories</h4>
                                    <p>Our amazing recipes .</p>
                                    <ul className="nav nav-pills flex-column">
                                       {
                                           categories.map(category=>{
                                                return(
                                                    <ListItem name={category.name} link={`/${category.name}`} active={props.location.pathname==`/${category.name}`}/>
                                                )
                                           })
                                       }
                                    </ul>
                                    <hr className="d-sm-none" />
                                </div>
                            </div>
                            <div className="col-sm-9">

                                <div className="container">
                                   {
                                       articles.map(art=>{
                                           return(
                                                <Article source={art.source} title={art.title}/>
                                           )
                                       })
                                   }
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="row mx-0 py-3 px-0 d-flex justify-content-center align-items-center">
                                <div className="col-4 line"></div>
                                <div className="col-4"><h3>What's New</h3></div>
                                <div className="col-4 line"></div>
                            </div>
                            <div className="row mx-0 px-0">
                                <div className="col-md-6 col-lg-4 px-2">
                                    <CustomView image={soup} title={'Egusi Recipe'}
                                        description={"Can you imagine preparing Egusi Soup with only 5 ingredients? Absolutely delicious!"}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-4 px-2">
                                    <CustomView image={rice} title={'Jellof Rice Recipe'}
                                        description={"Nigerian Rice accessories are all the side dishes that go well with Nigerian Rice dishes: Moi Moi, Fried Plantains etc"}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-4 px-2">
                                    <CustomView image={ora} title={'Ora Recipe'}
                                        description={'This achi thickener is an easy, quick and very convenient cocoyam alternative in Oha Soup etc'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
