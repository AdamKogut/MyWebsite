import React from "react";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import DrawerMain from "./Menu/DrawerMain";
import Resume from "./Images/AdamKogutResume.pdf";
import InfoArea from "./InfoArea";
import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box sx={{display:'flex'}}>
      <DrawerMain isOpen={isOpen} setIsOpen={setIsOpen}/>
      <InfoArea isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Snackbar open={true} anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
            <Alert severity="info" action={
              <Button color="inherit" size="small" ><a href={Resume} download>DOWNLOAD</a></Button>
            }>
              This webpage is a work in progress and is being updated at this time. Sorry for the inconvience. Click download to download my latest Resume
            </Alert>
          </Snackbar>
    </Box>
  )
}
