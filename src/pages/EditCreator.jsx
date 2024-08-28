import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "../client";

function EditCreator() {
  const { name } = useParams(); // Use name instead of id
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
    social1: "", // YouTube
    social2: "", // Twitter (X)
    social3: "", // Instagram
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
            .from("creators")
            .select("*")
            .eq("name", name) // Query by name instead of id
            .single(); // Expecting a single record

        if (error) {
          console.error("Error fetching creator:", error);
          return;
        }

        setCreator(data);
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [name]); // name is now the dependency

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
          .from("creators")
          .update(creator)
          .eq("name", name); // Update by name instead of id

      if (error) {
        console.error("Error updating creator:", error);
        return;
      }

      navigate(``); // Navigate using name
    } catch (error) {
      console.error("Unexpected error during update:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const { error } = await supabase
          .from("creators")
          .delete()
          .eq("name", name); // Delete by name instead of id

      if (error) {
        console.error("Error deleting creator:", error);
        return;
      }

      navigate("/");
    } catch (error) {
      console.error("Unexpected error during deletion:", error);
    }
  };

  if (loading) {
    return <p>Loading creator data...</p>;
  }

  return (
      <>
        <header className="show-creators-header">
          <h1>Edit Content Creator</h1>
          <nav>
            <ul>
              <li>
                <Link to="/" role="button" className="add-creators-link">
                  View All Creators
                </Link>
              </li>
              <li>
                <Link to="/add" role="button" className="add-creators-link">
                  Add Creators
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <form onSubmit={handleSubmit} className="edit-creator-form">
          <input
              type="text"
              name="name"
              value={creator.name}
              onChange={handleChange}
              placeholder="Name"
              required
          />
          <input
              type="url"
              name="url"
              value={creator.url}
              onChange={handleChange}
              placeholder="URL"
              required
          />
          <textarea
              name="description"
              value={creator.description}
              onChange={handleChange}
              placeholder="Description"
              required
          />
          <input
              type="url"
              name="imageURL"
              value={creator.imageURL}
              onChange={handleChange}
              placeholder="Image URL"
          />
          <input
              type="url"
              name="social1"
              value={creator.social1}
              onChange={handleChange}
              placeholder="YouTube"
              required
          />
          <input
              type="url"
              name="social2"
              value={creator.social2}
              onChange={handleChange}
              placeholder="X (Twitter)"
              required
          />
          <input
              type="url"
              name="social3"
              value={creator.social3}
              onChange={handleChange}
              placeholder="Instagram"
              required
          />
          <div className="form-buttons">
            <button type="submit" className="update-button">
              Update
            </button>
            <button
                onClick={handleDelete}
                type="button"
                className="delete-button"
            >
              Delete
            </button>
          </div>
        </form>
      </>
  );
}

export default EditCreator;
