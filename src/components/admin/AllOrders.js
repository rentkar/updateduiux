import React, { Component, useState, useContext, useEffect } from "react";
import { Table,Modal} from 'react-bootstrap'
import "./admindashboard.css";
import { fetchProducts, fetchUsers, fetchSupport, fetchOrderReq, fetchOrderReqById, fetchLenderReq } from '../../config'
import axios from "axios"
import OrderRequestModal from './OrderRequestModal'
export function AllOrders ()
{
  
  const [ orderRequestModalShow, setOrderRequestModalShow ] = useState( false ) 
//  const [ orderModalShow, setOrderModalShow ] = useState( false )
  
    const [ or, setor ] = useState( [] )
   useEffect(() => {
    const fetchAPI = async () => {
      setor( await fetchOrderReq() )
    };
     fetchAPI();
   }, [] );



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

  const [id, setid] = useState()
  function handleClick ( _id )
  {
    setOrderRequestModalShow( true )
    console.log( _id )
    setid(_id)
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
                        <td><i className="fas fa-edit" onClick={ () => handleClick(item._id)} />
                          <OrderRequestModal show={ orderRequestModalShow } onHide={ () => setOrderRequestModalShow( false ) } idget={ id } /></td>
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
                        {/* <td><i className="fas fa-edit" onClick={ () => setOrderRequestModalShow( true ) } />
                          <OrderRequestModal show={ orderRequestModalShow } onHide={ () => setOrderRequestModalShow( false ) } idget={ item._id } /></td> */}
                      </tr>
                    )
                  }
                  })
              }
            </tbody>
        </Table>
      </div>
      </div>    
    </div>
    
  )
}