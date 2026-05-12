import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';
import PlaceholderImage from '../PlaceholderImage';

const AllUpcomingEvents = () => {
  // Upcoming events data
  const upcomingEvents = [
    {
      id: 52,
      title: "BiT Networking Dinner with AI Leadership!",
      date: "May 14, 2026",
      location: "ISEB 1300",
      description:
        "We are thrilled to invite you to our Networking Dinner with AI Leaders, an evening of conversation, connection, and a first-hand look at what’s happening in AI right now.",
      image: "/images/events/event52.jpg"
    },
  ];

  const EventCard = ({ event }) => {
    const [imgError, setImgError] = useState(false);

    return (
      <div className="event-card scale-in">
        <div className="event-image">
          {!imgError ? (
            <img
              src={event.image}
              alt={event.title}
              onError={() => setImgError(true)}
            />
          ) : (
            <PlaceholderImage text={event.title} width="100%" height="100%" />
          )}
        </div>
        <div className="overlay">
          <h3>{event.title}</h3>
          <p className="date-location">{event.date} | {event.location}</p>
          <p className="description">{event.description}</p>
        </div>
      </div>
    );
  };

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
        <div className="container">
          {upcomingEvents.length > 0 ? (
            <div className="events-grid">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="coming-soon-container fade-in-up">
              <div className="coming-soon-message scale-in">
                <div className="coming-soon-icon">
                  <i className="far fa-calendar-alt"></i>
                </div>
                <h2>Coming Soon Next Quarter!</h2>
                <p>We're planning an exciting lineup of events for the next quarter. Check back later or follow us on social media to be the first to know when new events are announced.</p>
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

      {/* Footer removed as it's now part of the Layout component */}
    </div>
  );
};

export default AllUpcomingEvents; 