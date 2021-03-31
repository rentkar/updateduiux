import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import firebase from '../../firebase'
import { Button, Card, Col, Divider, Form, Input, message, Row } from 'antd';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo_trans from '../../images/logo_trans.png';
import 'antd/dist/antd.css';

import './Login.css';
import FadeIn from 'react-fade-in';


class LoginForm extends Component
{
	
  state = {
    phone: '+91',
    isAction: false,
    code: '',
    verificationId: '',
    isLoading: false
  }

  componentMount() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
    {
       size:"invisible"
    });
  } 

  onsubmit = () => {
    const { phone } = this.state

    if (!phone) {
      message.warn("Phone number is empty")
      return
    }

    this.setState({isLoading: true})

    const phoneNumber = this.state.phone;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(confirmResult => {
        this.setState({verificationId: confirmResult.verificationId, isAction: true})
        window.confirmationResult = confirmResult;
        message.success("Code sent")
        this.setState({isLoading: false})
      })
      .catch(error => {
        message.error(error)
        this.setState({isLoading: false})
      });
  }

  onconfirm = () => {
    const {code} = this.state

    if (!code) {
      message.warn("Code is empty")
      return
    }

    this.setState({isLoading: true})

    window.confirmationResult.confirm(code).then(function(result){
      console.log(result)
      message.success("Sign in successfully")
      this.setState({isLoading: false})
    })
    .catch((error) => {
      console.log(error)
      if (error.code !== undefined) {
          message.error("Code is wrong")
      }
      this.setState({isLoading: false})
    })
  }

	render ()
	{
		const {isAction, phone, code, isLoading} = this.state

  const viewSignIn = (
      <div className='login'>
        <p>Enter your Mobile Number to Login/Sign Up</p>
        <Divider />
        <form>
          <Form.Item>
            <Input 
              id="recaptcha-container" className='inpt'
              onChange={(e) => this.setState({phone: e.target.value})}
              value={phone}
              placeholder="Phone number with country code" />
          </Form.Item>
          <Form.Item>
            <Button className='btn'
              loading={isLoading}
              onClick={() => this.onsubmit()} 
              type="primary">Send OTP</Button>
          </Form.Item>
        </form>
      </div>
    )
    
    const viewVerification = (
      <div className='login'>
        <p>Please Enter the OTP sent to you!</p>
        <Divider />
        <Form layout="vertical">
          <Form.Item >
            <Input 
              id="recaptcha-container" className="inpt"
              onChange={(e) => this.setState({code: e.target.value})} 
              value={code}
              placeholder="6-digit verification code" />
          </Form.Item>
          <Form.Item>
            <Button className='btn' 
              loading={isLoading}
              type="primary" 
              onClick={() => this.onconfirm()}>Confirm OTP</Button>
          </Form.Item>
        </Form>
      </div>
    )

		return (
			<Modal className='login__modal'
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <FadeIn>
                        <div className="loginnav">
                        <img className='login-image' src={logo_trans}></img>
                        <button className="cross" onClick={this.props.onHide}><i class="far fa-times-circle"></i></button>
                        </div>
					  <Row align="middle" justify="center">
          <div>
                {
                  isAction ? viewVerification : viewSignIn
                }
              </div>
          </Row>
				</FadeIn>
			</Modal>
		);
	}

}

export default LoginForm