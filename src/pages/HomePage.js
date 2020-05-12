import React, { useEffect, useState, } from 'react';
import Navbar from './components/NavBar';
import cook from '../assets/cook.png';
import soup from '../assets/img3.jpg';
import rice from '../assets/img1.jpg';
import ora from '../assets/img7.jpg';
import CustomView from '../pages/components/CustomView';
import { Article, ListItem } from './components/Articles'
import Footer from './components/Footer';



const HomePage = (props) => {

    const [navColor, setNavColor] = useState('#000000');
    // const whatsNew = useRef();
    const [categories, setCategories] = useState([
        { name: 'Egusi Soup', },
        { name: 'Jellof Rice', },
        { name: 'Tomato Sauce', },
        { name: 'Yam Potage', },
        { name: 'Fried Rice', },
    ])

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
            <div className="jumbotron text-center d-flex flex-column align-items-center" >
                <img src={cook} id="cook-img" alt="" className="align-self-center" />
                <h1>Discover the best of African dishes</h1>
                <p>View our delicious meal recipes</p>
            </div>
                <div className="justify-self-baseline" style={{width:"100%"}} >
                   
                </div>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="container mt-3">
                                {
                                    articles.map((art,index) => {
                                        return (
                                            <Article source={art.source} title={art.title} id={index} link={'#'} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div>
                                <h4 className="mt-2 bg-info text-light px-1 py-2">Recipe categories</h4>
                                <p>Our amazing recipes .</p>
                                <ul className="nav nav-pills flex-column">
                                    {
                                        categories.map((category,index) => {
                                            return (
                                                <ListItem name={category.name} id={index} link={`/${category.name}`} active={props.location.pathname == `/${category.name}`} />
                                            )
                                        })
                                    }
                                </ul>
                                <hr className="d-sm-none" />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
          
        //                 <div>
        //                     <div className="row mx-0 py-3 px-0 d-flex justify-content-center align-items-center">
        //                         <div className="col-4 line"></div>
        //                         <div className="col-4"><h3>What's New</h3></div>
        //                         <div className="col-4 line"></div>
        //                     </div>
        //                     <div className="row mx-0 px-0">
        //                         <div className="col-md-6 col-lg-4 px-2">
        //                             <CustomView image={soup} title={'Egusi Recipe'}
        //                                 description={"Can you imagine preparing Egusi Soup with only 5 ingredients? Absolutely delicious!"}
        //                             />
        //                         </div>
        //                         <div className="col-md-6 col-lg-4 px-2">
        //                             <CustomView image={rice} title={'Jellof Rice Recipe'}
        //                                 description={"Nigerian Rice accessories are all the side dishes that go well with Nigerian Rice dishes: Moi Moi, Fried Plantains etc"}
        //                             />
        //                         </div>
        //                         <div className="col-md-6 col-lg-4 px-2">
        //                             <CustomView image={ora} title={'Ora Recipe'}
        //                                 description={'This achi thickener is an easy, quick and very convenient cocoyam alternative in Oha Soup etc'}
        //                             />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>


        //       
        //     </div>
        // </div>
    );
}

export default HomePage;
