import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Login.css';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true,
            password: ""
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

        continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };



    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    componentDidMount() {
        if (this.props.password) {
            this.setState({ password: this.props.password });
        }
    }
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
