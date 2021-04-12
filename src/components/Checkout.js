import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { Button, Card, Image } from "semantic-ui-react";

import rental_s from "../images/icons/rental_s.png";
import bag_s from "../images/bagb.png";
import bag_g from "../images/bag.png";
import listing_s from "../images/icons/listing_s.png";
import shareCredit_s from "../images/icons/shareCredit_s.png";
import verification_s from "../images/icons/verification_s.png";
import support_s from "../images/icons/support_s.png";
import settings_s from "../images/icons/settings_s.png";
import support_person from "../images/supportPerson.png";
import down_arrow from "../images/down_arrow.png";
import ques from "../images/ques.png";
import whatsAppSupport from "../images/whatsAppSupport.png";
import phone from "../images/phone.png";
import { DotsMobileStepper } from "./ListItem";
import dummyprofile from "../images/dummyprofile.jpg";
import rental_g from "../images/icons/rental_g.png";
import listing_g from "../images/icons/listing_g.png";
import shareCredit_g from "../images/icons/shareCredit_g.png";
import verification_g from "../images/icons/verification_g.png";
import support_g from "../images/icons/support_g.png";
import settings_g from "../images/icons/settings_g.png";

import pencil from "../images/icons/pencil_white.png";
import pencil_b from "../images/icons/pencil.png";
import guitar from "../images/guitar2.png";
import person from "../images/person.png";
import add from "../images/add.png";
import upload from "../images/upload.png";
import edit from "../images/edit.png";
import selectedPage from "../images/selectedPage.png";
import unSelectedPage from "../images/unselectedPage.png";
import camera from "../images/camera.png";
import uploadSelfie from "../images/uploadSelfie.png";
import radio_button from "../images/radio_button.png";
import Axios from "axios";

import LoginModal from "./Login/LoginModal";
import AddressModal from "./Address/AddressModal";

export default function Checkout(props) {
  const [sgsts, setSgsts] = useState();
  const [cgsts, setCgsts] = useState();
  const [totals, setTotal] = useState();

  useEffect(() => {
    setSgsts(localStorage.getItem("sgst"));
    setCgsts(localStorage.getItem("cgst"));
    setTotal(localStorage.getItem("total"));
  }, []);
  const razorpayHandler = async () => {
    console.log(sgsts, cgsts, totals);
    const API_URL = `https://rentkar.herokuapp.com/razpay/`;
    const orderUrl = `${API_URL}order/${totals}`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    console.log("App -> razorPayPaymentHandler -> data", data);

    const options = {
      key: "rzp_test_TQK3Wokl9VqaEX",
      name: "Rentkar",
      description: "Rentkar",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const API_URL2 = `https://rentkar.herokuapp.com/`;
          const url = `${API_URL2}capture/${paymentId}/${totals}`;
          const captureResponse = await Axios.post(url, {});
          const successObj = JSON.parse(captureResponse.data);
          const captured = successObj.captured;
          console.log("App -> razorPayPaymentHandler -> captured", successObj);
          if (captured) {
            console.log("success");
          }
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const [addModalshow, setaddModalshow] = useState(false);
  const [addAddressModalshow, setaddAddressModalshow] = useState(false);
  const [up, setup] = useState(true);
  const [duration, setDuration] = useState("3 Day");
  const [payments, setPayment] = useState(localStorage.getItem("price"));
  // const [sgsts, setSgst] = useState(localStorage.getItem("sgst"));
  // const [cgsts, setCgst] = useState(localStorage.getItem("cgst"));
  // const [totals, setTotals] = useState(localStorage.getItem("total"));

  const handleDuration = (event, newDuration) => {
    setDuration(newDuration);
  };
  let addModalclose = () => {
    setaddModalshow(false);
  };

  const toggle = () => {
    setup(!up);
  };

  return (
    <div className="checkout row">
      <div className="left col-lg-9 col--12 order-md-1">
        <div className="verificationList">
          <div className="listItem" onClick={() => setaddModalshow(true)}>
            <Image className="verified" src={verification_s} />
            <Image className="verifyImage" src={person} />
            <p className="verifyheader">Account Login</p>
            {/* <div className="changeButton">
              <Image src={edit} />
              <p>Change</p>
      </div> */}
          </div>
          <LoginModal show={addModalshow} onHide={addModalclose} />

          <div
            className="listItem"
            onClick={() => setaddAddressModalshow(true)}
          >
            <Image className="verified" src={verification_s} />
            <Image className="verifyImage" src={add} />
            <p className="verifyheader">Select Delivery Address</p>
          </div>
          <AddressModal
            show={addAddressModalshow}
            onHide={() => setaddAddressModalshow(false)}
          />

          <div className="listItem">
            <Image className="verified" src={verification_g} />
            <Image className="verifyImage" src={verification_s} />
            <p className="verifyheader">Verification</p>
          </div>
        </div>
      </div>
      <div
        className={
          up
            ? "right col-lg-3 col-md-12 order-md-2"
            : "right col-lg-3 col-md-12 order-md-2 right_up"
        }
      >
        <div className="btn  up" onClick={toggle}>
          <i className={up ? "fas fa-chevron-up" : "fas fa-chevron-down"} />
        </div>
        <div className="summary" style={{ marginTop: "50px" }}>
          <h3 style={{ textAlign: "left" }}>Product Summary</h3>
          <div className="product">
            <p>PS4 + Controller</p>
            <div className="btn btn-outline-dark">+ Rs {payments}</div>
          </div>
          <div className="product">
            <p>Games</p>
            <div className="btn btn-outline-dark">2X</div>
            <div className="btn btn-outline-dark">+ Rs XXX</div>
          </div>
          <div className="product">
            <p>Controller</p>
            <div className="btn btn-outline-dark">3X</div>
            <div className="btn btn-outline-dark">+ Rs XXX</div>
          </div>
          <div className="product">
            <p>Coupon</p>
            <div className="btn btn-outline-dark">+ Rs XXX</div>
          </div>
          <div className="sgst">
            <p
              style={{
                textAlign: "left",
                margin: "5px 20px",
                fontSize: "12px",
              }}
            >
              SGST (9%)
            </p>
            <b>
              <p
                style={{
                  textAlign: "right",
                  margin: "5px 20px",
                  fontSize: "12px",
                }}
              >
                Rs {sgsts}
              </p>
            </b>
          </div>
          <div className="cgst">
            <p
              style={{
                textAlign: "left",
                margin: "5px 20px",
                fontSize: "12px",
              }}
            >
              CGST (9%)
            </p>
            <b>
              <p
                style={{
                  textAlign: "right",
                  margin: "5px 20px",
                  fontSize: "12px",
                }}
              >
                Rs {cgsts}
              </p>
            </b>
          </div>
          <h2
            style={{
              color: "#28A5E5",
              textAlign: "left",
              fontWeight: "600",
              marginBottom: "0px",
            }}
          >
            Total : Rs {totals}
          </h2>

          <p
            style={{
              textAlign: "left",
              margin: "5px 20px",
              fontSize: "12px",
            }}
          >
            Inclusive of all taxes | Tax breakdown
          </p>

          <div className="placeOrder">
            <div className="couponStatus col-5">
              <p>Coupon Applied</p>
            </div>
            <button className="col-5" onClick={razorpayHandler}>
              <Link to="/checkout">Place Order</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
