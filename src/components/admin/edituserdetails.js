import React, {useState} from 'react'
import './edituserdetails.css'
import {Button, Modal} from 'react-bootstrap' 
import { Link } from 'react-router-dom'

function EditDetailsModal( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Edit Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>ksdkddk</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={ props.onHide }>Close</Button>
                <Button variant="outline-success" onClick={props.onHide}>Submit Changes</Button>
            </Modal.Footer>
        </Modal>
        )
}

function EditUserDetails ()
{
        const [ editDetailsModalShow, setEditDetailsModalShow ] = useState( false )

    return (
        <div className='editauser'>
            <div className='user__details row'>
                <div className='col-5 user__info'> 
                    <h2>INFO</h2>
                    <div className='row'>
                    <h4 className='col-6'>ID</h4>
                    <p className='col-6' >90043XXXXX</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>NAME</h4>
                        <p className='col-6' >TANUJ AGARWAL</p>
                    </div>
                <div className='row'>
                    <h4 className='col-6'>IMAGE</h4>
                        <p className='col-6' >https://s3-rentkar-users/90043XXXXX.jpg</p>
                </div>
                    <div className='row'>
                    <h4 className='col-6'>VERIFIED</h4>
                        <p className='col-6' >TRUE</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>DOB</h4>
                        <p className='col-6' >2020-02-28</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>GENDER</h4>
                        <p className='col-6' >MALE</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>PRIMARY ADDRESS</h4>
                        <p className='col-6' >D501, PANOM PARK, VILE PARLE (E)</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>EMAIL</h4>
                        <p className='col-6' >tanuj@rentkar.co.in</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>DOC TYPE</h4>
                        <p className='col-6' >AADHAR CARD</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>DOC LINK</h4>
                        <p className='col-6' >https://s3-rentkar-docs/90043XXXXX/doc1.png</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>BANK STATEMENT</h4>
                        <p className='col-6' >---</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>LENDER</h4>
                        <p className='col-6' >TRUE</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>CREATED ON</h4>
                        <p className='col-6' >2021-03-02 <i  id='time' className="fas fa-calendar-plus" /> 6:58 <i  id='time' className="fas fa-user-clock" /></p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>LAST UPDATE ON</h4>
                        <p className='col-6' >2021-03-02 <i  id='time' className="fas fa-calendar-plus" /> 6:58 <i  id='time' className="fas fa-user-clock" /></p>
                    </div>
                    <div className='btn btn-outline-info' onClick={ () => setEditDetailsModalShow(true)}><i className="fas fa-edit" /> EDIT THE DETAILS</div>
                    <EditDetailsModal show={editDetailsModalShow} onHide={()=>setEditDetailsModalShow(false)} />
                </div>
                <div className='col-5 user__info'> 
                    <h2>ORDER HISTORY</h2>
                    <div className='row'>
                    <h4 className='col-6'>CURRENT ORDER ID</h4>
                        <p className='col-6' >#45667</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>TOTAL AMOUNT PENDING</h4>
                        <p className='col-6' ><i className="fas fa-rupee-sign" /> 667</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>TOTAL AMOUNT RECEIVED</h4>
                    <p className='col-6' ><i className="fas fa-rupee-sign" /> 4667</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>NEXT PAYMENT DUE DATE</h4>
                    <p className='col-6' >2021-03-02 <i  id='time' className="fas fa-calendar-plus" /></p>
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
