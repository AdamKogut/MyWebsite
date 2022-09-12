import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Color1 } from "./Core/Constants/ColorConstants";
import { DrawerWidth } from "./Core/Constants/SizeConstants";
import HomeMain from "./Home/HomeMain";

export default function InfoArea(props) {
  const { isOpen, setIsOpen } = props;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${DrawerWidth}px)` },
        padding: "0px"
      }}
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
        style={{ backgroundColor: Color1 }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <HomeMain />
    </Box>
  );
}
