import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";
import "../assets/ShowCreators.css"; // Import the CSS file

function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase.from("creators").select("*");
        if (error) {
          console.error("Error fetching creators:", error);
        } else {
          setCreators(data);
        }
      } catch (error) {
        console.error("Unexpected error fetching creators:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCreators();
  }, []);

  return (
      <div className="show-creators-container">
        <header className="show-creators-header">
          <h1>Content Creators</h1>
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

        <main className="show-creators-main">
          <section className="show-creators-section">
            <div className="creators-grid">
              {loading ? (
                  <p>Loading creators...</p>
              ) : creators.length > 0 ? (
                  creators.map((creator) => (
                      <CreatorCard
                          key={creator.id}
                          creator={creator}
                          className="creator-card"
                      />
                  ))
              ) : (
                  <p>No creators found.</p>
              )}
            </div>
          </section>
        </main>
      </div>
  );
}

export default ShowCreators;
