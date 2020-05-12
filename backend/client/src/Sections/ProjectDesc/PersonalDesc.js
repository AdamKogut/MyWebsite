import React, { Component } from "react";
import { Col, Button, Collapse } from "reactstrap";
import "../About.css";
import "../Projects.css";

class CarDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalCollapse: false
    };
  }

  render() {
    return (
      <Col xs={12} className={`color1 paragraph-project`}>
        <h3
          onClick={() =>
            this.setState({ personalCollapse: !this.state.personalCollapse })}
        >
          Personal website{" "}
          <Button className="project-expand-button">
            {this.state.personalCollapse ? "Close" : "Learn More"}
          </Button>
        </h3>
        <Collapse isOpen={this.state.personalCollapse}>
          <p>
            This project is my personal website aka the website you are
            currently browsing. It is made using react which is a framework of
            javascript and Reactstrap which is the react version of bootstrap
            and some Material-UI.
          </p>
          <Button
            onClick={() =>
              window.open("https://github.com/AdamKogut/MyWebsite")}
            className="project-link-buttons"
          >
            GitHub
          </Button>
        </Collapse>
      </Col>
    );
  }
}

export default CarDesc;
