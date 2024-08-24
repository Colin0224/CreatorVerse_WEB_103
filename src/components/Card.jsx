import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, url, description, imageURL }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            {imageURL && (
                <img
                    src={imageURL}
                    alt={`${name}'s image`}
                    className="card-img"
                    style={{ width: "100%", borderRadius: "8px" }}
                />
            )}
            <div className="card-content">
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">
                    Visit Channel
                </a>
            </div>
        </div>
    );
};

export default Card;
