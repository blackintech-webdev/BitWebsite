import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import PlaceholderImage from "../PlaceholderImage";
import EventRow from "./EventRow";
import PastEventsList from "./PastEventsList";

const INITIAL_COUNT = 4;
const PAGE_SIZE = 4;

const PastEvents = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const allShown = visibleCount >= PastEventsList.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, PastEventsList.length));
  };

  const handleShowAll = () => {
    setVisibleCount(PastEventsList.length);
  };

  return (
    <div className="events-page page-transition">
      {/* Past Events Content */}
      <div className="events-content">
        <h2 className="fade-in-up">Past Events</h2>
        <div className="events-list">
          {PastEventsList
            .slice()
            .reverse()
            .slice(0, visibleCount)
            .map((event, index) => (
              <EventRow key={event.id} event={event} index={index} />
            ))}
        </div>

        {!allShown && (
          <div className="events-list-actions">
            <button className="cta-button fade-in-up" onClick={handleShowMore}>
              Show More
            </button>
            <button className="cta-button fade-in-up" onClick={handleShowAll}>
              Show All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PastEvents;
