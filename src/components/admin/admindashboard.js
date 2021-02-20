import React, { Component, useState, useContext, useEffect } from "react";

import rental_s from "../../images/icons/rental_s.png";
import bag_s from "../../images/bagb.png";
import bag_g from "../../images/bag.png";
import listing_s from "../../images/icons/listing_s.png";
import verification_s from "../../images/icons/verification_s.png";
import support_s from "../../images/icons/support_s.png";
import settings_s from "../../images/icons/settings_s.png";
import support_person from "../../images/supportPerson.png";
import down_arrow from "../../images/down_arrow.png";
import whatsAppSupport from "../../images/whatsAppSupport.png";
import phone from "../../images/phone.png";
import { DotsMobileStepper } from ".././ListItem"
import dummyprofile from "../../images/dummyprofile.jpg";
import rental_g from "../../images/icons/rental_g.png";
import listing_g from "../../images/icons/listing_g.png";
import verification_g from "../../images/icons/verification_g.png";
import support_g from "../../images/icons/support_g.png";
import settings_g from "../../images/icons/settings_g.png";

import pencil from "../../images/icons/pencil_white.png";
import pencil_b from "../../images/icons/pencil.png";
import guitar from "../../images/guitar2.png";
import person from "../../images/person.png";
import add from "../../images/add.png";
import upload from "../../images/upload.png";
import selectedPage from "../../images/selectedPage.png";
import unSelectedPage from "../../images/unselectedPage.png";
import camera from "../../images/camera.png";
import uploadSelfie from "../../images/uploadSelfie.png";
import "./admindashboard.css";
import { Button, Card, Image } from "semantic-ui-react";
import logo from '../../images/logo.png'

import { ProductContext } from "../../components/ProductContext"

import EditProductDetails from './editproductdetails'
import EditUserDetails from './edituserdetails'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

const icons = [
  bag_g,
  listing_s,
  verification_s,
  support_s,
  settings_s,
  rental_s,
];
const icons_g = [
  bag_s,
  listing_g,
  verification_g,
  support_g,
  settings_g,
  rental_g,
];
const iconDesc = [
  "PRODUCTS",
  "USERS",
  "ORDERS",
  "SUPPORT",
  "DASH",
  "LENDERS"
];


function Lenders() {
  return (
    <div className='alllenders'>
      <div className='lenders__req'>
        <p>LENDER REQUESTS</p>
      <div className='lendersreq__header'>
        <h2>REQUEST ID</h2>
        <h2>USER ID</h2>
        <h2>LENDER</h2>
        <h2>USER NAME</h2>
        <h2>PRODUCT IDs</h2>
        <h2>REQUEST DATE</h2>

        <h2>TAKE ACTION</h2>
      </div>
      <div className='lendersreq__info'>
        <h3>LQ90042A</h3>
        <h3>90042xxxxx</h3>
        <h3>FALSE</h3>
        <h3>TANUJ AGARWAL</h3>
        <h3>GP9, PS5</h3>
        <h3>2020-03-04</h3>

        <h3><i className="fas fa-edit" /></h3>
      </div>
      
      <div className='lendersreq__info'>
        <h3>LQ90043A</h3>
        <h3>90032xxxxx</h3>
        <h3>TRUE</h3>
        <h3>MUDIT</h3>
        <h3>PS4P</h3>
        <h3>2020-03-04</h3>

        <h3><i className="fas fa-edit" /></h3>
        </div>
        
        </div>
      <div className='currentlenders'>
          <p>LENDER REQUESTS</p>
      <div className='buttons'>
              <div className= 'btn btn-outline-success'>FILTER <i className="fas fa-chevron-circle-down" /></div>
              <div className='btn btn-outline-info'><i className="fas fa-plus-circle"/> ADD A NEW PRODUCT</div>
            </div>
      <div className='lenders__header'>
        
        <h2>LENDER ID</h2>
        <h2>LENDER</h2>       
        <h2>PRODUCT ID</h2>
        <h2>DATE OF PURCHASE</h2>
        <h2>AVAILABILITY</h2>
        <h2>ORDER ID</h2>
        <h2>EDIT</h2>
      </div>
      
        <div className='lenders__info'>
        <h3>90042xxxxx</h3>
        <h3>TANUJ</h3>
        <h3>GP9</h3>
        <h3>2020-02-02</h3>
        <h3>RENTED OUT</h3>
        <h3>#456789</h3>
        <h3><i className="fas fa-edit" /></h3>
        </div>
        <div className='lenders__info'>
        <h3>90042xxxxx</h3>
        <h3>TANUJ</h3>
        <h3>PS53</h3>
        <h3>2021-01-01</h3>
        <h3>AVAILABLE</h3>
        <h3>--</h3>
        <h3><i className="fas fa-edit" /></h3>
        </div>
        <div className='lenders__info'>
        <h3>91142xxxxx</h3>
        <h3>SANJAY</h3>
        <h3>PS4P9</h3>
        <h3>2020-05-01</h3>
        <h3>AVAILABLE</h3>
        <h3>--</h3>
        <h3><i className="fas fa-edit" /></h3>
        </div>
        <div className='lenders__info'>
        <h3>86642xxxxx</h3>
        <h3>SAMEER</h3>
        <h3>NIN3</h3>
        <h3>2018-01-01</h3>
        <h3>RENTED OUT</h3>
        <h3>#45690</h3>
        <h3><i className="fas fa-edit" /></h3>
        </div>
        <div className='btn btn-outline-danger'><i className="fas fa-plus-circle" /> ADD A NEW LENDER</div>
        </div>
    </div>
  )
}


function Dash ()
{
  return (
    <div className='dash'>
      <h4>FILTER BY DATE
        <input className='date' type="date" />
      </h4>
      <div className='payments'>
        <p>PAYMENTS</p> 
        <div className='paymentsbydate__header'>
        <h2>USER ID</h2>
        <h2>USERNAME</h2>
        <h2>ORDER ID</h2>
        <h2>SUBORDER ID</h2>  
        <h2>AMOUNT</h2>
        <h2>STATUS</h2>
        <h2>LOCATION</h2>
        </div>
        <div className='paymentsbydate__info'>
        <h3>90042XXXXX</h3>
        <h3>TANUJ</h3>
        <h3>#5000</h3>
        <h3>#5000A</h3>  
        <h3>4000</h3>
        <h3>PENDING</h3>
        <h3>ANDHERI E</h3>
        </div>
      </div>
      <div className='deliveries'>
        <p>DELIVERIES</p> 
        <div className='deliveriesbydate__header'>
        <h2>USER ID</h2>
        <h2>USERNAME</h2>
          <h2>ORDER ID</h2> 
          <h2>PRODUCTS</h2>
        <h2>AMOUNT PENDING</h2>
        <h2>STATUS</h2>
        <h2>LOCATION</h2>
        </div>
        <div className='deliveriesbydate__info'>
        <h3>90042XXXXX</h3>
        <h3>TANUJ</h3>
          <h3>#5000</h3> 
          <h3>GP99, PSP4</h3>
        <h3>4000</h3>
        <h3>DISPATCHED</h3>
        <h3>ANDHERI E</h3>
        </div>
      </div>
      <div className='pickups'>
        <p>PICKUPS</p> 
        <div className='pickupsbydate__header'>
        <h2>USER ID</h2>
          <h2>USERNAME</h2>
          <h2>ORDER ID</h2>
        <h2>ORDER SUB ID</h2> 
        <h2>AMOUNT PENDING</h2>
        <h2>PRODUCTS</h2>
        <h2>STATUS</h2>
        <h2>LOCATION</h2>
        </div>
        <div className='pickupsbydate__info'>
        <h3>90042XXXXX</h3>
        <h3>TANUJ</h3>
          <h3>#5000</h3> 
          <h3>#5000a</h3>
          <h3>4000</h3>
          <h3>PS4P9</h3>
        <h3>PENDING</h3>
        <h3>ANDHERI E</h3>
        </div>
      </div>
    </div>
  )
}


function AdminSupport() {
  return (
      <div className='support__req'>
        <p>SUPPORT REQUESTS</p>
      <div className='supportreq__header'>
        <h2>REQUEST ID</h2>
        <h2>ORDER ID</h2>
        <h2>USER ID</h2>
        <h2>USER NAME</h2>
        <h2>ISSUE</h2>
        <h2>REQUEST DATE</h2>
        <h2>TAKE ACTION</h2>
      </div>
      <div className='supportreq__info'>
        <h3>SP90042A</h3>
        <h3>#45667</h3>
        <h3>90042xxxxx</h3>
        <h3>TANUJ AGARWAL</h3>
        <h3>GO PRO 9 suddenly stopped</h3>
        <h3>2020-03-04</h3>
        <h3><i className="fas fa-edit" /></h3>
      </div>
        <p>ISSUED SOLVED</p>
      <div className='solvedissues__header'>
        <h2>REQUEST ID</h2>
        <h2>ORDER ID</h2>
        <h2>USER ID</h2>
        <h2>ISSUE</h2>
        <h2>SOLUTION</h2>
      </div>
      <div className='solvedissues__info'>
        <h3>SP90042A</h3>
        <h3>#45667</h3>
        <h3>90042xxxxx</h3>
        <h3>GO PRO 9 suddenly stopped</h3>
        <h3>THE PRODUCT WAS REPLACED WITH GP910</h3>
      </div>
    </div>
  )
}


function AllProducts ()
{
  function Products ()
{
  return (
    <div className='allproducts'>
            <div className='buttons'>
              <div className= 'btn btn-outline-success'>FILTER <i className="fas fa-chevron-circle-down" /></div>
              <div className='btn btn-outline-info'><i className="fas fa-plus-circle"/> ADD A NEW PRODUCT</div>
            </div>
          <div className='products__header'>
          <h2>PRODUCT ID</h2>
          <h2>CATEGORY</h2>
          <h2>SUB-CATEGORY</h2>
          <h2>NAME</h2>
          <h2>QUANTITY</h2>
          <h2>LENDERS</h2>
          <h2>EDIT</h2>
        </div>
        <div className='products'>
          <h3>GP9</h3>
          <h3>TECH</h3>
          <h3>CAMERA</h3>
          <h3>GO PRO 9</h3>
          <h3>20</h3>
          <h3><Link to='/alllenders' ><i className="fas fa-info" /></Link></h3>
          <h3><Link to='/allproducts/editproductdetails' ><i className="fas fa-edit" /></Link></h3>
        </div>
  
  </div>
    )
  }


  
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/allproducts/editproductdetails'><EditProductDetails /></Route>
          <Route path='/allproducts/'><Products /></Route>
        </Switch>
      </div>  
    </Router>
  )
}



function AllOrders() {
  return (
  
    <div className='allorders'>
      <div className='order__req'>
      <p>ORDER REQUESTS</p>
        <div className='orderreq__header'>
          <h2>ORDER ID</h2>
          <h2>CUST ID</h2>
          <h2>PRODUCTS REQ</h2>
          <h2>PAYMENT RECEIVED</h2>
          <h2>DURATION</h2>
          <h2>EXP DELIVERY ON</h2>
          <h2>TOTAL PAYMENT</h2>
          <h2>TAKE ACTION</h2>
        </div>
        <div className='orderreqs'>
          <h3>#4567</h3>
          <h3>90042xxxx</h3>
        <h3>GP9, NIN, PS5</h3>
        <h3>5667</h3>
        <h3>2021-03-01</h3>
        <h3>3M, 2W, 4D</h3>
          <h3>45121</h3>
        <h3><Link to='/takeorder' ><i className="fas fa-greater-than" /></Link></h3>
        </div>
      </div>
      <div className='orders'>
      <p>ORDERS</p>  
      <div className='buttons'>
          <div className='btn btn-outline-success'>FILTER <i className="fas fa-chevron-circle-down" /></div>  
        </div> 
          <div className='order__header'>
          <h2>ORDER ID</h2>
            <h2>SUBORDER ID</h2>
          <h2>CUST ID</h2>
          <h2>PRODUCT ID</h2>
          <h2>STATUS</h2>
          <h2>PAYMENT</h2>
          <h2>PAYMENT DUE</h2>
          <h2>DELIVERY ON</h2>
          <h2>PICKUP DATE</h2>
          <h2>EDIT</h2>
        </div>
        <div className='order__details'>
          <h3>#4567</h3>
          <h3>#4567a</h3>
          <h3>90042xxxx</h3>
        <h3>GP94</h3>
        <h3>CONFIRMED</h3>
        <h3>RECEIVED</h3>
        <h3>2020-03-02</h3>
        <h3>2020-03-02</h3>
        <h3>2020-05-02</h3>
        <h3><Link to='/takeorder' ><i className="fas fa-edit" /></Link></h3>
        </div>
          <div className='order__details'>
          <h3>#4567</h3>
          <h3>#4567b</h3>
          <h3>90042xxxx</h3>
        <h3>GP94</h3>
          <h3>CONFIRMED</h3>
          <h3>PENDING</h3>
          <h3>2020-04-02</h3>
        <h3>2020-03-02</h3>
          <h3>2020-05-02</h3>
        <h3><Link to='/takeorder' ><i className="fas fa-edit" /></Link></h3>
        </div>
          <div className='order__details'>
          <h3>#4567</h3>
          <h3>#4567c</h3>
          <h3>90042xxxx</h3>
        <h3>GP94</h3>
        <h3>CONFIRMED</h3>
          <h3>PENDING</h3>
          <h3>2020-03-02</h3>
        <h3>2020-03-02</h3>
          <h3>2020-05-02</h3>
        <h3><Link to='/takeorder' ><i className="fas fa-edit" /></Link></h3>
        </div>
        </div>
    </div>
    
  )
}

function AllUsers ()
{
  
  function Users ()
  {
      return (
      <div className='allusers'>
        <div className='buttons'>
              <div className= 'btn btn-outline-success'>FILTER <i className="fas fa-chevron-circle-down" /></div>
              <div className='btn btn-outline-info'><i className="fas fa-plus-circle"/> ADD A NEW USER</div>
        </div>
        <div className='users__header'>
          <h2>USER ID</h2>
          <h2>LENDER</h2>
          <h2>USERNAME</h2>
          <h2>C ORDERID</h2>
          <h2>VERIFIED</h2>
        <h2>EDIT</h2>
        </div>
        <div className='users'>
          <h3>900042xxxxx</h3>
          <h3>TRUE</h3>
        <h3>TANUJ AGARWAL</h3>
        <h3>#45667</h3>
        <h3>TRUE</h3>
          <h3><Link to='/allusers/edituserdetails' ><i className="fas fa-edit" /></Link></h3>
        </div>
    </div>
  )
  }

  return (
      <Router>
      <div>
        <Switch>
          <Route path='/allusers/edituserdetails'><EditUserDetails /></Route>
          <Route path='/allusers/'><Users /></Route>
        </Switch>
      </div>  
    </Router>
  )

}


export const AdminDash = (props) => {
  const [addModalshow, setaddModalshow] = useState(false);
  // const user = [["Name", "Siddharth"], ["Email", "sid@rentkar.com"],
  // ["Mobile Number", "982304234"], ["Date Of Birth", "31/03/2001"]]
  const [user, setuser] = useState([
    {
      Name: "Name",
      value: "Siddharth"
    },
    {
      Name: "Email",
      value: "sid@rentkar.com"
    },
    {
      Name: "Mobile Number",
      value: "982304234"
    },
    {
      Name: "Date Of Birth",
      value: "31/03/2001"
    }
  ]);
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         index: this.props.ind
  //     }
  // }
  const [index, setindex] = useState(props.ind);


  const changeIndex = (index) => {
    setindex(index);
  };

  var indexMap = {
    0: "/allproducts",
    1: "/allusers",
    2: "/allorders",
    3: "/adminsupport",
    4: "/dash",
    5: "/alllenders",
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
        
        {index === 1 ? <AllUsers /> : null}
        {index === 0 ? <AllProducts /> : null}
        {index === 2 ? <AllOrders /> : null}
        {index === 3 ? <AdminSupport /> : null}
        { index === 4 ? <Dash /> : null }
          { index === 5 ? <Lenders /> : null }  
      
      </div>
    
    </div>
      </>
  );
};

export default withRouter(AdminDash);
