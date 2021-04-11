import React, { Component, useState, useContext, useEffect } from "react";
import { Table} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import {  fetchSupport } from '../../config'
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
		axios.get("https://backendrentkar.herokuapp.com/support/").then((data) => {
      console.log(data.data);
      setS(data.data);
    });
	},
		[] );

	function SupportRequestModal ( props ){
    const [ resolved, setResolved ] = useState( false);
    const [solution, setSolution] = useState("");
    
    function onSubmitForm(e) {
       e.preventDefault();
      axios.put(`https://backendrentkar.herokuapp.com/support/${props.idget}`, {
        resolved: resolved,
        solution: solution,
      } );
      props.onHide()
    }

    // function openModel ( e )
    // {
      
    // }
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Support Request</Modal.Title>
            </Modal.Header>
        <Modal.Body>
          <p>{ props.idget }</p>
          <form onSubmit={ ( e ) => onSubmitForm( e ) }>
            <p>{ props.idget }</p>
            <label>
              CHANGE STATUS :
              <select
                //onChange{e => setResolved( e.currentTarget.value ) }
                name="supportstatus"
                // onChange={}
                value={ resolved }
                onChange={( e ) => setResolved( e.target.value)}
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
  const [ id, setid ] = useState()
  function handleClick(_id){
    setSupportRequestModalShow( true )
    console.log( _id )
    setid(_id)
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
              { s.map( ( item,index ) =>
              {
                if ( item.resolved === false ) { 
                return (
                  <tr key={index}>
                    <td>{ item._id }</td>
                    <td></td>
                    <td>{ item.userId._id }</td>
                    <td>{ item.userId.username }</td>
                    <td></td>
                    <td>{item.createdAt }</td>
                    <td>{ item.supporttype }</td>
                    <td>{ item.statement }</td>
                    <td><i className="fas fa-edit" onClick={ () => handleClick(item._id)} />
							<SupportRequestModal show={ supportRequestModalShow } onHide={ () => setSupportRequestModalShow( false ) } idget={id} /></td>
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
                  <th>RESOLVED ON</th>
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
                      <td>{item.createdAt}</td>
                      <td>{ item.updatedAt }</td>
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