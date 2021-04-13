import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import firebase from "../../firebase";
import { Button, Card, Col, Divider, Form, Input, message, Row } from "antd";
import logo_trans from "../../images/logo_trans.png";
import "antd/dist/antd.css";

import "./Login.css";
import FadeIn from "react-fade-in";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e, reason) {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
    this.props.onHide();
  }

  render() {
    return (
      <Snackbar
        open={this.state.open}
        autoHideDuration={5000}
        onClose={this.handleClose}
      >
        <Alert severity={this.props.severity} onClose={this.handleClose}>
          {this.props.text}
        </Alert>
      </Snackbar>
    );
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "+91",
      isAction: false,
      code: "",
      verificationId: "",
      isLoading: false,
      alertBox: "",
      toast: "",
    };
    this.handleHide = this.handleHide.bind(this);
  }

  onsubmit = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
    const { phone } = this.state;
    if (!phone) {
      this.setState({
        toast: (
          <Toast
            severity="error"
            text="Phone number can't be empty"
            onHide={this.handleHide}
          />
        ),
      });
      return;
    }

    this.setState({ isLoading: true });

    const phoneNumber = this.state.phone;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmResult) => {
        this.setState({
          toast: (
            <Toast
              severity="success"
              text="Code has been sent"
              onHide={this.handleHide}
            />
          ),
        });

        this.setState({
          verificationId: confirmResult.verificationId,
          isAction: true,
        });
        window.confirmationResult = confirmResult;
        message.success("Code sent");
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        // message.error(error);
        this.setState({
          toast: (
            <Toast severity="error" text={error.message} onHide={this.handleHide} />
          ),
        });
        this.setState({ isLoading: false });
      });
  };

  onconfirm = () => {
    const { code } = this.state;

    if (!code) {
      message.warn("Code is empty");

      return;
    }

    this.setState({ isLoading: true });

    window.confirmationResult
      .confirm(code)
      .then(function(result) {
        console.log(result);
        message.success("Sign in successfully");
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        if (error.code !== undefined) {
          message.error("Code is wrong");
        }
        this.setState({ isLoading: false });
      });
  };

  refreshPage() {
    window.location.reload(false);
  }

  handleHide() {
    this.setState({ toast: "" });
  }

  render() {
    const { isAction, phone, code, isLoading, open } = this.state;

    const viewSignIn = (
      <div className="login">
        <p>Enter your Mobile Number to Login/Sign Up</p>
        {this.state.toast}
        <Divider />
        <form>
          <Form.Item>
            <Input
              id="recaptcha-container"
              className="inpt"
              onChange={(e) => this.setState({ phone: e.target.value })}
              value={phone}
              placeholder="Phone number with country code"
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="btn"
              loading={isLoading}
              onClick={() => this.onsubmit()}
              type="primary"
            >
              Send OTP
            </Button>
          </Form.Item>
        </form>
      </div>
    );

    const viewVerification = (
      <div className="login">
        <p>Please Enter the OTP sent to you!</p>
        <Divider />
        <Form layout="vertical">
          <Form.Item>
            <Input
              id="recaptcha-container"
              className="inpt"
              onChange={(e) => this.setState({ code: e.target.value })}
              value={code}
              placeholder="6-digit verification code"
            />
          </Form.Item>
          <div className="wrong__number">
            <div className="resend__otp">Resend OTP</div>
            <div onClick={() => this.refreshPage()} className="change__number">
              Change Number
            </div>
          </div>
          <Form.Item>
            <Button
              className="btn"
              loading={isLoading}
              type="primary"
              onClick={() => this.onconfirm()}
            >
              Confirm OTP
            </Button>
          </Form.Item>
        </Form>
      </div>
    );

    return (
      <Modal
        className="login__modal"
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <FadeIn>
          <div className="loginnav">
            <img className="login-image" src={logo_trans}></img>
            <button className="cross" onClick={this.props.onHide}>
              <i class="far fa-times-circle"></i>
            </button>
          </div>
          <Row align="middle" justify="center">
            <div>{isAction ? viewVerification : viewSignIn}</div>
          </Row>
        </FadeIn>
      </Modal>
    );
  }
}

export default LoginForm;
