import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "../client";
import "../assets/ViewCreator.css"; // Ensure this CSS file contains the necessary styles

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDelete = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", id);
    if (!error) {
      navigate("/");
    } else {
      console.error("Error deleting creator:", error);
    }
  };

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
          .from("creators")
          .select("*")
          .eq("id", id)
          .single();

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
      <>
        <header className="show-creators-header">
          <h1>Content Creator</h1>
          <div>
            <Link to="/" className="add-creators-link">
              View All Creators
            </Link>
            <Link to="/add" className="add-creators-link">
              Add Creator
            </Link>
          </div>
        </header>

        <div className="creator-card">
          <div className="creator-image">
            {creator.imageURL && (
                <img src={creator.imageURL} alt={creator.name} className="image" />
            )}
          </div>

          <div className="creator-details">
            <h1>{creator.name}</h1>
            <p>{creator.description}</p>

            <div className="creator-links">
              {creator.social1 && (
                  <a
                      href={creator.social1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                  >
                    <i className="fab fa-youtube"></i> YouTube
                  </a>
              )}
              {creator.social2 && (
                  <a
                      href={creator.social2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                  >
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
              )}
              {creator.social3 && (
                  <a
                      href={creator.social3}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
              )}
            </div>

            <div className="creator-actions">
              <button
                  className="edit-btn"
                  onClick={() => navigate(`/edit/${id}`)}
              >
                Edit
              </button>
              <button className="delete-btn" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
  );
}

export default ViewCreator;
