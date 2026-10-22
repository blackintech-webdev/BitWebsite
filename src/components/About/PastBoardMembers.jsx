import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../ClubPageExample.css';
import PlaceholderImage from '../PlaceholderImage';

const PastBoardMembers = () => {
  const [expandedYears, setExpandedYears] = useState(["2025-2026"]);
  const toggleYear = (year) => {
    setExpandedYears((prevYears) =>
      prevYears.includes(year)
        ? prevYears.filter((y) => y !== year)
        : [...prevYears, year]
    );
  };
  const pastBoardMembersByYear = [
    {
      year: "2025-2026",
      members: [
        {
          name: "Chidera Okoroama",
          position: "President",
          image: '/images/BoardSolo/Chidera Okoroama.webp',
        },
        {
          name: "Chibueze Ndukwe",
          position: "Vice President",
          image: '/images/BoardSolo/Chibueze Ndukwe.webp',
        },
        {
          name: "Aurelia Aubrey",
          position: "Treasurer",
          image: '/images/BoardSolo/Aurelia Aubrey.webp',
        },
        {
          name: "Ziyad Abbas",
          position: "Treasurer",
          image: '/images/BoardSolo/Ziyad Abbas.webp',
        },
        {
          name: "Stephanie Onwu",
          position: "Secretary",
          image: '/images/BoardSolo/Stephanie Onwu.webp',
        },
        {
          name: "Brina White",
          position: "Marketing",
          image: '/images/BoardSolo/Brina White.webp',
        },
        {
          name: "Angela Wang",
          position: "Marketing",
          image: '/images/BoardSolo/Angela Wang.webp',
        },
        {
          name: "Juan Muhirwe",
          position: "Event Coordinator",
          image: '/images/BoardSolo/Juan Muhirwe.webp',
        },
        {
          name: "Mahanth Kommireddy",
          position: "Event Coordinator",
          image: '/images/BoardSolo/Mahanth Kommireddy.webp',
        },
        {
          name: "Nahum Gebreab",
          position: "Internal Outreach",
          image: '/images/BoardSolo/Nahum Gebreab.webp',
        },
        {
          name: "Layla Harvey",
          position: "External Outreach",
          image: '/images/BoardSolo/Layla Harvey.webp',
        },
        {
          name: "Alyas Thomas",
          position: "Lead Web Developer",
          image: '/images/BoardSolo/Alyas Thomas.webp',
        },
        {
          name: "Derrick Thrower",
          position: "Web Developer",
          image: '/images/BoardSolo/Derrick Thrower.webp',
        },
        {
          name: "Ival Momoh",
          position: "Web Developer",
          image: '/images/BoardSolo/Ival Momoh.webp',
        },
        {
          name: "Chioma Madu",
          position: "General Officer",
          image: '/images/BoardSolo/Chioma Madu.webp',
        }
      ]
    },
    {
      year: "2024-2025",
      members: [
        {
          name: "Chidera Okoroama",
          position: "President",
        },
        {
          name: "Juan Muhirwe",
          position: "Vice President",
        },
        {
          name: "Ngozi Charles",
          position: "Treasurer",
        },
        {
          name: "Christine Oladapo",
          position: "Secretary",
        },
        {
          name: "Kaneto Ejizu",
          position: "Co-Event Chair",
        },
        {
          name: "Chibueze Ndukwe",
          position: "Co-Event Chair",
        },
        {
          name: "Ijeoma Arisa",
          position: "Corporate Outreach",
        },
        {
          name: "Daniel Gonzales",
          position: "Marketing",
        },
        {
          name: "Alyas Thomas",
          position: "Lead Web Developer",
        },
        {
          name: "Steven Gorlicki",
          position: "Web Developer",
        },
        {
          name: "Jason Phan",
          position: "Web Developer",
        },
      ],
    }
  ];

  return (
    <div className="about-page page-transition">
      {/* Hero Section */}
      <section className="hero-section past-board-hero">
        <div className="container">
          <h1 className="fade-in-up">Past Board</h1>
          <p className="fade-in-up">Meet the dedicated individuals who helped build and shape Black in Tech at UCI</p>
          <Link to="/about" className="cta-button fade-in-up">Back to About</Link>
        </div>
      </section>

      {/* Past Board Members Section */}
      <section className="board-section">
        <div className="container">
          {pastBoardMembersByYear.map((group) => (
            <div className="past-board-year-group" key={group.year}>
              <h3 className="past-board-year-heading">
                <button
                  type="button"
                  className="past-board-accordion-toggle"
                  onClick={() => toggleYear(group.year)}
                  aria-expanded={expandedYears.includes(group.year)}
                >
                  <span>{group.year}</span>
                  <span
                    className={`past-board-chevron ${expandedYears.includes(group.year) ? "expanded" : ""}`}
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                className={`past-board-accordion-content ${
                  expandedYears.includes(group.year) ? "expanded" : ""
                }`}
                aria-hidden={!expandedYears.includes(group.year)}
                inert={!expandedYears.includes(group.year)}
              >
                <div className="past-board-accordion-inner">
                  {group.year === "2025-2026" ? (
                    <div className="board-members">
                      {group.members.map((member, index) => (
                        <div className="board-member scale-in" key={`${group.year}-${index}`}>
                          <div className="member-image">
                            <img
                              src={member.image}
                              alt={member.name}
                              loading="lazy"
                              decoding="async"
                              onError={(e) => PlaceholderImage.handleImageError(e, member.name)}
                            />
                          </div>
                          <h3>{member.name}</h3>
                          <p className="position">{member.position}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="past-board-directory">
                    {[group.members.slice(0, 6), group.members.slice(6)].map((column, columnIndex) => (
                      <div className="past-board-directory-column" key={columnIndex}>
                        {column.map((member, index) => (
                          <div className="past-board-text-member" key={`${group.year}-${columnIndex}-${index}`}>
                            <span className="past-board-member-position">
                              {member.position}
                            </span>
                            <span className="past-board-member-name">
                              {member.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Thank You Section */}
      <section className="get-involved-section">
        <div className="container">
          <h2 className="fade-in-up">Thank You</h2>
          <div className="get-involved-content">
            <div className="get-involved-text fade-in-up">
              <p>
                We extend our heartfelt gratitude to all our past board members who dedicated their time, energy, and passion to building Black in Tech at UCI. Their contributions have been instrumental in creating a supportive community and establishing the foundation for our continued growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastBoardMembers;
