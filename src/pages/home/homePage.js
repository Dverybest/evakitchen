import React, { useEffect, useState, } from 'react';
import Navbar from '../components/NavBar';
import cook from '../../assets/cook.png';
import './homePage.css';
import { Article } from '../components/articles/Articles';
import { handleGetAllRecipes } from '../../store/actions/RecipeAction'
import Footer from '../components/Footer';

const HomePage = (props) => {
    const [navColor, setNavColor] = useState('transparent');
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        handleGetAllRecipes().then(result => {
            console.log('result', result)
            setIsLoading(false);
            setArticles(result.data)
        }).catch(error => {
            setIsLoading(false);
        })

    }, [])
    useEffect(()=>{
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "#ff000000" : "#000000";
            setNavColor(backgroundcolor);
        });
        return () => {
            document.removeEventListener("scroll", () => {
                const backgroundcolor = window.scrollY < 100 ? "transparent" : "#000000";
                setNavColor(backgroundcolor);
            })
        }
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
                    {
                        isLoading ? (
                            <div className="d-flex justify-content-center align-items-center" style={{height:'30vh'}}>
                                <div className="spinner-border text-primary"></div>
                            </div>
                        ) : (
                            <div>
                                    <h2>Recent Recipes</h2>
                                    <p className="sub_heading">Our most recently added recipes</p>
                                    <div className="row px-0 mx-0">
                                        <div className="">

                                            <div>
                                                {
                                                    articles.map((art, index) => {
                                                        // console.log("art",art)
                                                        return (
                                                            <Article key={`article${index}`} mediaUrl={art.imageurl || art.videourl} 
                                                            title={art.title} id={index} link={art._id} history={props.history} />
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                    </div>

                                    <h2>Popular Recipes</h2>
                                    <p className="sub_heading">Our most viewed recipes</p>
                                    <div className="row px-0 mx-0">
                                        <div className="">

                                            <div>
                                                {
                                                    articles.map((art, index) => {
                                                        return (
                                                            <Article key={`article${index}`} mediaUrl={art.imageurl || art.videourl}
                                                                title={art.title} id={index} link={art._id} history={props.history} />
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                    </div>
                            </div>
                        )
                    }
                    
                </div>
            </main>
            <Footer />
        </div>

    );
}
export default HomePage;
