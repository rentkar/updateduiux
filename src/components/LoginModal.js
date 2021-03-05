import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import './Listitem.css';
import ProductDetail from './List_item/ProductDetail'
import Login from './Login'
import logo_trans from '../images/logo_trans.png';
import OTP from './otp'
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
		const logoimage = {
            height: '100px',
            width: 'auto',
            margin: 'auto'
        }

        switch (step) {
            case 1:
                return (

                    <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
						<div className="loginnav">
                        <img className='login-image' style={logoimage} src={logo_trans}></img>
                        <button className="cross" onClick={this.props.onHide}><i class="fas fa-times"></i></button>
                    </div>
                    <div>
                        <p className="logintxt">Login</p>
                    </div>
                        <Login 
                            nextStep={this.nextStep}
                            selected={this.state.selected}
                            show={this.show}
                            handleChange={ this.handleChange }
                            prevStep={this.prevStep}
                        />
                    </Modal>
                );
            case 2:
                return (
                    <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
						centered>
                        <div className="loginnav">
                        <img className='login-image' style={logoimage} src={logo_trans}></img>
                        <button className="cross" onClick={this.props.onHide}><i class="fas fa-times"></i></button>
                    </div>
                    <div>
                        <p className="logintxt">Login</p>

                    </div>

                        <OTP nextStep={this.nextStep}
                            selected={this.state.selected}
                            show={this.show}
                            handleChange={ this.handleChange }
							prevStep={ this.prevStep }
							onHide={addModalclose}

                            />


                    </Modal>
                );
        }
    }
}

export default LoginModal
