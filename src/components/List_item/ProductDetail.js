import React, {useState} from 'react'

import './ProductDetails.css';

function ProductDetail ( props )
{
    const next = e => {
        e.preventDefault();
        props.nextStep();
    };

    const back = e => {
        e.preventDefault();
        props.prevStep();
    };
    
        return (
            <div className="product">
                <h1>Earn money by listing
				things lying around  </h1>
                <h4>We help you with delivery, pick up
				and total securityof your products</h4>
            <div className='form__product__details'>
                <div className='input_name'>
                    <p>Enter Product Name</p>
                    <input className="productinput" value={props.product} onChange={( e ) => props.setproduct( e.target.value )}  placeholder='Enter your Product Name'></input>
                </div>

                <div className='input_name'>
                    <p>Enter Year of Purchase</p>
                    <input className="productinput" value={props.yearofpurchase} onChange={( e ) => props.setyearofpurchase( e.target.value )}  placeholder='Year pf Purchase'></input>
                </div>

                <div className='input_name'>
                    <p>Enter any Additional Details</p>
                    <input className="productinput" value={props.additionaldetail} onChange={( e ) => props.setadditionaldetail( e.target.value )}  placeholder='Additional Details'></input>
                </div>
                    </div>
                <div className='buttons'>
                    <button className='but1' onClick={back} >Previous</button>
                    <button className='but2' onClick={next}>Next</button>
                </div>
            </div>
        )
}

export default ProductDetail;