import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo_trans from '../../images/logo_trans.png';
import FadeIn from 'react-fade-in';


import './Login.css';

export const verifyOtp = () => {}

export class OTP extends Component {

    confirm = e => {
        e.preventDefault();
        this.props.show();

    }

    show = () => {
        this.props.onHide();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        return (
            <FadeIn>
            <div className='login'>
                
            <p>Please Enter the OTP sent to you!</p>
                    <div id="in">
                        <input className="inpt" placeholder='Enter your OTP' />
                </div>
                <div className='wrong__number'>
                    <div className='resend__otp'>Resend OTP</div>
                    <div className='change__number' onClick={this.back}>Change Number</div>
                </div>
				        <div className='buttons'>
			            <div className='btn'  onClick={this.confirm}>Login</div>
                </div>
            </div>
            </FadeIn>
        )
    }
}

export default OTP