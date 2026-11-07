import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa6";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/bit.uci/",
    Icon: FaInstagram,
  },
  { label: "Discord", href: "https://discord.com/NAUB2XXSb3", Icon: FaDiscord },
  { label: "Email", href: "mailto:blackintech@uci.edu", Icon: FaEnvelope },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "text.primary",
        color: "background.default",
        px: { xs: 3, md: 6 },
        py: { xs: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1142,
          mx: "auto",
          py: 1.5,
          gap: { xs: 2, md: "10px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Left: text */}
        <Box>
          <Typography variant="body1">
            © {new Date().getFullYear()} Black in Tech at UCI. All rights
            reserved.
          </Typography>
          <Typography variant="body1">
            Developed by the BiT Web Development Team
          </Typography>
        </Box>

        {/* Right: social icons */}
        <Stack direction="row" sx={{ gap: "10px" }}>
          {SOCIALS.map(({ label, href, Icon }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                width: { xs: 44, md: 52 },
                height: { xs: 44, md: 52 },
                p: 0,
                color: "inherit",
                fontSize: "2.75rem",
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
