import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Button, IconButton, Stack, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../public/images/icons/bit-logo.png";

const CENTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/about", label: "About Us" },
];
const CONTACT_LINK = { to: "mailto:blackintech@uci.edu", label: "Contact Us" };
const ALL_LINKS = [...CENTER_LINKS, CONTACT_LINK];

const navButtonSx = {
  color: "text.primary",
  minWidth: 0,
  p: 0,
  lineHeight: "20px",
  borderRadius: 0,
  borderBottom: "2px solid transparent",
  "&.active": { borderBottomColor: "text.primary" },
  "&:hover": { bgcolor: "transparent", borderBottomColor: "accent.slate" },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <Box
      component="header"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        display: "grid",
        gridTemplateColumns: { xs: "1fr auto", md: "1fr auto 1fr" },
        alignItems: "center",
        py: 2,
        px: 4.5,
        minHeight: 48,
        position: "sticky",
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      {/* Left */}
      <Box sx={{ justifySelf: "start", display: "flex" }}>
        <Link to="/" onClick={closeMenu} aria-label="Black in Tech home">
          <Box
            component="img"
            src={logo}
            alt="Black in Tech"
            sx={{
              width: 36,
              height: 36,
              objectFit: "contain",
              display: "block",
            }}
          />
        </Link>
      </Box>

      {/* Center: 4 links */}
      <Stack
        direction="row"
        spacing={6}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {CENTER_LINKS.map(({ to, label }) => (
          <Button
            key={to}
            component={NavLink}
            to={to}
            end={to === "/"}
            sx={navButtonSx}
          >
            {label}
          </Button>
        ))}
      </Stack>

      {/* Right: Contact Us (desktop) / hamburger-X (mobile) */}
      <Box sx={{ justifySelf: "end", display: "flex" }}>
        <Button
          component={NavLink}
          to={CONTACT_LINK.to}
          sx={{ ...navButtonSx, display: { xs: "none", md: "inline-flex" } }}
        >
          {CONTACT_LINK.label}
        </Button>

        <IconButton
          edge="end"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          sx={{
            display: { xs: "inline-flex", md: "none" },
            color: "text.primary",
          }}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Mobile menu: same bar expands, links centered beneath logo / X row */}
      <Collapse
        in={mobileMenuOpen}
        timeout="auto"
        unmountOnExit
        sx={{ gridColumn: "1 / -1", display: { md: "none" } }}
      >
        <Stack spacing={4} sx={{ alignItems: "center", pt: 4, pb: 4 }}>
          {ALL_LINKS.map(({ to, label }) => (
            <Button
              key={to}
              component={NavLink}
              to={to}
              end={to === "/"}
              onClick={closeMenu}
              sx={navButtonSx}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
}
