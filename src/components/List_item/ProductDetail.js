import React, { Component } from 'react'

import './ProductDetails.css';

export class  ProductDetail extends Component {
    constructor(props) {
        super(props);
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        return (
            <div className="product">
                <h1>Earn money by listing
				things lying around  </h1>
                <h4>We help you with delivery, pick up
				and total securityof your products</h4>
            <div className='form__product__details'>
                <div className='input_name'>
                    <p>Enter Product Name</p>
                    <input className="productinput" placeholder='Enter your Product Name'></input>
                </div>

                <div className='input_name'>
                    <p>Enter Year of Purchase</p>
                    <input className="productinput" placeholder='Year pf Purchase'></input>
                </div>

                <div className='input_name'>
                    <p>Enter any Additional Details</p>
                    <input className="productinput" placeholder='Additional Details'></input>
                </div>
                    </div>
                <div className='buttons'>
                    <button className='but1' onClick={this.back} >Previous</button>
                    <button className='but2' onClick={this.continue}>Next</button>
                </div>
            </div>
        )
    }
}

export default ProductDetail;