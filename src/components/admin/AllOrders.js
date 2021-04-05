import React, { Component, useState, useContext, useEffect } from "react";
import { Table,Modal} from 'react-bootstrap'
import "./admindashboard.css";
import { fetchProducts, fetchUsers, fetchSupport, fetchOrderReq, fetchOrderReqById, fetchLenderReq } from '../../config'
import axios from "axios"

export function AllOrders ()
{
  
  const [ orderRequestModalShow, setOrderRequestModalShow ] = useState( false ) 
  const [ orderModalShow, setOrderModalShow ] = useState( false )
  
    const [ or, setor ] = useState( [] )
   useEffect(() => {
    const fetchAPI = async () => {
      setor( await fetchOrderReq() )
    };
     fetchAPI();
   }, [] );

  function OrderRequestModal ( props )
  {
    const [ status, setstatus ] = useState( "" );
    const [ od, setOd] = useState([])
    function valuestates(e) {
      setstatus( e.target.value);
      console.log(status)
    }
  
    useEffect(() => {
    const fetchAPI = async () => {
      setOd(await fetchOrderReqById(props.idget))
    };
     fetchAPI();
   }, [props.idget ] );
    function onSubmitForm(e) {
      // e.preventDefault();
      axios.put(`http://localhost:5000/orderreq/${props.idget}`, {
        status: status
      });
    }

    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Order Requests</Modal.Title>
            </Modal.Header>
        <Modal.Body>
        <h4>Order Details</h4>
<p> Id : <span>{ od._id }</span></p>
          <p>{ od.appliedForPOD}</p>
          <form onSubmit={ ( e ) => onSubmitForm( e ) }>
            <label>
              CHANGE STATUS :
              <select
                name="status"
                onChange={valuestates}>
                <option disabled selected value>
                  {" "}
                  -- select an option --{" "}
                </option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="CONFIRMED">CONFIRMED</option>
                <option value="DISPATCH">DISPATCH</option>
                <option value="DELIVERED">DISPATCH</option>
                <option value="PICKUP">PICKUP</option>
                <option value="EXTEND">EXTEND</option>
              </select>
            </label>
            <div>
              <div className="btn btn-outline-dark" onClick={props.onHide}>
                Close
              </div>
              <input
                className="btn btn-outline-success"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
            </Modal.Body>
        </Modal>
        )
  }

//     function OrderModal ( props ){
//   return(
//       <Modal { ...props }
//           size='lg'
//           aria-labelledby='contained-modal-title-vcenter'>
//           <Modal.Header closeButton>
//               <Modal.Title>Order</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//                 <form>
//                   <label></label>
//                 </form>
//           </Modal.Body>
//           <Modal.Footer>
//               <div className="btn btn-outline-dark" onClick={ props.onHide }>Close</div>
//               <div className="btn btn-outline-success" onClick={props.onHide}>Submit Changes</div>
//           </Modal.Footer>
//       </Modal>
//       )
// }

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
            <th>STATUS</th>  
            <th>PAYMENT RECEIVED</th>
            <th>EXP DELIVERY ON</th>
            <th>TOTAL PAYMENT</th>
            <th>Location</th>
            <th>TAKE ACTION</th>
          </thead>
            <tbody>
                {
                or.map( ( item ) =>
                {
                  if ( item.status === 'ACTIVE' )
                  {
                    
                    
                    return (
                      <tr>
                        <td>{ item._id }</td>
                        <td>{ item.userId._id }</td>
                        <td>{ item.productId.name }</td>
                        <td>{ item.status }</td>
                        <td>{ item.payment_received }</td>
                        <td>{ item.exp_del }</td>
                        <td>{ item.total_amount }</td>
                        <td>{ item.del_address.locality } </td>
                        <td><i className="fas fa-edit" onClick={ () => setOrderRequestModalShow( true ) } />
                          <OrderRequestModal show={ orderRequestModalShow } onHide={ () => setOrderRequestModalShow( false ) } idget={ item._id } /></td>
                      </tr>
                    )
                  }
                  })
                }
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
            <th>CUST ID</th>
            <th>PRODUCT REQ</th>
            <th>STATUS</th>  
            <th>PAYMENT RECEIVED</th>
            <th>EXP DELIVERY ON</th>
            <th>TOTAL PAYMENT</th>
            <th>Location</th>
            <th>TAKE ACTION</th>
          </thead>
            <tbody>
            {
                or.map( ( item ) =>
                {
                  if ( item.status !== 'ACTIVE' )
                  {
                    
                    
                    return (
                      <tr>
                        <td>{ item._id }</td>
                        <td>{ item.userId._id }</td>
                        <td>{ item.productId.name }</td>
                        <td>{ item.status }</td>
                        <td>{ item.payment_received }</td>
                        <td>{ item.exp_del }</td>
                        <td>{ item.total_amount }</td>
                        <td>{ item.del_address.locality } </td>
                        <td><i className="fas fa-edit" onClick={ () => setOrderRequestModalShow( true ) } />
                          <OrderRequestModal show={ orderRequestModalShow } onHide={ () => setOrderRequestModalShow( false ) } idget={ item._id } /></td>
                      </tr>
                    )
                  }
                  })
              }
            </tbody>
        </Table>
      </div>
      </div>    
              <div className='btn btn-outline-info' onClick={ () => setOrderModalShow( true ) }><i className="fas fa-plus-circle" /> ADD A NEW ORDER</div>

    </div>
    
  )
}