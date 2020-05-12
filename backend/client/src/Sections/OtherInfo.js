import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./About.css";
import "./OtherInfo.css";
import "./Projects.css";

class OtherInfo extends Component {
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
      <div className={ifMobile ? "about-div-mobile" : "about-div"} id="Other">
        <h1>Other Information</h1>
        <Row style={{ marginLeft: "10px" }}>
          <Col xs={12} sm={8}>
            <Row
              className="color1 info-paragraphs"
              style={{ paddingLeft: "30px", paddingRight: "30px" }}
            >
              <Row>
                <h5>Workshops and Trainings</h5>
              </Row>
              <Row>
                <h6>Techpoint Xtern Bootcamp</h6>
                <p>
                  The Xtern Bootcamp was a three-week workshop to introduce
                  participants to industry web development practices. We were
                  taught Javscript, HTML, CSS, and React using real life use
                  cases and projects. During that time we were also taught basic
                  Scrum and Agile from hands on interaction and mini projects
                  that were use cases that we might see in industry.
                </p>
              </Row>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <div
                  className="color4 info-paragraphs"
                  style={{
                    marginLeft: "-15px",
                    paddingLeft: "15px",
                    paddingRight: "15px"
                  }}
                >
                  <h5>Education</h5>
                  <p style={{ marginLeft: "10px" }}>
                    Purdue University
                    <br />
                    West Lafayette, IN
                    <br />
                    Expected Graduation: May 2020
                    <br />
                    B.S. in Computer Science
                    <br />
                    GPA: 3.44
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div
                  className="color3 info-paragraphs"
                  style={{
                    marginLeft: "-15px",
                    paddingLeft: "15px",
                    paddingRight: "15px"
                  }}
                >
                  <h5>Skills</h5>
                  <p>
                    I am knowledgeable in Java, Javascript, React, C/C++, HTML,
                    CSS. I also have soft skills in leadership, public speaking,
                    critical thinking, problem solving, and I work well in a
                    team environment.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="color2 info-paragraphs-mobile"
          >
            <h5>ExtraCurricular Activities</h5>
            <p>
              Intramural Soccer Captain
              <br />
              Aug 2016-December 2016
              <br />
              <br />
              Earhart Itasca Club member at Purdue
              <br />
              September 2016 - May 2017
              <br />
              <br />
              ACM SIG Applications
              <br />
              September 2016 - December 2016
              <br />
              <br />
              FIRST Team 1741 Red Alert Robotics
              <br />
              June 2012 - June 2016
              <br />
              Strategy Captain
              <br />
              August 2014 - 2016
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OtherInfo;
