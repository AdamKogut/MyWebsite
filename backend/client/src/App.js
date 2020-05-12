import React, { Component } from "react";
import { Container } from "reactstrap";
import HomePage from "./Sections/HomePage";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Work from "./Sections/Work";
import Contact from "./Sections/Contact";
import OtherInfo from "./Sections/OtherInfo";
import MobileMain from "./Sections/MobileMain";
import "./App.css";

class App extends Component {
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
        <Container className="App">
          <div className="scrolling-div-mobile">
            <MobileMain />
            <About />
            <Projects />
            <Work />
            <OtherInfo />
            <Contact />
          </div>
        </Container>
      );
    } else {
      return (
        <Container className="App">
          <div className="scrolling-div">
            <HomePage />
            <About />
            <Projects />
            <Work />
            <OtherInfo />
            <Contact />
          </div>
        </Container>
      );
    }
  }
}

export default App;
