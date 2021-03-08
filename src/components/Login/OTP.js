import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo_trans from '../../images/logo_trans.png';


import './Login.css';

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
            <div className='login'>
                
            <p>Please Enter the OTP sent to you!</p>
                    <div id="in">
                        <input className="inpt" placeholder='Enter your OTP'></input>
                </div>
                <div className='wrong__number'>
                    <div className='resend__otp'>Resend OTP</div>
                    <div className='change__number' onClick={this.back}>Change Number</div>
                </div>
				        <div className='buttons'>
			            <div className='btn' ><Link to='/about'>Login</Link></div>
                </div>
            </div>
        )
    }
}

export default OTP
