import React, { Component, useState } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

// import logo_trans from '../images/logo_trans.png';

import './Listitem.css';
// import Stepper from 'react-js-stepper';
import Personaldetail from './List_item/Personaldetail';
import Items from './List_item/Items';
import Confirmation from './List_item/Confirmation';
import ProductDetail from './List_item/ProductDetail'
import axios from 'axios'


export function DotsMobileStepper (props) {
    const [ step, setstep ] = useState( 1 )
    const [ name, setname ] = useState()
    const [phone, setphone] = useState()
    const [ email, setemail ] = useState()
    const [ product, setproduct ] = useState()
    const [ additionaldetail, setadditionaldetail ] = useState()
    const [yearofpurchase, setyearofpurchase] = useState()
    var selected
 

    // Proceed to next step
    const nextStep = () => {
        setstep(step+1)
    };



    // Go back to prev step
    const prevStep = () => {
        setstep(step-1)
    };

    const one = () => {
        setstep(1)
    }

    const two = () => {
        setstep(2)
    }
    const three = () => {
        setstep(3)
    }
    const four = () => {
        setstep(4)
    }

    const show = () => {
        // const { addModalshow } = state;
        // alert('sad');
        // setState({ addModalshow: false })
        props.onHide();
    }

    // Handle fields change
    const handleSubmit = e =>
    {
        const data = {
            name: name,
            email: email,
            phone: phone,
            additionaldetail: additionaldetail,
            product: product,
            yearofpurchase: yearofpurchase
  }
  console.log(data)
        axios.post( `https://backendrentkar.herokuapp.com/lenderreq`, data )
    };
    


        switch (step) {
            case 1:
                return (

                    <Modal
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <div className='dots'>
                            <i style={{ color: `#0B90D3` }} class="fas fa-circle"></i>
                            <i onClick={two} class="fas fa-circle"></i>
                            <i onClick={ three } class="fas fa-circle"></i>
                            <i onClick={four} class="fas fa-circle"></i>

                        </div>

                        <Personaldetail nextStep={ nextStep }
                            show={ show }
                            name={ name }
                            phone={ phone }
                            email={ email }
                            setname={ setname }
                            setemail={ setemail }
                            setphone={setphone}
                             />


                    </Modal>

                );
            case 2:
                return (
                    <Modal
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <div className='dots'>
                            <i onClick={ one } class="fas fa-circle"></i>
                            <i style={{ color: `#0B90D3` }} class="fas fa-circle"></i>
                            <i onClick={ three } class="fas fa-circle"></i>
                            <i onClick={four} class="fas fa-circle"></i>

                        </div>

                        <ProductDetail nextStep={nextStep}
                            selected={selected}
                            show={show}
                            prevStep={ prevStep }
                            product={ product }
                            yearofpurchase={ yearofpurchase }
                            setproduct={ setproduct }
                            additionaldetail={ additionaldetail }
                            setyearofpurchase={ setyearofpurchase }
                            setadditionaldetail={setadditionaldetail}
                             />


                    </Modal>
                );
            case 3:
                return (
                    <Modal
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>

                        <div className='dots'>
                            <i onClick={one} class="fas fa-circle"></i>
                            <i onClick={ two } class="fas fa-circle"></i>
                        <i style={{ color: `#0B90D3` }} onClick={two} class="fas fa-circle"></i>
                            <i onClick={four} class="fas fa-circle"></i>

                        </div>
                        <Items nextStep={nextStep}
                            prevStep={prevStep}
                            selected={selected}
                            
                             />

                    </Modal>
                );
            case 4:
                return (
                    <Modal
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <div className='dots'>
                            <i onClick={one} class="fas fa-circle"></i>
                            <i onClick={two} class="fas fa-circle"></i>
                            <i onClick={ three } class="fas fa-circle"></i>
                            <i style={ { color: `#0B90D3` } } class="fas fa-circle"></i>
                        </div>
                        <Confirmation prevStep={prevStep}
                            selected={selected}
                            show={ show }
                            handleSubmit={handleSubmit}
                        />
                    </Modal>
                );


        }
    }


