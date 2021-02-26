import React, { Component, useState, useContext, useEffect } from "react";

import rental_s from "../../images/icons/rental_s.png";
import bag_s from "../../images/bagb.png";
import bag_g from "../../images/bag.png";
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
  bag_g,
  listing_s,
  verification_s,
  support_s,
  settings_s,
  rental_s,
];
const icons_g = [
  bag_s,
  listing_g,
  verification_g,
  support_g,
  settings_g,
  rental_g,
];
const iconDesc = [
  "PRODUCTS",
  "USERS",
  "ORDERS",
  "SUPPORT",
  "DASH",
  "LENDERS"
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
      <div className='lendersreq__header'>
        <h2>REQUEST ID</h2>
        <h2>USER ID</h2>
        <h2>LENDER</h2>
        <h2>USER NAME</h2>
        <h2>PRODUCT IDs</h2>
        <h2>REQUEST DATE</h2>

        <h2>TAKE ACTION</h2>
      </div>
      <div className='lendersreq__info'>
        <h3>LQ90042A</h3>
        <h3>90042xxxxx</h3>
        <h3>FALSE</h3>
        <h3>TANUJ AGARWAL</h3>
        <h3>GP9, PS5</h3>
        <h3>2020-03-04</h3>
          <h3><i className="fas fa-edit" onClick={ () => setLenderRequestModalShow( true ) } /></h3>
          <LenderRequestModal show={lenderRequestModalShow} onHide={()=> setLenderRequestModalShow(false)} />

      </div>
      
      <div className='lendersreq__info'>
        <h3>LQ90043A</h3>
        <h3>90032xxxxx</h3>
        <h3>TRUE</h3>
        <h3>MUDIT</h3>
        <h3>PS4P</h3>
        <h3>2020-03-04</h3>  
          <h3><i className="fas fa-edit" onClick={ () => setLenderRequestModalShow( true ) } /></h3>
          <LenderRequestModal show={lenderRequestModalShow} onHide={()=> setLenderRequestModalShow(false)} />

        </div>
        
        </div>
      <div className='currentlenders'>
          <p>LENDER REQUESTS</p>
      <div className='buttons'>
              <div className= 'btn btn-outline-success'>FILTER <i className="fas fa-chevron-circle-down" /></div>
        <div className='btn btn-outline-info' onClick={ () => setAddNewProductModalShow( true ) }><i className="fas fa-plus-circle" /> ADD A NEW PRODUCT</div>
          <AddNewProductModal show={ addNewProductModalShow } onHide={ () => setAddNewProductModalShow( false ) } />
        </div>
      <div className='lenders__header'>
        
        <h2>LENDER ID</h2>
        <h2>LENDER</h2>       
        <h2>PRODUCT ID</h2>
        <h2>DATE OF PURCHASE</h2>
        <h2>AVAILABILITY</h2>
        <h2>ORDER ID</h2>
        <h2>EDIT</h2>
      </div>
      
        <div className='lenders__info'>
        <h3>90042xxxxx</h3>
        <h3>TANUJ</h3>
        <h3>GP9</h3>
        <h3>2020-02-02</h3>
        <h3>RENTED OUT</h3>
        <h3>#456789</h3>
        <h3><i className="fas fa-edit" onClick={ () => setEditLenderModalShow( true ) } /></h3>
          <EditLenderModal show={editLenderModalShow} onHide={()=> setEditLenderModalShow(false)} />
        </div>
        <div className='lenders__info'>
        <h3>90042xxxxx</h3>
        <h3>TANUJ</h3>
        <h3>PS53</h3>
        <h3>2021-01-01</h3>
        <h3>AVAILABLE</h3>
        <h3>--</h3>
          <h3><i className="fas fa-edit" onClick={ () => setEditLenderModalShow( true ) } /></h3>
          <EditLenderModal show={editLenderModalShow} onHide={()=> setEditLenderModalShow(false)} />
        </div>
        <div className='lenders__info'>
        <h3>91142xxxxx</h3>
        <h3>SANJAY</h3>
        <h3>PS4P9</h3>
        <h3>2020-05-01</h3>
        <h3>AVAILABLE</h3>
        <h3>--</h3>
          <h3><i className="fas fa-edit" onClick={ () => setEditLenderModalShow( true ) } /></h3>
          <EditLenderModal show={editLenderModalShow} onHide={()=> setEditLenderModalShow(false)} />
        </div>
        <div className='lenders__info'>
        <h3>86642xxxxx</h3>
        <h3>SAMEER</h3>
        <h3>NIN3</h3>
        <h3>2018-01-01</h3>
        <h3>RENTED OUT</h3>
        <h3>#45690</h3>
          <h3><i className="fas fa-edit" onClick={ () => setEditLenderModalShow( true ) } /></h3>
          <EditLenderModal show={editLenderModalShow} onHide={()=> setEditLenderModalShow(false)} />
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
      <h4>FILTER BY DATE
        <input className='date' type="date" />
      </h4>
      <div className='payments'>
        <p>PAYMENTS</p> 
        <div className='paymentsbydate__header'>
        <h2>USER ID</h2>
        <h2>USERNAME</h2>
        <h2>ORDER ID</h2>
        <h2>SUBORDER ID</h2>  
        <h2>AMOUNT</h2>
        <h2>STATUS</h2>
        <h2>LOCATION</h2>
        </div>
        <div className='paymentsbydate__info'>
        <h3>90042XXXXX</h3>
        <h3>TANUJ</h3>
        <h3>#5000</h3>
        <h3>#5000A</h3>  
        <h3>4000</h3>
        <h3>PENDING</h3>
        <h3>ANDHERI E</h3>
        </div>
      </div>
      <div className='deliveries'>
        <p>DELIVERIES</p> 
        <div className='deliveriesbydate__header'>
        <h2>USER ID</h2>
        <h2>USERNAME</h2>
          <h2>ORDER ID</h2> 
          <h2>PRODUCTS</h2>
        <h2>AMOUNT PENDING</h2>
        <h2>STATUS</h2>
        <h2>LOCATION</h2>
        </div>
        <div className='deliveriesbydate__info'>
        <h3>90042XXXXX</h3>
        <h3>TANUJ</h3>
          <h3>#5000</h3> 
          <h3>GP99, PSP4</h3>
        <h3>4000</h3>
        <h3>DISPATCHED</h3>
        <h3>ANDHERI E</h3>
        </div>
      </div>
      <div className='pickups'>
        <p>PICKUPS</p> 
        <div className='pickupsbydate__header'>
        <h2>USER ID</h2>
          <h2>USERNAME</h2>
          <h2>ORDER ID</h2>
        <h2>ORDER SUB ID</h2> 
        <h2>AMOUNT PENDING</h2>
        <h2>PRODUCTS</h2>
        <h2>STATUS</h2>
        <h2>LOCATION</h2>
        </div>
        <div className='pickupsbydate__info'>
        <h3>90042XXXXX</h3>
        <h3>TANUJ</h3>
          <h3>#5000</h3> 
          <h3>#5000a</h3>
          <h3>4000</h3>
          <h3>PS4P9</h3>
        <h3>PENDING</h3>
        <h3>ANDHERI E</h3>
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
      <div className='support__req'>
        <p>SUPPORT REQUESTS</p>
      <div className='supportreq__header'>
        <h2>REQUEST ID</h2>
        <h2>ORDER ID</h2>
        <h2>USER ID</h2>
        <h2>USER NAME</h2>
        <h2>ISSUE</h2>
        <h2>REQUEST DATE</h2>
        <h2>TAKE ACTION</h2>
      </div>
      <div className='supportreq__info'>
        <h3>SP90042A</h3>
        <h3>#45667</h3>
        <h3>90042xxxxx</h3>
        <h3>TANUJ AGARWAL</h3>
        <h3>GO PRO 9 suddenly stopped</h3>
        <h3>2020-03-04</h3>
          <h3><i className="fas fa-edit" onClick={ () => setSupportRequestModalShow(true)}/></h3>
        <SupportRequestModal show={supportRequestModalShow} onHide={()=>setSupportRequestModalShow(false)} />
      </div>
        <p>ISSUED SOLVED</p>
      <div className='solvedissues__header'>
        <h2>REQUEST ID</h2>
        <h2>ORDER ID</h2>
        <h2>USER ID</h2>
        <h2>ISSUE</h2>
        <h2>SOLUTION</h2>
      </div>
      <div className='solvedissues__info'>
        <h3>SP90042A</h3>
        <h3>#45667</h3>
        <h3>90042xxxxx</h3>
        <h3>GO PRO 9 suddenly stopped</h3>
        <h3>THE PRODUCT WAS REPLACED WITH GP910</h3>
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
                <div variant="outline-success" onClick={props.onHide}>Submit Changes</div>
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
          <div className='products__header'>
          <h2>PRODUCT ID</h2>
          <h2>CATEGORY</h2>
          <h2>SUB-CATEGORY</h2>
          <h2>NAME</h2>
          <h2>QUANTITY</h2>
          <h2>LENDERS</h2>
          <h2>EDIT</h2>
        </div>
        <div className='products'>
          <h3>GP9</h3>
          <h3>TECH</h3>
          <h3>CAMERA</h3>
          <h3>GO PRO 9</h3>
          <h3>20</h3>
          <h3><Link to='/alllenders' ><i className="fas fa-info" /></Link></h3>
          <h3><Link to='/allproducts/editproductdetails' ><i className="fas fa-edit" /></Link></h3>
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
        <div className='orderreq__header'>
          <h2>ORDER ID</h2>
          <h2>CUST ID</h2>
          <h2>PRODUCTS REQ</h2>
          <h2>PAYMENT RECEIVED</h2>
          <h2>DURATION</h2>
          <h2>EXP DELIVERY ON</h2>
          <h2>TOTAL PAYMENT</h2>
          <h2>TAKE ACTION</h2>
        </div>
        <div className='orderreqs'>
          <h3>#4567</h3>
          <h3>90042xxxx</h3>
        <h3>GP9, NIN, PS5</h3>
        <h3>5667</h3>
        <h3>2021-03-01</h3>
        <h3>3M, 2W, 4D</h3>
          <h3>45121</h3>
          <h3><i className="fas fa-edit" onClick={ () => setOrderRequestModalShow( true ) } /></h3>
          <OrderRequestModal show={orderRequestModalShow} onHide={()=> setOrderRequestModalShow(false)} />

        </div>
      </div>

      <div className='orders'>
      <p>ORDERS</p>  
      <div className='buttons'>
          <div className='btn btn-outline-success'>FILTER <i className="fas fa-chevron-circle-down" /></div>  
        </div> 
          <div className='order__header'>
          <h2>ORDER ID</h2>
            <h2>SUBORDER ID</h2>
          <h2>CUST ID</h2>
          <h2>PRODUCT ID</h2>
          <h2>STATUS</h2>
          <h2>PAYMENT</h2>
          <h2>PAYMENT DUE</h2>
          <h2>DELIVERY ON</h2>
          <h2>PICKUP DATE</h2>
          <h2>EDIT</h2>
        </div>
        <div className='order__details'>
          <h3>#4567</h3>
          <h3>#4567a</h3>
          <h3>90042xxxx</h3>
        <h3>GP94</h3>
        <h3>CONFIRMED</h3>
        <h3>RECEIVED</h3>
        <h3>2020-03-02</h3>
        <h3>2020-03-02</h3>
        <h3>2020-05-02</h3>
        <h3><i className="fas fa-edit" onClick={ () => setOrderModalShow(true)}/></h3>
        <OrderModal show={orderModalShow} onHide={()=>setOrderModalShow(false)} />
        </div>
          <div className='order__details'>
          <h3>#4567</h3>
          <h3>#4567b</h3>
          <h3>90042xxxx</h3>
        <h3>GP94</h3>
          <h3>CONFIRMED</h3>
          <h3>PENDING</h3>
          <h3>2020-04-02</h3>
        <h3>2020-03-02</h3>
          <h3>2020-05-02</h3>
          <h3><i className="fas fa-edit" onClick={ () => setOrderModalShow( true ) } /></h3>
        <OrderModal show={orderModalShow} onHide={()=>setOrderModalShow(false)} />
        </div>
          <div className='order__details'>
          <h3>#4567</h3>
          <h3>#4567c</h3>
          <h3>90042xxxx</h3>
        <h3>GP94</h3>
        <h3>CONFIRMED</h3>
          <h3>PENDING</h3>
          <h3>2020-03-02</h3>
        <h3>2020-03-02</h3>
          <h3>2020-05-02</h3>
      <h3><i className="fas fa-edit" onClick={ () => setOrderModalShow(true)}/></h3>
        <OrderModal show={orderModalShow} onHide={()=>setOrderModalShow(false)} />
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
        <div className='users__header'>
          <h2>USER ID</h2>
          <h2>LENDER</h2>
          <h2>USERNAME</h2>
          <h2>C ORDERID</h2>
          <h2>VERIFIED</h2>
        <h2>EDIT</h2>
        </div>
        <div className='users'>
          <h3>900042xxxxx</h3>
          <h3>TRUE</h3>
        <h3>TANUJ AGARWAL</h3>
        <h3>#45667</h3>
        <h3>TRUE</h3>
          <h3><Link to='/allusers/edituserdetails' ><i className="fas fa-edit" /></Link></h3>
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
  // const user = [["Name", "Siddharth"], ["Email", "sid@rentkar.com"],
  // ["Mobile Number", "982304234"], ["Date Of Birth", "31/03/2001"]]
  const [user, setuser] = useState([
    {
      Name: "Name",
      value: "Siddharth"
    },
    {
      Name: "Email",
      value: "sid@rentkar.com"
    },
    {
      Name: "Mobile Number",
      value: "982304234"
    },
    {
      Name: "Date Of Birth",
      value: "31/03/2001"
    }
  ]);
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         index: this.props.ind
  //     }
  // }
  const [index, setindex] = useState(props.ind);


  const changeIndex = (index) => {
    setindex(index);
  };

  var indexMap = {
    0: "/allproducts",
    1: "/allusers",
    2: "/allorders",
    3: "/adminsupport",
    4: "/dash",
    5: "/alllenders",
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
        
        {index === 1 ? <AllUsers /> : null}
        {index === 0 ? <AllProducts /> : null}
        {index === 2 ? <AllOrders /> : null}
        {index === 3 ? <AdminSupport /> : null}
        { index === 4 ? <Dash /> : null }
          { index === 5 ? <Lenders /> : null }  
      
      </div>
    
    </div>
      </>
  );
};

export default withRouter(AdminDash);
