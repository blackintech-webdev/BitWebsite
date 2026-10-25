import { Box, Typography } from "@mui/material";
import logo from "../images/icons/bit-logo-light.png";
import temp_background from "../images/background/temp_background.jpg";

const Hero = () => (
  <Box
    component="section"
    sx={{
      width: "100%",
      m: 0,
      position: "static",

      backgroundImage: `
        linear-gradient(0deg, rgba(2, 21, 61, 0.7), rgba(2, 21, 61, 0.7)),
        linear-gradient(97.09deg, rgba(70, 43, 127, 0.7) 0%, rgba(4, 151, 175, 0.7) 100%),
        url(${temp_background})
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: 1440,
        minHeight: { xs: "auto", lg: 420 },
        mx: "auto",
        p: {
          xs: "48px 24px",
          sm: "64px 48px",
          md: "64px 48px",
          lg: "100px",
        },
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1240,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 1, md: 6 },
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Black in Tech at UCI logo"
          sx={{
            display: "block",
            height: "auto",
            flexShrink: 0,
            mb: { xs: -2, md: 0 }, // pull text closer on mobile
            width: {
              xs: "min(80%, 320px)",
              md: "clamp(260px, 30vw, 380px)",
            },
          }}
        />

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            maxWidth: 843,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 3 },
            color: "#fff",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: {
                xs: "2.25rem",
                sm: "2.75rem",
                md: "3rem",
                lg: "4rem",
              },
            }}
          >
            Black in Tech at UCI
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.25rem", lg: "1.5rem" },
                fontWeight: 400,
                lineHeight: 1.24,
                letterSpacing: "0.25px",
              }}
            >
              Through providing a variety of resources and opportunities for
              students who are interested in pursuing careers in technology
              spaces,
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.25rem", lg: "1.5rem" },
                fontWeight: 700,
                lineHeight: 1.24,
                letterSpacing: "0.25px",
              }}
            >
              we are building a community where minorities in tech collaborate,
              innovate, and excel.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Hero;
