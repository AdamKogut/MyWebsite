import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Color5 } from "./Core/Constants/ColorConstants";
import { DrawerWidth } from "./Core/Constants/SizeConstants";
import HomeMain from "./Home/HomeMain";
import AboutMain from "./About/AboutMain";
import ExperienceMain from "./Experience/ExperienceMain";
import EducationMain from "./Education/EducationMain";
import "./InfoArea.css";

export default function InfoArea(props) {
  const { isOpen, setIsOpen } = props;

  return (
    <Box
      component="main"
      sx={{
        width: { sm: `calc(100% - ${DrawerWidth}px)` }
      }}
      id="scrolling-div"
    >
      <IconButton
        sx={{
          display: { xs: "block", sm: "none" }
        }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: Color5 + "88" }}
        color="default"
        id="hamburger-button"
      >
        <MenuIcon fontSize="large" id="hamburger-icon" />
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
