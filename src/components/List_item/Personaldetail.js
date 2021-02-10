import React, { Component } from 'react'

import './Personal.css';

export class Personaldetail extends Component {
    constructor(props) {
        super(props);
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    exit = e => {
        e.preventDefault();
        this.props.show();
    }
    render() {
        return (
            <div className="personal">
                <h1>Earn money by listing
things lying around  </h1>
                <h4>We help you with delivery, pick up
and total securityof your products</h4>

                <div className='input_name'>
                    <p>Your Name</p>
                    <input className="personlinput" placeholder='Enter the name'></input>
                </div>

                <div className='input_name'>
                    <p>Mobile No.</p>
                    <input className="personlinput" placeholder='Phone No.'></input>
                </div>

                <div className='input_name'>
                    <p>Email</p>
                    <input className="personlinput" placeholder='abc@gmail.com'></input>
                </div>
                <div className='buttons'>
                    <button className='but1' onClick={this.exit} >Exit</button>
                    <button className='but2' onClick={this.continue}>Next</button>
                </div>
            </div>
        )
    }
}

export default Personaldetail
