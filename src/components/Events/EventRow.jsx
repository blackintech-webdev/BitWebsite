import React, { useState } from "react";
import PlaceholderImage from "../PlaceholderImage";
import "./EventRow.css";

const EventRow = ({ event, index }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`event-row scale-in`}>
      <div className="event-row__image-wrap">
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

      <div className="event-row__info">
        <h3 className="event-row__title">{event.title}</h3>

        <div className="event-row__meta">
          {event.date && (
            <span className="event-row__meta-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {event.date}
            </span>
          )}
          {event.time && (
            <span className="event-row__meta-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {event.time}
            </span>
          )}
          {event.location && (
            <span className="event-row__meta-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {event.location}
            </span>
          )}
        </div>

        <p className="event-row__description">{event.description}</p>
      </div>
    </div>
  );
};

export default EventRow;
