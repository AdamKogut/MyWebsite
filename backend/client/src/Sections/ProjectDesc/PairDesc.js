import React, { Component } from "react";
import { Col, Button, Collapse } from "reactstrap";
import "../About.css";
import "../Projects.css";

class PairDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairCollapse: false
    };
  }

  doNothing = () => {
    console.log("");
  };

  render() {
    return (
      <Col xs={12} className={`color2 paragraph-project`}>
        <h3
          onClick={() =>
            this.setState({ pairCollapse: !this.state.pairCollapse })}
        >
          Pair
          <Button className="project-expand-button">
            {this.state.pairCollapse ? "Close" : "Learn More"}
          </Button>
        </h3>
        <Collapse isOpen={this.state.pairCollapse}>
          <p>
            A web app created by me and four of my classmates for my CS307
            software engineering class at Purdue University. The frontend is
            written in javascript using the React framework and the elements are
            from Material-UI, the server is written in Javascript using NodeJS
            and ExpressJS and the database is in Firebase. The app is also
            hosted in firebase with a shortened link at the end of the readme.
          </p>
          <p>
            It is a web app that is supposed to help interns find other interns
            to live with during their time at their internship. The app supplies
            many of the functionalities that an intern would need to find
            roommates. It has chats, profiles that the intern can find out their
            percentage match at, housing listings, and the ability to save those
            houses to a chat for everyone in the chat to look at. In the company
            chats the company chooses moderators that can ban, unban, kick, and
            even review complaints that other interns have submitted.
          </p>
          <Button
            onClick={() => window.open("https://github.com/AdamKogut/Pair")}
            className="project-link-buttons"
          >
            GitHub
          </Button>
          <Button
            onClick={() => window.open("https://bit.ly/PairInternHousing")}
            className="project-link-buttons"
          >
            Webpage
          </Button>
        </Collapse>
      </Col>
    );
  }
}

export default PairDesc;
