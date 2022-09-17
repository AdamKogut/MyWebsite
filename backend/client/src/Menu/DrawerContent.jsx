import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DrawerItem from "./DrawerItem";
import Resume from "../Images/AdamKogutResume.pdf";
import { Button } from "@mui/material";
import "./Drawer.css";

export default function DrawerContent(props) {
  const { closeModal } = props;
  const [selectedItem, setSelectedItem] = React.useState("Home");

  return (
    <div id="drawer-div">
      <Grid2 container id="drawer-container">
        <Grid2 xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton onClick={closeModal}>
            <ArrowBackIosNewIcon
              fontSize="large"
              className="icon-button-color"
            />
          </IconButton>
        </Grid2>
        <DrawerItem
          ItemText="Home"
          SelectedItem={selectedItem}
          SetSelectedItem={setSelectedItem}
        />
        <DrawerItem
          ItemText="About Me"
          SelectedItem={selectedItem}
          SetSelectedItem={setSelectedItem}
        />
        <DrawerItem
          ItemText="Experience"
          SelectedItem={selectedItem}
          SetSelectedItem={setSelectedItem}
        />
        <DrawerItem
          ItemText="Education"
          SelectedItem={selectedItem}
          SetSelectedItem={setSelectedItem}
        />
      </Grid2>
      <div className="center-div">
        <a href={Resume} download>
          <Button id="resume-button">My Resume</Button>
        </a>
      </div>
      <div className="center-div">
        <IconButton
          onClick={() => window.open("https://github.com/AdamKogut", "_blank")}
        >
          <GitHubIcon fontSize="large" className="icon-button-color" />
        </IconButton>
        <IconButton
          onClick={() =>
            window.open("https://www.linkedin.com/in/adamkogut/", "_blank")}
        >
          <LinkedInIcon fontSize="large" className="icon-button-color" />
        </IconButton>
      </div>
    </div>
  );
}
