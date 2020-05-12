import React, { Component } from "react";
import {
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Tab, Tabs } from "@material-ui/core";
import "./Links.css";
import history from "./history";

class Links extends Component {
  constructor(props) {
    super(props);

    // gets the number of the page from the url
    let tempTab = history.location.pathname.charAt(1);
    //checks to make sure its in the range and change it if it isn't
    if (tempTab === "" || tempTab > 5 || tempTab < 0) {
      tempTab = 0;
      history.push(`/0`);
    }

    this.state = {
      currTab: tempTab,
      collapsed: false
    };
  }

  prevTime = 0;

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    if (Math.abs(this.prevTime - Date.now()) > 50) {
      if (this.collides("Home")) {
        this.haveOverlapped(0);
      } else if (this.collides("About")) {
        this.haveOverlapped(1);
      } else if (this.collides("Projects")) {
        this.haveOverlapped(2);
      } else if (this.collides("Work")) {
        this.haveOverlapped(3);
      } else if (this.collides("Other")) {
        this.haveOverlapped(4);
      } else if (this.collides("Contact")) {
        this.haveOverlapped(5);
      }
      this.prevTime = Date.now();
    }
  };

  collides = d1 => {
    let d1pos = document.getElementById(d1).getBoundingClientRect();
    let d2pos = document.getElementById("mid-bar").getBoundingClientRect();
    if (d1pos.top < d2pos.top && d1pos.bottom > d2pos.top) {
      return true;
    } else {
      return false;
    }
  };

  haveOverlapped = tabNum => {
    if (tabNum !== this.state.currTab) {
      history.push(`/${tabNum}`);
      this.setState({ currTab: tabNum });
    }
  };

  handleChangeTab = (event, value) => {
    //checks to see which tab was clicked
    if (value === 0) {
      //scrolls to the correct tab smoothly
      window.scrollTo({
        top: document.getElementById("Home").offsetTop,
        behavior: "smooth"
      });
    } else if (value === 1) {
      window.scrollTo({
        top: document.getElementById("About").offsetTop - 40,
        behavior: "smooth"
      });
    } else if (value === 2) {
      window.scrollTo({
        top: document.getElementById("Projects").offsetTop - 50,
        behavior: "smooth"
      });
    } else if (value === 3) {
      window.scrollTo({
        top: document.getElementById("Work").offsetTop - 50,
        behavior: "smooth"
      });
    } else if (value === 4) {
      window.scrollTo({
        top: document.getElementById("Other").offsetTop - 50,
        behavior: "smooth"
      });
    } else if (value === 5) {
      window.scrollTo({
        top: document.getElementById("Contact").offsetTop - 50,
        behavior: "smooth"
      });
    }
    //saves the current tab in the url
    history.push(`/${value}`);
    //sets the state to have the tabs visually change
    this.setState({ currTab: value, collapsed:false });
  };

  render() {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini|Mobile/i.test(
        navigator.userAgent
      ) ||
      width < 768
    ) {
      return (
        <div>
          <Navbar
            color="white"
            light
            style={{
              position: "fixed",
              zIndex: 99,
              top:0,
              left:0,
              width:'100vw'
            }}
          >
            {/* <NavbarBrand className="mr-auto">Adam Kogut</NavbarBrand> */}
            <NavbarToggler
              onClick={() =>
                this.setState({ collapsed: !this.state.collapsed })}
              className="mr-2"
            />
              <Collapse isOpen={this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink onClick={() => this.handleChangeTab("none", 0)}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={() => this.handleChangeTab("none", 1)}>
                      About Me
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={() => this.handleChangeTab("none", 2)}>
                      Projects
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={() => this.handleChangeTab("none", 3)}>
                      Work Experience
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={() => this.handleChangeTab("none", 4)}>
                      Other Info
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={() => this.handleChangeTab("none", 5)}>
                      Contact Me
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
          </Navbar>
          <div className="mid-bar" id="mid-bar" />
        </div>
      );
    } else {
      return (
        <div>
          <Row className="homepage-links">
            <Tabs
              value={this.state.currTab}
              onChange={this.handleChangeTab}
              className="tab-links"
              indicatorColor="primary"
            >
              <Tab label="Home" />
              <Tab label="About Me" />
              <Tab label="Projects" />
              <Tab label="Work Experience" />
              <Tab label="Other Info" />
              <Tab label="Contact Me" />
            </Tabs>
          </Row>
          <div className="white-background" />
          <div className="main-links">
            <Tabs
              value={this.state.currTab}
              onChange={this.handleChangeTab}
              className="tab-links"
              indicatorColor="primary"
            >
              <Tab label="Home" />
              <Tab label="About Me" />
              <Tab label="Projects" />
              <Tab label="Work Experience" />
              <Tab label="Other Info" />
              <Tab label="Contact Me" />
            </Tabs>
          </div>
          <div className="mid-bar" id="mid-bar" />
        </div>
      );
    }
  }
}

export default Links;
