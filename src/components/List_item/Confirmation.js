import React, { Component } from 'react'
import './Confirmation.css';

export class Confirmation extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    confirm = e => {
        e.preventDefault();
        this.props.show();

    }
    render() {
        return (
            <div className='confirmation'>
                <h1>Earn money by listing
things lying around  </h1>
                <h4>We help you with delivery, pick up
and total securityof your products</h4>
                <div className='buttons'>
                    <button className='but1' onClick={this.back}>Previous</button>
                    <button className='but2' onClick={this.confirm}>Confirm</button>
                </div>
            </div>
        )
    }
}

export default Confirmation
