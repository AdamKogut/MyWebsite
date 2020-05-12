import React, { Component } from "react";
import { Col, Button, Collapse } from "reactstrap";
import "../Projects.css";
import "../About.css";

class RndDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RndGroupCollapse: false
    };
  }

  render() {
    return (
      <Col xs={12} className={`color2 paragraph-project`}>
        <h3
          onClick={() =>
            this.setState({ RndGroupCollapse: !this.state.RndGroupCollapse })}
        >
          The RND Group
          <Button className="project-expand-button">
            {this.state.RndGroupCollapse ? "Close" : "Learn More"}
          </Button>
        </h3>
        <h6
          onClick={() =>
            this.setState({ RndGroupCollapse: !this.state.RndGroupCollapse })}
        >
          May 2019 - Current
        </h6>
        <Collapse isOpen={this.state.RndGroupCollapse}>
          <p>
            In the summer before my senior year, I interned at The RND Group as
            a software development intern. During my time working for them, I
            worked on three major projects: an internal code review tool and two
            tools for the largest current RND Group project.
          </p>
          <p>
            The code review tool was the first project I developed at the
            company. I used it as a way to learn .net and the structure of the
            company's repository.
          </p>
          <p>
            I led a team consisting of myself and two other interns and we were
            tasked with refactoring a larger but older tool where the code
            ballooned. Along with leading the team I also developed the base
            that the other interns built their parts upon.
          </p>
          <p>
            In the third project, I developed a tool requested by the RND
            Group's client. The tool modifies a file that is used to change
            different settings used in the main application. The client has
            already been able to change the values manually by going into the
            file but they wanted to be able to edit it in a GUI format.
          </p>
        </Collapse>
      </Col>
    );
  }
}
export default RndDesc;
