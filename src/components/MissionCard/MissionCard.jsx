import "./MissionCard.css";

function MissionCard({ icon, title, description }) {
  return (
    <div className="bit-mission-card">
      <div className="mission-card-icon">
        {icon}
      </div>

      <h3 className="mission-card-title">{title}</h3>

      <div className="mission-card-divider"></div>

      <p className="mission-card-description">{description}</p>
    </div>
  );
}

export default MissionCard;