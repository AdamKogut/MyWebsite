import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Color1 } from "../Core/Constants/ColorConstants";
import ProfilePic from "../Images/PersonalPicture.jpeg";

export default function HomeMain() {
  return (
    <Grid2 xs={12} style={{ position: "relative", height: "100vh" }} id="Home">
      <h1
        style={{
          position: "absolute",
          top: window.innerWidth > 600 ? "5px" : "70px",
          right: "5px",
          zIndex: "2",
          WebkitTextStroke: "1px black",
          WebkitTextFillColor: Color1,
          color: Color1,
          fontSize: "4em"
        }}
      >
        Adam Kogut
      </h1>
      <h3
        style={{
          position: "absolute",
          top: window.innerWidth > 600 ? "80px" : "150px",
          right: "5px",
          zIndex: "2",
          WebkitTextStroke: "1px black",
          WebkitTextFillColor: Color1,
          color: Color1,
          fontSize: "2em"
        }}
      >
        Software Engineer
      </h3>
      <img
        src={ProfilePic}
        alt="Portrait of Adam Kogut"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%,0%)",
          zIndex: "1",
          height: "100vh"
        }}
      />
    </Grid2>
  );
}
