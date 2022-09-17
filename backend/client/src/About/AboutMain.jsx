import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import "./About.css";

export default function AboutMain() {
  return (
    <Grid2 xs={12} id="About_Me">
      <h3 id="about-title">About Me</h3>
      <p className="about-paragraph">
        I am a software engineer who has experience juggling multiple clients
        along with their varying languages and stacks. My attention to detail,
        eagerness to learn, and perseverance have inspired my helpful and
        collaborative approach to software development. I am driven by my
        passion to solve complex problems and strive to learn new ways of
        solving those problems every day.
      </p>
      <p className="about-paragraph">
        My attention to detail and helpfulness have contributed to my success at
        The RND Group. Where I developed for 8 separate projects and clients
        including being the solo developer on 4 of those projects. For one of
        those projects I implemented a shortest distance algorithm for a large
        5000 well medical plate that reduced reagent waste and sped up dispense
        time by over 200%. For a separate project I researched and determined
        the best software stack for a handheld medical device.
      </p>
      <p className="about-paragraph">
        I am currently working as a software engineer at The RND Group but I am
        always interested in a challenge. Please reach out to me on LinkedIn to
        connect!
      </p>
    </Grid2>
  );
}
