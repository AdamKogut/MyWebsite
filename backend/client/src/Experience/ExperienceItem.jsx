import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function ExperienceItem(props) {
  const { Title, InfoText, ImageSrc, Timeline, ImageLink } = props;
  const ref = React.useRef(null);
  const [boxWidth, setBoxWidth] = React.useState(0);

  function RerenderBox() {
    setBoxWidth(ref.current.offsetWidth - 5);
  }

  React.useEffect(() => {
    RerenderBox();
    window.addEventListener("resize", RerenderBox);
    return () => window.removeEventListener("resize", RerenderBox);
  }, []);

  const paragraphList = [];
  for (var pItem in InfoText.split("\n")) {
    paragraphList.push(
      <p style={{ padding: "0px 15px", fontSize: ".9em" }} key={pItem}>
        {InfoText.split("\n")[pItem]}
      </p>
    );
  }

  return (
    <React.Fragment>
      <Grid2 xs={12}>
        <h5 style={{ padding: "0px 15px" }}>
          {Title}
        </h5>
      </Grid2>
      <Grid2 xs={12}>
        <h6 style={{ padding: "0px 15px" }}>
          {Timeline}
        </h6>
      </Grid2>
      <Grid2 xs={12} md={8}>
        {paragraphList}
      </Grid2>
      <Grid2 xs={12} md={3} ref={ref} style={{ textAlign: "center" }}>
        <a target="_blank" href={ImageLink}>
          <img
            src={ImageSrc}
            style={{ maxHeight: "150px", maxWidth: boxWidth }}
          />
        </a>
      </Grid2>
      <Grid2 xs={0} md={1} />
    </React.Fragment>
  );
}
