import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DrawerItem from "./DrawerItem";
import { Color1 } from "../Core/Constants/ColorConstants";

export default function DrawerContent(props) {
  const { closeModal } = props;
  const [selectedItem, setSelectedItem] = React.useState("Home");

  return (
    <div style={{ height: "100vh" }}>
      <Grid2
        container
        sx={{
          padding: "8px",
          height: "calc(100vh - 60px)",
          alignContent: "flex-start"
        }}
      >
        <Grid2 xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton onClick={closeModal}>
            <ArrowBackIosNewIcon fontSize="large" sx={{ color: Color1 }} />
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
      </Grid2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <IconButton
          onClick={() => window.open("https://github.com/AdamKogut", "_blank")}
        >
          <GitHubIcon fontSize="large" sx={{ color: Color1 }} />
        </IconButton>
        <IconButton
          onClick={() =>
            window.open("https://www.linkedin.com/in/adamkogut/", "_blank")}
        >
          <LinkedInIcon fontSize="large" sx={{ color: Color1 }} />
        </IconButton>
      </div>
    </div>
  );
}
