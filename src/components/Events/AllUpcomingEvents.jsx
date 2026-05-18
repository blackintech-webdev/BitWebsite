import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import EventRow from "./EventRow";
import { fetchUpcomingEvents } from "./eventService"; // Import the new function

const AllUpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      // Fetch up to 5 upcoming events
      const data = await fetchUpcomingEvents(5); 
      setUpcomingEvents(data);
      setLoading(false);
    };
    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="events-page page-transition">
        <div className="events-content">
          <h2 className="fade-in-up">Upcoming Events</h2>
          <p className="fade-in-up">Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="events-page page-transition">
      <div className="events-content">
        <h2 className="fade-in-up">Upcoming Events</h2>
        {upcomingEvents.length === 0 ? (
          <p className="fade-in-up" style={{ textAlign: "center", marginTop: "20px" }}>
            No upcoming events at this time. Check out our past events below!
          </p>
        ) : (
          <div className="events-list">
            {upcomingEvents.map((event, index) => (
              <EventRow key={event.id} event={event} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUpcomingEvents;