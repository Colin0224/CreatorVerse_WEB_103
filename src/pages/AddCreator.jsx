import React, { useState } from "react";
import { supabase } from "../client";
import { useNavigate, Link } from "react-router-dom";

function AddCreator() {
  const [creatorData, setCreatorData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
    social1: "", // Ensure this matches the exact column name in the database
    social2: "",
    social3: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
        .from("creators")
        .insert([creatorData]);

    if (error) {
      console.error("Error inserting data:", error);
      return;
    }

    navigate("/");
  };

  return (
      <>
        <header className="show-creators-header">
          <h1>Add Content Creator</h1>
          <nav>
            <ul>
              <li>
                <Link to="/" role="button" className="add-creators-link">
                  View All Creators
                </Link>
              </li>
              <li>
                <Link to="/add" role="button" className="add-creators-link">
                  Add Creator
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <form onSubmit={handleSubmit} className="add-creator-form">
          <input
              type="text"
              name="name"
              value={creatorData.name}
              onChange={handleChange}
              placeholder="Name"
              required
          />
          <input
              type="url"
              name="url"
              value={creatorData.url}
              onChange={handleChange}
              placeholder="URL"
              required
          />
          <textarea
              name="description"
              value={creatorData.description}
              onChange={handleChange}
              placeholder="Description"
              required
          ></textarea>
          <input
              type="url"
              name="imageURL"
              value={creatorData.imageURL}
              onChange={handleChange}
              placeholder="Image URL"
          />
          <input
              type="url"
              name="social1"
              value={creatorData.social1}
              onChange={handleChange}
              placeholder="YouTube"
              required
          />
          <input
              type="url"
              name="social2"
              value={creatorData.social2}
              onChange={handleChange}
              placeholder="X (Twitter)"
              required
          />
          <input
              type="url"
              name="social3"
              value={creatorData.social3}
              onChange={handleChange}
              placeholder="Instagram"
              required
          />
          <button type="submit" className="submit-button">
            Add Creator
          </button>
        </form>
      </>
  );
}

export default AddCreator;
