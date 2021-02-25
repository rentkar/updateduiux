import React, {useState} from 'react'
import './editproductdetails.css'
import { Link } from 'react-router-dom'
import {Button, Modal} from 'react-bootstrap' 
                                    

function EditProductModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Edit the product</Modal.Title>
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

function AddLenderModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Add A New Lender</Modal.Title>
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

function EditBoxModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Edit Box Contents</Modal.Title>
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

function EditPricingModal( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Edit Pricing</Modal.Title>
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

function EditSpecsModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Edit Specifications</Modal.Title>
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
function EditProductDetails ()
{
    const [ editProductModalShow, setEditProductModalShow ] = useState( false )
    const [ addLenderModalShow, setAddLenderModalShow ] = useState( false ) 
    const [ editPricingModalShow, setEditPricingModalShow] = useState(false)
    const [ editSpecsModalShow, setEditSpecsModalShow ] = useState( false )
    const [ editDetailsModalShow, setEditDetailsModalShow ] = useState( false )
    const [ editBoxModalShow, setEditBoxModalShow] = useState(false)




    return (
    <div className='editaproduct'>
    <div>
    <div className='product__header'>
        <h2>SUB ID</h2>
        <h2>LENDER</h2>
        <h2>LENDER ID</h2>
        <h2>AGREEMENT</h2>        
        <h2>CONDITION</h2>
        <h2>AVAILABILITY</h2>
        <h2>ORDER ID</h2>
        <h2>EDIT</h2>
        
    </div>
    <div className='subproduct'>
        <h3>GP9a</h3>
        <h3>TANUJ</h3>
        <h3>1234</h3>
        <h3>https.rentkar-s3/agr</h3>
        <h3>GOOD</h3>
        <h3>RENTED OUT</h3>
        <h3>#456789</h3>
        <h3><i className="fas fa-edit" onClick={ () => setEditProductModalShow(true)}/></h3>
        <EditProductModal show={editProductModalShow} onHide={()=>setEditProductModalShow(false)} />
    </div>
    <div className='subproduct'>
        <h3>GP9b</h3>
        <h3>SANJAY</h3>
        <h3>1230</h3>
        <h3>https.rentkar-s3/agr</h3>
        <h3>BAD</h3>
        <h3>AVAILABLE</h3>
        <h3>--</h3>
        <h3><i className="fas fa-edit" onClick={ () => setEditProductModalShow(true)}/></h3>
        <EditProductModal show={editProductModalShow} onHide={()=>setEditProductModalShow(false)} />
    </div>
    <div className='subproduct'>
        <h3>GP9c</h3>
        <h3>MUDIT</h3>
        <h3>1235</h3>
        <h3>https.rentkar-s3/agr</h3>
        <h3>GOOD</h3>
        <h3>AVAILABLE</h3>
        <h3>--</h3>
        <h3><i className="fas fa-edit" onClick={ () => setEditProductModalShow(true)}/></h3>
        <EditProductModal show={editProductModalShow} onHide={()=>setEditProductModalShow(false)} />
    </div>
    <div className='subproduct'>
        <h3>GP9d</h3>
        <h3>SAMEER</h3>
        <h3>1236</h3>
        <h3>https.rentkar-s3/agr</h3>
        <h3>BAD</h3>
        <h3>RENTED OUT</h3>
        <h3>#45690</h3>
        <h3><i className="fas fa-edit" onClick={ () => setEditProductModalShow(true)}/></h3>
        <EditProductModal show={editProductModalShow} onHide={()=>setEditProductModalShow(false)} />
    </div> 
    </div>
    <div className='btn btn-outline-danger' onClick={ () => setAddLenderModalShow( true ) } >
        <h3><i className="fas fa-plus-circle" /> ADD A NEW LENDER</h3>
            </div>
<AddLenderModal show={ addLenderModalShow } onHide={ () => setAddLenderModalShow( false ) } />     

        
    
            
            <div className='product__details row'>
                <div className='col-5 product__info'> 
                    <h2>INFO</h2>
                    <div className='row'>
                    <h4 className='col-6'>ID</h4>
                    <p className='col-6' >GP9</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>NAME</h4>
                        <p className='col-6' >GO PRO 9</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>IMAGE</h4>
                        <p className='col-6' >https://s3-rentkar-gopro9/image.jpg</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>CATEGORY</h4>
                        <p className='col-6' >TECH</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>SUB CATEGORY</h4>
                        <p className='col-6' >CAMERA</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>QUANTITY DISPLAYED</h4>
                        <p className='col-6' >200</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>FEATURED</h4>
                        <p className='col-6' >TRUE</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>LIMITED STOCK</h4>
                        <p className='col-6' >TRUE</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>DESCRIPTION</h4>
                        <p className='col-6' >Get your hands on the latest and most amazing
                        action camera, GoPro Hero 9. The GoPro 9 is a major upgrade over GoPro
                        8 and comes with dual-screen, 20 Megapixels photos and up to 5K Video
                        resolution. For all you adventure buddies, the Hypersmooth 3.0 in GoPro
                        9 results in stable and crystal clear action videos. If you have or haven’t
                        used a GoPro before, the GoPro 9 is extremely user friendly and fits
                        perfectly in your palm.</p>
                    </div>
                    <div className='btn btn-outline-info' onClick={ () => setEditDetailsModalShow(true)}><i className="fas fa-edit" /> EDIT THE DETAILS</div>
                    <EditDetailsModal show={editDetailsModalShow} onHide={()=>setEditDetailsModalShow(false)} />
                </div>    
                            
                <div className='col-5 specs'> 
                    <h2>SPECIFICATIONS</h2>
                    <div className='row'>
                        <h4 className='col-6'>TYPE</h4>
                        <h4 className='col-6' >SPEC</h4>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Model Year</p>
                        <p className='col-6' >2020</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Connectivity Type</p>
                        <p className='col-6' >Gopro App, WIFI, Bluetooth</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Waterproof</p>
                        <p className='col-6' >Yes (Upto 10 Metres)</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Live Streaming</p>
                        <p className='col-6' >1080P</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Megapixel Count</p>
                        <p className='col-6' >20MP</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Image Stabilization</p>
                        <p className='col-6' >HyperSmooth 3.0</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Video Resolution</p>
                        <p className='col-6' >5k</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Slo-Mo</p>
                        <p className='col-6' >8X</p>
                    </div>
                    <div className='btn btn-outline-info' onClick={ () => setEditSpecsModalShow(true)}><i className="fas fa-edit" /> EDIT SPECS</div>
                    <EditSpecsModal show={editSpecsModalShow} onHide={()=>setEditSpecsModalShow(false)} />
                </div>   

                <div className='col-5 pricing'> 
                    <h2>PRICING</h2>
                    <div className='row'>
                        <h4 className='col-6'>DURATION</h4>
                        <h4 className='col-6' >PRICE</h4>
                    </div>
                    <div className='row'>
                        <p className='col-6'>1 DAY</p>
                        <p className='col-6' ><i className="fas fa-rupee-sign" /> 400</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>1 WEEK</p>
                        <p className='col-6' ><i className="fas fa-rupee-sign" /> 2100</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>1 MONTH</p>
                        <p className='col-6' ><i className="fas fa-rupee-sign" /> 7000</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>3 MONTH</p>
                        <p className='col-6' ><i className="fas fa-rupee-sign" /> 16000</p>
                    </div>
                        <div className='btn btn-outline-info' onClick={ () => setEditPricingModalShow(true)}><i className="fas fa-edit" /> EDIT PRICING DETAILS</div>
                    <EditPricingModal show={editPricingModalShow} onHide={()=>setEditPricingModalShow(false)} />
                </div>   
                <div className='col-5 pricing'> 
                    <h2>BOX CONTENT</h2>
                    <div className='row'>
                        <h4 className='col-6'>CONTENT</h4>
                        <h4 className='col-6' >IMAGE</h4>
                    </div>
                    <div className='row'>
                        <p className='col-6'>16GB Micro SD Card</p>
                        <p className='col-6' >https://rentkar-s3-gopro9/microsd.png</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Charging Cable</p>
                        <p className='col-6' >https://rentkar-s3-rentkar-gopro9/chargecable.png</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Chest Strap Mount</p>
                        <p className='col-6' >https://rentkar-s3-rentkar-gopro9/cheststrapmount.png</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Go Pro Battery</p>
                        <p className='col-6' >https://rentkar-s3-rentkar-gopro9/battery.png</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Go Pro Camera Body</p>
                        <p className='col-6' >https://rentkar-s3-rentkar-gopro9/body.png</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Go Pro Screws x3</p>
                        <p className='col-6' >https://rentkar-s3-rentkar-gopro9/screw.png</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Head Strap Mount</p>
                        <p className='col-6' >https://rentkar-s3-rentkar-gopro9/headstrapmount.png</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Snorkelling Mount</p>
                        <p className='col-6' >https://rentkar-s3-rentkar-gopro9/snorkellingmount.png</p>
                    </div>
                        <div className='btn btn-outline-info' onClick={ () => setEditBoxModalShow(true)}><i className="fas fa-edit" /> EDIT BOX CONTENTS</div>
                    <EditBoxModal show={editBoxModalShow} onHide={()=>setEditBoxModalShow(false)} />
                </div>   
            </div>
            <div className='end__buttons'>
                <div className='btn btn-outline-success'><Link to='/allproducts/'>GO BACK</Link></div>
                <div className='btn btn-outline-warning'>SUBMIT CHANGES</div>
            </div>
    </div>
    )
}

export default EditProductDetails
