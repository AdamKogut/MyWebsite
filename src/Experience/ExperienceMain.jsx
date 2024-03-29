import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Color2 } from "../Core/Constants/ColorConstants";
import ExperienceItem from "./ExperienceItem";
import { FranciscanProps, RndGroupProps } from "./ExperienceInfo";
import "./Experience.css";

export default function ExperienceMain() {
  return (
    <Grid2 xs={12} id="Experience" container>
      <Grid2 xs={12}>
        <h3 id="experience-title">Experience</h3>
      </Grid2>
      <ExperienceItem {...RndGroupProps} />
      <Grid2 xs={12} style={{ height: "60px" }} />
      <ExperienceItem {...FranciscanProps} />
    </Grid2>
  );
}
