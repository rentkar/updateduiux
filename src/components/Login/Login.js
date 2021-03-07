import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Login.css';

export class Login extends Component {

        continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const logoimage = {
            height: '100px',
            width: 'auto',
            margin: 'auto'
        }
        return (
            <div className='login'>
            
                    
                    <div id="in">
                        <input className="email" placeholder='Enter your phone number'></input>
                    </div>
                    <div className='buttons'>
                    <button className='but2' onClick={this.continue}>Send OTP</button>
                    </div>
            </div>
        )
    }
}

export default Login
