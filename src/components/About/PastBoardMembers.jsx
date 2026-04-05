import React from 'react';
import { Link } from 'react-router-dom';
import '../ClubPageExample.css';
import PlaceholderImage from '../PlaceholderImage';

const PastBoardMembers = () => {
  const pastBoardMembersByYear = [
    {
      year: "2025-2026",
      members: [
        {
          name: "Chidera Okoroama",
          position: "President",
          image: '/images/BoardSolo/Chidera Okoroama.jpg',
        },
        {
          name: "Chibueze Ndukwe",
          position: "Vice President",
          image: '/images/BoardSolo/Chibueze Ndukwe.jpg',
        },
        {
          name: "Aurelia Aubrey",
          position: "Treasurer",
          image: '/images/BoardSolo/Aurelia Aubrey.jpg',
        },
        {
          name: "Ziyad Abbas",
          position: "Treasurer",
          image: '/images/BoardSolo/Ziyad Abbas.jpg',
        },
        {
          name: "Stephanie Onwu",
          position: "Secretary",
          image: '/images/BoardSolo/Stephanie Onwu.jpg',
        },
        {
          name: "Angela Wang",
          position: "Marketing",
          image: '/images/BoardSolo/Angela Wang.jpg',
        },
        {
          name: "Brina White",
          position: "Marketing",
          image: '/images/BoardSolo/Brina White.jpg',
        },
        {
          name: "Juan Muhirwe",
          position: "Event Coordinator",
          image: '/images/BoardSolo/Juan Muhirwe.jpg',
        },
        {
          name: "Mahanth Kommireddy",
          position: "Event Coordinator",
          image: '/images/BoardSolo/Mahanth Kommireddy.jpg',
        },
        {
          name: "Nahum Gebreab",
          position: "Internal Outreach",
          image: '/images/BoardSolo/Nahum Gebreab.jpg',
        },
        {
          name: "Derrick Thrower",
          position: "Web Developer",
          image: '/images/BoardSolo/Derrick Thrower.jpg',
        },
        {
          name: "Ival Momoh",
          position: "Web Developer",
          image: '/images/BoardSolo/Ival Momoh.jpg',
        },
        {
          name: "Chioma Madu",
          position: "General Officer",
          image: '/images/BoardSolo/Chioma Madu.jpg',
        }
      ]
    },
    {
      year: "2024-2025",
      members: [
        {
          name: "Jason Phan",
          position: "Web Developer",
          image: '/images/BoardSolo/JasonSolo.jpg',
        },
        {
          name: "Ijeoma Arisa",
          position: "Corporate Outreach",
          image: '/images/BoardSolo/IjeomaSolo.jpg',
        },
        {
          name: "Daniel Gonzales",
          position: "Marketing",
          image: '/images/BoardSolo/DanielSolo.jpg',
        },
        {
          name: "Kaneto Ejizu",
          position: "Co-Event Chair",
          image: '/images/BoardSolo/KanetoSolo.jpg',
        }
      ]
    }
  ];

  return (
    <div className="about-page page-transition">
      {/* Hero Section */}
      <section className="hero-section past-board-hero">
        <div className="container">
          <h1 className="fade-in-up">Past Board Members</h1>
          <p className="fade-in-up">Meet the dedicated individuals who helped build and shape Black in Tech at UCI</p>
          <Link to="/about" className="cta-button fade-in-up">Back to About</Link>
        </div>
      </section>

      {/* Past Board Members Section */}
      <section className="board-section">
        <div className="container">
          <h2 className="fade-in-up">Our Past Board Members</h2>
          <div className="board-members">
            {pastBoardMembers.map((member, index) => (
              <div className="board-member scale-in" key={index}>
                <div className="member-image">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    onError={(e) => PlaceholderImage.handleImageError(e, member.name)}
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
              </div>
            ))}
          </div>
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
