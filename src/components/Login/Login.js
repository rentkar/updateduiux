import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo_trans from '../../images/logo_trans.png';

import './Login.css';

export const signIn = () => {}


export class Login extends Component {

        continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    
    show = () => {
        this.props.onHide();
    }

    render() {

        return (
            <div className='login'>
                    <p>Enter your Mobile Number to Login/Sign Up</p>
                    <div id="in">
                        <input className="inpt" placeholder='Enter your phone number'/>
                    </div>
                    <div className='buttons'>
                    <button className='btn' onClick={ this.continue}>Send OTP</button>
                    </div>
            </div>
        )
    }
}

export default Login