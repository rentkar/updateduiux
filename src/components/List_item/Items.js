import React from 'react'
import { guitar } from './guitar.png';

import './Item.css';

function Item(props){

    const image = {
        height: '120px',
        width: '100px',
        borderRadius: '5px',
        padding: '45% 40%'
        // backgroundImage: 'url(' + guitar + ')'

    }

    const selected = [];

    // itemstyle = {
    //     margin: '15px',
    //     borderRadius: '5px',
    //     boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
    //     backgroundImage: 'url(' + {guitar} + ')'
    // }
    const items = [
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
        <div className='else__items'><div style={image} ><i class="fas fa-check-circle"></i><p>GUITAR</p></div></div>,
    ]



    const next = e => {
        e.preventDefault();
        props.nextStep();
    };

    const back = e => {
        e.preventDefault();
        props.prevStep();
    };
    const changeStyle = (e, data) => {
        if (e.target.querySelector('i') !== null) {
            if (!selected.includes(data)) {
                e.target.style.boxShadow = `inset 0 0 0 1000px rgba(143,227,205,0.9)`;
                selected.push(data);
                e.target.querySelector('i').style.display = `block`;
            }
            else {
                e.target.style.boxShadow = `inset 0 0 0 1000px rgba(143,227,205,0)`;
                selected.pop(data);
                e.target.querySelector('i').style.display = `none`;
            }
        }
        console.log(e);
        // alert(e.target.style.borderRadius = `2px`);
    }
        return (
            <div className='chooseitems'>

                <h1>Did you know you can also rent these products!</h1>
    
                <div className='items'>
                    {
                        items.map((item, index) => {
                            console.log(index);
                            return (
                                <div className='item' data={index} onClick={((e) => changeStyle(e, index))}>{item}</div>
                            )
                        })
                    }
                    </div>
                

                <div className='buttons'>
                    <button className='but1' onClick={back}>Previous</button>
                    <button className='but2' onClick={next}>Next</button>
                </div>
            </div>

        )
    }


export default Item
