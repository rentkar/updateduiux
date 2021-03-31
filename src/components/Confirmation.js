import React, {Component} from 'react'
import verified from '../images/icons/verification_s.png'
import './Confirmation.css'
import { Redirect } from 'react-router'
class Confirmation extends Component
{
	 state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
	}
	render(){
	return this.state.redirect ? <Redirect to ='/rentals' /> : (
		<div className='order__confirmation'>
			<img src={verified} alt = 'verified' />
			<p>Thank you for placing your order with Rentkar. Your Order Id is XXXXXXXXXX. Redirecting you to your Rental Page.</p>
				<p>Please <a href='/rentals'>Click here</a> if you aren't redirected in a few seconds  </p>
		</div>
		)
		}
}

export default Confirmation
