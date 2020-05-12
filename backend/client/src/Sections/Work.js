import React, { Component } from "react";
import { Row } from "reactstrap";
import FranciscanDesc from './WorkDesc/FranciscanDesc';
import LillyDesc from './WorkDesc/LillyDesc';
import RndDesc from './WorkDesc/RndDesc';
import "./About.css";

class Work extends Component {
  render() {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    let ifMobile = false;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini|Mobile/i.test(
        navigator.userAgent
      ) ||
      width < 768
    )
      ifMobile = true;
    return (
      <div className={ifMobile?"about-div-mobile":"about-div"} id="Work">
        <h1>Work Experience</h1>
        <Row className="projects-rows">
          <RndDesc />
          <FranciscanDesc />
          <LillyDesc />
        </Row>
      </div>
    );
  }
}

export default Work;
