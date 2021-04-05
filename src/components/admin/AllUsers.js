import React, { Component, useState, useContext, useEffect } from "react";
import { Table} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import "./admindashboard.css";
import EditUserDetails from './edituserdetails'
import { fetchProducts, fetchUsers, fetchSupport, fetchOrderReq, fetchLenderReq} from '../../config'
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

export function AllUsers ()
{
  const [ u, setU ] = useState( [] )
   useEffect(() => {
    const fetchAPI = async () => {
      setU( await fetchUsers() )
    };
     fetchAPI();
   }, [] );

    function AddUserModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Add a New User</Modal.Title>
            </Modal.Header>
          <Modal.Body>
                <form>
                    <label> ID : 
                     <input type='text' name='userId' placeholder='Enter the Sub Id' />
                    </label>
                    <label>USER NAME : 
                     <input type='text' name='username' placeholder='Enter the Name' />
                    </label>
                    <label>IMAGE : 
                     <input type='text' name='userimage' placeholder='Enter Image Link' />
                    </label>
                    <label>VERIFIED: 
                    <select name='verified'>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='TRUE'>TRUE</option>
                            <option value='FALSE'>FALSE</option>
                     </select>
                    </label>
                    <label>DATE OF BIRTH : 
                     <input type='date' name='dob' placeholder='Enter Date of Birth' />
                    </label>
                    <label>GENDER : 
                    <select name='gender'>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='MALE'>MALE</option>
                            <option value='FEMALE'>FEMALE</option>
                     </select>
                    </label>
                    <label>PRIMARY ADDRESS : 
                      <input type='text' name='primaryaddress' placeholder='Enter Primary Address' />
                    </label>
                    <label>EMAIL : 
                     <input type='email' name='email' placeholder='Enter Email Address' />
                    </label>
                    <label>DOC TYPE : 
                     <select name='doctype'>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='AADHAR CARD'>AADHAR CARD</option>
                            <option value='PASSPORT'>PASSPORT</option>
                            <option value='DRIVING LICENSE'>DRIVING LICENSE</option>
                     </select>
                    </label>
                    <label>DOC LINK : 
                     <input type='text' name='doclink' placeholder='Enter Doc Link' />
                    </label>
                    <label>BANK STATEMENT : 
                     <input type='text' name='bankstatement' placeholder='Enter Bank Statement Link' />
                    </label>
                    <label>LENDER : 
                      <select name='lender'>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='TRUE'>TRUE</option>
                            <option value='FALSE'>FALSE</option>
                        </select>
                        </label>
                    <div>
                    <div className="btn btn-outline-dark" onClick={ props.onHide }>Close</div>
                        <input className='btn btn-outline-success' type="submit" value="Submit" />
                    </div>
                </form>
            </Modal.Body>
        </Modal>
        )
  }

  function Users ()
  {
            const [ addUserModalShow, setAddUserModalShow ] = useState( false ) 

      return (
      <div className='allusers'>
        <div className='buttons'>
              <div className= 'btn btn-outline-success'>FILTER <i className="fas fa-chevron-circle-down" /></div>
                      <div className='btn btn-outline-info' onClick={ () =>setAddUserModalShow( true ) }><i className="fas fa-plus-circle" /> ADD A NEW USER</div>
        <AddUserModal show={addUserModalShow} onHide={()=>setAddUserModalShow(false)} />
        </div>

        <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>USER ID</th>
            <th>Phone Number</th>
            <th>LENDER</th>
            <th>USER NAME</th>
            <th>LATEST ORDER</th>
            <th>VERIFIED</th>
            <th>ORDER SUMMARY</th>
            <th>LENDER SUMMARY</th>
            <th>EDIT</th>
          </thead>
              <tbody>
                { u.map( ( item, index ) =>
                {
                  return (
                    <tr>
                      <td>{ item._id }</td>
                      <td>{ item.phone }</td>
                      <td>{  item.lender.toString() }</td>
                      <td>{ item.name }</td>
                      <td></td>
                      <td>{ item.verified.toString() }</td>
                      <td><i className="fas fa-info" /></td>
              <td><Link to='/alllenders' ><i className="fas fa-info" /></Link></td>
              <td><Link to={`/allusers/edituserdetails/${ item._id }` } ><i className="fas fa-edit" /></Link></td>
                    </tr>
                  )
                })}
          </tbody>
        </Table>
      </div>  
    </div>
  )
  }

  return (
      <Router>
      <div>
        <Switch>
          <Route path='/allusers/edituserdetails/:_id'><EditUserDetails /></Route>
          <Route path='/allusers/'><Users /></Route>
        </Switch>
      </div>  
    </Router>
  )

}
  