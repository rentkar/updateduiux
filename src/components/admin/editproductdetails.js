import React, {useState, useEffect} from 'react'
import './editproductdetails.css'
import { Link } from 'react-router-dom'
import {Button, Modal} from 'react-bootstrap' 
import {fetchProductDetail,  fetchProductBoxDetail, fetchProductPricingDetail, fetchProductImagesDetail, fetchProductSpecsDetail} from '../../config'
import { useParams } from "react-router";                                    

function EditProductModal ( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Edit the product</Modal.Title>
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
                    <label>ORDER ID : 
                     <input type='text' name='orderId' placeholder='Enter Order Id if product is RENTED OUT' />
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

function AddLenderModal ( props ){
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
                    <Button variant="outline-dark" onClick={ props.onHide }>Close</Button>
                        <input className='btn btn-outline-success' type="submit" value="Submit" />
                    </div>
                </form>
            </Modal.Body>
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
                <div>ksdkddk</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={ props.onHide }>Close</Button>
                <Button variant="outline-success" onClick={props.onHide}>Submit Changes</Button>
            </Modal.Footer>
        </Modal>
        )
}

function EditInfoModal ( props )
{
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Edit Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label>ID : 
                     <input type='text' name='id' placeholder='Enter the Id' />
                    </label>
                    <label>NAME : 
                     <input type='text' name='name' placeholder='Enter the Name' />
                    </label>
                    <label>IMAGE : 
                     <input type='text' name='image' placeholder='Enter Image Location' />
                    </label>
                    <label>CATEGORY : 
                    <select name='category'>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='MUSIC'>MUSIC</option>
                            <option value='GAMING'>GAMING</option>
                            <option value='LAPTOP'>LAPTOP</option>
                            <option value='PHOTOGRAPHY'>PHOTOGRAPHY</option>
                     </select>
                    </label>
                    <label>SUB CATEGORY : 
                     <select name='subcategory'>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='GUITAR'>GUITAR</option>
                            <option value='KEYBOARD'>KEYBOARD</option>
                            <option value='PERCUSSION'>PERCUSSION</option>
                            <option value='RECORDING'>RECORDING</option>
                            <option value='AMPLIFIER'>AMPLIFIER</option>
                            <option value='GROOVE'>GROOVE</option>
                            <option value='WIND'>WIND</option>
                            <option value='PACKAGES'>PACKAGES</option>
                            <option value='PC GAMING'>PC GAMING</option>
                            <option value='CONSOLE'>CONSOLE</option>
                            <option value='ACCESSORIES'>ACCESSORIES</option>
                            <option value='GAMING'>GAMING</option>
                            <option value='i3'>i3</option>
                            <option value='i5'>i5</option>
                            <option value='i7'>i7</option>
                            <option value='MACBOOK'>MACBOOK</option>
                            <option value='PC'>PC</option>
                            <option value='TABLET'>TABLET</option>
                            <option value='CAMERA'>CAMERA</option>
                            <option value='FILTERS'>FILTERS</option>
                            <option value='LENS'>LENS</option>
                            <option value='LIGHTS'>LIGHTS</option>
                            <option value='RECORDINGS'>RECORDINGS</option>
                            <option value='RIGS'>RIGS</option>
                        </select>
                    </label>
                    <label>QUANTITY DISPLAYED : 
                     <input type='text' name='quantityDisplayed' placeholder='Enter the Quantity to be displayed' />
                    </label>
                    <label>FEATURED : 
                    <select name='featured'>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='TRUE'>TRUE</option>
                            <option value='FALSE'>FALSE</option>
                     </select>
                    </label>
                    <label>LIMITED STOCK : 
                    <select name='limitedStock'>
                            <option disabled selected value> -- select an option -- </option>
                            <option value='TRUE'>TRUE</option>
                            <option value='FALSE'>FALSE</option>
                        </select>
                    </label>
                    
                    <label>DESCRIPTION : 
                     <input type='text' name='description' placeholder='Enter Description' />
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

function EditPricingModal( props ){
    return(
        <Modal { ...props }
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title>Edit Pricing</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>ksdkddk</div>
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
                <div>ksdkddk</div>
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
    const [ editInfoModalShow, setEditInfoModalShow ] = useState( false )
    const [ editBoxModalShow, setEditBoxModalShow] = useState(false)
    let {_id} = useParams()
	const [ pd, setpd ] = useState( [] )
	const [ pdb, setpdb ] = useState( [] )
	const [ pdp, setpdp ] = useState( [] )
	const [ pds, setpds ] = useState( [] )
	const [ pdi, setpdi ] = useState( [] )

    useEffect(() => {
    const fetchAPI = async () => {
      setpd( await fetchProductDetail( _id ) )
      setpdb( await fetchProductBoxDetail( _id ) )
      setpdp( await fetchProductPricingDetail( _id ) )
      setpds( await fetchProductSpecsDetail( _id ) )
      setpdi(await fetchProductImagesDetail(_id))
    };
     fetchAPI();
   }, [ _id ] );


	var i

	var val = 0
	var i
	var m, j, a, b, c
	var [ e, setE ] = useState()
	

	//calculator
	const list1 = []

	for ( i = 1; i < 367; i++ )
	{
		if ( i >= 180 )
		{
			val = Math.ceil( pd.price * 0.000031 * i ) * 100
		}
		else if ( i >= 90 )
		{
			val = Math.ceil( pd.price * 0.0000365 * i ) * 100
		}
		else if ( i >= 60 )
		{
			val = Math.ceil( pd.price * 0.000043 * i ) * 100
		}
		else if	( i >= 30 )
		{
			val = Math.ceil( pd.price * 0.000046 * i ) * 100
			
		}
		else if ( i > 15 )
		{
			j = i - 14
			for ( a = 1; a <= j; a++ )
			{
				val = c + (pd.price * a * 0.003)
			//	val = m
			}
		
		}
		else if ( i === 14 )
		{
			val = Math.ceil( pd.price * 0.000065 * i ) * 100
			c = val
			}
		else if ( i > 7 )
		{
			j = i - 7
			for ( a = 1; a <= j; a++ )
			{
				val = b + (pd.price * a * 0.004)
			//	val = m
			}
		}
		else if ( i === 7 )
		{
			val = Math.ceil( pd.price * 0.00009 * i ) * 100
			b = val
			
		}
		 else if ( i > 3 )
		{

			j = i - 3
			for ( a = 1; a <= j; a++ )
			{
				val = m + (pd.price * a * 0.0090)
			//	val = m
			}

		}
		else if ( i === 3 )
		{
			val = Math.ceil( pd.price * 0.000167 * ( 2 ) + ( 0.00002 * pd.price ) ) * 100
			m =val
		}
		else if ( i === 2 )
		{
			val = ( pd.price * 0.0167 * i )
		}
		else if ( i === 1 )
		{
			val = (pd.price * 0.02 * i )
		}
	
		
		list1.push( <p className='price'>Rs { val }</p> )
	}
	//



    return (
    <div className='editaproduct'>        
        <div className='product__details row'>
                <div className='col-5 product__info'> 
                    <h2>INFO</h2>
                    <div className='row'>
                    <h4 className='col-6'>_id</h4>
                    <p className='col-6 detail' >{ pd._id }</p>
                </div>
                    <div className='row'>
                    <h4 className='col-6'>ID</h4>
                    <p className='col-6 detail' >{ pd.id }</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>NAME</h4>
                        <p className='col-6 detail' >{pd.productname}</p>
                    </div>
                    { pdi.map( ( item, index ) =>
                    {
                        return(
                        <div className='row'>
                                <h4 className='col-6'>IMAGE{ index }</h4>
                        <div className='col-6 detail' >{item.image}</div>
                </div>)
                    })}

                <div className='row'>
                    <h4 className='col-6'>CATEGORY</h4>
                        <p className='col-6 detail' >{pd.category}</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>SUB CATEGORY</h4>
                        <p className='col-6 detail' >{pd.subcategory}</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>QUANTITY DISPLAYED</h4>
                        <p className='col-6 detail' >{ pd.quantity }</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>FEATURED</h4>
                        <p className='col-6 detail' >{ pd.featured }</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>LIMITED STOCK</h4>
                        <p className='col-6 detail' >{pd.limitedStock}</p>
                </div>
                <div className='row'>
                    <h4 className='col-6'>DESCRIPTION</h4>
                        <p className='col-6 detail' >{pd.description}</p>
                    </div>
                    <div className='row'>
                    <h4 className='col-6'>PRICE</h4>
                        <p className='col-6 detail' >{pd.price}</p>
                    </div>
                    <div className='btn btn-outline-info' onClick={ () => setEditInfoModalShow(true)}><i className="fas fa-edit" /> EDIT THE DETAILS</div>
                    <EditInfoModal show={editInfoModalShow} onHide={()=>setEditInfoModalShow(false)} />
                </div>    
                            
                <div className='col-5 specs'> 
                    <h2>SPECIFICATIONS</h2>
                    <div className='row'>
                        <h4 className='col-6'>TYPE</h4>
                        <h4 className='col-6' >SPEC</h4>
                    </div>
                    {
							pds.map( ( item, i ) =>
						{
                                return (
                                <div className='row'>
						            <p className='col-6 detail'>{item.stype}</p>
									<p className='col-6 detail'>{ item.spec }</p>
                                </div>					
							)
						} )
						}
                    

                    
                    	
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
                        <p className='col-6 detail'>1 DAY</p>
                        <p className='col-6 detail' >{ list1[ 0 ] }</p>
                    </div>
                    <div className='row'>
                        <p className='col-6 detail'>3 DAYS</p>
                        <p className='col-6 detail' >{ list1[ 2 ] }</p>
                    </div>
                    <div className='row'>
                        <p className='col-6 detail'>1 WEEK</p>
                        <p className='col-6 detail' > { list1[ 6 ] }</p>
                    </div>
                    <div className='row'>
                        <p className='col-6 detail'>1 MONTH</p>
                        <p className='col-6 detail' > { list1[ 29 ] }</p>
                    </div>
                    <div className='row'>
                        <p className='col-6 detail'>3 MONTHS</p>
                        <p className='col-6 detail' > { list1[ 79 ] }</p>
                    </div>
                    <div className='row'>
                        <p className='col-6 detail'>6 MONTHS</p>
                        <p className='col-6 detail' > { list1[ 179 ] }</p>
                    </div>
                    <div className='row'>
                        <div className='col-6 detail'><input  className='inpuut ' type='text' value={ e } placeholder='XYZ days' onChange={ e => setE( e.target.value ) } /></div>
                        <p className='col-6 detail'> { list1[ e - 1 ] }</p>
                    </div>
                    
                    <div className='btn btn-outline-info' onClick={ () => setEditPricingModalShow( true ) }><i className="fas fa-edit" /> EDIT PRICING DETAILS</div>
                    <EditPricingModal show={editPricingModalShow} onHide={()=>setEditPricingModalShow(false)} />
                </div>   
                <div className='col-5 pricing'> 
                    <h2>BOX CONTENT</h2>
                    <div className='row'>
                        <h4 className='col-6'>CONTENT</h4>
                        <h4 className='col-6' >IMAGE</h4>
                    </div>

                    {
                        pdb.map( ( item, i ) =>
                        {
                            return (
                                <div className='row'>
                                    <p className='col-6 detail'>{ item.content }</p>
                                    <p className='col-6 detail'>{ item.image }</p>
                                </div>
							
                            )
                        } )
                    }
                    
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
