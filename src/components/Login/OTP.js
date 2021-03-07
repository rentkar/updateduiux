import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import './Login.css';

export class OTP extends Component {

    confirm = e => {
        e.preventDefault();
        this.props.show();

    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                        <input className="email" placeholder='Enter your OTP'></input>
				</div>
				        <div className='buttons'>
                    <button className='but1' onClick={this.back} >Re-enter Mobile Number</button>
					<Link to='/about'><button className='but2'>Login</button></Link>
                </div>
            </div>
        )
    }
}

export default OTP
