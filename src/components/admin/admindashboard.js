import React, { Component, useState, useContext, useEffect } from "react";
import { Table} from 'react-bootstrap'
import rental_s from "../../images/icons/rental_s.png";
import bag_g from "../../images/bagb.png";
import bag_s from "../../images/bag.png";
import listing_s from "../../images/icons/listing_s.png";
import verification_s from "../../images/icons/verification_s.png";
import support_s from "../../images/icons/support_s.png";
import settings_s from "../../images/icons/settings_s.png";
import rental_g from "../../images/icons/rental_g.png";
import listing_g from "../../images/icons/listing_g.png";
import verification_g from "../../images/icons/verification_g.png";
import support_g from "../../images/icons/support_g.png";
import settings_g from "../../images/icons/settings_g.png";
import {Modal} from 'react-bootstrap'
import "./admindashboard.css";
import { Button, Card, Image } from "semantic-ui-react";
import 'react-google-flight-datepicker/dist/main.css';
import { RangeDatePicker } from 'react-google-flight-datepicker'
import EditProductDetails from './editproductdetails'
import EditUserDetails from './edituserdetails'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

const icons = [
  settings_s,
  listing_s,
  bag_s,
  verification_s,
  rental_s,
  support_s
];
const icons_g = [
  settings_g,
  listing_g,
  bag_g,
  verification_g,
  rental_g,
  support_g
];
const iconDesc = [
  "DASH",
  "ORDERS",
  "PRODUCTS",
  "USERS",
  "LENDERS",
  "SUPPORT"
];


function Lenders ()
{
  const [ addNewLenderModalShow, setAddNewLenderModalShow ] = useState( false ) 
  const [ addNewProductModalShow, setAddNewProductModalShow ] = useState( false )
  const [ editLenderModalShow, setEditLenderModalShow ] = useState( false ) 
  const [ lenderRequestModalShow, setLenderRequestModalShow ] = useState( false ) 

  
    function LenderRequestModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Lender Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>ksdkddk</p>
            </Modal.Body>
            <Modal.Footer>
                <div className='btn btn-outline-dark' onClick={ props.onHide }>Close</div>
                <div className='btn btn-outline-success' onClick={props.onHide}>Submit Changes</div>
            </Modal.Footer>
        </Modal>
        )
  }

  function AddNewProductModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Add a New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>ksdkddk</p>
            </Modal.Body>
            <Modal.Footer>
                <div className='btn btn-outline-dark' onClick={ props.onHide }>Close</div>
                <div className='btn btn-outline-success'onClick={props.onHide}>Submit Changes</div>
            </Modal.Footer>
        </Modal>
        )
  }

  function EditLenderModal( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Edit Lender Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>ksdkddk</p>
            </Modal.Body>
            <Modal.Footer>
                <div className='btn btn-outline-dark' onClick={ props.onHide }>Close</div>
                <div className='btn btn-outline-success' onClick={props.onHide}>Submit Changes</div>
            </Modal.Footer>
        </Modal>
        )
  }

  function AddNewLenderModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Add A New Lender</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label>SUB ID : 
                     <input type='text' name='sub_id' placeholder='Enter the Sub Id' />
                    </label>
                    <label>LENDER : 
                     <input type='text' name='lenderName' placeholder='Enter the Name' />
                    </label>
                    <label>LENDER ID : 
                     <input type='text' name='lenderId' placeholder='Enter Lender Id' />
                    </label>
                    <label>LENDER AGREEMENT : 
                     <input type='text' name='lenderAgreement' placeholder='Enter Lender Agreement' />
                    </label>
                    <label>CONDITION : 
                    <select name='condition'>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='GOOD'>GOOD</option>
                            <option value='BAD'>BAD</option>
                            <option value='OKAY'>OKAY</option>
                     </select>
                    </label>
                    <label>AVAILABILITY : 
                     <select name='availability'>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='RENTED OUT'>RENTED OUT</option>
                            <option value='AVAILABLE'>AVAILABLE</option>
                        </select>
                    </label>
                    <label>DATE OF PURCHASE : 
                     <input type='date' name='dateOfPurchase' placeholder='Enter Order Id if product is RENTED OUT' />
                    </label>
                    <label>ORDER ID : 
                     <input type='text' name='orderId' placeholder='Enter Order Id if product is RENTED OUT' />
                    </label>
                    <div>
              <div className='btn btn-outline-dark' onClick={ props.onHide }>Close</div>
                        <input className='btn btn-outline-success' type="submit" value="Submit" />
                    </div>
                </form>
            </Modal.Body>
        </Modal>
        )
  }


  return (
    <div className='alllenders'>
    
      <div className='lenders__req'>
        <p>LENDER REQUESTS</p>
        <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>REQUEST ID</th>
            <th>USER ID</th>
            <th>LENDER</th>
            <th>USER NAME</th>
            <th>PRODUCTS</th>
            <th>REQUEST DATE</th>
            <th>TAKE ACTION</th>
          </thead>
          <tbody>
            <tr>
              <td>LQ90042A</td>
              <td>90042xxxxx</td>
              <td>TRUE</td>
              <td>TANUJ AGARWAL</td>
              <td>GP9, PS5</td>
              <td>2020-03-04</td>
              <td><i className="fas fa-edit" onClick={ () => setLenderRequestModalShow( true ) } />
              <LenderRequestModal show={lenderRequestModalShow} onHide={()=> setLenderRequestModalShow(false)} /></td>
            </tr>
          </tbody>
            <tbody>
            <tr>
              <td>LQ90042B</td>
              <td>81042xxxxx</td>
              <td>FALSE</td>
              <td>KULDEEP YADAV</td>
              <td>GUITAR</td>
              <td>2020-02-04</td>
              <td><i className="fas fa-edit" onClick={ () => setLenderRequestModalShow( true ) } />
              <LenderRequestModal show={lenderRequestModalShow} onHide={()=> setLenderRequestModalShow(false)} /></td>
            </tr>
          </tbody>
        </Table>
      </div> 
  </div>


      <div className='currentlenders'>
          <p>LENDER REQUESTS</p>
      <div className='buttons'>
              <div className= 'btn btn-outline-success'>FILTER <i className="fas fa-chevron-circle-down" /></div>
        <div className='btn btn-outline-info' onClick={ () => setAddNewProductModalShow( true ) }><i className="fas fa-plus-circle" /> ADD A NEW PRODUCT</div>
          <AddNewProductModal show={ addNewProductModalShow } onHide={ () => setAddNewProductModalShow( false ) } />
        </div>
          <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>LENDER ID</th>
            <th>LENDER</th>
            <th>PRODUCT ID</th>
            <th>DATE OF PURCHASE</th>
            <th>AVAILABILITY</th>
            <th>ORDER ID</th>
            <th>EDIT</th>
          </thead>
          <tbody>
            <tr>
              <td>90042xxxxx</td>
              <td>TANUJ AGARWAL</td>
              <td>PS5</td>
              <td>2020-03-16</td>
              <td>RENTED OUT</td>
              <td>90940</td>
              <td><i className="fas fa-edit" onClick={ () => setEditLenderModalShow( true ) } />
              <EditLenderModal show={editLenderModalShow} onHide={()=> setEditLenderModalShow(false)} /></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>90042xxxxx</td>
              <td>TANUJ AGARWAL</td>
              <td>GP93</td>
              <td>2020-03-16</td>
              <td>RENTED OUT</td>
              <td>90940</td>
              <td><i className="fas fa-edit" onClick={ () => setEditLenderModalShow( true ) } />
              <EditLenderModal show={editLenderModalShow} onHide={()=> setEditLenderModalShow(false)} /></td>
            </tr>
          </tbody>
        </Table>
      </div> 
      
      
      <div className='btn btn-outline-danger' onClick={ () => setAddNewLenderModalShow( true ) }><i className="fas fa-plus-circle" /> ADD A NEW LENDER</div>
          <AddNewLenderModal show={ addNewLenderModalShow } onHide={ () => setAddNewLenderModalShow( false ) } />        </div>
    </div>
    
  )
}


function Dash ()
{
  return (
    <div className='dash'>
      <h4>FILTER BY DATE</h4>
      <RangeDatePicker
							minDate={new Date(1900, 0, 1)}
							maxDate={new Date(2220, 0, 1)}
							dateFormat="D-MM-YYYY"
							startDatePlaceholder="From"
							endDatePlaceholder="To"
							disabled={false}
							className="datepicker col-4"
							startWeekDay="monday"
							/>
    
      <div className='payments'>
        <p>PAYMENTS</p> 
      <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>User ID</th>
            <th>UserName</th>
            <th>Order ID</th>
            <th>Order Sub ID</th>
            <th>Amount Pending</th>
            <th>Product</th>
            <th>Status</th>
            <th>Location</th>
          </thead>
          <tbody>
            <tr>
              <td>9045XXXXXX</td>
              <td>Tanuj</td>
              <td>#5000</td>
              <td>#5000a</td>
              <td>4000</td>
              <td>PS4P9</td>
              <td>Pending</td>
              <td>Andheri</td>
            </tr>
          </tbody>
        </Table >
      </div>
      </div>
      <div className='pickups'>
        <p>PICKUPS</p> 
        <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>User ID</th>
            <th>UserName</th>
            <th>Order ID</th>
            <th>Order Sub ID</th>
            <th>Amount Pending</th>
            <th>Product</th>
            <th>Status</th>
            <th>Location</th>
          </thead>
          <tbody>
            <tr>
              <td>9045XXXXXX</td>
              <td>Tanuj</td>
              <td>#5000</td>
              <td>#5000a</td>
              <td>4000</td>
              <td>PS4P9</td>
              <td>Pending</td>
              <td>Andheri</td>
            </tr>
          </tbody>
        </Table>
      </div>
      </div>
      <div className='deliveries'>
        <p>DELIVERIES</p> 
        <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>User ID</th>
            <th>UserName</th>
            <th>Order ID</th>
            <th>Order Sub ID</th>
            <th>Amount Pending</th>
            <th>Product</th>
            <th>Status</th>
            <th>Location</th>
          </thead>
          <tbody>
            <tr>
              <td>9045XXXXXX</td>
              <td>Tanuj</td>
              <td>#5000</td>
              <td>#5000a</td>
              <td>4000</td>
              <td>PS4P9</td>
              <td>Pending</td>
              <td>Andheri</td>
            </tr>
          </tbody>
        </Table>
      </div>
      </div>
    </div>
  )
}


function AdminSupport ()
{
      const [ supportRequestModalShow, setSupportRequestModalShow ] = useState( false ) 

    function SupportRequestModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Support Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <label>CHANGE STATUS : 
                    <select name='supportstatus'>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='PENDING'>PENDING</option>
                            <option value='SOLVED'>SOLVED</option>
                     </select>
            </label>
            <label>SOLUTION : 
            <input type='text' name='solution' placeholder='Enter the solution if any' />
            </label>
              
            <div>
                    <div className='btn btn-outline-dark' onClick={ props.onHide }>Close</div>
              <input className='btn btn-outline-success' type="submit" value="Submit" />
            </div>
              </form>
          </Modal.Body>
        </Modal>
        )
  }
  
  return (
    <div className='support'>
      <div className='support__req'>
        <p>SUPPORT REQUESTS</p>

        <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>Request ID</th>
            <th>Order Id</th>
            <th>User Id</th>
            <th>Username</th>
            <th>PRODUCT ID</th>
            <th>REQUEST DATE</th>
            <th>ISSUE</th>
            <th>TAKE ACTION</th>
          </thead>
          <tbody>
            <tr>
              <td>SP90042A</td>
              <td>45667</td>
              <td>90042xxxxx</td>
              <td>TANUJ AGARWAL</td>
              <td>GP98</td>
              <td>2020-03-03</td>
              <td>GO PRO 9 suddenly stopped</td>
              <td><i className="fas fa-edit" onClick={ () => setSupportRequestModalShow(true)}/>
        <SupportRequestModal show={supportRequestModalShow} onHide={()=>setSupportRequestModalShow(false)} /></td>
            </tr>
          </tbody>
        </Table >
      </div>
      </div>
<div className='solvedissues'>
      <p>ISSUED SOLVED</p>
        <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>Request ID</th>
            <th>Order Id</th>
            <th>User Id</th>
            <th>Username</th>
            <th>PRODUCT ID</th>
            <th>REQUEST DATE</th>
            <th>ISSUE</th>
            <th>SOLUTION</th>
          </thead>
          <tbody>
            <tr>
              <td>SP90042A</td>
              <td>45667</td>
              <td>90042xxxxx</td>
              <td>TANUJ AGARWAL</td>
              <td>GP98</td>
              <td>2020-03-03</td>
                <td>GO PRO 9 suddenly stopped</td>
              <td>THE PRODUCT WAS REPLACED WITH GP910</td>
            </tr>
          </tbody>
        </Table >
      </div>
      </div>
    </div>
  )
}


function AllProducts ()
{

  function AddProductModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Add A New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>ksdkddk</p>
            </Modal.Body>
            <Modal.Footer>
                <div className='btn btn-outline-dark' onClick={ props.onHide }>Close</div>
                <div  className='btn btn-outline-success' onClick={props.onHide}>Submit Changes</div>
            </Modal.Footer>
        </Modal>
        )
  }
  
  
  function Products ()
  {
        const [ addProductModalShow, setAddProductModalShow ] = useState( false ) 

  return (
    <div className='allproducts'>
            <div className='buttons'>
              <div className= 'btn btn-outline-success'>FILTER <i className="fas fa-chevron-circle-down" /></div>
        <div className='btn btn-outline-info' onClick={ () => setAddProductModalShow( true ) }><i className="fas fa-plus-circle" /> ADD A NEW PRODUCT</div>
        <AddProductModal show={addProductModalShow} onHide={()=>setAddProductModalShow(false)} />
            </div>


        <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>PRODUCT ID</th>
            <th>CATEGORY</th>
            <th>SUB CATEGORY</th>
            <th>NAME</th>
            <th>QUANTITY</th>
            <th>LENDERS</th>
            <th>EDIT</th>
          </thead>
          <tbody>
            <tr>
              <td>GP9</td>
              <td>TECH</td>
              <td>CAMERA</td>
              <td>GO PRO 9</td>
              <td>5</td>
              <td><Link to='/alllenders' ><i className="fas fa-info" /></Link></td>
              <td><Link to='/allproducts/editproductdetails' ><i className="fas fa-edit" /></Link></td>
            </tr>
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
          <Route path='/allproducts/editproductdetails'><EditProductDetails /></Route>
          <Route path='/allproducts/'><Products /></Route>
        </Switch>
      </div>  
    </Router>
  )
}



function AllOrders ()
{
  
          const [ orderRequestModalShow, setOrderRequestModalShow ] = useState( false ) 
          const [ orderModalShow, setOrderModalShow ] = useState( false ) 

  function OrderRequestModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Order Requests</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>ksdkddk</p>
            </Modal.Body>
            <Modal.Footer>
                <div className="btn btn-outline-dark" onClick={ props.onHide }>Close</div>
                <div className="btn btn-outline-success" onClick={props.onHide}>Submit Changes</div>
            </Modal.Footer>
        </Modal>
        )
  }

    function OrderModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>ksdkddk</p>
            </Modal.Body>
            <Modal.Footer>
                <div className="btn btn-outline-dark" onClick={ props.onHide }>Close</div>
                <div className="btn btn-outline-success" onClick={props.onHide}>Submit Changes</div>
            </Modal.Footer>
        </Modal>
        )
  }
  
  return (
  
    <div className='allorders'>
      <div className='order__req'>
      <p>ORDER REQUESTS</p>
        <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>ORDER ID</th>
            <th>CUST ID</th>
            <th>PRODUCT REQ</th>
            <th>PAYMENT RECEIVED</th>
            <th>EXP DELIVERY ON</th>
            <th>TOTAL PAYMENT</th>
            <th>Location</th>
            <th>TAKE ACTION</th>
          </thead>
          <tbody>
            <tr>
              <td>4587</td>
              <td>900515152121</td>
              <td>GP9</td>
              <td>544</td>
              <td>21-04-2021</td>
              <td>2000</td>
              <td>Andheri</td>
              <td><i className="fas fa-edit" onClick={ () => setOrderRequestModalShow( true ) } />
                      <OrderRequestModal show={orderRequestModalShow} onHide={()=> setOrderRequestModalShow(false)} /></td>
            </tr>
          </tbody>
        </Table>
      </div>
      </div>

      <div className='orders'>

      
      <p>ORDERS</p>  
      <div className='buttons'>
          <div className='btn btn-outline-success'>FILTER <i className="fas fa-chevron-circle-down" /></div>  
        </div> 

        <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>ORDER ID</th>
            <th>Order sub Id</th>
            <th>CUST ID</th>
            <th>PRODUCT ALLOTED</th>
            <th>TOTAL PAYMENT</th>
            <th>AMOUNT</th>
            <th>PAYMENT STATUS</th>
            <th>NEXT DUE ON</th>
            <th>DELIVERY DATE</th>
            <th>PICKUP DATE</th>
            <th>LOCATION</th>
            <th>Edit</th>
          </thead>
          <tbody>
            <tr>
              <td>4587</td>
              <td>4578a</td>
              <td>9000515152121</td>
              <td>GP95</td>
              <td>2000</td>
              <td>1000</td>
              <td>RECEIVED</td>
              <td>21-05-2021</td>
              <td>21-04-2021</td>
              <td>21-07-2021</td>
              <td>Andheri</td>
              <td><i className="fas fa-edit" onClick={ () => setOrderModalShow(true)}/>
        <OrderModal show={orderModalShow} onHide={()=>setOrderModalShow(false)} /></td>
            </tr>
          </tbody>
            <tbody>
            <tr>
              <td>4587</td>
              <td>4578B</td>
              <td>9000515152121</td>
              <td>GP95</td>
              <td>2000</td>
              <td>500</td>
              <td>PENDING</td>
              <td>21-06-2021</td>
              <td>21-04-2021</td>
              <td>21-07-2021</td>
              <td>Andheri</td>
              <td><i className="fas fa-edit" onClick={ () => setOrderModalShow(true)}/>
        <OrderModal show={orderModalShow} onHide={()=>setOrderModalShow(false)} /></td>
            </tr>
          </tbody>
            <tbody>
            <tr>
              <td>4587</td>
              <td>4578C</td>
              <td>9000515152121</td>
              <td>GP95</td>
              <td>2000</td>
              <td>500</td>
              <td>PENDING</td>
              <td>--</td>
              <td>21-04-2021</td>
              <td>21-07-2021</td>
              <td>Andheri</td>
              <td><i className="fas fa-edit" onClick={ () => setOrderModalShow(true)}/>
        <OrderModal show={orderModalShow} onHide={()=>setOrderModalShow(false)} /></td>
            </tr>
          </tbody>
        </Table>
      </div>
      </div>    
              <div className='btn btn-outline-info' onClick={ () => setOrderModalShow( true ) }><i className="fas fa-plus-circle" /> ADD A NEW ORDER</div>

    </div>
    
  )
}

function AllUsers ()
{
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
            <th>LENDER</th>
            <th>USER NAME</th>
            <th>LATEST ORDER</th>
            <th>VERIFIED</th>
            <th>ORDER SUMMARY</th>
            <th>LENDER SUMMARY</th>
            <th>EDIT</th>
          </thead>
          <tbody>
            <tr>
              <td>9004377042</td>
              <td>TRUE</td>
              <td>TANUJ AGARWAL</td>
              <td>TRUE</td>
              <td>4571</td>
              <td><i className="fas fa-info" /></td>
              <td><Link to='/alllenders' ><i className="fas fa-info" /></Link></td>
              <td><Link to='/allusers/edituserdetails' ><i className="fas fa-edit" /></Link></td>
            </tr>
          </tbody>
            <tbody>
            <tr>
              <td>9112477042</td>
              <td>FALSE</td>
              <td>KULDEEP YADAV</td>
              <td>FALSE</td>
              <td>4571</td>
              <td><i className="fas fa-info" /></td>
              <td><Link to='/alllenders' ><i className="fas fa-info" /></Link></td>
              <td><Link to='/allproducts/edituserdetails' ><i className="fas fa-edit" /></Link></td>
            </tr>
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
          <Route path='/allusers/edituserdetails'><EditUserDetails /></Route>
          <Route path='/allusers/'><Users /></Route>
        </Switch>
      </div>  
    </Router>
  )

}
  

export const AdminDash = (props) => {
  const [addModalshow, setaddModalshow] = useState(false);
  const [index, setindex] = useState(props.ind);


  const changeIndex = (index) => {
    setindex(index);
  };

  var indexMap = {
    0: "/dash",
    1: "/allorders",
    2: "/allproducts",
    3: "/allusers",
    4: "/alllenders",
    5: "/adminsupport",
  /*  6: "/editproductdetails",
    7: "/edituserdetails" */
  };

  const DetailsCard = ({ index }) => (
    <Link style={{ textDecoration: "none" }} to={indexMap[index]}>
      <Card className="detailsCard">
        <Card.Content
          onClick={() => {
            changeIndex(index);
          }}
        >
          <Image
            src={props.ind === index ? icons[index] : icons_g[index]}
            wrapped
            ui={false}
          />
          <p className="detailsCardName">{iconDesc[index]}</p>
        </Card.Content>
      </Card>
    </Link>
  );

  return (
    <>
    <div className="admindashboard">
      <div className="adminopt">
  
        <div className="details">
          {iconDesc.map((item, index) => {
            return (
              <div>
                <DetailsCard index={index} />
              </div>
            );
          })}
        </div>
        <div className="logout">
        <Link to="/adminlogin"><i className="fas fa-sign-out-alt" /> LOG OUT</Link>
        </div>
      </div>
      <div class="right_screen">
        <div class="admindash">
          <div class="admindash_header">
            <p style={{ marginTop: "5px" }}>
              Admin Dash &gt;
              <span style={{ color: "#1bacf4" }}> {iconDesc[index]}</span>
            </p>
          </div>
        </div>
        {index === 3 ? <AllUsers /> : null}
        {index === 2 ? <AllProducts /> : null}
        {index === 1 ? <AllOrders /> : null}
        {index === 5 ? <AdminSupport /> : null}
        { index === 0 ? <Dash /> : null }
        { index === 4 ? <Lenders /> : null }  
      
      </div>
    
    </div>
      </>
  );
};

export default withRouter(AdminDash);
