import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DrawerItem from "./DrawerItem";
import { Color1 } from "../Core/Constants/ColorConstants";

export default function DrawerContent(props) {
  const { closeModal } = props;
  const [selectedItem, setSelectedItem] = React.useState("Home");

  return (
    <Grid2 container sx={{ padding: "8px" }}>
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
  );
}
