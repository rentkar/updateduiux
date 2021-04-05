import React, { Component, useState, useContext, useEffect } from "react";
import { Table,Modal} from 'react-bootstrap'
import "./admindashboard.css";
import { fetchProducts, fetchUsers, fetchSupport, fetchOrderReq, fetchLenderReq } from '../../config'
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
                {
                  or.map((item) => {
                    return (
                      <tr>
                      <td>{ item._id }</td>
                        <td>{ item.userId._id }</td>
                        <td>{ item.productId.name }</td>
                        <td>{ item.payment_received }</td>
                        <td>{ item.exp_del }</td>
                        <td>{ item.total_amount }</td>
                        <td>{ item.del_address.locality } </td>
                      <td><i className="fas fa-edit" onClick={ () => setOrderRequestModalShow( true ) } />
                      <OrderRequestModal show={orderRequestModalShow} onHide={()=> setOrderRequestModalShow(false)} /></td>
                    </tr>
                    )
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

              </tr>
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