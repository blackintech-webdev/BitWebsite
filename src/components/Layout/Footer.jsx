import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section fade-in-left">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
              <li><Link to="/volunteer-opportunities">Volunteer</Link></li>
            </ul>
          </div>
          
          <div className="footer-section fade-in-up">
            <h4>Events</h4>
            <ul>
              <li><Link to="/events">All Events</Link></li>
              <li><Link to="/events/upcoming">Upcoming Events</Link></li>
              <li><Link to="/events/past">Past Events</Link></li>
              <li><Link to="/get-involved">Host an Event</Link></li>
            </ul>
          </div>
          
          <div className="footer-section fade-in-right">
            <h4>Connect</h4>
            <ul className="social-links">
              <li><a href="https://www.instagram.com/bit.uci/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="https://discord.gg/NAUB2XXSb3" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i> Discord</a></li>
              <li><a href="mailto:blackintech@uci.edu"><i className="far fa-envelope"></i> Email Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom fade-in-up">
          <p>&copy; {new Date().getFullYear()} Black in Tech at UCI. All rights reserved.</p>
          <p>Developed by Alyas Thomas, Steven Gorlicki, and Jason Phan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 