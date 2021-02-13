import React from 'react'
import './edituserdetails.css'

function EditUserDetails() {
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
                        <p className='col-6' >2021-03-02 <i className="fas fa-calendar-plus" /> 6:58 <i className="fas fa-user-clock" /></p>
                    </div>
                    <div className='btn btn-outline-info'><i className="fas fa-edit"/> EDIT THE DETAILS</div>
                </div>    
                </div>
        </div>
    )
}

export default EditUserDetails
