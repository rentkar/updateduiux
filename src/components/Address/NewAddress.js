import React, { Component } from 'react'
import GoogleMap from './GoogleMap'


export class NewAddress extends Component {
	
        back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    
    show = () => {
        this.props.onHide();
	}
	
render() {

        return (
            <div className='address'>
                    <p>Add a New Address</p>
                    <div id="in">
					<input className="inpt" placeholder='Flat No/ Building No'></input>
                    <GoogleMap />
                    </div>
                    <div className='button__save'>
                    <button className='btn' onClick={this.back}>Save</button>
                    </div>
            </div>
        )
    }
}

export default NewAddress
