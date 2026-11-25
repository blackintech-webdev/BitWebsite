import { Box, Typography } from "@mui/material";
import Button from "../Buttons/Button";
import ResourceCarousel from "./ResourceCarousel";
import HeaderNav from "../Buttons/HeaderButtons";
import useAutoCycle from "./useAutoCycle";
import { Link } from "react-router-dom";

const NAVY = "#02153D";

// Fill each `items` array with { id, shortTitle, caption, image } to replace the placeholders.
const DEFAULT_TABS = [
  {
    key: "workshops",
    label: "Workshops",
    description:
      "Hosted during the academic quarter, join us for engaging workshops to level up your skills, network with others, and grow as a tech innovator.",
    items: [
      { id: "workshops-1", shortTitle: "Build a Website Workshop", caption: "Polish your resume with feedback from industry professionals.", image: "/images/offer/workshops-1.jpg" },
      { id: "workshops-2", shortTitle: "LinkedIn Workshop", caption: "Practice coding interviews in a supportive, hands-on setting.", image: "/images/offer/workshops-2.jpg" },
      { id: "workshops-3", shortTitle: "Resume Building", caption: "Build and deploy your first website from scratch.", image: "/images/offer/workshops-3.jpg" },
      { id: "workshops-4", shortTitle: "Intro to Machine Learning", caption: "Create a profile that stands out to recruiters.", image: "/images/offer/workshops-4.jpg" },
    ],
  },
  {
    key: "speaker-panels",
    label: "Speaker Panels",
    description:
      "Join us for various speaker panels covering diverse topics in the field of technology.",
    items: [
      { id: "panels-1", shortTitle: "Alumni Panel", caption: "Hear how UCI alumni launched their careers in tech.", image: "/images/offer/panels-1.jpg" },
      { id: "panels-2", shortTitle: "Breaking Into Big Tech", caption: "Engineers share what it takes to land and grow at top companies.", image: "/images/offer/panels-2.jpg" },
      { id: "panels-3", shortTitle: "Founders Fireside", caption: "Startup founders discuss building products and teams.", image: "/images/offer/panels-3.jpg" },
      { id: "panels-4", shortTitle: "Women in Tech", caption: "Leaders talk leadership, growth, and community.", image: "/images/offer/panels-4.jpg" },
    ],
  },
  {
    key: "company-tours",
    label: "Company Tours",
    description:
      "Participate in exclusive company tours to get a behind-the-scenes look at top tech companies.",
    items: [
      { id: "tours-1", shortTitle: "Office Visit", caption: "Walk through the workspace and meet the teams.", image: "/images/offer/tours-1.jpg" },
      { id: "tours-2", shortTitle: "Engineering Q&A", caption: "Ask engineers about their day-to-day work.", image: "/images/offer/tours-2.jpg" },
      { id: "tours-3", shortTitle: "Product Demo Day", caption: "See how products are designed, built, and shipped.", image: "/images/offer/tours-3.jpg" },
      { id: "tours-4", shortTitle: "Recruiter Meet & Greet", caption: "Learn about internships and new grad roles directly.", image: "/images/offer/tours-4.jpg" },
    ],
  },
  {
    key: "networking-events",
    label: "Networking Events",
    description:
      "Utilize our networking events to create and build connections with industry professionals and peers.",
    items: [
      { id: "networking-1", shortTitle: "Industry Mixer", caption: "Meet professionals from a range of companies and roles.", image: "/images/offer/networking-1.jpg" },
      { id: "networking-2", shortTitle: "Coffee Chats", caption: "Casual one-on-one conversations with mentors and peers.", image: "/images/offer/networking-2.jpg" },
      { id: "networking-3", shortTitle: "Career Fair Prep", caption: "Practice your pitch before meeting recruiters.", image: "/images/offer/networking-3.jpg" },
      { id: "networking-4", shortTitle: "Community Social", caption: "Connect with members in a relaxed, welcoming space.", image: "/images/offer/networking-4.jpg" },
    ],
  },
  {
    key: "career-development",
    label: "Career Development",
    description:
      "Enhance your career in tech by building relevant skills, experience, and connections with us.",
    items: [
      { id: "career-1", shortTitle: "Mentorship Program", caption: "Get paired with a professional in your field of interest.", image: "/images/offer/career-1.jpg" },
      { id: "career-2", shortTitle: "Mock Interviews", caption: "Get real-time feedback before the real thing.", image: "/images/offer/career-2.jpg" },
      { id: "career-3", shortTitle: "Project Teams", caption: "Build portfolio projects with fellow members.", image: "/images/offer/career-3.jpg" },
      { id: "career-4", shortTitle: "Internship Resources", caption: "Access curated listings, guides, and referrals.", image: "/images/offer/career-4.jpg" },
    ],
  },
];

export default function OfferSection({
  tabs = DEFAULT_TABS,
  ctaLabel = "See All Opportunities",
  ctaHref = "/events",
}) {
  const { active, select } = useAutoCycle(tabs.length, 7500);
  const current = tabs[active];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        m: 0,
        boxSizing: "border-box",
        background: "linear-gradient(289.84deg, #D2D9E8 0%, #C0B5D8 100%)",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          "&&": {
            m: 0,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "48px" },
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#02153D",
          },
        }}
      >
        What We Offer
      </Typography>

      {/* Tabs: 40px below heading, 48px above carousel (Figma) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 3, md: 5 },
          mb: { xs: 3, md: 6 },
        }}
      >
        <HeaderNav
          color="navy"
          items={tabs}
          activeIndex={active}
          onChange={select}
          ariaLabel="Offerings"
        />
      </Box>

      {/* key remounts the carousel so scroll position resets per tab */}
      <Box
        key={current.key}
        sx={{
          "@keyframes offerIn": {
            from: { opacity: 0, transform: "translateY(8px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
          animation: "offerIn 800ms ease-out",
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      >
        <ResourceCarousel
          items={current.items}
          sx={{ bgcolor: "transparent", py: 0, my: 0 }}
        />

        <Typography
          sx={{
            maxWidth: 1100,
            mx: "auto",
            mt: 3,
            mb: 0,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: { xs: 1.4, md: "100%" },
            letterSpacing: "0%",
            color: NAVY,
          }}
        >
          {current.description}
        </Typography>
      </Box>

      <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
        <Button as={Link} to={ctaHref} color="purple" variant="filled">
          {ctaLabel}
        </Button>
      </Box>
    </Box>
  );
}
