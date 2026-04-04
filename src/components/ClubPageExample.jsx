import React from 'react';
import { Link } from 'react-router-dom';
import './ClubPageExample.css';
import PlaceholderImage from './PlaceholderImage';
import LinkedInImage from '../../public/images/icons/linkedin.svg';

const ClubPageExample = () => {
  const boardMembers = [
    {
      name: "Chidera Okoroama",
      position: "President",
      image: '/images/BoardSolo/Chidera Okoroama.jpg',
      bio: "Senior Business Information Management major with a passion for promoting diversity in tech and creating inclusive communities."
    },
    {
      name: "Chibueze Ndukwe",
      position: "Vice President",
      image: '/images/BoardSolo/Chibueze Ndukwe.jpg',
      bio: "Senior Electrical Engineer bringing technical expertise and creative programming ideas to our events to foster learning and networking opportunities."
    },
    {
      name: "Aurelia Aubrey",
      position: "Treasurer",
      image: '/images/BoardSolo/Aurelia Aubrey.jpg',
      bio: "Senior Business Economics major with strong financial management skills and a commitment to ensuring the organization's fiscal responsibility."
    },
    {
      name: "Ziyad Abbas",
      position: "Treasurer",
      image: '/images/BoardSolo/Ziyad Abbas.jpg',
      bio: "Junior Electrical Engineer with expertise in financial planning and a dedication to supporting our organization's growth and sustainability."
    },
    {
      name: "Stephanie Onwu",
      position: "Secretary",
      image: '/images/BoardSolo/Stephanie Onwu.jpg',
      bio: "Junior Public Health Policy major with excellent organizational skills and a dedication to maintaining clear communication within our community."
    },
    {
      name: "Angela Wang",
      position: "Marketing",
      image: '/images/BoardSolo/Angela Wang.jpg',
      bio: "Junior Informatics major creating intentional designs that promote opportunities for and celebrate the successes of marginalized communities in technology."
    },
    {
      name: "Brina White",
      position: "Marketing",
      image: '/images/BoardSolo/Brina White.jpg',
      bio: "Senior Urban Planning GIS + Social Ecology major with a passion for creating engaging content and building community through strategic marketing initiatives."
    },
    {
      name: "Juan Muhirwe",
      position: "Event Coordinator",
      image: '/images/BoardSolo/Juan Muhirwe.jpg',
      bio: "Junior Data Science major focused on implementing machine learning solutions and bridging the diversity gap in AI development."
    },
    {
      name: "Mahanth Kommireddy",
      position: "Event Coordinator",
      image: '/images/BoardSolo/Mahanth Kommireddy.jpg',
      bio: "Sophomore Computer Engineer with a talent for planning and executing engaging events that bring our community together."
    },
    {
      name: "Nahum Gebreab",
      position: "Internal Outreach",
      image: '/images/BoardSolo/Nahum Gebreab.jpg',
      bio: "Sophomore Computer Engineer with a passion for building bridges between our organization and the broader UCI community."
    },
    {
      name: "Layla Harvey",
      position: "External Outreach",
      image: '/images/BoardSolo/Layla Harvey.jpg',
      bio: "Sophomore Biomedical Engineer contributing fresh ideas and technical insight to our events, creating spaces for learning, connection, and growth in the tech community."
    },
    {
      name: "Alyas Thomas",
      position: "Webmaster",
      image: '/images/BoardSolo/Alyas Thomas.jpg',
      bio: "Junior Software Engineering major with expertise in full-stack development and a dedication to creating beautiful, user-friendly interfaces.",
      linkedin: "https://www.linkedin.com/in/alyasthomas/"
    },
    {
      name: "Derrick Thrower",
      position: "Web Developer",
      image: '/images/BoardSolo/Derrick Thrower.jpg',
      bio: "Sophomore Computer Science major who loves to work on new and interesting projects and is passionate about creating a welcoming space for the tech community."
    },
    {
      name: "Ival Momoh",
      position: "Web Developer",
      image: '/images/BoardSolo/Ival Momoh.jpg',
      bio: "Sophomore Computer Engineering major with a passion for building innovative, inclusive tech solutions and bridging the gap between software and hardware through intuitive web experiences."
    },
    {
      name: "Chioma Madu",
      position: "General Officer",
      image: '/images/BoardSolo/Chioma Madu.jpg',
      bio: "Junior Civil Engineer with a commitment to supporting our organization's mission and creating opportunities for underrepresented students in technology."
    }
  ];

  return (
    <div className="about-page page-transition">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="fade-in-up">About Us</h1>
          <p className="fade-in-up">Learn about our mission, values, and the team behind Black in Tech at UCI</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-content">
            <div className="info-text fade-in-left">
              <h2>Who We Are</h2>
              <p>
                Black in Tech at UCI is a student-led organization dedicated to fostering a supportive community for Black students interested in technology fields. Founded in 2024, we provide resources, networking opportunities, and skill-building workshops to help our members thrive in their academic and professional journeys.
              </p>
              <p>
                Our community is inclusive and welcoming to students from all backgrounds who are interested in technology and are passionate about diversity and inclusion in the tech industry.
              </p>
            </div>
            <div className="info-image fade-in-right">
              <img 
                src="/images/Black in Tech.jpg"
                alt="Black in Tech at UCI Board Members"
                onError={(e) => PlaceholderImage.handleImageError(e, 'Black in Tech at UCI Board Members')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2 className="fade-in-up">Our Mission</h2>
          <div className="mission-cards">
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education</h3>
              <p>Provide educational resources and workshops to develop technical skills and knowledge.</p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>Foster a supportive community for Black students in technology fields.</p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Opportunities</h3>
              <p>Connect members with career and internship opportunities in the tech industry.</p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Mentorship</h3>
              <p>Facilitate mentorship between industry professionals and students.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Partners and Sponsors Section */}
      <section className="partners-section">
        <div className="container">
          <div className="info-content">
            <div className="info-text fade-in-left">
              <h2>Partners and Sponsors</h2>
              <p>
                Learn about our valued partners and sponsors who support our mission of fostering diversity and inclusion in technology.
              </p>
              <div className="cta-buttons">
                <Link to="/partners" className="cta-button">View Partners and Sponsors</Link>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Board Members Section */}
      <section className="board-section">
        <div className="container">
          <h2 className="fade-in-up">Meet Our Board</h2>
          <div className="board-members">
            {boardMembers.map((member, index) => (
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
                <p className="bio">{member.bio}</p>
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <img src={LinkedInImage} alt={`${member.name} LinkedIn`} className="linkedin-icon" />
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="board-actions fade-in-up">
            <Link to="/about/past-board" className="cta-button">View Past Board Members</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubPageExample; 