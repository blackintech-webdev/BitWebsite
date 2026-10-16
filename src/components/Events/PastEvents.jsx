import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import EventRow from "./EventRow";
import { fetchPaginatedPastEvents, fetchUpcomingEvents } from "./eventService"; 

const PAGE_SIZE = 4;
const TARGET_TOTAL_EVENTS = 5;

const PastEvents = () => {
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    const loadInitialEvents = async () => {
      setLoading(true);
      
      // 1. Find out how many upcoming events there are
      const upcoming = await fetchUpcomingEvents(5);
      const upcomingCount = upcoming.length;
      
      // 2. Calculate the exact number of past events needed to reach 5 total
      const initialFetchSize = Math.max(0, TARGET_TOTAL_EVENTS - upcomingCount);
      
      if (initialFetchSize > 0) {
        // Fetch exactly the amount needed to balance the page
        const data = await fetchPaginatedPastEvents(initialFetchSize, 0);
        setPastEvents(data);
        
        // If the database gave us less than we asked for, there are no more left
        if (data.length < initialFetchSize) {
          setHasMore(false);
        }
      } else {
        const checkData = await fetchPaginatedPastEvents(1, 0);
        if (checkData.length === 0) {
          setHasMore(false);
        }
      }
      
      setLoading(false);
    };
    loadInitialEvents();
  }, []);

  const handleShowMore = async () => {
    setIsFetchingMore(true);
    
    const currentOffset = pastEvents.length;
    const newEvents = await fetchPaginatedPastEvents(PAGE_SIZE, currentOffset);
    
    setPastEvents((prev) => [...prev, ...newEvents]);
    
    if (newEvents.length < PAGE_SIZE) {
      setHasMore(false);
    }
    setIsFetchingMore(false);
  };

  const handleShowAll = async () => {
    setIsFetchingMore(true);
    const currentOffset = pastEvents.length;
    
    const remainingEvents = await fetchPaginatedPastEvents(1000, currentOffset);
    
    setPastEvents((prev) => [...prev, ...remainingEvents]);
    
    setHasMore(false);
    setIsFetchingMore(false);
  };

  if (loading) {
    return (
      <div className="events-page page-transition">
        <div className="events-content">
          <h2 className="fade-in-up">Past Events</h2>
          <p className="fade-in-up">Loading events...</p>
        </div>
      </div>
    );
  }

  if (pastEvents.length === 0 && !hasMore) return null;

  return (
    <div className="events-page page-transition">
      <div className="events-content">
        <h2 className="fade-in-up">Past Events</h2>
        
        <div className="events-list">
          {pastEvents.map((event, index) => (
            <EventRow key={event.id} event={event} index={index} />
          ))}
        </div>

        {hasMore && (
          <div className="events-list-actions">
            <button 
              className="cta-button fade-in-up" 
              onClick={handleShowMore}
              disabled={isFetchingMore}
            >
              {isFetchingMore ? "Loading..." : "Show More"}
            </button>
            <button 
              className="cta-button fade-in-up" 
              onClick={handleShowAll}
              disabled={isFetchingMore}
            >
              Show All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PastEvents;