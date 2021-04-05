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
import {Card, Image } from "semantic-ui-react";
import 'react-google-flight-datepicker/dist/main.css';
import { RangeDatePicker } from 'react-google-flight-datepicker'
import EditUserDetails from './edituserdetails'
import { fetchProducts, fetchUsers, fetchSupport, fetchOrderReq, fetchLenderReq} from '../../config'
import { AllProducts } from './AllProducts'
import { Lenders } from './Lenders'
import { Dash } from './Dash'
import { AdminSupport } from './AdminSupport'
import { AllOrders } from './AllOrders'
import {AllUsers} from './AllUsers'
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
