import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';
import PlaceholderImage from '../PlaceholderImage';
import EventRow from './EventRow';

// Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "BiT TECH TALK: FROM IDEAS TO IMPACT",
      date: "Monday, Oct 20th",
      time: "6:30-7:30 PM",
      location: "DBH 1433",
      description: "Hear firsthand from our guest speakers DeQuan Guillebeau (Founder of DataDrift) and Darcel Mugisha (Co-Founder of GenInnovation) about how they became founders of their own tech companies!",
      image: "/images/events/FALL25 WEEK 4 EVENT.jpg",
      url: "/events/tech-talk-ideas-impact"
    }
  ];

const AllUpcomingEvents = () => {
  return (
    <div className="events-page page-transition">
      {/* Hero Section */}
      <div className="events-hero">
        <h1 className="fade-in-up">Upcoming Events</h1>
        <p className="fade-in-up">Join us for exciting tech talks, workshops, and networking opportunities.</p>
        <Link to="/events" className="cta-button fade-in-up">Back to Events</Link>
      </div>
 
      {/* Events Content */}
      <div className="events-content">
        {upcomingEvents.length > 0 ? (
          <div className="events-list">
            {upcomingEvents.map((event, index) => (
              <EventRow key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <div className="coming-soon-container fade-in-up">
            <div className="coming-soon-message scale-in">
              <div className="coming-soon-icon">
                <i className="far fa-calendar-alt"></i>
              </div>
              <h2>Coming Soon!</h2>
              <p>We're planning an exciting lineup of events for you. Check back later or follow us on social media to be the first to know when new events are announced.</p>
              <div className="coming-soon-actions">
                <Link to="/get-involved" className="cta-button">Get Involved</Link>
                <a href="https://www.instagram.com/bit.uci/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="social-button">
                  <i className="fab fa-instagram"></i> Follow Us on Instagram
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
 
export default AllUpcomingEvents;
