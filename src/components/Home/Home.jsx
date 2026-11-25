import OurMission from "../OurMission/OurMission";
import React from "react";
import { Link } from "react-router-dom";
import PlaceholderImage from "../PlaceholderImage";
import Hero from "./Hero.jsx";
import OfferSection from '../Home/OfferSection';
import "./Home.css";

function Home() {
  // Function to handle image errors
  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "flex";
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />
      {/* Offer Section */}
      <OfferSection />

      {/* Our Mission Section */}
      <OurMission />

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <div className="cta-design-icon">
            <i className="fas fa-users"></i>
          </div>
          <h1>
            Who doesn't love opportunity? <br /> Let's keep in touch.
          </h1>
          <Link to="/get-involved" className="cta-button">
            Join Us
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-overlay"></div>
        <div className="about-content">
          <h2>Our Focus</h2>
          <p>
            We're focused on building a supportive community that fosters
            growth, innovation, and connection for aspiring professionals.
          </p>
          <Link to="/about" className="about-button">
            Learn more about us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
