import React from "react";
import { Link } from "react-router-dom";
import "./ClubPageExample.css";
import PlaceholderImage from "./PlaceholderImage";
import LinkedInImage from "../../public/images/icons/linkedin.svg";

const ClubPageExample = () => {
  const boardMembers = [
    {
      name: "Alyas Thomas",
      position: "President",
      image: "/images/BoardSolo/Alyas Thomas.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      linkedin: "https://www.linkedin.com/in/alyasthomas/",
    },
    {
      name: "Layla Harvey",
      position: "Vice President",
      image: "/images/BoardSolo/Layla Harvey.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      linkedin: "https://www.linkedin.com/in/layla-mariela-harvey-609963327/",
    },
    {
      name: "Adonai Fesseheye",
      position: "Treasurer",
      image: "/public/images/icons/avatar.webp",
      bio: "Junior Economics major with strong financial management skills, committed to ensuring the organization’s long-term growth, stability, and success.",
      linkedin: "https://www.linkedin.com/in/adonai-fessehaye-89b2271b6/",
    },
    {
      name: "Burhan Shahid",
      position: "Secretary",
      image: "/public/images/icons/avatar.webp",
      bio: "Freshman CSE major with a strong background in mobile app development, bringing organization and strong attention to detail to the team.",
      linkedin: "https://www.linkedin.com/in/burhanshahid75/",
    },
    {
      name: "Stephanie Penabella",
      position: "Marketing",
      image: "/public/images/icons/avatar.webp",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      linkedin: "https://www.linkedin.com/in/stephanie-penabella-902a65333/",
    },
    {
      name: "Angela Wang",
      position: "Marketing & UI/UX Lead",
      image: "/images/BoardSolo/Angela Wang.jpg",
      bio: "Designer dedicated to translating unique, personal experiences into inclusive design solutions to advocate for vulnerable communities.",
      linkedin: "https://www.linkedin.com/in/angela-x-wang/",
    },
    {
      name: "Sanjoy Datta",
      position: "Event Coordinator",
      image: "/public/images/icons/avatar.webp",
      bio: "Sophomore SWE major passionate about creating memorable experiences through well-planned events that bring members together.",
      linkedin: "https://www.linkedin.com/in/datta-sanjoy/",
    },
    {
      name: "Timothy Llata",
      position: "Event Coordinator",
      image: "/public/images/icons/avatar.webp",
      bio: "Freshman Data Science major with a talent for organizing thoughtful events that foster member involvement and strengthen connections.",
      linkedin: "https://www.linkedin.com/in/timothyllata/",
    },
    {
      name: "Abdulwahab Aldeyyeain",
      position: "Internal Outreach",
      image: "/public/images/icons/avatar.webp",
      bio: "Junior Computer Engineering major passionate about building partnerships and helping students explore careers in technology.",
      linkedin: "https://www.linkedin.com/in/abdulwahab-aldeyyeain-500506391/",
    },
    {
      name: "Helen Shibeshi",
      position: "External Outreach",
      image: "/public/images/icons/avatar.webp",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      linkedin: "https://www.linkedin.com/in/helenshibeshi/",
    },
    {
      name: "Naysa Yow Fletcher",
      position: "Mentorship Outreach",
      image: "/public/images/icons/avatar.webp",
      bio: "Freshman Quant Econ major with a passion for community building and meaningful engagement that helps members grow and connect.",
      linkedin: "https://www.linkedin.com/in/naysa-yow-fletcher-563a31282/",
    },
    {
      name: "Karl Klaffenbach",
      position: "General Outreach",
      image: "/public/images/icons/avatar.webp",
      bio: "Freshman Computer Science major dedicated to making tech more accessible while expanding career opportunities for members.",
      linkedin: "https://www.linkedin.com/in/karlk1/",
    },
    {
      name: "Jonathan Chau",
      position: "Web Developer",
      image: "/public/images/icons/avatar.webp",
      bio: "Sophomore Computer Science major passionate about building impactful projects that promote inclusivity in tech.",
      linkedin: "https://www.linkedin.com/in/jonathan-chau06/",
    },
    {
      name: "Jovan George",
      position: "Web Developer",
      image: "/public/images/icons/avatar.webp",
      bio: "Freshman Computer Science major focused on developing software that improves educational accessibility in tech.",
      linkedin: "https://www.linkedin.com/in/jovan-george-608823382/",
    },
    {
      name: "Brook Issayas",
      position: "Web Developer",
      image: "/public/images/icons/avatar.webp",
      bio: "Freshman Computer Science major dedicated to supporting the BIT community through creative web development.",
      linkedin: "https://www.linkedin.com/in/brook-issayas/",
    },
    {
      name: "Johnny Wu",
      position: "Web Development Mentor",
      image: "/public/images/icons/avatar.webp",
      bio: "Junior Computer Science major developing websites for social impact while helping students improve their technical skills.",
      linkedin: "https://www.linkedin.com/in/johwuy/",
    },
  ];

  return (
    <div className="about-page page-transition">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="fade-in-up">About Us</h1>
          <p className="fade-in-up">
            Learn about our mission, values, and the team behind Black in Tech
            at UCI
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-content">
            <div className="info-text fade-in-left">
              <h2>Who We Are</h2>
              <p>
                Black in Tech at UCI is a student-led organization dedicated to
                fostering a supportive community for Black students interested
                in technology fields. Founded in 2024, we provide resources,
                networking opportunities, and skill-building workshops to help
                our members thrive in their academic and professional journeys.
              </p>
              <p>
                Our community is inclusive and welcoming to students from all
                backgrounds who are interested in technology and are passionate
                about diversity and inclusion in the tech industry.
              </p>
            </div>
            <div className="info-image fade-in-right">
              <img
                src="/images/Black in Tech.jpg"
                alt="Black in Tech at UCI Board Members"
                onError={(e) =>
                  PlaceholderImage.handleImageError(
                    e,
                    "Black in Tech at UCI Board Members",
                  )
                }
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
              <p>
                Provide educational resources and workshops to develop technical
                skills and knowledge.
              </p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>
                Foster a supportive community for Black students in technology
                fields.
              </p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Opportunities</h3>
              <p>
                Connect members with career and internship opportunities in the
                tech industry.
              </p>
            </div>
            <div className="mission-card scale-in">
              <div className="icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Mentorship</h3>
              <p>
                Facilitate mentorship between industry professionals and
                students.
              </p>
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
                Learn about our valued partners and sponsors who support our
                mission of fostering diversity and inclusion in technology.
              </p>
              <div className="cta-buttons">
                <Link to="/partners" className="cta-button">
                  View Partners and Sponsors
                </Link>
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
                    onError={(e) =>
                      PlaceholderImage.handleImageError(e, member.name)
                    }
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
                    <img
                      src={LinkedInImage}
                      alt={`${member.name} LinkedIn`}
                      className="linkedin-icon"
                    />
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="board-actions fade-in-up">
            <Link to="/about/past-board" className="cta-button">
              View Past Board Members
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubPageExample;
