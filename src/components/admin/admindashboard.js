import React from 'react'
import './admindashboard.css'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
    return(
        <div className='admin'>
            <h1>This is admin dashboard</h1>
        </div>
    )
}
/*	return (
        <div className='admin'>
            <div className='left'>
                <div className='img' ><img src= '../../images/logo.png' /></div>
                <div className='nav__links'>
                <Link path to='/allusers' ><h2><i className="fas fa-users" />ALL USERS</h2></Link>
                <Link path to='/allproducts'><h2><i className="fas fa-clipboard-list"/>ALL PRODUCTS</h2></Link>
                <Link path to='/allorders'><h2><i className="fas fa-list-alt" />ORDERS</h2></Link>
                <Link path to='/support'><h2><i className="far fa-question-circle" />SUPPORT</h2></Link>
                </div>

             {navbardata.map((item, index)=> {
                    <h2 key={index}>
                        <i className={item.cName} />
                        <Link to={item.path}>
                            <span> {item.title}</span>
                        </Link>
                    </h2>
                })} 
            </div>
            <div className='right'>
              <div className ='allusers'>
                  <div className='table'>
                     <h3>userid</h3>
                     <h3>username</h3>
                  </div>
              </div>
            </div>
        </div>
    )
    } */