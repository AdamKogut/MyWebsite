import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Color1, Color4, Color3 } from "../Core/Constants/ColorConstants";
import "./Drawer.css";

export default function DrawerItem(props) {
  const { ItemText, SelectedItem, SetSelectedItem } = props;
  const ref = React.useRef(null);
  const [boxWidth, setBoxWidth] = React.useState(0);

  const ItemId = ItemText.replace(/ /g, "_");

  const IsSelected = ItemId === SelectedItem;

  function RerenderBox() {
    setBoxWidth(ref.current.offsetWidth + 30);
  }

  function ButtonClick() {
    SetSelectedItem(ItemId);
    var topPos = document.getElementById(ItemId).offsetTop;
    document.getElementById("scrolling-div").scrollTo({
      top: topPos,
      behavior: "smooth"
    });
  }

  React.useEffect(() => {
    RerenderBox();
    window.addEventListener("resize", RerenderBox);
    return () => window.removeEventListener("resize", RerenderBox);
  }, []);

  return (
    <Grid2 xs={12}>
      <Button id="drawer-button" onClick={ButtonClick}>
        <Typography
          variant={window.innerWidth > 600 ? "h6" : "h5"}
          id="drawer-button-text"
          gutterBottom
          ref={ref}
        >
          {ItemText}
        </Typography>
        <div
          id="drawer-button-box"
          style={{
            width: boxWidth,
            backgroundColor: IsSelected ? Color3 : Color4
          }}
        />
      </Button>
    </Grid2>
  );
}
