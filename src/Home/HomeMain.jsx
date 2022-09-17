import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import ProfilePic from "../Images/PersonalPicture.jpeg";
import "./HomeMain.css";

export default function HomeMain() {
  return (
    <Grid2 xs={12} id="Home">
      <h1 id="name">Adam Kogut</h1>
      <h3 id="occupation">Software Engineer</h3>
      <img src={ProfilePic} alt="Portrait of Adam Kogut" id="profile-picture" />
    </Grid2>
  );
}
