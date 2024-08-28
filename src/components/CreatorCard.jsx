import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPen } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../assets/ShowCreators.css"; // Ensure this file contains the necessary styles

function CreatorCard({ creator }) {
    const socialIcons = {
        youtube: faYoutube,
        twitter: faTwitter,
        instagram: faInstagram,
    };

    const renderSocialIcon = (url, platform) => (
        url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={socialIcons[platform]} />
            </a>
        )
    );

    return (
        <div className="creator-card" style={{ width: "300px", height: "350px" }}>
            <article
                className="card-content"
                style={{
                    backgroundImage: `url(${creator.imageURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "20px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    color: "#fff", // Assuming text should be white on an image background
                }}
            >
                <h3 className="creator-name">{creator.name}</h3>
                <div className="social-icons">
                    {renderSocialIcon(creator.social1, "youtube")}
                    {renderSocialIcon(creator.social2, "twitter")}
                    {renderSocialIcon(creator.social3, "instagram")}
                </div>
                <p className="description">{creator.description}</p>
                <div className="card-footer" style={{ display: "flex", justifyContent: "space-between" }}>
                    <Link to={`/creator/${encodeURIComponent(creator.name)}`} className="icon-link">
                        <FontAwesomeIcon icon={faCircleInfo} aria-hidden="true" />
                    </Link>
                    <Link to={`/edit/${encodeURIComponent(creator.name)}`} className="icon-link">
                        <FontAwesomeIcon icon={faPen} aria-hidden="true" />
                    </Link>
                </div>
            </article>
        </div>
    );
}

export default CreatorCard;
