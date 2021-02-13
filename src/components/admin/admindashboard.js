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


import EditUserDetails from './edituserdetails'
import EditProductDetails from './editproductdetails'

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
    <div>
      <h1>This is the all lenders section of Admin Dashboard </h1>
    </div>
  )
}


function Dash() {
  return (
    <div>
      <h1>This is dash section of Admin Dashboard </h1>
    </div>
  )
}


function AdminSupport() {
  return (
    <div>
        <h1>This is Admin Support section of Admin Dashboard </h1>
    </div>
  )
}


function AllProducts() {
  return (
    <div>
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
          <h3><Link to='/editproductdetails' ><i className="fas fa-edit" /></Link></h3>
          
        </div>
    </div>
    </div>
  )
}

function AllOrders() {
  return (
    <div>
        <h1>This is Orders section of Admin Dashboard </h1>
    </div>
  )
}

function AllUsers() {
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
          <h3><Link to='/edituserdetails' ><i className="fas fa-edit" /></Link></h3>
        </div>
    </div>
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

    var w = window.screen.width;
    if (w < 992)
      document.getElementsByClassName("useropt")[0].style.display = "none";
    document.getElementsByClassName("right_screen")[0].style.display = "block";
  };

  var indexMap = {
    0: "/allproducts",
    1: "/allusers",
    2: "/allorders",
    3: "/adminsupport",
    4: "/dash",
    5: "/alllenders",
    6: "/editproductdetails",
    7: "/edituserdetails"
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
            {index === 7 ? <EditUserDetails /> : null}  
        { index === 6 ? <EditProductDetails /> : null }  
      
      </div>
    
    </div>
      </>
  );
};

export default withRouter(AdminDash);
