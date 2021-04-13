import React, { useState, useEffect, useContext } from "react";
import firebase from ".././firebase"
import Popup from "reactjs-popup";
import { Grid } from "semantic-ui-react";
import LoginModal from "./Login/LoginModal";
import LoginForm from "./Login/LoginForm";
import { BrowserRouter as Link } from "react-router-dom";
import guitar from "../images/guitar2.png";
import rental_s from "../images/icons/rental_s.png";
import listing_s from "../images/icons/listing_s.png";
import verification_s from "../images/icons/verification_s.png";
import support_s from "../images/icons/support_s.png";
import settings_s from "../images/icons/settings_s.png";
import bag_s from "../images/bag.png";
import logout_s from "../images/icons/logout_s.png";
import FadeIn from "react-fade-in";

import "./head.css";
// import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import logo from "../images/logo.png";
import map from "../images/map.png";
import bag from "../images/bag.png";
import mumbai_c from "../images/mumbai.png";
import pune_c from "../images/PuneC.png";
import mumbaig from "../images/mumbaig.png";
import puneg from "../images/PuneCG.png";

import { ProductContext } from "../components/ProductContext";

import dummyprofile from "../images/dummyprofile.jpg";

export const Head = (props) => {
  const [product, setproduct] = useContext(ProductContext);
  const [count, setcount] = useState();
  useEffect(() => {
    setcount(product.length);
  }, [product]);

  const delete_product = (name) => {
    // console.log(document.getElementById(id));
    let new_product = product.filter((p) => {
      return p.name !== name;
    });
    setproduct(new_product);
  };

  const [addModalshow, setaddModalshow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [mumbai, setmumbai] = useState(true);
  const [pune, setpune] = useState(false);
  const [drop, setdrop] = useState(true);
  const [mumbai_image, setmumbai_image] = useState(mumbai_c);
  const [pune_image, setpune_image] = useState(puneg);
  const [isLoggedIn, setIsLoggedIn] = useState();


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      }
      else{
        setIsLoggedIn(false)
      }
    })
  }, [isLoggedIn])

  const onfocus = (e) => {
    setdrop(!drop);
  };
  const onChangeMumbai = (e) => {
    setmumbai(true);
    setpune(false);
    setpune_image(puneg);

    setmumbai_image(mumbai_c);

    document.getElementById("city").click();
  };

  function changeLogin(){
    firebase.auth().signOut().then(() => {
      setIsLoggedIn(false)
    }).catch(err => console.log(err))
  }
  const onChangePune = (e) => {
    // this.setState({ m: this.state.mumbai, m: false });
    setmumbai(false);
    setpune(true);
    setpune_image(pune_c);

    setmumbai_image(mumbaig);

    document.getElementById("city").click();
    // e.target.close();

    // document.getElementsByClassName('pop').style.display = 'none';
  };
  const add_to_cart = (e) => {
    console.log("fe");
    document.getElementById("samsun").click();
  };

  const Cart_list = (props) => (
    <div className="cart__main">
      <div class="cart__info">
        <div class="cart__image">
          <img src={guitar}></img>
        </div>
        <div class="cart__detail">
          <div id={props.id} class="cart__productname">
            <h4>{props.name}</h4>
            <a>
              <i
                style={{ color: "red" }}
                onClick={() => delete_product(props.name)}
                class="fas fa-trash-alt"
              ></i>
            </a>
          </div>
          <div class="cart__productinfo">
            <div class="cart__tenure">
              <h6>Tenure</h6>
              <h6>{props.duration} Day</h6>
            </div>
            <div class="cart__rent">
              <h6>Rent</h6>
              <h6>
                <i class="fas fa-rupee-sign"></i>&nbsp;&nbsp;{props.price}
                /day
              </h6>
            </div>
            <div class="cart__deposit">
              <h6>Deposit</h6>
              <h6>0</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="cart__button">
        <div class="cart__edit">
          <button>EDIT DETAILS</button>
        </div>
        <div class="cart__checkout">
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );

  let addModalclose = () => {
    setaddModalshow(false);
  };
  return (
    <div class="container fixed-top">
      <div className="main">
        <div className="image">
          <a href="/">
            <img src={logo} alt="Rentkar" />
          </a>
        </div>
        <div className="but cities" id="navmap">
          <Popup
            className="pop"
            trigger={
              <button id="city">
                <img src={map} alt="City" /> {mumbai ? "Mumbai" : "Pune"}{" "}
              </button>
            }
            flowing
            hoverable
          >
            <FadeIn>
              <Grid className="popup_of_place" stretched divided rows={2}>
                <Grid.Row
                  className="popup_of_place1"
                  onClick={onChangeMumbai}
                  textAlign="left"
                >
                  <img className="imgage" src={mumbai_image} alt="hey" />
                  <div className="header">Mumbai</div>
                  {mumbai === true ? <i class="fas fa-check" /> : null}
                </Grid.Row>
                <Grid.Row
                  className="popup_of_place1"
                  onClick={onChangePune}
                  textAlign="left"
                >
                  <img className="imgage" src={pune_image} alt="hey" />
                  <div className="header">Pune</div>

                  {pune === true ? <i class="fas fa-check" /> : null}
                </Grid.Row>
              </Grid>
            </FadeIn>
          </Popup>
        </div>
        <div className="searc">
          <input
            name="search"
            placeholder="Search for instruments,gaming gears,camera as..."
          ></input>
          <a>
            <i class="fas fa-search"></i>
          </a>
          {/* <i class="fas fa-search"></i> */}
        </div>
        <div className="but" id="bag">
          <Popup
            trigger={
              <button id="samsun">
                <img src={bag} alt="bag" />
                Bag
                <span
                  className="bag__count"
                  style={{
                    position: "relative",
                    top: "-10px",
                    right: "-8px",
                    padding: "5px 10px",
                    borderRadius: "100%",
                    color: "white",
                    marginRight: "-25px",
                  }}
                >
                  {count}
                </span>
              </button>
            }
          >
            <a href="/mybag">
              <div className="take_me_to_cart_but">
                <button className="cart_but" onClick={add_to_cart}>
                  Take me to Cart
                </button>
              </div>
            </a>

            {product.map((p, index) => (
              <div>
                <Cart_list
                  id={index}
                  name={p.name}
                  price={p.price}
                  duration={p.duration}
                />
                <hr />
              </div>
            ))}
          </Popup>
        </div>
        {!isLoggedIn ? (
          <div className="but" id="sign">
            <button onClick={() => setLoginModalShow(true)}>
              Login/SignUp
            </button>
            <LoginForm
              show={loginModalShow}
              onHide={() => setLoginModalShow(false)}
            />
          </div>
        ) : (
          <div className="userheader">
            <Popup
              className="pop"
              trigger={
                <button className="user">
                  <img src={dummyprofile} />
                  <p className="username">
                    Tanuj
                    <i className="fa fa-angle-down" />
                  </p>
                </button>
              }
              flowing
              hoverable
            >
              <FadeIn className="fade-in">
                <Grid className="options" stretched divided rows={7}>
                  <Grid.Row href="/mybag">
                    <img src={bag_s} />
                    <p>My Bag</p>
                  </Grid.Row>
                  <hr />
                  <Grid.Row href="/rentals">
                    <img src={rental_s} />
                    <p>My Rentals</p>
                  </Grid.Row>
                  <hr />
                  <Grid.Row href="/mylisting">
                    <img src={listing_s} />
                    <p>My Listings</p>
                  </Grid.Row>
                  <hr />
                  <Grid.Row href="/verification">
                    <img src={verification_s} />
                    <p>Verification</p>
                  </Grid.Row>
                  <hr />
                  <Grid.Row href="/support">
                    <img src={support_s} />
                    <p>Help & Support</p>
                  </Grid.Row>
                  <hr />
                  <Grid.Row href="/settings">
                    <img src={settings_s} />
                    <p>My Settings</p>
                  </Grid.Row>
                  <hr />
                  <Grid.Row onClick={changeLogin} style={{cursor: "pointer", paddingLeft: "3px"}} >
                    <img  src={logout_s}  style={{padding: "0px !important"}} />
                    <p>Log Out</p>
                  </Grid.Row>
                </Grid>
              </FadeIn>
            </Popup>
          </div>
        )}

        <div className="bar">
          <a href="https://www.instagram.com/rentkar_app" target="_blank">
            {/* <i class="fas fa-bars"></i> */}
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Head;
