import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

export const Article = (props) => {
    // console.log("props",props)
    let { link, title, mediaUrl, id } = props;
    const handleReadMoreClick = (e)=>{
        props.history.push({
            pathname: '/read-more/' + link,
            state: { link, title, mediaUrl, id}
        }); 
    }
    return (
        <div className="article">
            <div className="row px-0 mx-0 post" key={id}>
                <div className="col-md-5">
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
                <div className="post_body col-md-7">
                    <p className="post_title">{title}</p>
                    <p className="post_text">{`Most Nigerian soups are low carb because they are mostly prepared with vegetables, meat and fish.
                                                The following Nigerian soups are NOT low carb because they contain starchy ingredients/thickeners (in brackets).`}</p>
                    <div>
                        <button onClick={handleReadMoreClick} className="btn post_btn">Read More</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export const ListItem = ({ active, link, name,id }) => {

    return (
        <li className="nav-item" key={id}>
            <Link className={active ? "active nav-link" : "nav-link"} to={link}>{name}</Link>
        </li>
    )
}


