import React, {useState} from 'react'


// function T ()
// {
//   const [ amount, setamount ] = useState()
//   const [ duedate, setduedate ] = useState()
//   const [suborders, setsuborders] = useState([])
//   const handleSubmit = ( e ) =>
//   {
//     e.preventDefault()
//     const data = {
//       amount: amount,
//       duedate: duedate
//     }
//     addSub(data)
//   }

//     const addSub = suborder =>
//   {
//     const newSub = [ suborder, ...suborders ]
//     setsuborders(newSub)
//     console.log( suborder, ...suborders )
      
//   }

  
//   return (
//     <div>
//       Adding data in array
//       <form onSubmit={handleSubmit}>
//         <div className='create sub orders'>
//               <label>
//             Enter Amount : 
//                 <input type='text' value={ amount } onChange={(e) => setamount(e.target.value) }/>
//               </label>
//               <label>
//                 Enter Payment Due Date :
//                  <input type='date' value={duedate} onChange={(e) => setduedate(e.target.value) } />
//               </label>
//         </div>
//         <button type='submit'>Submit</button>
//       </form>
//       {
//         suborders.map( ( item ) =>
//         {
//           return(
//             <div style={ {
//               display: 'flex', margin: "auto", justifyContent: 'space-around'}}>
//           <p>Amount : <span>{ item.amount }</span></p>
//             <p>Due Date : <span>{ item.duedate }</span></p>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default T




function T ()
{
  const [ val, setval ] = useState( 0 )
  const [ days, setdays ] = useState( 0 )
  const [ dd, setdd ] = useState( new Date() )
  const [ pd, setpd ] = useState()
  var [ month, setmonth ] = useState( 0 )
  var [ paymentdue, setpaymentdue ] = useState()
  var [duedate, setduedate] = useState()
  var [suborders, setsuborders] = useState([])
  
  const handleClick = () =>
  {
    var diff = ( new Date( pd ).getTime() - new Date( dd ).getTime() ) / 1000;
    diff /= ( 60 * 60 * 24 * 7 * 4 );
    setmonth( Math.abs( Math.round( diff ) ) )
    
  }
  const list1 = []
    var p = month
    var m = val / month
    var dt = new Date( dd )
  if ( month > 0 )
  {
    while ( p > 0 )
    {
      var dr = new Date(dt.setMonth( dt.getMonth() + 0 ))
      p = p - 1
      const data = {
        val: m,
        duedate: dr
      }
      list1.push(data )
      console.log(list1)
    //  abs(data)
      dt.setMonth( dt.getMonth() + 1 );
    }    
  }
  else {
    const data = {
      val: val,
      duedate: dt,
    }
    list1.push(data)
    console.log( list1 )
    }


  return (
    <div>
      <label>
        Enter Del date :
        <input type='date' value={ dd } onChange={ e => setdd( e.target.value ) } />

      </label>
      <label>
        Enter Pickup date :
        <input type='date' value={ pd } onChange={ e => setpd( e.target.value ) } />
      </label>
      <label>
        Enter amount
        <input value={ val } onChange={ e => setval( e.target.value ) } />
      </label>

      <button onClick={ handleClick }>Click</button>      <p>{ month }</p>
      {
        list1.map( ( item ) =>
        {
          if (item.val > 0)
          {
            return (
              <div style={ {
                display: 'flex', margin: "auto", justifyContent: 'space-around'
              } }>
                <p>Amount : <span>{ item.val }</span></p>
                <p>Due Date : <span>{ item.duedate.toString() }</span></p>
              </div>
            )
          }
        } ) }
      
    </div>
  )
}

export default T



// import React, { Component, useState, useContext, useEffect } from "react";
// import { Table,Modal} from 'react-bootstrap'
// import "./admindashboard.css";
// import { fetchProducts, fetchUsers, fetchSupport, fetchOrderReq, fetchOrderReqById, fetchLenderReq } from '../../config'
// import axios from "axios"

// export function AllOrders ()
// {
  
//   const [ orderRequestModalShow, setOrderRequestModalShow ] = useState( false ) 
//   const [ orderModalShow, setOrderModalShow ] = useState( false )
  
//     const [ or, setor ] = useState( [] )
//    useEffect(() => {
//     const fetchAPI = async () => {
//       setor( await fetchOrderReq() )
//     };
//      fetchAPI();
//    }, [] );

//   function OrderRequestModal ( props )
//   {
//     const [ status, setstatus ] = useState( "" );
//     const [ od, setOd ] = useState( [] )
//     const [allocatedProductId, setallocatedProductId] = useState()
  
//     useEffect(() => {
//     const fetchAPI = async () => {
//       setOd( await fetchOrderReqById( props.idget ) )
//       console.log(od)
//     };
//      fetchAPI();
//     }, [ props.idget ] );
    
//     const [ amount, setamount ] = useState()
//   const [ duedate, setduedate ] = useState()
//   const [suborders, setsuborders] = useState([])
//   const handleSubmit = ( e ) =>
//   {
//     e.preventDefault()
//     const data = {
//       amount: amount,
//       duedate: duedate
//     }
//     addSub(data)
//   }

//     const addSub = suborder =>
//   {
//     const newSub = [ suborder, ...suborders ]
//     setsuborders(newSub)
//     console.log( suborder, ...suborders )
      
//   }
//     function onSubmitForm(e) {
//       e.preventDefault();
//       axios.put(`https://backendrentkar.herokuapp.com/orderreq/${props.idget}`, {
//         status: status,
//         allocatedProductId: allocatedProductId,
//         subOrders: suborders
//       } );
//       console.log(status)
//       console.log(suborders)
//      props.onHide()
//     }

//     return(
//         <Modal { ...props }
//         size='lg'
//         className='create__an__order'
//             aria-labelledby='contained-modal-title-vcenter'>
//             <Modal.Header closeButton>
//                 <Modal.Title>Create/Edit an Order</Modal.Title>
//             </Modal.Header>
//         <Modal.Body>
//           <div className='order'>
//           <div className='order__detail__1'>
//         <h4>Order Details</h4>
//           <p> Id : <span>{ od._id }</span></p>
//           <p>Applied For POD : { od.appliedForPOD }</p>
//           <p>Current Status : { od.status }</p>
//           <p>Delivery Address : { od.houseNumber }, { od.street }, { od.locality }, { od.city }, { od.state }, { od.zip }</p>
//           <p>Order Requested At : { od.requestedOn }</p>
//           <p>Delivery Date : { od.exp_del }</p>
//           <p>Pickup Date : { od.exp_pickup }</p>
//           <p>Total Amount : { od.total_amount }</p>
//           <p>Payment Received : { od.payment_received }</p>
//             <p>Payment Pending : { od.payment_pending }</p>
//           </div>
//           <div className='order__detail__2'>
//           <h4>User Detail</h4>
//           <p>_id : { od.userID }</p>
//           <p>Name : { od.username }</p>
//           <p>Phone : { od.phoneNumber }</p>
//           <h4>Product Detail</h4>
//           <p>Product Ordered : { od.product }</p>
//           <p>Product Id : { od.product_id }</p>
//         </div>
//           </div>
//           <hr />
//           <h4>Edit Order</h4>
//           <form onSubmit={ ( e ) => onSubmitForm( e ) }>
//             <b><p>Changing Status and Creating of Whole Order will come  here</p></b>
//             <div>
//             <label>
//               CHANGE STATUS :
//               <select
//                 name="status"
//                   value={ status }
//                   onChange={ ( e ) => setstatus( e.target.value ) }>
//                 <option disabled selected value>
//                   {" "}
//                   -- select an option --{" "}
//                 </option>
//                 <option value="ACTIVE">ACTIVE</option>
//                 <option value="CONFIRMED">CONFIRMED</option>
//                 <option value="DISPATCH">DISPATCH</option>
//                 <option value="DELIVERED">DISPATCH</option>
//                 <option value="PICKUP">PICKUP</option>
//                 <option value="EXTEND">EXTEND</option>
//               </select>
//               </label>
//             </div>
//             <div>
//             <label>
//                 Allote a sub product : 
//               <input type='text' value={ allocatedProductId }
//                   onChange={ ( e ) => setallocatedProductId( e.target.value ) } Iplaceholder='enter id of subproduct alloted' />
//               </label>
//               </div>
//             <h4>Create Sub Orders</h4>
//               <form >
//          <div className='create sub orders'>
//               <label>
//             Enter Amount : 
//                 <input type='text' value={ amount } onChange={(e) => setamount(e.target.value) }/>
//               </label>
//               <label>
//                 Enter Payment Due Date :
//                  <input type='date' value={duedate} onChange={(e) => setduedate(e.target.value) } />
//               </label>
//         </div> 
              
//         <button className='btn btn-outline-danger' onClick={handleSubmit}>Create Sub Order</button>
//             </form>
//             {
//         suborders.map( ( item ) =>
//         {
//           return(
//             <div style={ {
//               display: 'flex', margin: "auto", justifyContent: 'space-around'}}>
//           <p>Amount : <span>{ item.amount }</span></p>
//             <p>Due Date : <span>{ item.duedate }</span></p>
//             </div>
//           )
//         })
//       }
//             <Modal.Footer>
//               <div className="btn btn-outline-dark" onClick={props.onHide}>
//                 Close
//               </div>
//               <button
//                 className="btn btn-outline-success"
//                 type="submit"
//               >Submit</button>
//             </Modal.Footer>
//           </form>
//             </Modal.Body>
//         </Modal>
//         )
//   }

// //     function OrderModal ( props ){
// //   return(
// //       <Modal { ...props }
// //           size='lg'
// //           aria-labelledby='contained-modal-title-vcenter'>
// //           <Modal.Header closeButton>
// //               <Modal.Title>Order</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body>
// //                 <form>
// //                   <label></label>
// //                 </form>
// //           </Modal.Body>
// //           <Modal.Footer>
// //               <div className="btn btn-outline-dark" onClick={ props.onHide }>Close</div>
// //               <div className="btn btn-outline-success" onClick={props.onHide}>Submit Changes</div>
// //           </Modal.Footer>
// //       </Modal>
// //       )
// // }

//   const [id, setid] = useState()
//   function handleClick ( _id )
//   {
//     setOrderRequestModalShow( true )
//     console.log( _id )
//     setid(_id)
//   }
//   return (
  
//     <div className='allorders'>
//       <div className='order__req'>
//       <p>ORDER REQUESTS</p>
//         <div className='table'>
//         <Table striped bordered hover responsive className="table-sm">
//           <thead>
//             <th>ORDER ID</th>
//             <th>CUST ID</th>
//             <th>PRODUCT REQ</th>
//             <th>STATUS</th>  
//             <th>PAYMENT RECEIVED</th>
//             <th>EXP DELIVERY ON</th>
//             <th>TOTAL PAYMENT</th>
//             <th>Location</th>
//             <th>TAKE ACTION</th>
//           </thead>
//             <tbody>
//                 {
//                 or.map( ( item ) =>
//                 {
//                   if ( item.status === 'ACTIVE' )
//                   {
                    
                    
//                     return (
//                       <tr>
//                         <td>{ item._id }</td>
//                         <td>{ item.userId._id }</td>
//                         <td>{ item.productId.name }</td>
//                         <td>{ item.status }</td>
//                         <td>{ item.payment_received }</td>
//                         <td>{ item.exp_del }</td>
//                         <td>{ item.total_amount }</td>
//                         <td>{ item.del_address.locality } </td>
//                         <td><i className="fas fa-edit" onClick={ () => handleClick(item._id)} />
//                           <OrderRequestModal show={ orderRequestModalShow } onHide={ () => setOrderRequestModalShow( false ) } idget={ id } /></td>
//                       </tr>
//                     )
//                   }
//                   })
//                 }
//           </tbody>
//         </Table>
//       </div>
//       </div>

//       <div className='orders'>
//       <p>ORDERS</p>  
//       <div className='buttons'>
//           <div className='btn btn-outline-success'>FILTER <i className="fas fa-chevron-circle-down" /></div>  
//         </div> 
//         <div className='table'>
//         <Table striped bordered hover responsive className="table-sm">
//           <thead>
//             <th>ORDER ID</th>
//             <th>CUST ID</th>
//             <th>PRODUCT REQ</th>
//             <th>STATUS</th>  
//             <th>PAYMENT RECEIVED</th>
//             <th>EXP DELIVERY ON</th>
//             <th>TOTAL PAYMENT</th>
//             <th>Location</th>
//             <th>TAKE ACTION</th>
//           </thead>
//             <tbody>
//             {
//                 or.map( ( item ) =>
//                 {
//                   if ( item.status !== 'ACTIVE' )
//                   {
                    
                    
//                     return (
//                       <tr>
//                         <td>{ item._id }</td>
//                         <td>{ item.userId._id }</td>
//                         <td>{ item.productId.name }</td>
//                         <td>{ item.status }</td>
//                         <td>{ item.payment_received }</td>
//                         <td>{ item.exp_del }</td>
//                         <td>{ item.total_amount }</td>
//                         <td>{ item.del_address.locality } </td>
//                         {/* <td><i className="fas fa-edit" onClick={ () => setOrderRequestModalShow( true ) } />
//                           <OrderRequestModal show={ orderRequestModalShow } onHide={ () => setOrderRequestModalShow( false ) } idget={ item._id } /></td> */}
//                       </tr>
//                     )
//                   }
//                   })
//               }
//             </tbody>
//         </Table>
//       </div>
//       </div>    
//               <div className='btn btn-outline-info' onClick={ () => setOrderModalShow( true ) }><i className="fas fa-plus-circle" /> ADD A NEW ORDER</div>

//     </div>
    
//   )
// }





// import React, { Component } from 'react'
// import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

// // import logo_trans from '../images/logo_trans.png';

// import './Listitem.css';
// // import Stepper from 'react-js-stepper';
// import Personaldetail from './List_item/Personaldetail';
// import Items from './List_item/Items';
// import Confirmation from './List_item/Confirmation';
// import ProductDetail from './List_item/ProductDetail'



// export class DotsMobileStepper extends Component {
//     constructor(props) {
//         super(props);
//         // alert(this.props.show)
//         this.state = {
//             step: 1,
//             firstName: '',
//             lastName: '',
//             email: '',
//             occupation: '',
//             city: '',
//             bio: '',
//             selected: []
//             // addModalshow: false
//         };

//     }



//     // Proceed to next step
//     nextStep = () => {
//         const { step } = this.state;
//         this.setState({
//             step: step + 1
//         });
//     };



//     // Go back to prev step
//     prevStep = () => {
//         const { step } = this.state;
//         this.setState({
//             step: step - 1
//         });
//     };

//     one = () => {
//         this.setState({
//             step: 1
//         })
//     }

//     two = () => {
//         this.setState({
//             step: 2
//         })
//     }
//     three = () => {
//         this.setState({
//             step: 3
//         } )

//     }
//     four = () => {
//         this.setState({
//             step: 4
//         } )

//     }

//     show = () => {
//         // const { addModalshow } = this.state;
//         // alert('sad');
//         // this.setState({ addModalshow: false })
//         this.props.onHide();
//     }

//     // Handle fields change
//     handleChange = input => e => {
//         this.setState({ [input]: e.target.value });
//     };
//     render() {
//         const { step } = this.state;
//         const { firstName, lastName, email, occupation, city, bio } = this.state;
//         const values = { firstName, lastName, email, occupation, city, bio };
//         let addModalclose = () => { this.setState({ addModalshow: false }) };


//         switch (step) {
//             case 1:
//                 return (

//                     <Modal
//                         {...this.props}
//                         size="lg"
//                         aria-labelledby="contained-modal-title-vcenter"
//                         centered>
//                         <div className='dots'>
//                             <i style={{ color: `#0B90D3` }} class="fas fa-circle"></i>
//                             <i onClick={this.two} class="fas fa-circle"></i>
//                             <i onClick={ this.three } class="fas fa-circle"></i>
//                             <i onClick={this.four} class="fas fa-circle"></i>

//                         </div>

//                         <Personaldetail nextStep={this.nextStep}
//                             selected={this.state.selected}
//                             show={this.show}
//                             handleChange={this.handleChange}
//                             values={values} />


//                     </Modal>

//                 );
//             case 2:
//                 return (
//                     <Modal
//                         {...this.props}
//                         size="lg"
//                         aria-labelledby="contained-modal-title-vcenter"
//                         centered>
//                         <div className='dots'>
//                             <i onClick={ this.one } class="fas fa-circle"></i>
//                             <i style={{ color: `#0B90D3` }} class="fas fa-circle"></i>
//                             <i onClick={ this.three } class="fas fa-circle"></i>
//                             <i onClick={this.four} class="fas fa-circle"></i>

//                         </div>

//                         <ProductDetail nextStep={this.nextStep}
//                             selected={this.state.selected}
//                             show={this.show}
//                             handleChange={ this.handleChange }
//                             prevStep={this.prevStep}no
//                             values={values} />


//                     </Modal>
//                 );
//             case 3:
//                 return (
//                     <Modal
//                         {...this.props}
//                         size="lg"
//                         aria-labelledby="contained-modal-title-vcenter"
//                         centered>

//                         <div className='dots'>
//                             <i onClick={this.one} class="fas fa-circle"></i>
//                             <i onClick={ this.two } class="fas fa-circle"></i>
//                         <i style={{ color: `#0B90D3` }} onClick={this.two} class="fas fa-circle"></i>
//                             <i onClick={this.four} class="fas fa-circle"></i>

//                         </div>
//                         <Items nextStep={this.nextStep}
//                             prevStep={this.prevStep}
//                             selected={this.state.selected}
//                             handleChange={this.handleChange}
//                             values={values} />

//                     </Modal>
//                 );
//             case 4:
//                 return (
//                     <Modal
//                         {...this.props}
//                         size="lg"
//                         aria-labelledby="contained-modal-title-vcenter"
//                         centered
//                     >
//                         <div className='dots'>
//                             <i onClick={this.one} class="fas fa-circle"></i>
//                             <i onClick={this.two} class="fas fa-circle"></i>
//                             <i onClick={ this.three } class="fas fa-circle"></i>
//                             <i style={ { color: `#0B90D3` } } class="fas fa-circle"></i>
//                         </div>
//                         <Confirmation prevStep={this.prevStep}
//                             selected={this.state.selected}
//                             show={this.show}
//                             onHide={addModalclose}
//                         />


//                     </Modal>
//                 );


//         }
//     }
// }

// export default DotsMobileStepper
