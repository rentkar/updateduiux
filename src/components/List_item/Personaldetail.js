import React, { useState } from 'react'

import './Personal.css';

function Personaldetail ( props )
{
        const next = e => {
        e.preventDefault();
        props.nextStep();    
    };
    

    const exit = e => {
        e.preventDefault();
        props.show();
    }

        return (
            <div className="personal">
                <h1>Earn money by listing
                    things lying around  </h1>
                <h4>We help you with delivery, pick up
                    and total security of your products</h4>
            <div className='form__personal__details'>
                <div className='input_name'>
                    <p>Your Name</p>
                        <input value={ props.name } onChange={( e ) => props.setname( e.target.value )} className="personlinput" placeholder='Enter the name'></input>
                </div>

                <div className='input_name'>
                    <p>Mobile No.</p>
                    <input value={props.phone} onChange={( e ) => props.setphone( e.target.value )}  className="personlinput" placeholder='Phone No.'></input>
                </div>

                <div className='input_name'>
                    <p>Email</p>
                    <input value={props.email} onChange={( e ) => props.setemail( e.target.value )}   className="personlinput" placeholder='abc@gmail.com'></input>
                </div>
                    </div>
                <div className='buttons'>
                    <button className='but1' onClick={exit} >Exit</button>
                    <button className='but2' onClick={next}>Next</button>
                </div>
            </div>
        )
    }


export default Personaldetail
