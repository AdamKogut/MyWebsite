import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Color1, Color2 } from "../Core/Constants/ColorConstants";
import ProfilePic from "../Images/PersonalPicture.jpeg";

export default function AboutMain() {
  const windowHeight = window.innerHeight;
  const textHeight = 400;
  const biggerHeight = windowHeight > textHeight ? windowHeight : textHeight;

  React.useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Grid2
      xs={12}
      style={{ position: "relative", height: `${biggerHeight}px` }}
      id="About_Me"
    >
      <h3 style={{ padding: "30px 10px 10px 10px", color: Color2 }}>
        About Me
      </h3>
      <p style={{ padding: "10px" }}>
        I am a software engineer who has experience juggling multiple clients
        along with their varying languages and stacks. My attention to detail,
        eagerness to learn, and perseverance have inspired my helpful and
        collaborative approach to software development. I am driven by my
        passion to solve complex problems and strive to learn new ways of
        solving those problems every day.
      </p>
      <p style={{ padding: "0px 10px 10px 10px" }}>
        My attention to detail and helpfulness have contributed to my success at
        The RND Group. Where I developed for 8 separate projects and clients
        including being the solo developer on 4 of those projects. For one of
        those projects I implemented a shortest distance algorithm for a large
        5000 well medical plate that reduced reagent waste and sped up dispense
        time by over 200%. For a separate project I researched and determined
        the best software stack for a handheld medical device.
      </p>
      <p style={{ padding: "0px 10px 10px 10px" }}>
        I am currently working as a software engineer at The RND Group but I am
        always interested in a challenge. Please reach out to me on LinkedIn to
        connect!
      </p>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="adamkogut"
        data-version="v1"
        style={{ padding: "0px 10px 10px 10px" }}
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://www.linkedin.com/in/adamkogut?trk=profile-badge"
        >
          LinkedIn
        </a>
      </div>
    </Grid2>
  );
}
