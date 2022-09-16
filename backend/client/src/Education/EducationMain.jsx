import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Color2 } from "../Core/Constants/ColorConstants";

export default function EducationMain() {
  return (
    <Grid2
      xs={12}
      style={{
        position: "relative",
        display: "flex",
        alignContent: "baseline"
      }}
      id="Education"
      container
    >
      <Grid2 xs={12}>
        <h3 style={{ padding: "80px 10px 10px 10px", color: Color2 }}>
          Education
        </h3>
      </Grid2>
      <Grid2 xs={12} md={8}>
        <p style={{ padding: "0px 15px" }}>
          I went to school at Purdue University from August 2016 to May 2020
          where I came out with a Bachelors of Science in Computer Science with
          concentrations in Software Engineering and Database Management.
        </p>
      </Grid2>
    </Grid2>
  );
}
