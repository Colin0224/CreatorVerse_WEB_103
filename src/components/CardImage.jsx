import React from "react";

const CardImage = ({ creator }) => {
    return (
        <div
            className="card shadow-sm"
            style={{
                backgroundImage: `url(${creator.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "black",
                borderRadius: "8px",
                overflow: "hidden",
            }}
        >
            <div className="card-body" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "20px" }}>
                <h5 className="card-title" style={{ color: "black !important" }}>{creator.name}</h5>
                <p className="card-text" style={{ color: "black !important" }}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <a href="#!" className="btn btn-outline-dark">
                    Button
                </a>
            </div>
        </div>
    );
};

export default CardImage;
