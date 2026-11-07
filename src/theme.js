import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#28578c" },
    secondary: { main: "#4395ac" },
    tertiary: { main: "#462b7f" },
    text: { primary: "#02153d" },
    background: { default: "#fcfcfc", paper: "#ffffff" },
    accent: {
      slate: "#94a2bf",
      teal: "#85c0ca",
      lavender: "#c0b5d8",
      mist: "#D2D9E8",
    },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: { fontSize: "4rem", fontWeight: 700, lineHeight: 1, letterSpacing: 0 },
    h2: { fontSize: "3rem", fontWeight: 600, lineHeight: 1, letterSpacing: 0 },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "0.02em",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.24,
      letterSpacing: "0.25px",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.6,
      letterSpacing: 0,
    },
    button: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: "0.9375rem",
      lineHeight: 1.733,
      letterSpacing: "0.46px",
    },
  },
});

export default theme;
