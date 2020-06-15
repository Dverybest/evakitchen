import React, { useEffect, useState, } from 'react';
import Navbar from '../components/NavBar';
import cook from '../../assets/cook.png';
import soup from '../../assets/img3.jpg';
import './homePage.css';
import { Article } from '../components/articles/Articles';
import Footer from '../components/Footer';
import Category from './components/Category';


const HomePage = (props) => {

    const [navColor, setNavColor] = useState('transparent');

    const [articles, setArticles] = useState([
        { source: soup, title: 'Egusi Soup', discription: '' },
        { source: "https://www.youtube.com/embed/tgbNymZ7vqY", title: 'White Egusi Soup', discription: '' },
        { source: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", title: 'Bitter leaf Egusi Soup', discription: '' },
    ])

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "#ff000000" : "#000000";
            setNavColor(backgroundcolor);
        });
    })

    return (
        <div className="Home container-fluid px-0">
            <Navbar navColor={navColor} />
            <div className="jumbotron text-center align-items-center" >
                <img src={cook} id="cook-img" alt="" className="align-self-center" />
                <h1>Discover the best of African dishes</h1>
                <p>View our delicious meal recipes</p>
            </div>
            <main>
                <div className="container mt-3">
                    <h2>Popular Recipes</h2>
                    <p className="sub_heading">Our most viewed recipes</p>
                    <div className="row px-0 mx-0">
                        <div className="">
                            <div>
                                {
                                    articles.map((art, index) => {
                                        return (
                                            <Article key={`article${index}`} source={art.source} title={art.title} id={index} link={'#'} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* <div className="col-sm-3">
                            <Category/>
                        </div> */}
                    </div>

                    <h2>Recent Recipes</h2>
                    <p className="sub_heading">Our most recently added recipes</p>
                    <div className="row px-0 mx-0">
                        <div className="">
                            <div>
                                {
                                    articles.map((art, index) => {
                                        return (
                                            <Article key={`article${index}`} source={art.source} title={art.title} id={index} link={'#'} />
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>

    );
}
export default HomePage;
