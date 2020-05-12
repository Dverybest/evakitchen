import React from 'react';
import { Link } from 'react-router-dom';
export const Article = ({ link, title, source,id}) => {
    return (
        <div className="row card post mb-3" key={id}>
            {
                source.includes('.jpg') || source.includes('.png')|| source.includes('.jpeg') ? (
                    <img src={source} alt=""/>
                ) : (
                        <iframe width="100%" height="300px"
                            src={source}>
                        </iframe>
                    )
            }

            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{`Most Nigerian soups are low carb because they are mostly prepared with vegetables, meat and fish.
                                                The following Nigerian soups are NOT low carb because they contain starchy ingredients/thickeners (in brackets).`}</p>
                <div className="d-flex flex-row-reverse ">
                    <Link to={link} className="btn btn-primary">Read More</Link>
                </div>
            </div>


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


