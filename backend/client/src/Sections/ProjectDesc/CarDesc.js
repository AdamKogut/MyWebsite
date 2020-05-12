import React, { Component } from "react";
import { Col, Button, Collapse } from "reactstrap";
import "../About.css";
import "../Projects.css";

class CarDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carCollapse: false
    };
  }

  render() {
    return (
      <Col xs={12} className={`color4 paragraph-project`}>
        <h3
          onClick={() =>
            this.setState({ carCollapse: !this.state.carCollapse })}
        >
          CarKeeper
          <Button className="project-expand-button">
            {this.state.carCollapse ? "Close" : "Learn More"}
          </Button>
        </h3>
        <Collapse isOpen={this.state.carCollapse}>
          <p>
            A web app created by 2 classmates and myself to keep track of a
            user's car service history. It supports multiple cars and as many
            services as needed. The app also has notifications so the day before
            a service comes due it notifies the user through email or text but
            only if they opt into the service.
          </p>
          <p>
            The frontend was written in javascript using the React framework
            with the elements being mostly from Material-UI. The server is
            written in javascript using NodeJS and ExpressJS. And finally, the
            database is a javascript wrapper around firebase. The app was also
            hosted on firebase with a shortened link down below.
          </p>
          <Button
            onClick={() =>
              window.open("https://github.com/AdamKogut/Carkeeper")}
            className="project-link-buttons"
          >
            GitHub
          </Button>
          <Button
            onClick={() => window.open("https://bit.ly/CarKeeper")}
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
