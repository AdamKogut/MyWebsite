import React from "react";
import Box from '@mui/material/Box';
import DrawerMain from "./Menu/DrawerMain";
import "./App.css";
import InfoArea from "./InfoArea";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box sx={{display:'flex'}}>
      <DrawerMain isOpen={isOpen} setIsOpen={setIsOpen}/>
      <InfoArea isOpen={isOpen} setIsOpen={setIsOpen}/>
    </Box>
  )
}
