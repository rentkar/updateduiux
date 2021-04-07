import React, {Component} from 'react'
import Axios from 'axios'
	
export class Payment extends Component{
	constructor ( props ){
		super( props )
		this.state = {

		}
	}
	async razorpayHandler(){
		const API_URL = `https://backendrentkar.herokuapp.com/razorpay/`
		const orderUrl = `${API_URL}order`;
		const response = await Axios.get(orderUrl);
		const { data } = response;
		console.log("App -> razorPayPaymentHandler -> data", data)
		
		const options = {
			key: 'rzp_test_TQK3Wokl9VqaEX',
			name: 'Rentkar',
			description: 'Rentkar',
			order_id: data.id,
		handler: async (response) => {
        try {
			const paymentId = response.razorpay_payment_id;
			const url = `${API_URL}capture/${paymentId}`;
			const captureResponse = await Axios.post(url, {})
			const successObj = JSON.parse(captureResponse.data)
			const captured = successObj.captured;
			console.log("App -> razorPayPaymentHandler -> captured", successObj)
			if(captured){
				console.log('success')
			}
			
			} catch (err) {
			console.log(err);
			}
		},
		theme: {
			color: "#686CFD",
		},
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
}

	render ()
	{
		return (
			<div>
				<button className='btn btn-primary'
					> Pay Now
				</button>
			</div>
		)
	}
}

export default Payment
