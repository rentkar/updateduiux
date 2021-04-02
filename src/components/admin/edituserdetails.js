import React, {useState, useEffect} from 'react'
import './edituserdetails.css'
import {Button, Modal} from 'react-bootstrap' 
import { Link } from 'react-router-dom'
import
    {
        fetchUserDetail, fetchUserAddressDetail
    } from '../../config'
import { useParams } from "react-router";    
function EditDetailsModal( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Edit Details</Modal.Title>
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
                    <Button variant="outline-dark" onClick={ props.onHide }>Close</Button>
                        <input className='btn btn-outline-success' type="submit" value="Submit" />
                    </div>
                </form>
            </Modal.Body>
        </Modal>
        )
}

function EditUserDetails ()
{
    const [ editDetailsModalShow, setEditDetailsModalShow ] = useState( false )
    let { _id } = useParams()
    const [ ud, setud ] = useState( [] )
    const [ uda, setuda ] = useState([])
    
        useEffect(() => {
        const fetchAPI = async () => {
            setud( await fetchUserDetail( _id ) )
            setuda(await fetchUserAddressDetail(_id))
        };
        fetchAPI();
    }, [ _id ] );
    return (
        <div className='editauser'>
            <div className='user__details row'>
                <div className='col-5 user__info'> 
                    <h2>INFO</h2>
                    <div className='row'>
                    <h4 className='col-6'>ID</h4>
                    <p className='col-6 detail' >{ud._id}</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>NAME</h4>
                        <p className='col-6 detail' >{ud.name}</p>
                    </div>
                <div className='row'>
                    <h4 className='col-6'>IMAGE</h4>
                        <p className='col-6 detail' >{ud.image}</p>
                </div>
                    <div className='row'>
                    <h4 className='col-6'>VERIFIED</h4>
                        <p className='col-6 detail' >{ ud.verified }</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>DOB</h4>
                        <p className='col-6 detail' >{ud.dob}</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>GENDER</h4>
                        <p className='col-6 detail' >{ud.gender}</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>PRIMARY ADDRESS</h4>
                        <p className='col-6 detail' >D501, PANOM PARK, VILE PARLE (E)</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>EMAIL</h4>
                        <p className='col-6 detail' >{ud.email}</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>DOC TYPE</h4>
                        <p className='col-6 detail' >{ud.doctype}</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>DOC LINK</h4>
                        <p className='col-6 detail' >{ud.doccopy}</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>BANK STATEMENT</h4>
                        <p className='col-6 detail' >---</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>LENDER</h4>
                        <p className='col-6 detail' >{ud.lender}</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>CREATED ON</h4>
                        <p className='col-6 detail' >{ud.createdAt}</p>
                    </div>
                    <div className='row'>
                        <h4 className='col-6'>LAST UPDATE ON</h4>
                        <p className='col-6 detail' >{ud.updatedAt}</p>
                        {/*    <p className='col-6 detail' >2021-03-02 <i  id='time' className="fas fa-calendar-plus" /> 6:58 <i  id='time' className="fas fa-user-clock" /></p>*/ }
                    </div>
                    <div className='btn btn-outline-info' onClick={ () => setEditDetailsModalShow(true)}><i className="fas fa-edit" /> EDIT THE DETAILS</div>
                    <EditDetailsModal show={editDetailsModalShow} onHide={()=>setEditDetailsModalShow(false)} />
                </div>
                <div className='col-5 user__info'> 
                    <h2>Addresses</h2>
                    <div className='row'>
                        <h4 className='col-6'>TYPE</h4>
                        <h4 className='col-6' >SPEC</h4>
                    </div>
                    {
							uda.map( ( item, i ) =>
						{
                                return (
                                <div className='row'>
						            <p className='col-6 detail'>{item.type}</p>
									<p className='col-6 detail'>{ item.address.houseNumber }, { item.address.street }, { item.address.locality }, { item.address.city }, { item.address.state }, { item.address.zip }</p>
                                </div>					
							)
						} )
						}
                </div>
                <div className='col-5 user__info'> 
                    <h2>ORDER HISTORY</h2>
                    <div className='row'>
                    <h4 className='col-6'>CURRENT ORDER ID</h4>
                        <p className='col-6 detail' >#45667</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>TOTAL AMOUNT PENDING</h4>
                        <p className='col-6 detail' ><i className="fas fa-rupee-sign" /> 667</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>TOTAL AMOUNT RECEIVED</h4>
                    <p className='col-6 detail' ><i className="fas fa-rupee-sign" /> 4667</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>NEXT PAYMENT DUE DATE</h4>
                    <p className='col-6 detail' >2021-03-02 <i  id='time' className="fas fa-calendar-plus" /></p>
                    </div>
                </div>
            </div>
            <div className='end__buttons'>
                <div className='btn btn-outline-success'><Link to='/allusers/'>GO BACK</Link></div>
                <div className='btn btn-outline-warning'>SUBMIT CHANGES</div>
            </div>
        </div>
    )
}

export default EditUserDetails
