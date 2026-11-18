import React from 'react';
import { Link } from 'react-router-dom';
import PlaceholderImage from '../PlaceholderImage';
import './Home.css';

function Home() {
  // Function to handle image errors
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextElementSibling.style.display = 'flex';
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <img 
              src="https://i.ibb.co/wZPR8GRx/httpswww-canva-combrandjointoken-dge277zo03c-CBgf-IQ-7-ZPA-referrer-team-invite-5.png" 
              alt="BIT Logo" 
              className="logo" 
              onError={handleImageError}
            />
            <PlaceholderImage 
              alt="BIT Logo" 
              className="logo-placeholder" 
              style={{ display: 'none' }}
            />
          </div>
          <h1>Black in Tech at UCI</h1>
          <p>
            Building a community where minorities in tech collaborate, innovate, and excel.
          </p>
          <Link to="/get-involved" className="btn">
            Get Involved
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="content">
        {/* FIRST CONTENT ITEM */}
        <div className="content-item">
          <div className="image-container">
            <img 
              src="https://i.ibb.co/CXjCJvd/IMG-1731-Original.jpg" 
              alt="Learn More" 
              onError={handleImageError}
            />
            <PlaceholderImage 
              alt="Learn More" 
              style={{ display: 'none' }}
            />
          </div>
          <div className="content-text">
            <h2>
              Learn more about 
              <span className="highlight"> Software Development</span>, 
              <span className="highlight"> Tech Talks</span>, and much more.
            </h2>
            <p>
              Hosted weekly during the academic quarter, join us for 
              <span className="highlight"> engaging workshops </span> 
              to level up your skills, network with others, and grow as a 
              <span className="highlight"> tech innovator</span>.
            </p>
            <Link to="/events" className="text-button">
              Explore our events
            </Link>
          </div>
        </div>
        
        {/* SECOND CONTENT ITEM */}
        <div className="content-item reverse">
          <div className="content-text">
            <h2>
              Listen to our 
              <span className="highlight"> professional software engineers </span> 
              working at top companies.
            </h2>
            <p>
              Get exclusive insights into their work, gain 
              <span className="highlight"> mentorship</span>, and explore 
              <span className="highlight"> industry best practices </span> 
              at our interactive speaker events.
            </p>
            <Link to="/events" className="text-button">
              Join our next tech talk
            </Link>
          </div>
          <div className="image-container">
            <img 
              src="https://i.ibb.co/23PG6VCj/IMG-2383.jpg" 
              alt="Professional Engineers" 
              onError={handleImageError}
            />
            <PlaceholderImage 
              alt="Professional Engineers" 
              style={{ display: 'none' }}
            />
          </div>
        </div>
        
        {/* THIRD CONTENT ITEM */}
        <div className="content-item">
          <div className="image-container">
            <img 
              src="https://i.ibb.co/bM30Rp3X/booth.jpg" 
              alt="Get Involved" 
              onError={handleImageError}
            />
            <PlaceholderImage 
              alt="Get Involved" 
              style={{ display: 'none' }}
            />
          </div>
          <div className="content-text">
            <h2>
              Get involved with our <span className="highlight">Tech Talk</span> events, 
              <span className="highlight"> internship opportunities</span>, and conventions.
            </h2>
            <p>
              Take advantage of 
              <span className="highlight"> exclusive opportunities </span> 
              to grow your career and build meaningful connections within the tech industry.
            </p>
            <Link to="/resources" className="text-button">
              Access our resources
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <div className="cta-design-icon">
            <i className="fas fa-users"></i>
          </div>
          <h1>Who doesn't love opportunity? <br/> Let's keep in touch.</h1>
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
          <p>We're focused on building a supportive community that fosters growth, innovation, and connection for aspiring professionals.</p>
          <Link to="/about" className="about-button">
            Learn more about us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 