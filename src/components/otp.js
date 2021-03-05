import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo_trans from '../images/logo_trans.png';

import './Login.css';

export class OTP extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true,
            password: ""
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }
    confirm = e => {
        e.preventDefault();
        this.props.show();

    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                        <input className="email" placeholder='Enter your OTP'></input>
				</div>
				        <div className='buttons'>
                    <button className='but1' onClick={this.back} >Re-enter Mobile Number</button>
					<Link to='/about'><button onClick={ this.confirm }className='but2'>Login</button></Link>
                </div>
            </div>
        )
    }
}

export default OTP
