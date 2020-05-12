import React, { Component } from "react";
import { Col, Button, Collapse } from "reactstrap";
import "../About.css";
import "../Projects.css";

class CarDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planCollapse: false
    };
  }

  render() {
    return (
      <Col xs={12} className={`color1 paragraph-project`}>
        <h3
          onClick={() =>
            this.setState({ planCollapse: !this.state.planCollapse })}
        >
          MyPurdue Planner 2.0
          <Button className="project-expand-button">
            {this.state.planCollapse ? "Close" : "Learn More"}
          </Button>
        </h3>
        <Collapse isOpen={this.state.planCollapse}>
          <p>
            A website created by myself and four other undergrad students at the
            2016 Hello World Hackathon at Purdue University. The original
            MyPurdue Planner helps Purdue students schedule a four-year class
            curriculum but it does it in a slow and bad user experience. Because
            of this, we created MyPurdue Plan 2.0 using angular and plain HTML.
          </p>
          <Button
            onClick={() =>
              window.open("https://github.com/AdamKogut/MyPurdue-Planner-2.0")}
            className="project-link-buttons"
          >
            GitHub
          </Button>
          <Button
            onClick={() => window.open("https://bit.ly/MPP_2")}
            className="project-link-buttons"
          >
            Webpage
          </Button>
        </Collapse>
      </Col>
    );
  }
}

export default CarDesc;
