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
import { fetchProducts, fetchUsers, fetchSupport, fetchOrderReq, fetchLenderReq} from '../../config'
import axios from "axios"
import {
  Select,
  TextField,
  MenuItem,
  makeStyles,
  TextareaAutosize,
  Button as Btn,
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
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
            <th>USER ID</th>
            <th>LENDER</th>
            <th>USER NAME</th>
            <th>PRODUCTS</th>
            <th>REQUEST DATE</th>
            <th>TAKE ACTION</th>
          </thead>
            <tbody>
              { lr.map(( item ) => {
                return(
                  <tr>
                    <td>{ item._id }</td>
                    <td>{ item.userId._id }</td>
                    <td>{ item.userId.lender.toString() }</td>
                    <td>{ item.userId.username }</td>
                    <td>{ item.productId.name }</td>
                    <td>{item.createdAt}</td>
                    <td><i className="fas fa-edit" onClick={ () => setLenderRequestModalShow( true ) } />
              <LenderRequestModal show={lenderRequestModalShow} onHide={()=> setLenderRequestModalShow(false)} /></td>
                  </tr>
                )
              })}

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
  
  const [ s, setS ] = useState( [] )
    useEffect(() => {
    const fetchAPI = async () => {
        setS( await fetchSupport() );
    };
	fetchAPI();
	},
		[] );

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
                      <SupportRequestModal show={ supportRequestModalShow } onHide={ () => setSupportRequestModalShow( false ) } /></td>
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


function AllProducts ()
{
const [ p, setP ] = useState( [] )
    useEffect(() => {
    const fetchAPI = async () => {
        setP( await fetchProducts() );
    };
	fetchAPI();
	},
      [] );

    const useStyles = makeStyles((theme) => ({
    categoryInput: {
      paddingTop: "20px",
      width: "45%",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  
  
  function AddProductModal ( props )
  {
    const classes = useStyles()
    const [ category, setCategories ] = useState( 'category' )
    const [ subcat, setSubcat ] = useState( [] )
    const [ fields, setFields ] = useState( [{value: null}] )
    
    const userForm = ( e ) =>
    {
      e.preventDefault()
      axios.post( 'URL', 'datafile' ) // post url and datafile
        .then( function ( response )
        {
        console.log(response)
      })
    }
    const handleChange = ( event ) =>
    {
      setCategories(event.target.value)
    }

    const subChange = ( event ) =>
    {
      setSubcat( event.target.value)
    }

    function handleChanges ( i, event )
    {
      const values = [ ...fields ]
      values[ i ].value = event.target.value
      setFields(values)
    }

    function handleAdd ()
    {
      const values = [ ...fields ]
      values.push( { value: null } )
      setFields( values )
      console.log('add event specifications')
    }

    function handleRemove ( i )
    {
      const values = [ ...fields ]
      values.splice( i, 1 )
      setFields(values)
    }
    
    return(
        <Modal { ...props }
        size='lg'
        className='addaproduct'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Add A New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <form className={classes.formControl}>
            <TextField label="Name" style={{ width: "100%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className='row'>
              <div className='col-6'>
              <p>Avaialble In Mumbai</p>
              <Select   className={classes.categoryInput}
                labelId="availableInMumbai"
                value={category}
                onChange={handleChange}>
                <MenuItem>True</MenuItem>
                <MenuItem>False</MenuItem>
                </Select>
                </div>
                <div className='col-6'>
              <p>Available In Pune</p>
              <Select   className={classes.categoryInput}
                labelId="availableInPune"
                value={category}
                onChange={handleChange}>
                <MenuItem>True</MenuItem>
                <MenuItem>False</MenuItem>
                </Select>
                </div>
              <div className='col-6'>
              <p>Limited Stock</p>
              <Select   className={classes.categoryInput}
                labelId="limitedStock"
                value={category}
                onChange={handleChange}>
                <MenuItem>True</MenuItem>
                <MenuItem>False</MenuItem>
              </Select>
                </div>
              
              <div className='col-6'>
              <p>Category</p>
              <Select
                className={classes.categoryInput}
                labelId="categories"
                value={category}
                onChange={handleChange}
              >
                <MenuItem value={10}>MUSIC</MenuItem>
                <MenuItem value={20}>GAMING</MenuItem>
                <MenuItem value={30}>LAPTOP</MenuItem>
                <MenuItem value={40}>PHOTOGRAPHY</MenuItem>
              </Select>
              </div>
              
              <div className='col-6'>
              <p>Sub Categories</p>
              <Select
                className={classes.categoryInput}
                value={subcat}
                onChange={subChange}
              >
                <MenuItem value={10}>GUITAR</MenuItem>
                <MenuItem value={20}>KEYBOARD</MenuItem>
                <MenuItem value={30}>PERCUSSION</MenuItem>
                <MenuItem value={40}>RECORDING</MenuItem>
                <MenuItem value={50}>PACKAGES</MenuItem>
                <MenuItem value={60}>PC GAMING</MenuItem>
                <MenuItem value={70}>CONSOLE</MenuItem>
                <MenuItem value={80}>ACCESSORIES</MenuItem>
                <MenuItem value={90}>GAMING</MenuItem>
                <MenuItem value={100}>i3</MenuItem>
                <MenuItem value={11}>i5</MenuItem>
                <MenuItem value={12}>i7</MenuItem>
                <MenuItem value={13}>MACBOOK</MenuItem>
                <MenuItem value={14}>PC</MenuItem>
                <MenuItem value={15}>TABLETS</MenuItem>
                <MenuItem value={16}>CAMERA</MenuItem>
                <MenuItem value={17}>FILTERS</MenuItem>
                <MenuItem value={18}>LENS</MenuItem>
                <MenuItem value={19}>LIGHTS</MenuItem>
                <MenuItem value={20}>RECORDING</MenuItem>
                <MenuItem value={21}>RIGS</MenuItem>
                  </Select>
                </div>
              </div>
            </div>
            

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField label="Quantity" />
              <TextField label="Price" />
            </div>
            <br />
            <br />
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={5}
              style={{ width: "100%", padding: "1%" }}
              placeholder="Description"
            />
            <label>Specification</label>
            <div>
              {/* <TextField label="Brand" />
              <TextField label="Specification" /> */}
              {fields.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`}>
                    <TextField
                      type="text"
                      label="Brand"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <TextField
                      type="text"
                      label="Specification"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <button type="button" onClick={() => handleRemove(idx)}>
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Btn
                variant="outlined"
                color="primary"
                type="button"
                onClick={() => handleAdd()}
              >
                Add a new Specification
              </Btn>
            </div>
            <label>BOX</label>
            <div>
              {/* <TextField label="Brand" />
              <TextField label="Specification" /> */}
              {fields.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`}>
                    <TextField
                      type="text"
                      label="Box Content"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <TextField
                      type="text"
                      label="Image Location"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <button type="button" onClick={() => handleRemove(idx)}>
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Btn
                variant="outlined"
                color="primary"
                type="button"
                onClick={() => handleAdd()}
              >
                Add a new box content
              </Btn>
            </div>

            <label>Images</label>
            <div>
              {/* <TextField label="Brand" />
              <TextField label="Specification" /> */}
              {fields.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`}>
                    <TextField
                      type="text"
                      label="Box Content"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <button type="button" onClick={ () => handleRemove( idx ) }>
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Btn
                variant="outlined"
                color="primary"
                type="button"
                onClick={() => handleAdd()}
              >
                Add a new image
              </Btn>
            </div>
            <label>BOX</label>
            <div>
              {/* <TextField label="Brand" />
              <TextField label="Specification" /> */}
              {fields.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`}>
                    <TextField
                      type="text"
                      label="Add Object Id of Adons"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <TextField
                      type="text"
                      label="Image Location"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <button type="button" onClick={() => handleRemove(idx)}>
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Btn
                variant="outlined"
                color="primary"
                type="button"
                onClick={() => handleAdd()}
              >
                Add a new Add On
              </Btn>
            </div>

          </form>
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
            <th>_id</th>
            <th>PRODUCT ID</th>
            <th>CATEGORY</th>
            <th>SUB CATEGORY</th>
            <th>NAME</th>
            <th>LENDERS</th>
            <th>EDIT</th>
          </thead>
          <tbody>
        { p.map( ( item, index ) =>
        {
          return (
            <tr>
              <td>{item._id}</td>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.subcategory}</td>
              <td>{item.productName}</td>
              <td><Link to='/alllenders' ><i className="fas fa-info" /></Link></td>
              <td><Link to={ `/allproducts/editproductdetails/${ item._id }` }><i className="fas fa-edit" /></Link></td>
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
          <Route path='/allproducts/editproductdetails/:_id'><EditProductDetails /></Route>
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

function AllUsers ()
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
