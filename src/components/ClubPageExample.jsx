import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ClubPageExample.css";
import PlaceholderImage from "./PlaceholderImage";
import LinkedInImage from "../../public/images/icons/linkedin.svg";

const ClubPageExample = () => {
  const [boardMembers, setBoardMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/board-members/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch board members");
        return res.json();
      })
      .then((data) => {
        setBoardMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="about-page page-transition">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="fade-in-up">About Us</h1>
          <p className="fade-in-up">
            Learn about our mission, values, and the team behind Black in Tech
            at UCI
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-content">
            <div className="info-text fade-in-left">
              <h2>Who We Are</h2>
              <p>
                Black in Tech at UCI is a student-led organization dedicated to
                fostering a supportive community for Black students interested
                in technology fields. Founded in 2024, we provide resources,
                networking opportunities, and skill-building workshops to help
                our members thrive in their academic and professional journeys.
              </p>
              <p>
                Our community is inclusive and welcoming to students from all
                backgrounds who are interested in technology and are passionate
                about diversity and inclusion in the tech industry.
              </p>
            </div>
            <div className="info-image fade-in-right">
              <img
                src="/images/Black in Tech.jpg"
                alt="Black in Tech at UCI Board Members"
                onError={(e) =>
                  PlaceholderImage.handleImageError(
                    e,
                    "Black in Tech at UCI Board Members",
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2 className="fade-in-up">Our Mission</h2>
          <div className="mission-cards">
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education</h3>
              <p>
                Provide educational resources and workshops to develop technical
                skills and knowledge.
              </p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>
                Foster a supportive community for Black students in technology
                fields.
              </p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Opportunities</h3>
              <p>
                Connect members with career and internship opportunities in the
                tech industry.
              </p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Mentorship</h3>
              <p>
                Facilitate mentorship between industry professionals and
                students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners and Sponsors Section */}
      <section className="partners-section">
        <div className="container">
          <div className="info-content">
            <div className="info-text fade-in-left">
              <h2>Partners and Sponsors</h2>
              <p>
                Learn about our valued partners and sponsors who support our
                mission of fostering diversity and inclusion in technology.
              </p>
              <div className="cta-buttons">
                <Link to="/partners" className="cta-button">
                  View Partners and Sponsors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="board-section">
        <div className="container">
          <h2 className="fade-in-up">Meet Our Board</h2>
          
            {loading && <p className="board-loading">Loading...</p>}
            {error && <p className="board-error">Error: {error}</p>}
            {!loading && !error && (
              <div className="board-members">
                {boardMembers.map((member) => (
                  <div
                    className="board-member scale-in"
                    key={member.display_order}
                  >
                    <div className="member-image">
                      <img
                        src={member.photo_url}
                        alt={member.name}
                        onError={(e) =>
                          PlaceholderImage.handleImageError(e, member.name)
                        }
                      />
                    </div>
                    <h3>{member.name}</h3>
                    <p className="position">{member.position}</p>
                    <p className="bio">{member.blurb}</p>

                    {member.linkedin_url && (
                      <a
                        href={member.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-link"
                      >
                        <img
                          src={LinkedInImage}
                          alt={`${member.name} LinkedIn`}
                          className="linkedin-icon"
                        />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="board-actions fade-in-up">
            <Link to="/about/past-board" className="cta-button">
              View Past Board Members
            </Link>
          </div>

      </section>
    </div>
  );
};

export default ClubPageExample;
