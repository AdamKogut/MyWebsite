import React, { Component } from "react";
import { Col, Button, Collapse } from "reactstrap";
import "../Projects.css";
import "../About.css";

class LillyDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lillyCollapse: false
    };
  }

  render() {
    return (
      <Col xs={12} className={`color2 paragraph-project`}>
        <h3
          onClick={() =>
            this.setState({ lillyCollapse: !this.state.lillyCollapse })}
        >
          Eli Lilly
          <Button className="project-expand-button">
            {this.state.lillyCollapse ? "Close" : "Learn More"}
          </Button>
        </h3>
        <h6
          onClick={() =>
            this.setState({ lillyCollapse: !this.state.lillyCollapse })}
        >
          May 2017 - August 2017
        </h6>
        <Collapse isOpen={this.state.lillyCollapse}>
          <p>
            I worked my freshman onto sophomore summer as a summer replacement
            intern. During my time there I facilitated the proof of concept
            integration of Openshift into Lilly's High-Performance Computing
            which would increase speed and decrease the cost of running servers
            and general operations. I also increased automation by developing a
            program to parse large data into a format that Lilly could use. I
            leveraged Scrum and Agile methodology for creating integration tests
            and improving code and quality items for a document signing program.
          </p>
          <p>
            I also did more management tasks by creating an access roster review
            which helped the company be secure and limit access to documents to
            people that require access. I also revised a supplier management
            plan that provided Lilly and a third party company with better
            clarity of their roles.
          </p>
        </Collapse>
      </Col>
    );
  }
}

export default LillyDesc;
