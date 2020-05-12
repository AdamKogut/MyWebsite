import React, { Component } from "react";
import { Col, Button, Collapse } from "reactstrap";
import "../Projects.css";
import "../About.css";

class FranciscanDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      healthCollapse: false
    };
  }

  render() {
    return (
      <Col xs={12} className={`color3 paragraph-project`}>
        <h3
          onClick={() =>
            this.setState({ healthCollapse: !this.state.healthCollapse })}
        >
          Franciscan Alliance
          <Button className="project-expand-button">
            {this.state.healthCollapse ? "Close" : "Learn More"}
          </Button>
        </h3>
        <h6
          onClick={() =>
            this.setState({ healthCollapse: !this.state.healthCollapse })}
        >
          May 2018 - August 2018
        </h6>
        <Collapse isOpen={this.state.healthCollapse}>
          <p>
            I worked at Franciscan Alliance as an intern in their quality
            assurance (QA) area. My task was to upgrade eggplant scripts, which
            are automatic testing scripts to test websites, to accommodate the
            newest version of a third-party app that the company uses. I also
            introduced the testing team to OneNote instead of relying on Word. I
            also helped upgrade the QA team to use a version control service.
          </p>
        </Collapse>
      </Col>
    );
  }
}

export default FranciscanDesc;
