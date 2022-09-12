import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Color5 } from "../Core/Constants/ColorConstants";
import DrawerContent from "./DrawerContent";
import { DrawerWidth } from "../Core/Constants/SizeConstants";
import useDrawerSwitch from "../Core/Contexts/DrawerContext";

export default function DrawerMain(props) {
  const { window, isOpen, setIsOpen } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: DrawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DrawerWidth,
            backgroundColor: Color5
          }
        }}
      >
        <DrawerContent closeModal={() => setIsOpen(!isOpen)} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DrawerWidth,
            backgroundColor: Color5
          }
        }}
        open
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
}
