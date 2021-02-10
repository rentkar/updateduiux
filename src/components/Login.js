import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo_trans from '../images/logo_trans.png';

import './Login.css';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true,
            password: ""
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    componentDidMount() {
        if (this.props.password) {
            this.setState({ password: this.props.password });
        }
    }
    render() {
        const logoimage = {
            height: '100px',
            width: 'auto',
            margin: 'auto'
        }
        return (
            <div className='login'>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <div className="loginnav">
                        <img className='login-image' style={logoimage} src={logo_trans}></img>
                        <button className="cross" onClick={this.props.onHide}><i class="fas fa-times"></i></button>
                    </div>
                    <div>
                        <p className="logintxt">Login</p>

                    </div>
                    <div id="in">
                        <input className="email" placeholder='Mobile No. / Email'></input>
                    </div>
                    <div id="in">
                        <input className='password'
                            type={this.state.hidden ? "password" : "text"}
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            placeholder='Password'
                        />
                        <i class="fas fa-eye" onClick={this.toggleShow}></i>
                    </div>

                    <Link to="/about" className="loginbut"><button className="loginbut" onClick={this.props.onHide}>Log in</button></Link>

                    <div className="signuptxt">
                        <p>Don’t have an  account?  <span id='signup'>Sign Up</span></p>
                    </div>
                    <button className="google"><i class="fab fa-google"></i>    Continue with Google</button>
                    <button className="facebook"> <i class="fab fa-facebook-square"></i>    Continue with facebook</button>


                </Modal>
            </div>
        )
    }
}

export default Login
