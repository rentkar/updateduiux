import React, { Component } from 'react'
import './Confirmation.css';

function Confirmation (props) {

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }
    const confirm = e => {
        e.preventDefault();
        props.handleSubmit()
        props.show();

    }
        return (
            <div className='confirmation'>
                <h1>Earn money by listing
                things lying around  </h1>
                <h4>We help you with delivery, pick up
                    and total security of your products</h4>
                <div className='buttons'>
                    <button className='but1' onClick={back}>Previous</button>
                    <button className='but2' onClick={confirm}>Confirm</button>
                </div>
            </div>
        )
    }


export default Confirmation
