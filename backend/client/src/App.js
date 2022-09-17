import React from "react";
import Box from '@mui/material/Box';
import DrawerMain from "./Menu/DrawerMain";
import InfoArea from "./InfoArea";
import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    var scrollpos = sessionStorage.getItem('scrollpos');
    if (scrollpos) {
      document.getElementById("scrolling-div").scrollTo({ top: scrollpos });
      sessionStorage.removeItem('scrollpos');
    }

    document.getElementById("scrolling-div").addEventListener("scroll", () => {
      sessionStorage.setItem('scrollpos', document.getElementById("scrolling-div").scrollTop)
    });
  }, []);

  return (
    <Box id="PageBox">
      <DrawerMain isOpen={isOpen} setIsOpen={setIsOpen}/>
      <InfoArea isOpen={isOpen} setIsOpen={setIsOpen}/>
    </Box>
  )
}
