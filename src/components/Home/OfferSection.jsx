import { useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import ResourceCarousel from "./ResourceCarousel";

const NAVY = "#02153D";

// Fill each `items` array with { id, shortTitle, caption, image } to replace the placeholders.
const DEFAULT_TABS = [
  {
    key: "workshops",
    label: "Workshops",
    description:
      "Hosted during the academic quarter, join us for engaging workshops to level up your skills, network with others, and grow as a tech innovator.",
    items: [],
  },
  {
    key: "speaker-panels",
    label: "Speaker Panels",
    description: "Join us for various speaker panels covering diverse topics in the field of technology.",
    items: [],
  },
  {
    key: "company-tours",
    label: "Company Tours",
    description: "Participate in exclusive company tours to get a behind-the-scenes look at top tech companies.",
    items: [],
  },
  {
    key: "networking-events",
    label: "Networking Events",
    description: "Utilize our networking events to create and build connections with industry professionals and peers.",
    items: [],
  },
  {
    key: "career-development",
    label: "Career Development",
    description: "Enhance your career in tech by building relevant skills, experience, and connections with us.",
    items: [],
  },
];

export default function OfferSection({
  tabs = DEFAULT_TABS,
  ctaLabel = "See All Opportunities",
  ctaHref = "/events",
}) {
  const [active, setActive] = useState(0);
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
        <Tabs
          value={active}
          onChange={(_, v) => setActive(v)}
          variant="scrollable"
          scrollButtons={false}
          aria-label="Offerings"
          sx={{
            maxWidth: "100%",
            minHeight: 0,
            "& .MuiTabs-indicator": { display: "none" },
            "& .MuiTabs-flexContainer": { gap: 1 },
          }}
        >
          {tabs.map((t) => (
            <Tab
              key={t.key}
              label={t.label}
              disableRipple
              sx={{
                minHeight: 0,
                minWidth: 0,
                px: 2.5,
                py: 1.25,
                borderRadius: "12px",
                color: NAVY,
                whiteSpace: "nowrap",
                "&.Mui-selected": { color: "common.white", bgcolor: NAVY },
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* key remounts the carousel so scroll position resets per tab */}
      <ResourceCarousel
        key={current.key}
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
          lineHeight: { xs: 1.4, md: "100%" }, // 100% per Figma on desktop; looser when it wraps on phones
          letterSpacing: "0%",
          color: NAVY,
        }}
      >
        {current.description}
      </Typography>

      <Button
        variant="contained"
        href={ctaHref}
        sx={{
          mt: 6,
          px: 2.5,
          py: 1.25,
          borderRadius: "12px",
          bgcolor: "tertiary.main",
          "&:hover": { bgcolor: "tertiary.main", filter: "brightness(1.1)" },
        }}
      >
        {ctaLabel}
      </Button>
    </Box>
  );
}