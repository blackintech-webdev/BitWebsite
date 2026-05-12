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
      title: "Introducing Black In Tech",
      date: "January 13, 2025",
      location: "DBH 1042",
      description:
        "Get to know the board, enjoy pizza, and participate in brain teaser games. Don't forget to RSVP via our linktree!",
      image: "/images/events/event1.jpg",
    },
    {
      id: 2,
      title: "ICS Club Fair",
      date: "January 15, 2025",
      location: "DBH 6011",
      description:
        "Join us at the ICS Club Fair to learn about Black in Tech at UCI and how to get involved.",
      image: "/images/events/event2.jpg",
    },
    {
      id: 3,
      title: "Tech Talk: Tech Startups Panel",
      date: "January 27, 2025",
      location: "DBH 1420",
      description:
        "Hear from Charles Sine (Inclusive Health Founder) and Gregg Klang (FemTech Founder) about their experiences in the startup ecosystem.",
      image: "/images/events/event3.jpg",
    },
    {
      id: 4,
      title: "Mock Interviews Workshop",
      date: "February 3, 2025",
      location: "DBH 1420",
      description:
        "Gain insights on how to tackle industry technical & behavioral interview questions with Walter Myers III and Nick Bell from Microsoft.",
      image: "/images/events/event4.jpg",
    },
    {
      id: 5,
      title: "Tech Talk: UCI Alumni Panel",
      date: "February 10, 2025",
      location: "Student Center, Emerald Bay A",
      description:
        "Connect with UCI alumni including Anthony Mays (Founder/Career Coach), Pierce Taylor (Software Engineer at Google), and Briana Jallow (Technology Consultant).",
      image: "/images/events/event5.jpg",
    },
    {
      id: 6,
      title: "Google Company Tour",
      date: "February 21, 2025",
      location: "Los Angeles",
      description:
        "Join us for an exclusive tour of Google's Los Angeles office. Transportation will be provided for this half-day experience.",
      image: "/images/events/event6.jpg",
    },
    {
      id: 7,
      title: "Resume Building Workshop",
      date: "February 24, 2025",
      location: "DBH 1420",
      description:
        "Learn how to optimize your resume and get peer-to-peer review with Walter Myers III and Kamika Dillard from Microsoft.",
      image: "/images/events/event7.jpg",
    },
    {
      id: 8,
      title: "Jeopardy Night",
      date: "March 31, 2025",
      location: "DBH 1431",
      description:
        "Compete with other BIT members by figuring out clues across various categories and testing your knowledge.",
      image: "/images/events/event8.jpg",
    },
    {
      id: 9,
      title: "Elevator Pitch Workshop",
      date: "April 7, 2025",
      location: "DBH 1431",
      description:
        "Come join us for our Elevator Pitch Workshop, where you’ll have the opportunity to test and refine your ability to pitch yourself in a concise, compelling way!",
      image: "/images/events/event9.jpg",
    },
    {
      id: 10,
      title: "Women In Tech Speaker Panel",
      date: "April 14, 2025",
      location: "DBH 1431",
      description:
        "Join us for a collab between BIT & WIL with this exciting speaker panel as you learn more about Chealsea and Nyah’s experience in the tech world!",
      image: "/images/events/event10.jpg",
    },
    {
      id: 11,
      title: "BiT x MAISS Technology Panel",
      date: "April 23, 2025",
      location: "SB1 2321",
      description:
        "Join us for an exciting Technology Panel hosted in collaboration with Black in Tech @ UCI and MAISS! Hear from trailblazing professionals in Software Engineering and Product Management.",
      image: "/images/events/event11.jpg",
    },
    {
      id: 12,
      title: "Jollof Rice Fundraiser",
      date: "April 24, 2025",
      location: "Ring Road",
      description:
        "Come out and support BIT’s first-ever fundraiser! Stop by our booth to grab a plate of some delicious Jollof rice!",
      image: "/images/events/event12.jpg",
    },
    {
      id: 13,
      title: "Bonfire Social",
      date: "May 2, 2025",
      location: "Corona Del Mar",
      description:
        "Join us for an evening of warmth, laughter, and connection at our Bonfire Social!",
      image: "/images/events/event13.jpg",
    },
    {
      id: 14,
      title: "LinkedIn Workshop",
      date: "May 5, 2025",
      location: "DBH 1431",
      description:
        "Join us for an engaging LinkedIn Workshop where we’ll walk you through practical tips and proven strategies to elevate your profile!",
      image: "/images/events/event14.jpg",
    },
    {
      id: 15,
      title: "Python Workshop",
      date: "May 12, 2025",
      location: "DBH 1431",
      description:
        "Join us for our upcoming Tech Workshop, where we’ll take a deep dive into Python programming.",
      image: "/images/events/event15.jpg",
    },
    {
      id: 16,
      title: "BiT x NSBE Microsoft Office Tour",
      date: "May 14, 2025",
      location: "Irvine Innovation Hub",
      description:
        "Join us for an exclusive student tour of the Microsoft Irvine Innovation Hub with BiT and NSBE at UCI.",
      image: "/images/events/event16.jpg",
    },
    {
      id: 17,
      title: "WICS x BiT Intern-taining Conversations",
      date: "May 19, 2025",
      location: "DBH 6011",
      description:
        "Curious about the internship experience? Join WICS and BiT to talk to students who have previously interned for various companies!",
      image: "/images/events/event17.jpg",
    },
    {
      id: 18,
      title: "BiT Chipotle Fundraiser",
      date: "May 28, 2025",
      location: "4255 Campus Dr Irvine",
      description: "Support our club while enjoying some yummy Chipotle!",
      image: "/images/events/event18.jpg"
    },
    {
      id: 19,
      title: "BiT Petr Drop",
      date: "May 29, 2025",
      location: "Stay tuned to our Instagram story!",
      description:
        "Don’t miss out on this special edition sticker. Keep your eyes on our Instagram story for the drop location!",
      image: "/images/events/event19.jpg"
    },
    {
      id: 20,
      title: "Smores by the Shore",
      date: "September 26, 2025",
      location: "Corona Del Mar Beach",
      description:
        "Come to explore the different clubs, meet new friends, and eat yummy food!",
      image: "/images/events/event20.jpg"
    },
    {
      id: 21,
      title: "BiT Intro Meeting",
      date: "September 29, 2025",
      location: "DBH 1433",
      description:
        "Stop by to learn more about BiT, meet others interested in tech, and enjoy some free snacks!",
      image: "/images/events/event21.jpg"
    },
    {
      id: 22,
      title: "Build a Website Workshop",
      date: "October 6, 2025",
      location: "DBH 1433",
      description:
        "Learn the basics of HTML & CSS with live coding, snacks, and time to experiment!",
      image: "/images/events/event22.jpg"
    },
    {
      id: 23,
      title: "BiT x PHIT 'A Healthy Byte of Innovation' Info Session",
      date: "October 13, 2025",
      location: "ANTrepreneur Center",
      description:
        "Come learn more about PHIT and how it might align with your interests and goals!",
      image: "/images/events/event23.jpg"
    },
    {
      id: 24,
      title: "ShareTea Fundraiser",
      date: "October 13, 2025",
      location: "UTC ShareTea",
      description:
        "Craving boba? Join us after our BiT x PHIT info meeting to grab a drink and support BiT!",
      image: "/images/events/event24.jpg"
    },
    {
      id: 25,
      title: "Google Office Tour",
      date: "October 17, 2025",
      location: "Google LA Corporate Campus",
      description:
        "Join us for an exclusive tour of the Google LA Corporate Campus!",
      image: "/images/events/event25.jpg"
    },
    {
      id: 26,
      title: "BiT TECH TALK: FROM IDEAS TO IMPACT",
      date: "October 20, 2025",
      location: "DBH 1433",
      description:
        "Hear firsthand from our guest speakers DeQuan Guillebeau (Founder of DataDrift) and Darcel Mugisha (Co-Founder of GenInnovation) about how they became founders of their own tech companies!",
      image: "/images/events/event26.jpg"
    },
    {
      id: 27,
      title: "Brain Bytes and Prizes",
      date: "November 3, 2025",
      location: "DBH 1433",
      description:
        "Come out with friends or meet new people as you compete for amazing prizes!",
      image: "/images/events/event27.jpg"
    },
    {
      id: 28,
      title: "Technical Workshop: Embedded Systems",
      date: "November 10, 2025",
      location: "DBH 1433",
      description:
        "Come explore the intersection of hardware and software, featuring a live demo!",
      image: "/images/events/event28.jpg"
    },
    {
      id: 29,
      title: "CoStar Group Office Tour",
      date: "November 18, 2025",
      location: "CoStar Group Irvine Headquarters",
      description:
        "Join us for an exclusive tour of the CoStar Group's Irvine headquarters!",
      image: "/images/events/event29.jpg"
    },
    {
      id: 30,
      title: "Sambosa Fundraiser",
      date: "November 20, 2025",
      location: "Ring Road",
      description:
        "We’ll be selling sambosas next week on Ring Road! Come get one for yourself or more to share with friends, or just stop by to say hi!",
      image: "/images/events/event30.jpg"
    },
    {
      id: 31,
      title:
        "BiT x BMA - BUILT DIFFERENT: INTRO TO PRODUCT / PROJECT MANAGEMENT",
      date: "November 20, 2025",
      location: "MPAA Executive Commons",
      description:
        "Come learn about product / project management and practice your pitching skills!",
      image: "/images/events/event31.jpg"
    },
    {
      id: 32,
      title: "Multiverse Petr Drop",
      date: "November 24, 2025",
      location: "To be announced on our Instagram Story",
      description:
        "Come join us for a PETR DROP! Keep an eye out for the location on our Instagram!",
      image: "/images/events/event32.jpg"
    },
    {
      id: 33,
      title: "Cyber x WiCyS x BiT CTF Workshop / Competition",
      date: "January 12, 2026",
      location: "ISEB 1200",
      description:
        "Join us for a Capture the Flag competition in collaboration with Cyber and Women in Cybersecurity!",
      image: "/images/events/event33.jpg"
    },
    {
      id: 34,
      title: "FAANG Networking Dinner",
      date: "January 21, 2026",
      location: "TBA",
      description:
        "At our FAANG panel, you’ll get to connect with professionals from Meta, Apple, Amazon, Netflix, and Google and learn about careers in software engineering, UX/UI, and web development.",
      image: "/images/events/event34.jpg"
    },
    {
      id: 35,
      title: "Obsidian Enterntainment Meet & Greet",
      date: "January 26, 2026",
      location: "DBH 1300",
      description:
        "Join us as we host a panel with a representative from Obsidian Entertainment!",
      image: "/images/events/event35.jpg"
    },
    {
      id: 36,
      title: "Study Jam",
      date: "February 2, 2026",
      location: "DBH 1300",
      description:
        "Pull up and study with us as we conquer exam season together!",
      image: "/images/events/event36.jpg"
    },
    {
      id: 37,
      title: "Chipotle Fundraiser",
      date: "February 3, 2026",
      location: "UTC Chipotle",
      description: "Join us at Chipotle and make your meal count!",
      image: "/images/events/event37.jpg"
    },
    {
      id: 38,
      title: "Netflix Office Tour",
      date: "February 4, 2026",
      location: "Netflix",
      description:
        "Join us for an exclusive behind-the-scenes look at Netflix and explore careers in tech and entertainment.",
      image: "/images/events/event38.jpg"
    },
    {
      id: 39,
      title: "Celebrating Black Innovators",
      date: "February 10, 2026",
      location: "Colloquia (EH 2430)",
      description:
        "Compete against fellow NSBE and BiT members for prizes, in a game night highlighting Black innovation in honor of Black History Month!",
      image: "/images/events/event39.jpg"
    },
    {
      id: 40,
      title:
        "DAUCI x BiT Professional Speaker Panel - Diversifying Design & Tech",
      date: "February 23, 2026",
      location: "UTC Chipotle",
      description:
        "Join Design at UCI and BiT to learn more about amplifying underrepresented voices, especially within the the design and tech industries!",
      image: "/images/events/event40.jpg"
    },
    {
      id: 41,
      title: "PETR Drop",
      date: "March 12, 2026",
      location: "TBA on our Instagram",
      description:
        "Keep an eye out on our Instagram for the location of this next PETR DROP!",
      image: "/images/events/event41.jpg"
    },
    {
      id: 42,
      title: "AI For Productivity",
      date: "March 30, 2026",
      location: "DBH 1300",
      description:
        "Learn how LLMs and AI are changing the landscape of tech and how you can leverage them to maximize efficiency.",
      image: "/images/events/event42.jpg"
    },
    {
      id: 43,
      title: "Exploring APIs",
      date: "April 6, 2026",
      location: "DBH 1300",
      description:
        "Curious about what really powers your favorite apps? Come tap into the world of APIs with us!",
      image: "/images/events/event43.jpg"
    },
    {
      id: 44,
      title: "Obsidian Entertainment Office Tour",
      date: "April 8, 2026",
      location: "Obsidian Entertainment Office",
      description:
        "Join us for an exclusive office tour of Obsidian Entertainment and get a behind-the-scenes look at one of the industry’s leading studios!",
      image: "/images/events/event44.jpg"
    },
    {
      id: 45,
      title: "UI/UX Do's and Don'ts",
      date: "April 13, 2026",
      location: "DBH 1300",
      description:
        "Whether you’re new to design or looking to sharpen your skills, this session will break down the key differences between UI & UX and help you spot (and avoid) common design mistakes!",
      image: "/images/events/event45.jpg"
    },
    {
      id: 46,
      title: "BiT Celebrate UCI",
      date: "April 18, 2026",
      location: "Engineering Plaza",
      description: "Come find us at Celebrate UCI and pick up some BiT swag!",
      image: "/images/events/event46.jpg"
    },
    {
      id: 47,
      title: "Git & GitHub Workshop",
      date: "April 20, 2026",
      location: "DBH 1300",
      description:
        "Join us as we’ll cover branching, merging, pull requests, and resolving merge conflicts through team challenges!",
      image: "/images/events/event47.jpg"
    },
    {
      id: 48,
      title: "BiT Study Jam",
      date: "April 27, 2026",
      location: "DBH 1300",
      description: "Come join us for our Study Jam and get that A+!",
      image: "/images/events/event48.jpg",
    },
    {
      id: 49,
      title: "Pie the Board Fundraiser",
      date: "April 30, 2026",
      location: "Aldrich Park outside the Phoenix Food Court",
      description:
        "Meet us right outside the Phoenix Food Court in Aldrich Park and Pie the Board!",
      image: "/images/events/event49.jpg"
    },
    {
      id: 50,
      title: "BiT's 30 Minute App Challenge: Build Night",
      date: "May 4, 2026",
      location: "DBH 1300",
      description:
        "Join us in a hands-on event where teams receive a random prompt and must ideate, wireframe, and prototype a mini product using any tools they want!",
      image: "/images/events/event50.jpg"
    },
    {
      id: 51,
      title: "Cloud Computing: AWS, Azure & Beyond",
      date: "May 11, 2026",
      location: "DBH 1300",
      description:
        "Join us on a session that breaks down cloud computing from zero: what it is, why companies use it, and how the big three platforms (AWS, Azure, Google Cloud) compare.",
      image: "/images/events/event51.jpg"
    },
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
