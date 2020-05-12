import React, { Component } from "react";
import xtern from "../Images/XternLogoTechPoint.jpg";
import Lilly from "../Images/Eli_Lilly_and_Company.svg.png";
import Franciscan from "../Images/Franciscan_Health_logo.jpg";
import RndGroup from "../Images/RndGroupLogo.png";
import Pair from "../Images/word_right_logo.png";
import { Row, Col } from "reactstrap";
import "./About.css";
import "./Projects.css";

class About extends Component {
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
      <div className="about-div" id="About">
        <div>
          <h1>About Me</h1>
          <br />
          <h3>
            Hi! My name is Adam Kogut and I love making beautiful programs and
            working with people!
          </h3>
          <br />
          <Row>
            <p className="paragraph-about color2">
              I am a Software Engineer that has just graduated from Purdue
              university in the spring of 2020. Even though I have already
              graduated I still believe that you can still learn something new
              every day. Contact me{" "}
              <a
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("Contact").offsetTop - 50,
                    behavior: "smooth"
                  })}
                style={{ color: "#99F" }}
              >
                here
              </a>.
            </p>
          </Row>
          <Row>
            <Col sm={12} md={8}>
              <Row>
                <Col sm={6}>
                  <img
                    src={xtern}
                    className="image-about"
                    alt="Techpoint Xtern logo"
                    onClick={() =>
                      window.scrollTo({
                        top: document.getElementById("Other").offsetTop - 50,
                        behavior: "smooth"
                      })}
                  />
                </Col>
                <Col sm={6}>
                  <img
                    src={RndGroup}
                    className="image-about"
                    alt="The RND Group Logo"
                    onClick={() =>
                      window.scrollTo({
                        top: document.getElementById("Work").offsetTop - 50,
                        behavior: "smooth"
                      })}
                  />
                </Col>
                <Col sm={6}>
                  <img
                    src={Lilly}
                    className="image-about"
                    alt="Eli Lilly logo"
                    onClick={() =>
                      window.scrollTo({
                        top: document.getElementById("Work").offsetTop - 50,
                        behavior: "smooth"
                      })}
                  />
                </Col>
                <Col sm={6}>
                  <img
                    src={Franciscan}
                    className="image-about"
                    alt="Franciscan Alliance logo"
                    onClick={() =>
                      window.scrollTo({
                        top: document.getElementById("Work").offsetTop - 50,
                        behavior: "smooth"
                      })}
                  />
                </Col>
              </Row>
              <Row>
                <p
                  className={
                    ifMobile ? "paragraph-about-mobile" : "paragraph-about"
                  }
                >
                  Outside of work and business, I am a creative and critically
                  thinking programmer who tries to create personal projects that
                  I can be proud of and that can help people. But at the same
                  time I am also fun-loving and adventurous, my favorite animal
                  is a dog and favorite food is pizza but I can always go for a
                  coffee sometime so{" "}
                  <a
                    onClick={() =>
                      window.scrollTo({
                        top: document.getElementById("Contact").offsetTop - 50,
                        behavior: "smooth"
                      })}
                    style={{ color: "#99F" }}
                  >
                    contact me
                  </a>{" "}
                  and we can set a meeting up sometime to talk whether it be
                  about code, business, or anything else that you would like to
                  talk about.
                </p>
              </Row>
            </Col>
            <Col sm={12} md={4} className="color4 paragraph-about">
              <Row>
                <p>
                  I have many personal projects (that you can view{" "}
                  <a
                    onClick={() =>
                      window.scrollTo({
                        top: document.getElementById("Projects").offsetTop - 50,
                        behavior: "smooth"
                      })}
                    style={{ color: "#99F" }}
                  >
                    here
                  </a>) but the one I am most proud of is the Pair intern
                  housing project because of how large the project was and how
                  it was finished within a semester. Though I feel that all of
                  my work demonstrates my persistence and dedication to making a
                  well programmed and beautiful product as I try to do with the
                  rest of my life.
                </p>
              </Row>
              <Row>
                <img
                  src={Pair}
                  className="image-about"
                  style={{ backgroundColor: "#FFF", borderRadius: "20px" }}
                  alt="Pair Intern Housing logo"
                  onClick={() =>
                    window.scrollTo({
                      top: document.getElementById("Projects").offsetTop - 50,
                      behavior: "smooth"
                    })}
                />
              </Row>
            </Col>
          </Row>
          {/* make images links and hoverable */}
        </div>
      </div>
    );
  }
}

export default About;
