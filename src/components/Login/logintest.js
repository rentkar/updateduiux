import React, {Component, useState, useEffect } from 'react'
import firebase from '../../firebase'
import { Button, Card, Col, Divider, Form, Input, message, Row } from 'antd';
import './Login.css'
import logo_trans from '../../images/logo_trans.png';


class LoginTest extends Component{

  state = {
    phone: '+91',
    isAction: false,
    code: '',
    verificationId: '',
    isLoading: false
  }

  componentDidMount() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
    {
    size:"invisible"
    });
  }

  onsubmit = () => {
    const { phone } = this.state

    if (!phone) {
      message.warn("Phone number is empty")
      return
    }

    this.setState({isLoading: true})

    const phoneNumber = this.state.phone;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(confirmResult => {
        this.setState({verificationId: confirmResult.verificationId, isAction: true})
        window.confirmationResult = confirmResult;
        message.success("Code sent")
        this.setState({isLoading: false})
      })
      .catch(error => {
        message.error(error)
        this.setState({isLoading: false})
      });
  }

  onconfirm = () => {
    const {code} = this.state

    if (!code) {
      message.warn("Code is empty")
      return
    }

    this.setState({isLoading: true})

    window.confirmationResult.confirm(code).then(function(result){
      console.log(result)
      message.success("Sign in successfully")
      this.setState({isLoading: false})
    })
    .catch((error) => {
      console.log(error)
      if (error.code !== undefined) {
          message.error("Code is wrong")
      }
      this.setState({isLoading: false})
    })
  }

  refreshPage() {
    window.location.reload(false);
  }

  render() {

    const {isAction, phone, code, isLoading} = this.state

    const viewSignIn = (
      <div className='login'>
        <p>Enter your Mobile Number to Login/Sign Up</p>
        <Divider />
        <form>
          <Form.Item>
            <div className='phone__inpt'>
            <p>+91</p><Input 
              id="recaptcha-container" className='inpt'
              onChange={(e) => this.setState({phone: e.target.value})}
              value={phone}
              placeholder="Phone number" />
          </div>
          </Form.Item>
          <Form.Item>
            <Button className='btn'
              loading={isLoading}
              onClick={() => this.onsubmit()} 
              type="primary">Send OTP</Button>
          </Form.Item>
        </form>
        </div>
    )
    
    const viewVerification = (
      <div className='login'>
        <p>Please Enter the OTP sent to you!</p>
        <Divider />
        <Form layout="vertical">
          <Form.Item >
            <Input 
              id="recaptcha-container" className="inpt"
              onChange={(e) => this.setState({code: e.target.value})} 
              value={code}
              placeholder="6-digit verification code" />
          </Form.Item>
          <div className='wrong__number'>
                    <div className='resend__otp' >Resend OTP</div>
                    <div onClick={()=>this.refreshPage()} className='change__number'>Change Number</div>
                </div>


          <Form.Item>
            <Button className='btn' 
              loading={isLoading}
              type="primary" 
              onClick={() => this.onconfirm()}>Confirm OTP</Button>
          </Form.Item>
        </Form>
      </div>
    )

    return (
        <>
          <Row align="middle" justify="center">
          <div className='login__card'>
                  <div className="loginnav">
                  <img className='login-image' src={logo_trans}></img>
                  </div>

                {
                  isAction ? viewVerification : viewSignIn
                }
              </div>
          </Row>
        </>
    )
  }
}
	{/*var [ number, setNumber ] = useState( '' )
	var [code, setcode] = useState('')
	const sendOTP= () =>
	{
		var recaptcha = new firebase.auth.RecaptchaVerifier( 'recaptcha' );
		firebase.auth().signInWithPhoneNumber( number, recaptcha ).then( function ( e )
		{
			var code = prompt( 'Enter the otp', '' );

        
			if ( code === null ) return;

        
			e.confirm( code ).then( function ( result )
			{
				console.log( result.user );

				document.querySelector( 'label' ).textContent += result.user.phoneNumber + "Number verified";
            
			} ).catch( function ( error )
			{
				console.error( error );
            
			} );

		} )
			.catch( function ( error )
			{
				console.error( error );
				document.querySelector( 'label' ).textContent += "Number not verified";
			} );
	}

	const login = () =>
	{
		
	}
  
 
    return (
      <div>
           <label></label>
        
			<div id="recaptcha"></div>
			<input type='text' value={ number }  onChange={ e => setNumber( e.target.value ) } />

			<button onClick={ () => { sendOTP() } }>Send OTP</button>
			
			<input type='text' value={ code }  placeholder='Enter OTP' />
			<button onClick={ (e) =>  setcode( e.target.value )   }>LOGIN</button>
      </div>
    )*/}



export default LoginTest