import React from 'react';

const CustomView = ({image,title,description}) => {

    return (
        <div className="card my-3">
            <img className="card-img-top" src={image} alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
        </div>
    )
}
        
export default CustomView;