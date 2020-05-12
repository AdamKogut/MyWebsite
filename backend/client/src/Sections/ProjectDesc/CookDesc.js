import React, { Component } from "react";
import { Col, Button, Collapse } from "reactstrap";
import "../About.css";
import "../Projects.css";

class CarDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookCollapse: false
    };
  }

  render() {
    return (
      <Col xs={12} className={`color2 paragraph-project`}>
        <h3
          onClick={() =>
            this.setState({ cookCollapse: !this.state.cookCollapse })}
        >
          Eat Your Heart Out
          <Button className="project-expand-button">
            {this.state.cookCollapse ? "Close" : "Learn More"}
          </Button>
        </h3>
        <Collapse isOpen={this.state.cookCollapse}>
          <p>
            This project was created by a friend and me at the 2017 HackGT 36
            hour hackathon, it is a website to hold all of the recipes that a
            college student, who doesn't have many ingredients, might need to
            survive college life. It was created with React and Firebase.
          </p>
          <Button
            onClick={() =>
              window.open("https://github.com/AdamKogut/FamilyCookbook")}
            className="project-link-buttons"
          >
            GitHub
          </Button>
          <Button
            onClick={() =>
              window.open("https://cookbook-94ca3.firebaseapp.com/")}
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
