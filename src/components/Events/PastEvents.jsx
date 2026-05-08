import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';
import PlaceholderImage from '../PlaceholderImage';
import EventRow from './EventRow';

const INITIAL_COUNT = 4;
const PAGE_SIZE = 4;

const pastEvents = [
    {
      id: 1,
      title: "BiT Intro Meeting",
      date: "Monday, Sept 29th",
      location: "DBH 1433",
      description: "Stop by to learn more about BiT, meet others interested in tech, and enjoy some free snacks!",
      image: "/images/events/fall 2025 intro meeting.jpg",
      url: "/events/bit-intro-meeting"
    },
    {
      id: 2,
      title: "PHIT Info Session",
      date: "Monday, Oct 13th",
      location: "ANTrepreneur Center",
      description: "Curious about the intersection of public health, data, technology, and informatics? Come learn more about PHIT and how it might align with your interests and goals!",
      image: "/images/events/Week 3 PHIT Collab.jpg",
      url: "/events/phit-info-session"
    },
    {
      id: 3,
      title: "BUILD A WEBSITE WORKSHOP",
      date: "Monday, October 6th",
      location: "DBH 1433",
      description: "Learn the basics of HTML & CSS with live coding, snacks, and time to experiment! No experience needed, just bring your laptop!",
      image: "/images/events/FALL25 - Build a Website Workshop (Week 2) .jpg",
      url: "/events/build-website-workshop"
    },
    {
      id: 4,
      title: "Introducing Black In Tech",
      date: "January 13, 2025",
      location: "DBH 1042",
      description: "Get to know the board, enjoy pizza, and participate in brain teaser games. Don't forget to RSVP via our linktree!",
      image: "/src/components/images/event1.jpg",
      url: "/events/introducing-bit"
    },
    {
      id: 5,
      title: "ICS Club Fair",
      date: "January 15, 2025",
      location: "DBH 6011",
      description: "Join us at the ICS Club Fair to learn about Black in Tech at UCI and how to get involved.",
      image: "/src/components/images/event2.jpg",
      url: "/events/ics-club-fair"
    },
    {
      id: 6,
      title: "Tech Talk: Tech Startups Panel",
      date: "January 27, 2025",
      location: "DBH 1420",
      description: "Hear from Charles Sine (Inclusive Health Founder) and Gregg Klang (FemTech Founder) about their experiences in the startup ecosystem.",
      image: "/src/components/images/event3.jpg",
      url: "/events/tech-startups-panel"
    },
    {
      id: 7,
      title: "Mock Interviews Workshop",
      date: "February 3, 2025",
      location: "DBH 1420",
      description: "Gain insights on how to tackle industry technical & behavioral interview questions with Walter Myers III and Nick Bell from Microsoft.",
      image: "/src/components/images/event4.jpg",
      url: "/events/mock-interviews"
    },
    {
      id: 8,
      title: "Tech Talk: UCI Alumni Panel",
      date: "February 10, 2025",
      location: "Student Center, Emerald Bay A",
      description: "Connect with UCI alumni including Anthony Mays (Founder/Career Coach), Pierce Taylor (Software Engineer at Google), and Briana Jallow (Technology Consultant).",
      image: "/src/components/images/event5.jpg",
      url: "/events/alumni-panel"
    },
    {
      id: 9,
      title: "Google Company Tour",
      date: "February 21, 2025",
      location: "Los Angeles",
      description: "Join us for an exclusive tour of Google's Los Angeles office. Transportation will be provided for this half-day experience.",
      image: "/src/components/images/event6.jpg",
      url: "/events/google-tour"
    },
    {
      id: 10,
      title: "Resume Building Workshop",
      date: "February 24, 2025",
      location: "DBH 1420",
      description: "Learn how to optimize your resume and get peer-to-peer review with Walter Myers III and Kamika Dillard from Microsoft.",
      image: "/src/components/images/event7.jpg",
      url: "/events/resume-workshop"
    }
  ];

const PastEvents = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const allShown = visibleCount >= pastEvents.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + PAGE_SIZE, pastEvents.length));
  };
 
  const handleShowAll = () => {
    setVisibleCount(pastEvents.length);
  };

  return (
    <div className="events-page page-transition">
      {/* Past Events Content */}
      <div className="events-content">
        <h2 className="fade-in-up">Past Events</h2>
        <div className="events-list">
          {pastEvents.slice(0, visibleCount).map((event, index) => (
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
