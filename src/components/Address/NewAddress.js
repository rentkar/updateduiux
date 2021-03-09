import React, {Component} from 'react'
export class NewAddress extends Component {
	
	
        continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    
    show = () => {
        this.props.onHide();
	}
	
render() {

        return (
            <div className='login'>
                    <p>Add a New Address</p>
                    <div id="in">
					<input className="inpt" placeholder='Flat No/ Building No'></input>
                        <input className="inpt" placeholder='Landmark'></input>
                    </div>
                    <div className='buttons'>
                    <button className='btn' onClick={this.continue}>Save</button>
                    </div>
            </div>
        )
    }
}

export default NewAddress
