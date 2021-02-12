import React,{Component} from 'react'
import './adminlogin.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo_trans from '../../images/logo_trans.png';
export class AdminLogin extends Component {
    render() {
        const logoimage = {
            height: '100px',
            width: 'auto',
            margin: 'auto'
        }
        return (
            <div className='adminloginpanel'>
                
                <div className='adminlogin'>
                    <div className='loginImage'><img style={logoimage} src={logo_trans} /> </div> 
                        <form action="" method="POST" novalidate>
                        <div className="form-group col-12">    
      <input type="email" id="email" name="email" spellcheck="false"  className="form-control"  placeholder="Enter your email address" />
        
      <input type="password" id="password" name="password"  className="form-control"  placeholder="Enter your password" />

                    <div className='btnlogin'><Link to="/dash"><button className="btn btn-outline-success">Log in</button></Link>
                    </div></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AdminLogin

