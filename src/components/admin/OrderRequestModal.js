import React, {useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap'
import "./admindashboard.css";
import { fetchProducts, fetchUsers, fetchSupport, fetchOrderReq, fetchOrderReqById, fetchLenderReq } from '../../config'
import axios from "axios"

  function OrderRequestModal ( props )
  {
    const [ status, setstatus ] = useState( "" );
    const [ od, setOd ] = useState( [] )
    const [allocatedProductId, setallocatedProductId] = useState()
	  const [ amount, setamount ] = useState( 0 )
	  
    useEffect(() => {
    const fetchAPI = async () => {
      setOd( await fetchOrderReqById( props.idget ) )
    };
     fetchAPI();
    }, [ props.idget ] );
    
  const [ paymentDue, setpaymentDue ] = useState()
  var [list, setlist] = useState([])
      var dd = od.exp_del
		  var pd = od.exp_pickup
		  var diff = ( new Date( pd).getTime() - new Date( dd ).getTime() ) / 1000;
		  diff /= ( 60 * 60 * 24 * 7 * 4 );
      var month = Math.abs( Math.round( diff ) ) 
      var p = month
		  var m = od.total_amount / p
		  console.log()
      var dt = new Date( dd )
   
    function onSubmitForm(e) {
      e.preventDefault();
      axios.put(`https://backendrentkar.herokuapp.com/orderreq/${props.idget}`, {
        status: status,
        allocatedProductId: allocatedProductId,
        subOrders: list
      } );
      console.log(status)
      console.log(list)
	  props.onHide()
		setlist( [] )
		setstatus("")
	  }
	  
	  function handleSelect ( e )
    {
      
		  setstatus( e.target.value )      
	  if ( month > 0 )
    {
    while ( p > 0 )
    {
      var dr = new Date(dt.setMonth( dt.getMonth() + 0 ))
      p = p - 1
      const data = {
        amount: m,
        paymentDue: dr
      }
      list.push(data )
      console.log(list)
    //  abs(data)
      dt.setMonth( dt.getMonth() + 1 );
    }    
  }
  else if(month===0){
    const data = {
      amount: od.total_amount,
      paymentDue: dt,
    }
    list.push(data)
      console.log( list )
      }
}
	


    return(
        <Modal { ...props }
        size='lg'
        className='create__an__order'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Create/Edit an Order</Modal.Title>
            </Modal.Header>
        <Modal.Body>
          <div className='order'>
          <div className='order__detail__1'>
        <h4>Order Details</h4>
          <p> Id : <span>{ od._id }</span></p>
          <p>Applied For POD : { od.appliedForPOD }</p>
          <p>Current Status : { od.status }</p>
          <p>Delivery Address : { od.houseNumber }, { od.street }, { od.locality }, { od.city }, { od.state }, { od.zip }</p>
          <p>Order Requested At : { od.requestedOn }</p>
          <p>Delivery Date : { od.exp_del }</p>
          <p>Pickup Date : { od.exp_pickup }</p>
          <p>Total Amount : { od.total_amount }</p>
          <p>Payment Received : { od.payment_received }</p>
            <p>Payment Pending : { od.payment_pending }</p>
          </div>
          <div className='order__detail__2'>
          <h4>User Detail</h4>
          <p>_id : { od.userID }</p>
          <p>Name : { od.username }</p>
          <p>Phone : { od.phoneNumber }</p>
          <h4>Product Detail</h4>
          <p>Product Ordered : { od.product }</p>
          <p>Product Id : { od.product_id }</p>
        </div>
          </div>
          <hr />
          <h4>Edit Order</h4>
          <form onSubmit={ ( e ) => onSubmitForm( e ) }>
            <b><p>Changing Status and Creating of Whole Order will come  here</p></b>
            <div>
            <label>
              CHANGE STATUS :
              <select
                name="status"
                  value={ status }
                  onChange={ handleSelect}>
                <option disabled selected value>
                  {" "}
                  -- select an option --{" "}
                </option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="CONFIRMED">CONFIRMED</option>
                <option value="DISPATCH">DISPATCH</option>
                <option value="DELIVERED">DELIVERED</option>
                <option value="PICKUP">PICKUP</option>
                <option value="EXTEND">EXTEND</option>
              </select>
              </label>
            </div>
            <div>
            <label>
                Allote a sub product : 
              <input type='text' value={ allocatedProductId }
                  onChange={ ( e ) => setallocatedProductId( e.target.value ) } placeholder='enter id of subproduct alloted' />
              </label>
              </div>
            <h4>Create Sub Orders</h4>
            {
          list.map( ( item ) =>
        {
          if (item.amount > 0)
          {
            return (
              <div style={ {
                display: 'flex', margin: "auto", justifyContent: 'space-around'
              } }>
                <p>Amount : <span>{ item.amount }</span></p>
                <p>Due Date : <span>{ item.paymentDue.toString() }</span></p>
              </div>
            )
          }
        } ) }
            <Modal.Footer>
              <div className="btn btn-outline-dark" onClick={props.onHide}>
                Close
              </div>
              <button
                className="btn btn-outline-success"
                type="submit"
              >Submit</button>
            </Modal.Footer>
          </form>
            </Modal.Body>
        </Modal>
        )
  }

export default OrderRequestModal
