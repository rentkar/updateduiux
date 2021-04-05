import React, { Component, useState, useContext, useEffect } from "react";
import { Table} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import { fetchProducts, fetchUsers, fetchSupport, fetchOrderReq, fetchLenderReq} from '../../config'
import axios from "axios"

export function AdminSupport ()
{
  const [ supportRequestModalShow, setSupportRequestModalShow ] = useState( false )
  
  const [ s, setS ] = useState( [] )
    useEffect(() => {
    const fetchAPI = async () => {
        setS( await fetchSupport() );
    };
		fetchAPI();
		axios.get("http://localhost:5000/support/").then((data) => {
      console.log(data.data);
      setS(data.data);
    });
	},
		[] );

	function SupportRequestModal ( props ){
    const [ resolved, setResolved ] = useState( false);
    const [solution, setSolution] = useState("");
    function valuestates(e) {
      setResolved( e.target.value);
      console.log(resolved)
    }
    function onSubmitForm(e) {
      // e.preventDefault();
      axios.put(`http://localhost:5000/support/${props.idget}`, {
        resolved: resolved,
        solution: solution,
      });
    }
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Support Request</Modal.Title>
            </Modal.Header>
			<Modal.Body>
			<form onSubmit={ ( e ) => onSubmitForm( e ) }>
            <label>
              CHANGE STATUS :
              <select 
                //onChange{e => setResolved( e.currentTarget.value ) }
                name="supportstatus"
                // onChange={}
               onChange={valuestates}
              >
                <option disabled selected value>
                  {" "}
                  -- select an option --{" "}
                </option>
                <option value='false' >PENDING</option>
                <option value='true'>SOLVED</option>
              </select>
            </label>
            <label>
              SOLUTION :
              <input
                type="text"
                name="solution"
                placeholder="Enter the solution if any"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
              />
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
            <th>SUPPORT TYPE</th>
            <th>ISSUE</th>
            <th>TAKE ACTION</th>
          </thead>
            <tbody>
              { s.map( ( item ) =>
              {
                if ( item.resolved === false ) { 
                return (
                  <tr>
                    <td>{ item._id }</td>
                    <td></td>
                    <td>{ item.userId._id }</td>
                    <td>{ item.userId.username }</td>
                    <td></td>
                    <td></td>
                    <td>{ item.supporttype }</td>
                    <td>{ item.statement }</td>
                    <td><i className="fas fa-edit"  onClick={ () => setSupportRequestModalShow( true ) } />
							<SupportRequestModal show={ supportRequestModalShow } onHide={ () => setSupportRequestModalShow( false ) } idget={ item._id }/></td>
                  </tr>
                )
              }
            }
              ) }
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
                  <th>SUPPORT TYPE</th>
                  <th>ISSUE</th>
                  <th>SOLUTION</th>
                </thead>
                <tbody>
              { s.map( ( item ) =>
              {

                if ( item.resolved === true )
                {
                  return (
                    <tr>
                      <td>{ item._id }</td>
                      <td></td>
                      <td>{ item.userId._id }</td>
                      <td>{ item.userId.username }</td>
                      <td></td>
                      <td></td>
                      <td>{ item.supporttype }</td>
                      <td>{ item.statement }</td>
                      <td>{ item.solution }</td>
                    </tr>
                  )
                }
              }
              ) }
          </tbody>
        </Table >
      </div>
      </div>
    </div>
  )
}