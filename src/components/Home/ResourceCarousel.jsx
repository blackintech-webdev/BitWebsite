import { useEffect, useRef, useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

const GAP = { xs: "16px", xl: "36px" };

const cardBasis = {
  xs: "62%",
  sm: "calc((100% - 16px) / 2)",
  md: "calc((100% - 32px) / 3)",
  lg: "calc((100% - 48px) / 4)",
  xl: "274px",
};

// Figma image ratio (274 x 265) from sm up, 4:3 on phones
const imageSizeSx = {
  width: "100%",
  aspectRatio: { xs: "4 / 3", sm: "274 / 265" },
  height: "auto",
};

// Figma text block; fixed so every card matches (long fallback descriptions scroll inside it)
const TEXT_BLOCK_HEIGHT = "81px";

// Shown when `items` is empty
const PLACEHOLDER_ITEMS = Array.from({ length: 4 }, (_, i) => ({
  id: `placeholder-${i}`,
  shortTitle: "Image title",
  caption: "Image description",
  image: null,
}));

// Blank "transparent image" checkerboard, same size as real images
const BlankImage = () => (
  <Box
    role="img"
    aria-label="Image unavailable"
    sx={{
      ...imageSizeSx,
      background: "repeating-conic-gradient(#efefef 0% 25%, #fafafa 0% 50%) 50% / 24px 24px",
    }}
  />
);

export default function ResourceCarousel({ items = [] }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [failed, setFailed] = useState({}); // ids whose image failed to load

  const displayItems = items.length ? items : PLACEHOLDER_ITEMS;

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [displayItems]);

  // Scroll by one card; card width and gap are measured so it's right at any breakpoint
  const scroll = (dir) => {
    const el = trackRef.current;
    const card = el?.firstElementChild;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  const arrowSx = {
    color: "common.white",
    display: { xs: "none", sm: "inline-flex" }, // phones swipe instead
    "&.Mui-disabled": { color: "rgba(255,255,255,0.3)" },
  };

  return (
    <Box
      component="section"
      sx={{ bgcolor: "#444", py: { xs: 2, sm: 4 }, px: { xs: 1.5, md: 4 } }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, maxWidth: 1306, mx: "auto" }}>
        <IconButton aria-label="Previous" onClick={() => scroll(-1)} disabled={atStart} sx={arrowSx}>
          <ChevronLeft />
        </IconButton>

        <Box
          ref={trackRef}
          onScroll={updateEdges}
          sx={{
            display: "flex",
            gap: GAP,
            flex: 1,
            minWidth: 0, // lets the track shrink instead of overflowing the page
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {displayItems.map((item) => {
            const showBlank = !item.image || failed[item.id];
            return (
              <Card
                key={item.id}
                sx={{
                  flex: "0 0 var(--basis)",
                  "--basis": cardBasis,
                  scrollSnapAlign: "start",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {showBlank ? (
                  <BlankImage />
                ) : (
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.shortTitle ?? item.title}
                    loading="lazy"
                    onError={() => setFailed((prev) => ({ ...prev, [item.id]: true }))}
                    sx={{
                      "&&": {
                        ...imageSizeSx,
                        objectFit: "cover",
                        display: "block",
                      },
                    }}
                  />
                )}

                <CardContent
                  sx={{
                    boxSizing: "border-box",
                    height: TEXT_BLOCK_HEIGHT,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    pt: "16px",
                    pr: { xs: "16px", sm: "24px" },
                    pl: { xs: "16px", sm: "24px" },
                    pb: "20px",
                    "&:last-child": { pb: "20px" },
                  }}
                >
                  <Typography
                    sx={{
                      flexShrink: 0,
                      textTransform: "uppercase",
                      fontWeight: 500,
                      fontSize: { xs: "0.8rem", sm: "0.9375rem" },
                      lineHeight: "26px",
                      letterSpacing: "0.46px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.shortTitle ?? item.title}
                  </Typography>

                  {/* Description scrolls vertically when it doesn't fit */}
                  <Typography
                    component="div"
                    tabIndex={0}
                    sx={{
                      flex: 1,
                      minHeight: 0,
                      overflowY: "auto",
                      overscrollBehavior: "contain",
                      scrollbarWidth: "thin",
                      pr: 0.5,
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "18px",
                      letterSpacing: 0,
                    }}
                  >
                    {item.caption ?? item.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        <IconButton aria-label="Next" onClick={() => scroll(1)} disabled={atEnd} sx={arrowSx}>
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
}