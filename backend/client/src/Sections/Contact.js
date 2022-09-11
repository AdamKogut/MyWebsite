import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import "./About.css";
import "./Contact.css";
import Axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.recaptchaRef = React.createRef();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      captcha: null,
      keys: {
        emailjs: "",
        recaptcha: ""
      }
    };
  }

  submitButton = e => {
    e.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.message !== "" &&
      this.state.captcha !== null
    ) {
      var service_id = "default_service";
      var template_id = "personal_contact";
      axios
        .post("https://api.emailjs.com/api/v1.0/email/send", {
          template_params: this.state,
          user_id: this.keys.emailjs,
          template_id: template_id,
          service_id: service_id
        })
        .then(response => {
          if (response.data === "OK") {
            alert("Success!");
            this.recaptchaRef.current.reset();
            this.setState({
              name: "",
              email: "",
              phone: "",
              message: "",
              captcha: null
            });
          } else {
            alert("Submit failed, please try again");
          }
        });
    } else {
      alert(
        "Please fill out all parts of the form to submit the contact me form"
      );
    }
  };

  changeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  keys = {};

  componentDidMount = () => {
    if (this.state.keys.recaptcha == "")
    {
      Axios.get("/api/keys").then(response => {
        this.setState({
          ...this.state, keys: {
            emailjs: response.data.ejs,
            recaptcha: response.data.rca
          }
        });
      });
    }
  };

  render() {
    if (this.state.keys.recaptcha == "") {
      return null;
    }
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    let ifMobile = false;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini|Mobile/i.test(
        navigator.userAgent
      ) ||
      width < 768
    )
      ifMobile = true;
    return (
      <div className={ifMobile ? "about-div-mobile" : "about-div"} id="Contact">
        <h1>Contact Me</h1>
        <Form className="contact-info-form color2" onSubmit={this.submitButton}>
          <FormGroup row>
            <Label for="name" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                type="name"
                name="name"
                id="name"
                value={this.state.name}
                placeholder="Required"
                onChange={this.changeValue}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" xs={12} sm={2}>
              Email
            </Label>
            <Col xs={12} sm={10}>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Required"
                onChange={this.changeValue}
                value={this.state.email}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Phone" xs={12} sm={2}>
              Phone Number
            </Label>
            <Col sm={10}>
              <Input
                type="Phone"
                name="phone"
                id="Phone"
                placeholder="Optional"
                onChange={this.changeValue}
                value={this.state.phone}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="message" sm={2}>
              Message
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Required"
                onChange={this.changeValue}
                value={this.state.message}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{ size: 10, offset: 2 }}>
              <ReCAPTCHA
                ref={this.recaptchaRef}
                sitekey={this.state.keys.recaptcha}
                onChange={e => this.setState({ captcha: e })}
                onExpired={() => this.setState({ captcha: null })}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Contact;
