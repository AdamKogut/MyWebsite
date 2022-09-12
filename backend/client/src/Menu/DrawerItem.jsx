import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Color1, Color4, Color3 } from "../Core/Constants/ColorConstants";
import { useLayoutEffect } from "react";

export default function DrawerItem(props) {
  const { ItemText, SelectedItem, SetSelectedItem } = props;
  const ref = React.useRef(null);
  const [boxWidth, setBoxWidth] = React.useState(0);

  const ItemId = ItemText.replace(/ /g, "_");

  const IsSelected = ItemId === SelectedItem;

  useLayoutEffect(
    () => {
      setBoxWidth(ref.current.offsetWidth + 30);
    },
    [window.innerWidth]
  );

  return (
    <Grid2 xs={12}>
      <Button
        sx={{
          color: Color1,
          width: "220px",
          height: window.innerWidth > 600 ? "50px" : "80px"
        }}
        onClick={() => SetSelectedItem(ItemId)}
        style={{ textAlign: "left" }}
      >
        <Typography
          variant={window.innerWidth > 600 ? "h6" : "h5"}
          style={{ zIndex: 2, position: "absolute", left: "4px", top: "7px" }}
          gutterBottom
          ref={ref}
        >
          {ItemText}
        </Typography>
        <div
          style={{
            position: "absolute",
            width: boxWidth,
            height: "15px",
            backgroundColor: IsSelected ? Color3 : Color4,
            top: "25px",
            left: "20px",
            zIndex: 1
          }}
        />
      </Button>
    </Grid2>
  );
}
