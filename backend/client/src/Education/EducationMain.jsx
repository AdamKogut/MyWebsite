import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import "./Education.css";

export default function EducationMain() {
  return (
    <Grid2 xs={12} id="Education" container>
      <Grid2 xs={12}>
        <h3 id="education-title">Education</h3>
      </Grid2>
      <Grid2 xs={12} md={8}>
        <p id="education-paragraph">
          I went to school at Purdue University from August 2016 to May 2020
          where I came out with a Bachelors of Science in Computer Science with
          concentrations in Software Engineering and Database Management.
        </p>
      </Grid2>
      <Grid2 xs={12} className="education-padding" />
    </Grid2>
  );
}
