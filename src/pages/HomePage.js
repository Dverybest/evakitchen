import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/NavBar'
import cook from '../assets/cook.png'
import soup from '../assets/img3.jpg'
import rice from '../assets/img1.jpg'
import ora from '../assets/img7.jpg'
import CustomView from '../pages/components/CustomView'
import Footer from './components/Footer'
const HomePage = () => {
    const [navColor, setNavColor] = useState('#ff000000')
    const whatsNew = useRef();
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
        <div className="Home">
            <header>
                <div className="transparentDiv d-flex flex-column">
                    <Navbar navColor={navColor} />
                    <div className="row m-0 p-0 align-content-center  flex-grow-1">
                        <div className="col-sm-12 col-md-12 d-flex align-items-center justify-content-center">
                            <img src={cook} />
                        </div>
                        <div className="text col-sm-12  col-md-12 d-flex flex-column justify-content-center align-items-center">
                            <h1>DISCOVER THE BEST OF AFRICAN DISHES</h1>
                            <p>VIEW OUR DELICIOUS MEAL RECIPES</p>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </header>
            <section className="whatsNewDiv" ref={whatsNew}>
                <div className="container" id="new">
                    <div className="row mx-0 py-5 px-0 d-flex justify-content-center align-items-center">
                        <div className="col-4 line"></div>
                        <div className="col-4"><h2>What's New</h2></div>
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
                    <div className="row mx-0 px-0 my-3">
                        <div className='col-sm-12 card px-0' >
                            <iframe width="100%" height="402"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                            <div className="card-body">
                                <h4 className="card-title">{'Intoduction'}</h4>
                                <p className="card-text">{`Most Nigerian soups are low carb because they are mostly prepared with vegetables, meat and fish.
                                                            The following Nigerian soups are NOT low carb because they contain starchy ingredients/thickeners (in brackets): Bitterleaf Soup, Ora Soup and Rivers Native Soup (cocoyam), Nsala Soup (yam), Owho Soup (garri and/or starch), Egusi Soup (melon seeds), Groundnut Soup (peanuts/groundnuts), Gbegiri Soup (black eyed or brown beans).
                                                            All other soups not mentioned above are low carb Nigerian Soups. Watch out, some may be high in fat. The trick is to read the ingredients for each soup and take out what you cannot eat for health reasons.`}</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 px-0 my-3">
                        <div className='col-sm-12 card px-0' >
                            <iframe width="100%" height="402"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                            <div className="card-body">
                                <h4 className="card-title">{'Intoduction'}</h4>
                                <p className="card-text">{`Most Nigerian soups are low carb because they are mostly prepared with vegetables, meat and fish.
                                                            The following Nigerian soups are NOT low carb because they contain starchy ingredients/thickeners (in brackets): Bitterleaf Soup, Ora Soup and Rivers Native Soup (cocoyam), Nsala Soup (yam), Owho Soup (garri and/or starch), Egusi Soup (melon seeds), Groundnut Soup (peanuts/groundnuts), Gbegiri Soup (black eyed or brown beans).
                                                            All other soups not mentioned above are low carb Nigerian Soups. Watch out, some may be high in fat. The trick is to read the ingredients for each soup and take out what you cannot eat for health reasons.`}</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    );
}

export default HomePage;
