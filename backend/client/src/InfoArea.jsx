import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Color5, Color2 } from "./Core/Constants/ColorConstants";
import { DrawerWidth } from "./Core/Constants/SizeConstants";
import HomeMain from "./Home/HomeMain";
import AboutMain from "./About/AboutMain";
import ExperienceMain from "./Experience/ExperienceMain";
import EducationMain from "./Education/EducationMain";

export default function InfoArea(props) {
  const { isOpen, setIsOpen } = props;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${DrawerWidth}px)` },
        padding: "0px",
        overflowY: "auto",
        height: "100vh",
        overflowX: "hidden"
      }}
      id="scrolling_div"
    >
      <IconButton
        sx={{
          display: { xs: "block", sm: "none" },
          width: 55,
          height: 55,
          borderRadius: 0,
          position: "fixed",
          left: "10px",
          top: "10px",
          zIndex: "2"
        }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: Color5 + "88" }}
        color="default"
      >
        <MenuIcon fontSize="large" sx={{ color: Color2 }} />
      </IconButton>
      <Grid2 container>
        <HomeMain />
        <AboutMain />
        <ExperienceMain />
        <EducationMain />
      </Grid2>
    </Box>
  );
}
