import React, { Component, useState, useContext, useEffect } from "react";
import { Table} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import "./admindashboard.css";
import { fetchProducts, fetchUsers, fetchSupport, fetchOrderReq, fetchLenderReq} from '../../config'
import axios from "axios"


export function Lenders ()
{
  const [ addNewLenderModalShow, setAddNewLenderModalShow ] = useState( false ) 
  const [ addNewProductModalShow, setAddNewProductModalShow ] = useState( false )
  const [ editLenderModalShow, setEditLenderModalShow ] = useState( false ) 
  const [ lenderRequestModalShow, setLenderRequestModalShow ] = useState( false ) 
  
  const [ lr, setLr ] = useState( [] )
    useEffect(() => {
    const fetchAPI = async () => {
        setLr( await fetchLenderReq() );
    };
	fetchAPI();
	},
		[] );
  
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
            <th>Lender Name</th>
            <th>Phone Number</th>
            <th>PRODUCT</th>
            <th>REQUEST DATE</th>
            <th>TAKE ACTION</th>
          </thead>
            <tbody>
      
                  <tr>
                    <td>DJDJJD</td>
                    <td>NAME</td>
                    <td>893993</td>
                    <td>PRODUCT</td>
                    <td>CREATED AT </td>
                    <td><i className="fas fa-edit" onClick={ () => setLenderRequestModalShow( true ) } />
              <LenderRequestModal show={lenderRequestModalShow} onHide={()=> setLenderRequestModalShow(false)} /></td>
                  </tr>
              

          </tbody>
        </Table>
      </div> 
  </div>


      <div className='currentlenders'>
          <p>LENDERS</p>
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