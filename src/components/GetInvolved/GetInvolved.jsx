import React from 'react';
import { Link } from 'react-router-dom';
import './GetInvolved.css';
import PlaceholderImage from '../PlaceholderImage';

const GetInvolved = () => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.style.display = 'flex';
    }
  };

  return (
    <div className="get-involved-page page-transition">
      {/* Hero Section with Modern Design */}
      <div className="hero-section">
        <div className="container">
          <h1 className="fade-in-up">Get Involved</h1>
          <p className="fade-in-up">Join our community and help build a more inclusive tech industry</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Involvement Options */}
        <section id="options" className="involvement-options">
          <h2 className="section-title fade-in-up">How You Can Contribute</h2>
          
          <div className="options-grid">
            <div className="option-card scale-in">
              <div className="option-image">
                <img 
                  src="https://i.ibb.co/cK0vMKdC/googletour.jpg" 
                  alt="Become a Member" 
                  onError={handleImageError}
                />
                <PlaceholderImage 
                  alt="Become a Member" 
                  style={{ display: 'none' }}
                />
                <div className="option-badge">
                  <i className="fas fa-user-plus"></i>
                </div>
              </div>
              <div className="option-content">
                <h3>Become a Member</h3>
                <p>Join our organization and participate in events, workshops, and networking opportunities that promote diversity in technology.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf45xdrEz2OoV2dgh5fzugyjtXtxgJUp_680R2vruriXklRLA/viewform?usp=header" className="modern-btn" target="_blank" rel="noopener noreferrer">
                  <span>Join Now</span>
                </a>
              </div>
            </div>

            <div className="option-card scale-in">
              <div className="option-image">
                <img 
                  src="https://i.ibb.co/ksVFvx6s/IMG-8583.jpg" 
                  alt="Volunteer" 
                  onError={handleImageError}
                />
                <PlaceholderImage 
                  alt="Volunteer" 
                  style={{ display: 'none' }}
                />
                <div className="option-badge">
                  <i className="fas fa-hands-helping"></i>
                </div>
              </div>
              <div className="option-content">
                <h3>Volunteer</h3>
                <p>Contribute your time and skills to help organize events, mentor students, or assist with technical workshops.</p>
                <Link to="/volunteer-opportunities" className="modern-btn">
                  <span>Volunteer</span>
                </Link>
              </div>
            </div>

            <div className="option-card scale-in">
              <div className="option-image">
                <img 
                  src="https://media.istockphoto.com/id/938516266/photo/welcome-lets-get-started.jpg?s=612x612&w=0&k=20&c=PRh1j51Jz1BTVxxzk_5NyAjp8lzuaXnOUkdgd2BCO-Y=" 
                  alt="Partner With Us" 
                  onError={handleImageError}
                />
                <PlaceholderImage 
                  alt="Partner With Us" 
                  style={{ display: 'none' }}
                />
                <div className="option-badge">
                  <i className="fas fa-handshake"></i>
                </div>
              </div>
              <div className="option-content">
                <h3>Partner With Us</h3>
                <p>We're always looking for companies and organizations that want to support diversity in technology through sponsorships and partnerships.</p>
                <a href="mailto:blackintech@uci.edu" className="modern-btn">
                  <span>Become a Partner</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Opportunities with Modern Design */}
        <section className="upcoming-opportunities">
          <h2 className="section-title fade-in-up">Upcoming Opportunities</h2>
          <div className="opportunities-list">
            <div className="opportunity fade-in-left">
              <div className="opportunity-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Mentorship Program</h3>
              <p className="opportunity-timing">Applications opening next quarter</p>
              <p>Connect with industry professionals who can guide your career development in tech.</p>
            </div>
            <div className="opportunity fade-in-right">
              <div className="opportunity-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h3>Leadership Positions</h3>
              <p className="opportunity-timing">Apply to join our board team</p>
              <p>We're looking for passionate individuals to help lead our organization into the future.</p>
            </div>
          </div>
        </section>

        {/* Contact Form or CTA */}
        <section className="contact-cta">
          <div className="cta-container fade-in-up">
            <h2>Ready to make an impact?</h2>
            <p>Reach out to us with any questions about getting involved.</p>
            <a href="mailto:contact@blackintechatuci.com" className="cta-button">
              <i className="far fa-envelope"></i> Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved; 