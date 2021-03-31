import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import Login from './Login'
import logo_trans from '../../images/logo_trans.png';
import OTP from './OTP'
import './Login.css'
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import FadeIn from 'react-fade-in';
import LoginForm from './LoginForm'
export const signOut = () => { }
export const verifyAuth = () => { }

export class LoginModal extends Component {
    constructor(props) {
        super(props);
        // alert(this.props.show)
        this.state = {
			step: 1,
			selected: []
            // addModalshow: false
        };

	}
	
    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };


    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    one = () => {
        this.setState({
            step: 1
        })
    }

    two = () => {
        this.setState({
            step: 2
        })
    }

    show = () => {
        this.props.onHide();
    }
	
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
	};
	
    render() {
        const { step } = this.state;
        let addModalclose = () => { this.setState({ addModalshow: false }) };

        switch (step) {
            case 1:
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
                        <Login 
                            nextStep={this.nextStep}
                            selected={this.state.selected}
                            show={this.show}
                            handleChange={ this.handleChange }
                            prevStep={this.prevStep}
                        />
                        </FadeIn>
                    </Modal>
                );
            case 2:
                return (
                    
                    <Modal className='login__modal'
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
						centered>
                        
                        <div className="loginnav">
                        <img className='login-image' src={logo_trans}></img>
                        <button className="cross" onClick={this.props.onHide}><i class="far fa-times-circle"></i></button>
                        </div>

                        <OTP nextStep={this.nextStep}
                            selected={this.state.selected}
                            show={this.show}
                            handleChange={ this.handleChange }
							prevStep={ this.prevStep }
                            />
                            
                    </Modal>
                    
                );
        }
    }
}

export default LoginModal
