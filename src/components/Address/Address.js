import React, { Component } from 'react'
import './Address.css';
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export class Address extends Component {

        continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    
    show = () => {
        this.props.onHide();
    }

    render() {

        return (
            <div className='address'>
				<div className='addresses'>
					<p>Select your delivery address</p>
					<h5>304, Rentkar, Vishwananak Apartments, Andheri East, Mumbai 40000XXXX</h5>
					<hr />
					<h5>304, Rentkar, Vishwananak Apartments, Andheri East, Mumbai 40000XXXX</h5>
					<hr />
				</div>
				
                    <div className='buttons'>
                    <button className='btn' onClick={this.continue}>Add a New Address</button>
                    </div>
            </div>
        )
    }
}

export default Address
