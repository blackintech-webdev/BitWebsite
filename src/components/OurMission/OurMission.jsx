import MissionCard from "../MissionCard/MissionCard";
import educationIcon from "./education-icon.svg";
import communityIcon from "./community-icon.svg";
import opportunitiesIcon from "./opportunities-icon.svg";
import mentorshipIcon from "../MissionCard/star-icon.svg";
import "./OurMission.css";

function OurMission() {
  return (
    <section className="our-mission">
      <h2 className="our-mission-heading">Our Mission</h2>

      <div className="our-mission-cards">
        <MissionCard
          icon={educationIcon}
          title="Education"
          description="Provide educational resources and workshops to develop technical skills and knowledge."
        />

        <MissionCard
          icon={communityIcon}
          title="Community"
          description="Foster a supportive community for Black students in technology fields."
        />

        <MissionCard
          icon={opportunitiesIcon}
          title="Opportunities"
          description="Connect members with career and internship opportunities in the tech industry."
        />

        <MissionCard
          icon={mentorshipIcon}
          title="Mentorship"
          description="Facilitate mentorship between industry professionals and students."
        />
      </div>
    </section>
  );
}

export default OurMission;