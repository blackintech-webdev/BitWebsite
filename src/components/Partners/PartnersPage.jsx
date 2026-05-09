import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Partners.css';

const PartnersPage = () => {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch("http://127.0.0.1:8000/sponsors/get-all-sponsors")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch sponsors");
      }
      return res.json();
    })
    .then((data) => {
      setSponsors(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);

  // Sponsorship tiers
  const sponsorshipTiers = [
    {
      name: "Bronze",
      price: "$1,000",
      benefits: [
        "Bring swag",
        "Name on t-shirt",
        "Logo on website"
      ]
    },
    {
      name: "Silver",
      price: "$2,000",
      benefits: [
        "2+ Events",
        "Bring swag",
        "Bring food",
        "Name on t-shirt",
        "Logo on website",
        "Social media shoutout",
        "Resume book",
        "Access to GitHub",
        "Access to LinkedIn"
      ]
    },
    {
      name: "Gold",
      price: "$5,000",
      benefits: [
        "2+ Events",
        "Bring swag",
        "Bring food",
        "Sponsored activity",
        "Name on t-shirt",
        "Logo on website",
        "Social media shoutout",
        "Sponsored prize",
        "Resume book",
        "Access to GitHub",
        "Access to LinkedIn",
        "Send recruiters",
        "Mailing list"
      ]
    }
  ];

  const SponsorLogo = ({ sponsor }) => (
    <div className="sponsor-logo-item">
      <a 
        href={sponsor.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="sponsor-logo-link"
      >
        <img 
          src={sponsor.logo_url} 
          alt={`${sponsor.name} logo`}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="logo-placeholder" style={{display: 'none'}}>
          <i className="fas fa-building"></i>
        </div>
      </a>
    </div>
  );

  return (
    <div className="partners-page page-transition">
      {/* Hero Section - BECOME A SPONSOR */}
      <section className="hero-section">
        <div className="container">
          <h1 className="fade-in-up">BECOME A SPONSOR</h1>
          <p className="fade-in-up">
            Help our chapter continue to create more culturally responsible black tech professionals by becoming our sponsor.
          </p>
        </div>
      </section>

      {/* HOW TO HELP Section */}
      <section className="how-to-help-section">
        <div className="container">
          <h2 className="fade-in-up">HOW TO HELP</h2>
          <p className="fade-in-up">
            Are you interested in sponsoring us? We invite you to explore our General Sponsorship Package for this year, 
            available for viewing or downloading as a PDF.
          </p>
          <p className="fade-in-up">
            If you decide to support us, please contact our executive board via email at{' '}
            <a href="mailto:blackintech@uci.edu" className="email-link">blackintech@uci.edu</a>. 
            Include "Sponsorship Request" in the subject line and describe in the body of the email how you would like to be involved.
          </p>
          <p className="fade-in-up">
            To request a paper copy of our corporate solicitation packet, please email us with the subject line "Send Solicitation Packet."
          </p>
          
          {/* Embedded Canva Sponsorship Packet */}
          <div className="canva-embed-container">
            <div 
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '800px',
                margin: '0 auto',
                height: 0,
                paddingTop: '129.4118%',
                paddingBottom: 0,
                boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                marginTop: '1.6em',
                marginBottom: '0.9em',
                overflow: 'hidden',
                borderRadius: '8px',
                willChange: 'transform'
              }}
            >
              <iframe
                loading="lazy"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  border: 'none',
                  padding: 0,
                  margin: 0
                }}
                src="https://www.canva.com/design/DAGl29NyCvg/slsMaSfGApWz1dyqqZAg5w/view?embed"
                allowFullScreen
                allow="fullscreen"
                title="BiT Pitch Sponsorship Packet"
              />
            </div>
            <a 
              href="https://www.canva.com/design/DAGl29NyCvg/slsMaSfGApWz1dyqqZAg5w/view?utm_content=DAGl29NyCvg&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="canva-link"
            >
              BiT Pitch Sponsorship Packet
            </a>
            {' '}by Chidera Okoroama
          </div>

          <div className="sponsorship-packet-buttons">
            <a 
              href="mailto:blackintech@uci.edu?subject=Sponsorship Request" 
              className="cta-button"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section className="sponsorship-tiers-section">
        <div className="container">
          <div className="tiers-grid">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className={`sponsorship-tier tier-${tier.name.toLowerCase()}`}>
                <h3 className="tier-name">{tier.name}</h3>
                <ul className="tier-benefits">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
                <div className="tier-price">{tier.price}</div>
                <a 
                  href="mailto:blackintech@uci.edu?subject=Sponsorship Request" 
                  className="tier-cta-button"
                >
                  Start Today
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You to Our Sponsors Section */}
      <section className="thank-you-sponsors-section">
        <div className="container">
          <h2 className="fade-in-up">Thank You to Our Sponsors!</h2>
          {loading && <p className="sponsors-loading">Loading sponsors...</p>}

          {error && <p className="sponsors-error">Error: {error}</p>}

          {!loading && !error && (
            <div className="sponsors-logos-grid">
              {sponsors.map((sponsor) => (
                <SponsorLogo key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
