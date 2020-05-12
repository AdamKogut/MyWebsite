import React, { Component } from "react";
import { Row } from "reactstrap";
import PairDesc from "./ProjectDesc/PairDesc";
import CarDesc from "./ProjectDesc/CarDesc";
import PersonalDesc from "./ProjectDesc/PersonalDesc";
import PlanDesc from "./ProjectDesc/PlanDesc";
import CookDesc from "./ProjectDesc/CookDesc";
import "./About.css";
import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairCollapse: false,
      personalCollapse: false,
      carCollapse: false,
      planCollapse: false,
      cookCollapse: false
    };
  }

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
      <div
        className={ifMobile ? "about-div-mobile" : "about-div"}
        id="Projects"
      >
        <h1>Personal Projects</h1>
        <Row className="projects-rows">
          <PersonalDesc />
          <PairDesc />
        </Row>
        <Row className="projects-rows">
          <CarDesc />
          <PlanDesc />
        </Row>
        <Row className="projects-rows">
          <CookDesc />
        </Row>
      </div>
    );
  }
}

export default Projects;
