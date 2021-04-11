import React, { Component, useState, useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
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
import whatsapp from "../images/whatsapp.png";
import faqs from "../images/faqs.png";
import quickreq from "../images/quickreq.png";
import call from "../images/call.png";
import FadeIn from "react-fade-in";
import gp9 from "../images/PS5+1DS4+2GAMES.jpg";

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
import "./UserDash.css";
import { Button, Card, Image } from "semantic-ui-react";
import Footer from "./Footer";
import Head from "./Head";
import Floatnav from "./Floatnav";
import { fetchUserDetail, fetchUserAddressDetail } from "../config";

import { ProductContext } from "./ProductContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { SaveProductContext } from "./SaveProductContext";
import axios from "axios";

const icons = [
  bag_g,
  rental_s,
  listing_s,
  verification_s,
  support_s,
  settings_s,
];
const icons_g = [
  bag_s,
  rental_g,
  listing_g,
  verification_g,
  support_g,
  settings_g,
];
const iconDesc = [
  "My Bag",
  "My Rentals",
  "My Listings",
  "Verification",
  "Help & Support",
  "Settings",
];



function MyBag(props) {
  const [product, setProduct] = useContext(ProductContext);
  // const [total_single_item, settotal_single_item] = useState()
  const [saveForLater, setSaveForLater] = useState([]);
  const tenure_change = (e) => {
    console.log(e.target.value);
    console.log(e);
    console.log(document.getElementsByClassName("total_price"));
  };

  const sendToSaveForLater = (name, price, duration) => {
    let saveForLaterProduct = {
      name: name,
      price: price,
      duration: duration,
    };
    setSaveForLater((prevArray) => [...prevArray, saveForLaterProduct]);
    let currentArray = saveForLater;
    console.log(currentArray);
    let new_product = product.filter((p) => {
      return p.name !== name;
    });
    setProduct(new_product);
  };

  const Order_card = (props) => (
    <div class="buttons_mobileview">
      <div class="image_detail">
        <img className='image' src={gp9} />
        <div class="detail">
          <div class="name">
            <div class="main_head">
              <div>
                <h4 style={{ fontWeight: "700" }}>{props.name}</h4>
              </div>
              <div>
                <h6 style={{ color: "red", fontWeight: "600" }}>
                  Hurry? Only few in stock
                </h6>
              </div>
            </div>
            <div class="edit_order">
              <h6 style={{ color: "#1bacf4" }}>
                <a>
                  Edit Order<img src={pencil_b}></img>
                </a>
                <span> | </span>
                <a style={{ color: "red" }}>
                  Remove&nbsp;&nbsp;<i class="fas fa-trash-alt"></i>
                </a>
              </h6>
            </div>
          </div>
          <div class="priice">
            <div class="rent">
              <div className="name__">
                <h6>Rent</h6>
              </div>
              <div>
                <h4 style={{ fontWeight: "600" }}>
                  <i class="fas fa-rupee-sign    "></i> {props.price} /Day
                </h4>
              </div>
            </div>
            <div class="tenure">
              <div className="name__">
                <h6>
                  Tenure <i class="far fa-clock"></i>
                </h6>
              </div>
              <div>
                <select
                  onChange={tenure_change}
                  name="tenure"
                  id="tenure"
                  style={{
                    fontWeight: "600",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <option value={2}>2 Weeks</option>
                  <option value={3}>3 Weeks</option>
                  <option value={4}>4 Weeks</option>
                  <option value={5}>5 Weeks</option>
                </select>
                {/* <h4 >2 Weeks</h4> */}
              </div>
            </div>

            {/* <div class="deposit">
                            <div className="name__">
                                <h6>Deposit</h6>
                            </div>
                            <h4 style={{ fontWeight: "600" }}>0</h4>
                        </div> */}
          </div>

          <div class="total">
            <div class="mybag_button">
              <div class="placeorder">
                <button className="but1">Place Order</button>
              </div>
              {props.flag === 0 ? (
                <div class="saveforlater">
                  <button
                    className="but2"
                    onClick={() =>
                      sendToSaveForLater(
                        props.name,
                        props.price,
                        props.duration
                      )
                    }
                  >
                    Save for Later
                  </button>
                </div>
              ) : null}
            </div>

            <div>
              <div class="total_price">
                <h4 style={{ fontWeight: "600" }}>
                  Total: <i class="fas fa-rupee-sign    "></i>{" "}
                  {props.price * props.duration}
                </h4>
                <h6
                  style={{ fontWeight: "600", color: "#1bacf4" }}
                  className="pricebreakdown"
                >
                  <i class="fas fa-exclamation-circle"></i>Price Breakdown
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile_button">
        <div class="mybag_button">
          <div class="placeorder">
            <button className="but1">Place Order</button>
          </div>
          {props.flag === 0 ? (
            <div class="saveforlater">
              <button
                className="but2"
                onClick={() =>
                  sendToSaveForLater(props.name, props.price, props.duration)
                }
              >
                Save for Later
              </button>
            </div>
          ) : null}

          <div class="saveforlater">
            <button className="but2">Remove</button>
          </div>
        </div>

        <div>
          <div class="total_price">
            <h4 style={{ fontWeight: "600" }}>
              Total: <i class="fas fa-rupee-sign    "></i>{" "}
              {props.price * props.duration}
            </h4>
            <h6
              style={{ fontWeight: "600", color: "#1bacf4" }}
              className="pricebreakdown"
            >
              <i class="fas fa-exclamation-circle"></i>Price Breakdown
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="myrentals" style={{ height: "720px", overflowY: "scroll" }}>
      {product.map((product) => (
        <div className="order_card">
          <Order_card
            name={product.name}
            price={product.price}
            duration={product.duration}
            flag={0}
          />
        </div>
      ))}

      <div className="checkout">
        <div className="cost">
          <h6>
            Total: &nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-rupee-sign    "></i>
            5460 &nbsp;&nbsp;|&nbsp;&nbsp; Delivery by 21 September{" "}
            <i class="fa fa-truck" aria-hidden="true"></i>
          </h6>
        </div>
        <div class="cost_mobile">
          <h6>
            Total: &nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-rupee-sign    "></i>
            5460 <br></br> Delivery by 21 September{" "}
            <i class="fa fa-truck" aria-hidden="true"></i>
          </h6>
        </div>

        <div className="checkout_button">
          <button>Place Order</button>
        </div>
      </div>
      {saveForLater.map((saveForLater) => (
        <div className="order_card">
          <Order_card
            name={saveForLater.name}
            price={saveForLater.price}
            duration={saveForLater.duration}
            flag={-1}
          />
        </div>
      ))}
    </div>
  );
}

class MyListing extends Component {
  render() {
    const Order_card = () => (
      <div class="image_detail">
        <div class="image" style={{ backgroundImage: `url(${gp9})` }}></div>
        <div class="detail">
          <div class="name">
            <div class="main_head">
              <div>
                <h4 style={{ fontWeight: "700" }}>
                  Fender Bullet Stratocaster
                </h4>
              </div>
              <div>
                <h6
                  style={{
                    color: " #19eeb5",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </h6>
              </div>
            </div>
          </div>
          <div class="product__status">
            <div>
              <h6
                style={{
                  color: "#1bacf4",
                  textAlign: "initial",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <i class="fas fa-circle"></i> &nbsp; Your Product is Live
              </h6>
            </div>
            <div>
              <h6
                style={{
                  color: "red",
                  textAlign: "initial",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <i class="fas fa-trash-alt"></i> &nbsp; Remove
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <div className="my__listing">
          <Order_card />
        </div>
        <div className="my__listing">
          <Order_card />
        </div>
      </div>
    );
  }
}

function Verification() {
  function PersonalInformation(props) {
    const [addrInpCount, setAddrInpCount] = useState([1]);
    const [addrInp, setAddrInp] = useState();
    const [username, setUsername] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [DOB, setDOB] = useState();
    const [address, setAddress] = useState();
    const [addrType, setAddrType] = useState([]);
    const userId = "606febc789be1d0015c385be";

    useEffect(() => {
      const fetchData = async () => {
        const userDetail = await fetchUserDetail(userId);
        // const useAddress = await fetchUserAddressDetail(userId);
        setUsername(userDetail.name);
        setEmail(userDetail.email);
        setPhone(userDetail.phoneNumber);
        if (userDetail.dob) {
          setDOB(userDetail.dob.substr(0, 10));
        }
      };
      fetchData();
    }, [userId]);

    useEffect(() => {
      setAddrInp(
        addrInpCount.map((e, i) => {
          return (
            <div key={i}>
              <select
                className="inpt"
                style={{ minWidth: "30%" }}
                onChange={(e) => {
                  setAddrType({ addrNum: i, type: e.target.value });
                }}
              >
                <option value="home">HOME</option>
                <option value="work">WORK</option>
              </select>

              <input
                type="address"
                className="inpt"
                placeholder="Enter Address"
                style={{ minWidth: "58%", marginLeft: "1rem" }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button
                className="btn btn-danger btn-sm ml-1"
                onClick={(e) => {
                  e.preventDefault();
                  const values = [...addrInpCount];
                  values.pop();
                  setAddrInpCount(values);
                }}
              >
                X
              </button>
            </div>
          );
        })
      );
    }, [addrInpCount]);

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        name: username,
        phoneNumber: phone,
        email,
        dob: DOB,
      };
      axios
        .put(`https://backendrentkar.herokuapp.com/users/${userId}`, data)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <FadeIn>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Personal Information
            </Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <input
                type="text"
                className="inpt"
                placeholder="Enter Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                className="inpt"
                placeholder="Enter Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                className="inpt"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="date"
                className="inpt"
                placeholder="Enter DOB"
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
              />
              {/* {addrInp}
              <button
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={(e) => {
                  e.preventDefault();
                  setAddrInpCount([...addrInpCount, 1]);
                }}
              >
                Add More
              </button> */}
            </Modal.Body>
            <Modal.Footer>
              {/* <div className="btn btn-outline-success" onClick={props.onHide}>
                Submit
              </div> */}
              <button className="btn btn-outline-success" type="submit">
                Submit
              </button>
              <button className="btn btn-outline-danger" onClick={props.onHide}>
                Close
              </button>
            </Modal.Footer>
          </form>
        </FadeIn>
      </Modal>
    );
  }

  function FinancialVerification(props) {
    const [image,setImage] = useState();

    const handleSubmit = () => {
      const userID = "606febc789be1d0015c385be";
      axios.put(`https://backendrentkar.herokuapp.com/users/${userID}`, {
        financialDocs: image
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <FadeIn>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Financial Verification
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="file" accept=".pdf" value={image} onChange={e => setImage(e.target.value)} />
            <p className="accepted">**accepted file type : .pdf</p>
          </Modal.Body>
          <Modal.Footer>
            <div className="btn btn-outline-success" onClick={handleSubmit}>
              Submit
            </div>
            <div className="btn btn-outline-success" onClick={props.onHide}>
              Close
            </div>
          </Modal.Footer>
        </FadeIn>
      </Modal>
    );
  }
  function UploadDocuments(props) {
    const [docType, setDocType] = useState();
    const [document, setDocument] = useState();

    const handleSubmit = () => {
      const userId = "606febc789be1d0015c385be";
      const data = {
        doctype: docType,
        doccopy: document
      }
      axios.put(`https://backendrentkar.herokuapp.com/users/${userId}`, {document: data})
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <FadeIn>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Upload Documents
            </Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <label for="document">Choose a document type: </label>
              <select
                name="document"
                id="document"
                form="documentform"
                value={docType}
                onChange={e => setDocType(e.target.value)}
              >
                <option value="AADHAR">AADHAR</option>
                <option value="DRIVING LICENSE">DRIVING LICENSE</option>
                <option value="PASSPORT">PASSPORT</option>
                <option value="OTHERS">OTHERS</option>
              </select>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg, .pdf"
                value={document}
                onChange={e => setDocument(e.target.value)}
              />
              <p className="accepted">
                **accepted file type : image/png, image/jpeg, image/jpg, .pdf
              </p>
            </Modal.Body>
            <Modal.Footer>
              <div className="btn btn-outline-success" onClick={handleSubmit}>
                Submit
              </div>
              <div className="btn btn-outline-success" onClick={props.onHide}>
                Close
              </div>
            </Modal.Footer>
          </form>
        </FadeIn>
      </Modal>
    );
  }
  function AddASelfie(props) {
    const [image, setImage] = useState();

    const handleSubmit = () => {
      const userId = "606febc789be1d0015c385be";
      axios
        .put(`https://backendrentkar.herokuapp.com/users/${userId}`, { image })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <FadeIn>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add a Selfie
            </Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => setImage(e.target.files[0].name)}
              />
              <p className="accepted">
                **accepted file type : image/png, image/jpeg, image/jpg
              </p>
            </Modal.Body>
            <Modal.Footer>
              <div className="btn btn-outline-success" onClick={handleSubmit}>
                Submit
              </div>
              <div className="btn btn-outline-success" onClick={props.onHide}>
                Close
              </div>
            </Modal.Footer>
          </form>
        </FadeIn>
      </Modal>
    );
  }

  const [
    PersonalInformationModalShow,
    setPersonalInformationModalShow,
  ] = useState(false);
  const [UploadDocumentsModalShow, setUploadDocumentsModalShow] = useState(
    false
  );
  const [
    FinancialVerificationModalShow,
    setFinancialVerificationModalShow,
  ] = useState(false);
  const [AddASelfieModalShow, setAddASelfieModalShow] = useState(false);
  return (
    <div className="right_content">
      {/*
        <div className="verification__list">
          <div className="list__item">
            <Image className="verify__image" src={person} />
            <p>Personal Information</p>
          </div>
          <div className="list__item">
            <Image className="verify__image" src={add} />
            <p>ADD A SELFIE</p>
            <p>(Upload your selfie)</p>
          </div>
          <div className="list__item">
            <Image className="verify__image" src={upload} />
            <p>UPLOAD DOCUMENTS</p>
            <p> (Driving License / Passport / Aadhar Card)</p>
          </div>
          <div className="list__item">
            <Image className="verify__image" src={upload} />
            <p>Financial VERIFICATION</p>
            <p> (Upload bank statement for 3 months)</p>
          </div>
        </div>
        */}
      <div className="verificationList">
        <div
          className="listItem"
          onClick={() => setPersonalInformationModalShow(true)}
        >
          <Image className="verified" src={verification_s} />
          <Image className="verifyImage" src={person} />
          <p className="verifyheader">Personal Information</p>
          {/* <div className="changeButton">
              <Image src={edit} />
              <p>Change</p>
      </div> */}
        </div>
        <PersonalInformation
          show={PersonalInformationModalShow}
          onHide={() => setPersonalInformationModalShow(false)}
        />
        <div className="listItem" onClick={() => setAddASelfieModalShow(true)}>
          <Image className="verified" src={verification_s} />
          <Image className="verifyImage" src={add} />
          <p className="verifyheader">Add a Selfie</p>
          <p>(Upload your selfie)</p>
        </div>
        <AddASelfie
          show={AddASelfieModalShow}
          onHide={() => setAddASelfieModalShow(false)}
        />
        <div
          className="listItem"
          onClick={() => setUploadDocumentsModalShow(true)}
        >
          <Image className="verified" src={verification_g} />
          <Image className="verifyImage" src={upload} />
          <p className="verifyheader">Upload Documents</p>
          <p>(Verification with Aadhar Card / Driving License / Passport)</p>
        </div>
        <UploadDocuments
          show={UploadDocumentsModalShow}
          onHide={() => setUploadDocumentsModalShow(false)}
        />
        <div
          className="listItem"
          onClick={() => setFinancialVerificationModalShow(true)}
        >
          <Image className="verified" src={verification_g} />
          <Image className="verifyImage" src={upload} />
          <p className="verifyheader">Financial Verification</p>
          <p>(Upload bank statement for 3 months)</p>
        </div>
        <FinancialVerification
          show={FinancialVerificationModalShow}
          onHide={() => setFinancialVerificationModalShow(false)}
        />
      </div>
    </div>
  );
}

class MobileVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    const Verify_detail_card = (props) => {
      return (
        <div className="verify_detail_card">
          <div class="verify__userdetail">
            <div class="name">
              <p>{props.name}</p>
            </div>
            <div class="userName">
              <h6>{props.username}</h6>
            </div>
          </div>
          <div class="verify__change">
            <h6 style={{ color: "#1bacf4", fontSize: "12px" }}>
              <a>
                Change<img src={pencil_b}></img>
              </a>
            </h6>
          </div>
        </div>
      );
    };

    const Address_detail_card = (props) => {
      return (
        <div className="verify_detail_card">
          <input
            className="addressDetail"
            for="text"
            placeholder={props.placeholder}
          />
        </div>
      );
    };

    const VerifyPage1 = (props) => (
      <div className="verifyPage1">
        <div className="Page">
          <h2>Personal Verification</h2>
          <Verify_detail_card name={"Name"} username={"Arnab Dey"} />
          <Verify_detail_card name={"Date of Birth"} username={"31/03/2001"} />
          <Address_detail_card line={1} placeholder="Address Line 1" />
          <p className="Label">Enter Address</p>
          <Address_detail_card line={2} placeholder="Address Line 2" />
          <Link to="/verification/page2">
            <Button>Continue</Button>
          </Link>
          <p
            className="Label"
            style={{
              marginTop: "20px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Verification Score : 10%
          </p>
          <div className="selections">
            <img src={selectedPage}></img>
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
          </div>
        </div>
      </div>
    );

    const VerifyPage2 = (props) => (
      <div className="verifyPage2">
        <div className="Page">
          <h2>Selfie Verification</h2>
          <Card className="selfieCard">
            <Card.Content>
              <Image src={camera} wrapped ui={false} onClick={() => {}} />
              <p>Take a Selfie</p>
            </Card.Content>
          </Card>
          <Button
            className="selfieButton"
            style={{ opacity: "0.3", background: "#fff", color: "#000" }}
          >
            <div className="buttonContent">
              <img src={uploadSelfie} />
              <p>Upload a Selfie</p>
            </div>
          </Button>
          <Button
            className="selfieButton"
            style={{
              opacity: "0.3",
              background: "#fff",
              color: "#000",
              marginTop: "20px",
            }}
          >
            <div className="buttonContent">
              <img
                src={pencil_b}
                style={{ width: "70px", marginTop: "-10px" }}
              />
              <p style={{ marginTop: "-10px" }}>Change Selfie</p>
            </div>
          </Button>
          <Link style={{ textDecoration: "none" }} to="/verification/page3">
            <Button style={{ opacity: "0.3" }}>Continue</Button>
          </Link>
          <p
            className="Label"
            style={{
              marginTop: "20px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Verification Score : 50%
          </p>
          <div className="selections">
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
            <img src={selectedPage}></img>
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
          </div>
        </div>
      </div>
    );
    const VerifyPage3 = (props) => (
      <div className="verifyPage3">
        <div className="Page">
          <h2>Identity Verification</h2>
          <Button
            className="selfieButton"
            style={{ background: "#fff", color: "#000", marginTop: "20px" }}
          >
            <div className="buttonContent">
              <img src={uploadSelfie} />
              <p>Upload Driving License</p>
            </div>
          </Button>
          <h6>OR</h6>
          <Button
            className="selfieButton"
            style={{ background: "#fff", color: "#000", marginTop: "20px" }}
          >
            <div className="buttonContent">
              <img src={uploadSelfie} />
              <p style={{ marginTop: "-10px" }}>Update Passport</p>
            </div>
          </Button>
          <h6>OR</h6>
          <Button
            className="selfieButton"
            style={{ background: "#fff", color: "#000", marginTop: "20px" }}
          >
            <div className="buttonContent">
              <img src={uploadSelfie} />
              <p style={{ marginTop: "-10px" }}>
                Verify instantly with Aadhaar Card
              </p>
            </div>
          </Button>
          <Button>Complete Verification</Button>
          <Link style={{ textDecoration: "none" }} to="/verification/page4">
            <Button
              className="selfieButton"
              style={{ background: "#fff", color: "#000", marginTop: "20px" }}
            >
              Continue with your Order
            </Button>
          </Link>
          <p
            className="Label"
            style={{
              marginTop: "20px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Verification Score : 10%
          </p>
          <div className="selections">
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
            <img src={selectedPage}></img>
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
          </div>
        </div>
      </div>
    );

    const VerifyPage4 = (props) => (
      <div className="verifyPage4">
        <div className="Page">
          <h2>Financial Verification</h2>
          <Button
            className="selfieButton"
            style={{ background: "#fff", color: "#000", marginTop: "10px" }}
          >
            <div className="buttonContent">
              <img src={uploadSelfie} />
              <p>Upload Bank Statement</p>
            </div>
          </Button>
          <p className="Label" style={{ marginTop: "5px" }}>
            Upload Bank Statement for 3 months
          </p>
          <Button style={{ marginTop: "300px" }} onClick={() => {}}>
            Finish
          </Button>
          <p
            className="Label"
            style={{
              marginTop: "20px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Verification Score : 100%
          </p>
          <div className="selections">
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
            <img
              src={unSelectedPage}
              style={{ border: "none", width: "20px", height: "20px" }}
            ></img>
            <img src={selectedPage}></img>
          </div>
        </div>
      </div>
    );

    return (
      <Router>
        <div className="mobileVerification">
          <Switch>
            <Route
              path="/verification/page2"
              render={(props) => <VerifyPage2 />}
            />
            <Route
              path="/verification/page3"
              render={(props) => <VerifyPage3 />}
            />
            <Route
              path="/verification/page4"
              render={(props) => <VerifyPage4 />}
            />
            <Route path="/verification/" render={(props) => <VerifyPage1 />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Settings = (props) => {
  const [setting_username, setsetting_username] = useState(
    props.user[0]["value"]
  );
  useEffect(
    () => (
      console.log(setting_username),
      setsetting_username(props.user[0]["value"]),
      console.log(setting_username)
    ),
    [props.user]
  );

  const change_input = (id) => {
    var p = document.getElementById(id);
    p.style.backgroundColor = "white";
    p.value = null;
    p.removeAttribute("readOnly");
    p.focus();
  };
  const update_info = () => {
    var new_user = new Array();

    for (var i = 0; i < 4; i++) {
      var q = document.getElementById(i + 1);
      if (q.value !== "") {
        q.placeholder = q.value;
        q.style.backgroundColor = "transparent";
        // props.user[i]['value'] = q.value;
        new_user.push({ Name: props.user[i]["Name"], value: q.value });
        q.setAttribute("readOnly", "true");
      } else {
        new_user.push({
          Name: props.user[i]["Name"],
          value: props.user[i]["value"],
        });
      }
      // user[i - 1][1] = q.value;
    }
    props.setuser(new_user);
    console.log(new_user);
  };
  const Setting_detail_card = (props) => {
    return (
      <div className="setting_detail_card">
        <div class="setting__userdetail">
          <div class="name">
            <p>{props.name}</p>
          </div>
          <div class="userName">
            <input
              id={props.id}
              placeholder={props.username}
              type="text"
              readOnly="true"
            ></input>
            {/* <h6>{props.username}</h6> */}
          </div>
        </div>
        <div class="setting__change">
          <h6 style={{ color: "#1bacf4", fontSize: "12px" }}>
            <a onClick={() => change_input(props.id)}>
              Change<img src={pencil_b}></img>
            </a>
          </h6>
        </div>
      </div>
    );
  };
  return (
    <div className="settings">
      <div class="setting__profile">
        <div class="profile_photo">
          <img class="user_icon" src={dummyprofile} aria-hidden="true"></img>
        </div>
        <div class="profile__name__address">
          <div class="name">{props.user[0]["value"]}</div>
          <div class="location">
            <i class="fa fa-map-marker"></i>
            <p>Mumbai</p>
          </div>
        </div>
      </div>
      {props.user.map((item, index) => (
        <Setting_detail_card
          id={index + 1}
          name={item["Name"]}
          username={item["value"]}
        />
      ))}

      {/* <Setting_detail_card id={2} name={"Email"} username={"sid@rentkar.com"} />
                <Setting_detail_card id={3} name={"Mobile Number"} username={"982304234"} />
                <Setting_detail_card id={4} name={"Date Of Birth"} username={"31/03/2001"} /> */}
      <Button onClick={update_info}>SAVE</Button>
    </div>
  );
};

function Support() {
  function QucikReq ( props )
  {
    const userId = "606febc789be1d0015c385be"
    const [ supporttype, setsupporttype ] = useState()
    const [statement, setstatement] = useState()

const handleSubmit= (e) => {
  e.preventDefault()
  const data = {
    userId: userId,
    statement: statement,
    supporttype: supporttype
  }
  console.log(data)
  axios.post( `https://backendrentkar.herokuapp.com/support`, data )
    .then( ( res ) => console.log( res.data ))
    .catch((err) => console.log(err))
  props.onHide()
}

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <FadeIn>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Quick Request
            </Modal.Title>
          </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
              <div className="quick__req">
                <select className='inpt'value={supporttype} onChange={(e)=> setsupporttype(e.target.value)}>
                  <option disabled selected value>
                    --select your support type--
                  </option>
                <option value="QUERY">QUERY</option>
                <option value="TECHNICAL HELP">TECHNICAL HELP</option>
                <option value="PAYMENT RELATED">PAYMENT RELATED</option>
                <option value="ORDER RELATED">ORDER RELATED</option>
                <option value="REFUND RELATED">REFUND RELATED</option>
                <option value="FEEDBACK">FEEDBACK</option>
                <option value="LISTED PRODUCT RELATED">LISTED PRODUCT RELATED</option>
                </select>
                <select className='inpt'>
                <option disabled selected value>
                    --Select Order Id--
                  </option>
                <option value="QUERY">QUERY</option>
                <option value="TECHNICAL HELP">TECHNICAL HELP</option>
                <option value="PAYMENT RELATED">PAYMENT RELATED</option>
                </select>
              <input
                type="text"
                className="inpt quickreq"
                  placeholder="Enter your request"
                  value={ statement }
                  onChange={(e)=> setstatement(e.target.value)}
              />
              </div>
          </Modal.Body>
          
          <Modal.Footer>
            <button className="btn btn-outline-success" type="submit">
                Submit
              </button>
              <button className="btn btn-outline-danger" onClick={props.onHide}>
                Close
              </button>
            </Modal.Footer>
            </form>
        </FadeIn>
      </Modal>
    );
  }

  const [quickreqShow, setquickreqModalShow] = useState(false);

  return (
    <div className="supportScreen">
      <div className="supportButtonDiv">
        <div
          className="supportButton"
          onClick={() => setquickreqModalShow(true)}
        >
          <Image className="supportButtonImage" src={quickreq} />
          <p className="support__detail">Generate a quick request</p>
        </div>
        <a href="tel:+917900042875" target="_blank">
          <div className="supportButton">
            <Image className="supportButtonImage" src={call} />
            <p className="support__detail">Call Us</p>
          </div>
        </a>
        <a href="http://wa.me/917900042875" target="_blank">
          <div className="supportButton">
            <Image className="supportButtonImage" src={whatsapp} />
            <p className="support__detail">Ping us on WhatsApp</p>
          </div>
        </a>
        <div className="supportButton">
          <Image className="supportButtonImage" src={faqs} />
          <p className="support__detail">FAQs</p>
        </div>
      </div>
      <QucikReq
        show={quickreqShow}
        onHide={() => setquickreqModalShow(false)}
      />
    </div>

    /*
        <div className="supportButtonDiv">
          <button className="supportButton" onClick={() => this.dropMenu1()}>
            <div className="buttonContent">
              <img className="iconImage" src={support_person} />
              <p>Generate a quick request</p>
              <img
                src={down_arrow}
                style={{
                  marginLeft: "auto",
                  marginRight: "0px",
                  paddingLeft: "5px"
                }}
              />
            </div>
          </button>
          <div id="dropContent1" className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>

        <div className="supportButtonDiv">
          <button className="supportButton">
            <div className="buttonContent">
              <img
                className="iconImage"
                src={phone}
                style={{ width: "20px", height: "30px" }}
              />
              <p>Call Us</p>
            </div>
          </button>
        </div>

        <div className="supportButtonDiv">
          <button className="supportButton">
            <div className="buttonContent">
              <img className="iconImage" src={whatsAppSupport} />
              <p>Ping us on WhatsApp</p>
            </div>
          </button>
        </div>

        <div className="supportButtonDiv">
          <button className="supportButton" onClick={() => this.dropMenu2()}>
            <div className="buttonContent">
              <i className="iconImage fa fa-question-circle" />
              <p>FAQs</p>
              <img
                src={down_arrow}
                style={{
                  marginLeft: "auto",
                  marginRight: "0px",
                  paddingLeft: "5px"
                }}
              />
            </div>
          </button>
          <div id="dropContent2" className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          </div>
        </div>
              */
  );
}

export const UserDash = (props) => {
  const [addModalshow, setaddModalshow] = useState(false);
  // const user = [["Name", "Siddharth"], ["Email", "sid@rentkar.com"],
  // ["Mobile Number", "982304234"], ["Date Of Birth", "31/03/2001"]]
  const [user, setuser] = useState([
    {
      Name: "Name",
      value: "Siddharth",
    },
    {
      Name: "Email",
      value: "sid@rentkar.com",
    },
    {
      Name: "Mobile Number",
      value: "982304234",
    },
    {
      Name: "Date Of Birth",
      value: "31/03/2001",
    },
  ]);
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         index: this.props.ind
  //     }
  // }
  const [index, setindex] = useState(props.ind);
  /*
        componentDidUpdate(prevProps){
            const { history } = this.props;
            const locationChanged = this.props.location !== prevProps.location;
            if(locationChanged === true && history)
                this.props.history.push(this.props.location)
        }
    */

  const changeIndex = (index) => {
    setindex(index);

    var w = window.screen.width;
    if (w < 992)
      document.getElementsByClassName("useropt")[0].style.display = "none";
    document.getElementsByClassName("right_screen")[0].style.display = "block";
  };
  /*
        goBack = () => {
            const { history } = this.props;
            console.log(history)
            if(history) 
                history.goBack();
        }
    */

  var indexMap = {
    0: "/mybag",
    1: "/rentals",
    2: "/mylisting",
    3: "/verification/",
    4: "/support",
    5: "/settings",
  };

  function Rentals() {
  const [product, setProduct] = useContext(ProductContext);
  // const [total_single_item, settotal_single_item] = useState()
  const [saveForLater, setSaveForLater] = useState([]);
  const tenure_change = (e) => {
    console.log(e.target.value);
    console.log(e);
    console.log(document.getElementsByClassName("total_price"));
  };

  const sendToSaveForLater = (name, price, duration) => {
    let saveForLaterProduct = {
      name: name,
      price: price,
      duration: duration,
    };
    setSaveForLater((prevArray) => [...prevArray, saveForLaterProduct]);
    let currentArray = saveForLater;
    console.log(currentArray);
    let new_product = product.filter((p) => {
      return p.name !== name;
    });
    setProduct(new_product);
  };

  const Order_card = (props) => (
    <div class="buttons_mobileview">
      <div class="image_detail">
        <div class="image" style={{ backgroundImage: `url(${gp9})` }}></div>
        <div class="detail">
          <div class="name">
            <div class="main_head">
              <div>
                <h4 style={{ fontWeight: "700" }}>{props.name}</h4>
              </div>
              <div>
                <h6 style={{ color: "red", fontWeight: "600" }}>
                  Hurry? Only few in stock
                </h6>
              </div>
            </div>
            <div class="edit_order">
              <h6 style={{ color: "#1bacf4" }}>
                <a>
                  Edit Order<img src={pencil_b}></img>
                </a>
                <span> | </span>
                <a style={{ color: "red" }}>
                  Remove&nbsp;&nbsp;<i class="fas fa-trash-alt"></i>
                </a>
              </h6>
            </div>
          </div>
          <div class="price">
            {/*  <div class="rent">
            <div className="name__">
                <h6>Rent</h6>
              </div>
        
                <h4 style={{ fontWeight: "600" }}>
                  <i class="fas fa-rupee-sign    "></i> {props.price} /Day
                </h4>
              </div> */}
            <div class="tenure">
              <div className="name__">
                <h6>
                  Tenure <i class="far fa-clock"></i>
                </h6>
              </div>

              <select onChange={tenure_change} name="tenure" id="tenure">
                <option value={2}>2 Weeks</option>
                <option value={3}>3 Weeks</option>
                <option value={4}>4 Weeks</option>
                <option value={5}>5 Weeks</option>
              </select>
              {/* <h4 >2 Weeks</h4> */}
            </div>

            <div class="dod">
              <div className="dodname">
                <h6>Date of Delivery</h6>
              </div>
              <div>
                <h4 style={{ fontWeight: "600" }}>21-02-2000</h4>
              </div>
              {/*  <div className="dodname">
                <h6>Date of Pickup</h6>
              </div>
              <div>
                <h4 style={{ fontWeight: "600" }}>
                  21-02-2000
                </h4>
              </div>*/}
            </div>
            <div class="dod">
              <div className="dodname">
                <h6>Date of Delivery</h6>
              </div>
              <div>
                <h4 style={{ fontWeight: "600" }}>21-02-2000</h4>
              </div>
              {/*}  <div className="dodname">
                <h6>Date of Pickup</h6>
              </div>
              <div>
                <h4 style={{ fontWeight: "600" }}>
                  21-02-2000
                </h4>
              </div>*/}
            </div>
            {/*      <div class="dop">
              <div className="dopname">
                <h6>Date of Pickup</h6>
              </div>
              <div>
                <h4 style={{ fontWeight: "600" }}>
                  28-02-2000
                </h4>
                </div>
            </div>  */}
            {/* <div class="deposit">
                            <div className="name__">
                                <h6>Deposit</h6>
                            </div>
                            <h4 style={{ fontWeight: "600" }}>0</h4>
                        </div> */}
          </div>
          <div class="total">
            <div class="mybag_button">
              <div class="placeorder">
                <button className="but1">Place Order</button>
              </div>
              {props.flag === 0 ? (
                <div class="saveforlater">
                  <button
                    className="but2"
                    onClick={() =>
                      sendToSaveForLater(
                        props.name,
                        props.price,
                        props.duration
                      )
                    }
                  >
                    Save for Later
                  </button>
                </div>
              ) : null}
            </div>

            <div>
              <div class="total_price">
                <h4 style={{ fontWeight: "600" }}>
                  Total: <i class="fas fa-rupee-sign    "></i>{" "}
                  {props.price * props.duration}
                </h4>
                <h6
                  style={{ fontWeight: "600", color: "#1bacf4" }}
                  className="pricebreakdown"
                >
                  <i class="fas fa-exclamation-circle"></i>Price Breakdown
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile_button">
        <div class="mybag_button">
          <div class="placeorder">
            <button className="but1">Place Order</button>
          </div>
          {props.flag === 0 ? (
            <div class="saveforlater">
              <button
                className="but2"
                onClick={() =>
                  sendToSaveForLater(props.name, props.price, props.duration)
                }
              >
                Save for Later
              </button>
            </div>
          ) : null}

          <div class="saveforlater">
            <button className="but2">Remove</button>
          </div>
        </div>

        <div>
          <div class="total_price">
            <h4 style={{ fontWeight: "600" }}>
              Total: <i class="fas fa-rupee-sign    "></i>{" "}
              {props.price * props.duration}
            </h4>
            <h6
              style={{ fontWeight: "600", color: "#1bacf4" }}
              className="pricebreakdown"
            >
              <i class="fas fa-exclamation-circle"></i>Price Breakdown
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ height: "720px", overflowY: "scroll" }}>
      {product.map((product) => (
        <div className="order_card">
          <Order_card
            name={product.name}
            price={product.price}
            duration={product.duration}
            flag={0}
          />
        </div>
      ))}

      <div className="checkout">
        <div className="cost">
          <h6>
            Total: &nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-rupee-sign    "></i>
            5460 &nbsp;&nbsp;|&nbsp;&nbsp; Delivery by 21 September{" "}
            <i class="fa fa-truck" aria-hidden="true"></i>
          </h6>
        </div>
        <div class="cost_mobile">
          <h6>
            Total: &nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-rupee-sign    "></i>
            5460 <br></br> Delivery by 21 September{" "}
            <i class="fa fa-truck" aria-hidden="true"></i>
          </h6>
        </div>

        <div className="checkout_button">
          <button>Place Order</button>
        </div>
      </div>
      {saveForLater.map((saveForLater) => (
        <div className="order_card">
          <Order_card
            name={saveForLater.name}
            price={saveForLater.price}
            duration={saveForLater.duration}
            flag={-1}
          />
        </div>
      ))}
    </div>
  );
}

  
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

  const Home = () => (
    <div className="useroptMobile">
      <div className="user_detail">
        <div className="first">
          <div>
            <img class="user_icon" src={dummyprofile} aria-hidden="true" />
          </div>
          <div className="user_name">{user[0]["value"]}</div>
          <div className="userlocation">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>Mumbai</p>
          </div>
        </div>
        <div className="second">
          <div className="mail">
            <h4>{user[1]["value"]}</h4>
            <h4>{user[2]["value"]}</h4>
          </div>
          <div className="marker">
            <Link to="/settings">
              <a>
                <img id="pencil" src={pencil}></img>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="details">
        {iconDesc.map((item, index) => {
          return (
            <div>
              <DetailsCard index={index} />
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <Link to="/">
          <i className="fas fa-sign-out-alt" /> Log Out
        </Link>
        <a href="/terms&conditions">Terms & Conditions</a>
        <a href="/shippingpolicy">Shipping Policy</a>
        <a href="/privacypolicy">Privacy Policy</a>
        <a href="/termsofuse">Terms of Use</a>
      </div>
    </div>
  );
  return (
    <>
      <Floatnav className="floatnav" />
      <Head />
      <div className="dashboard">
        <div className="useropt">
          <div className="user_detail">
            <div className="first">
              <div>
                <img
                  class="user_icon"
                  src={dummyprofile}
                  aria-hidden="true"
                ></img>
              </div>
              <div className="user_name">{user[0]["value"]}</div>
              <div className="userlocation">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <p>Mumbai</p>
              </div>
            </div>
            <div className="second">
              <div className="mail">
                <h4>{user[1]["value"]}</h4>
                <h4>{user[2]["value"]}</h4>
              </div>
              
            </div>
          </div>
          <div className="details">
            {iconDesc.map((item, index) => {
              return (
                <div>
                  <DetailsCard index={index} />
                </div>
              );
            })}
          </div>
          <div className="buttons">
            <Link to="/">
              <i className="fas fa-sign-out-alt" /> Log Out
            </Link>
            <a href="/terms&conditions">Terms & Conditions</a>
            <a href="/shippingpolicy">Shipping Policy</a>
            <a href="/privacypolicy">Privacy Policy</a>
            <a href="/termsofuse">Terms of Use</a>
          </div>
        </div>

        <div class="right_screen">
          <div class="userdash">
            <div class="userdash_header">
              <p style={{ marginTop: "5px" }}>
                Home &gt; My Account &gt;
                <span style={{ color: "#1bacf4" }}> {iconDesc[index]}</span>
              </p>
              {index === 2 ? (
                <div className="mylisting__button_div">
                  <Button
                    className="mylisting__button"
                    onClick={() => setaddModalshow(true)}
                  >
                    ADD +
                  </Button>
                  <DotsMobileStepper
                    show={addModalshow}
                    onHide={() => setaddModalshow(false)}
                  />
                </div>
              ) : null}
              {index === 3 ? (
                <p
                  style={{
                    marginTop: "5px",
                    color: "#0B90D3",
                    marginLeft: "auto",
                    marginRight: "0px",
                  }}
                >
                  Verification status: 100%
                </p>
              ) : null}
            </div>
          </div>
          {index === -1 ? (
            <Home />
          ) : (
            <div className="userdashMobile">
              <div class="userdash_header">
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <i className="fas fa-chevron-left fa-xs"></i>
                </Link>
                <p style={{ margin: "0px auto" }}>{iconDesc[index]}</p>
              </div>
            </div>
          )}
          {index === 2 ? <MyListing /> : null}
          {index === 0 ? <MyBag /> : null}
          {index === 3 ? <Verification /> : null}
          {index === 3 ? <MobileVerification /> : null}
          {index === 4 ? <Support /> : null}
          {index === 5 ? <Settings user={user} setuser={setuser} /> : null}
          {index === 1 ? <Rentals /> : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(UserDash);

