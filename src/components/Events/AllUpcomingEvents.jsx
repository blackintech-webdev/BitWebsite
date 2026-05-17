import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import PlaceholderImage from "../PlaceholderImage";
import EventRow from "./EventRow";

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

const AllUpcomingEvents = () => {
  return (
    <div className="events-page page-transition">
      {/* Events Content */}
      <div className="events-content">
        <h2 className="fade-in-up">Upcoming Events</h2>
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
              <p>
                We're planning an exciting lineup of events for you. Check back
                later or follow us on social media to be the first to know when
                new events are announced.
              </p>
              <div className="coming-soon-actions">
                <Link to="/get-involved" className="cta-button">
                  Get Involved
                </Link>
                <a
                  href="https://www.instagram.com/bit.uci/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
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
