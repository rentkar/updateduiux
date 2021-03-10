import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import Address from './Address'
import logo_trans from '../../images/logo_trans.png';
import NewAddress from './NewAddress'
import './Address.css'
export class AddressModal extends Component {
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

        switch (step) {
            case 1:
                return (
                    <Modal className='address__modal'
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
						centered>
                        <div className="addressnav">
                        <img className='address-image' src={logo_trans}></img>
                        <button className="cross" onClick={this.props.onHide}><i class="far fa-times-circle"></i></button>
                        </div>
                     
                        <Address
                            nextStep={this.nextStep}
                            selected={this.state.selected}
                            show={this.show}
                            handleChange={ this.handleChange }
                            prevStep={ this.prevStep }
                        />
                    </Modal>
                );
            case 2:
                return (
                    <Modal className='address__modal'
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
						centered>
                        <div className="addressnav">
                        <img className='address-image' src={logo_trans}></img>
                        <button className="cross" onClick={this.props.onHide}><i class="far fa-times-circle"></i></button>
                        </div>

                        <NewAddress nextStep={this.nextStep}
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

export default AddressModal
