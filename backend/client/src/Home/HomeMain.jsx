import React from "react";
import ProfilePic from "../Images/PersonalPicture.jpeg";

export default function HomeMain() {
  console.log(window.innerHeight);
  return (
    <div style={{ position: "relative" }}>
      <img
        src={ProfilePic}
        alt="Portrait of Adam Kogut"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%,0%)",
          zIndex: "1",
          height: "100vh"
        }}
      />
    </div>
  );
}
