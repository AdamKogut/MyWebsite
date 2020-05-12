import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import BackgroundImage from "../Images/laurent-peignault-119950-unsplash.jpg";
import "./HomePage.css";
import Links from "../Links";

class HomePage extends Component {
  render() {
    return (
      <div className="container-div" id="Home">
        <img
          className="home-background-image-mobile"
          src={BackgroundImage}
          alt="Background Computer"
          width="NATURAL WIDTH"
          height="NATURAL HEIGHT"
        />
        <Row className="homepage-main-name">
          <Col>
            <span className="homepage-name">Adam Kogut</span>
            <br />
            <span className="homepage-title">Software Engineer</span>
          </Col>
        </Row>
        <Links />
      </div>
    );
  }
}

export default HomePage;
