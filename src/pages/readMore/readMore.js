import React from 'react';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import './readMore.css'
const ReadMore = (props) => {
    let { link, title, mediaUrl, id } = props.location.state;
    // let mediaUrl = "https://res.cloudinary.com/dwdfhahjx/image/upload/v1590979749/evakitchen/2020-06-01T02:49:08.916Z.jpg";
    // let title = "Egusi Recipe";
    return (
        <div className="read_more">
            <Navbar navColor={'#000'} />
            <div className="container">

                <div className="image_holder">

                    {
                        mediaUrl.includes('.jpg') || mediaUrl.includes('.png') || mediaUrl.includes('.jpeg') ? (
                            <img className="post_media" src={mediaUrl} alt="" />
                        ) : (
                                <video className="post_media" controls >
                                    <source src={mediaUrl} type="video/mp4" />

                                    Your browser does not support the video tag.
                        </video>
                            )
                    }
                </div>

                <div className="post_body">
                    <p className="post_title">{title}</p>
                    <p className="post_text">{`Most Nigerian soups are low carb because they are mostly prepared with vegetables, meat and fish.
                                                The following Nigerian soups are NOT low carb because they contain starchy ingredients/thickeners (in brackets).`}</p>
                    {/* <div>
                            <button className="btn post_btn">Read More</button>
                    </div> */}
                </div>

            </div>
            <Footer className="align-self-flex-end" />
        </div>
    )
}

export default ReadMore;
