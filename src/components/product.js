import React, {Component, useState, useEffect } from 'react'
import {fetchProductDetail,  fetchProductBoxDetail, fetchProductPricingDetail, fetchProductImagesDetail, fetchProductSpecsDetail} from '../config'
import { useParams } from "react-router";
import "./product.css";
import { Row, Col, Button, ButtonGroup, Modal } from "react-bootstrap";
import Calender from "react-calendar";

function CModal(props) {
  const [ date, setDate ] = useState( new Date() );
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Calender value={date} onChange={(e) => setDate(e.target.value)} />
      </Modal.Body>
    </Modal>
  );
}
export default function Product() {
    let {_id} = useParams()
  const [ pd, setpd ] = useState( [] )
  const [ pdb, setpdb ] = useState( [] )
  const [ pdp, setpdp ] = useState( [] )
  const [ pds, setpds ] = useState( [] )
  const [pdi, setpdi] = useState([])
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
  
  const [show, setShow] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [pickupDate, setPickupDate] = useState(new Date());
  return (
    <div>
      <Row className="px-3 py-3">
        <Col md={8}></Col>
        <Col md={4} className="mr-auto">
          <h3 style={{ textAlign: "left" }} className="">
            { pd.productname }
          </h3>
          <p style={{ textAlign: "left" }} className="py-2">
            Select your package
          </p>
          <div className="">
            <Row>
              { pdp.map( ( item, i ) =>
              {
                return (
                  <div>
                    <Col md={ 3 }>
                      <Button
                  className="select-package-button"
                  variant="outline-dark"
                  type="button"
                  block
                >
                  <div>
                    <p>{item.duration}</p>
                    <p className="package-rent">{item.price}/day</p>
                  </div>
                </Button>
                    </Col>
                  </div>
                )
              })}
              <Col md={6}>
                <Button
                  className="select-package-button"
                  variant="outline-dark"
                  type="button"
                  block
                >
                  <div>
                    <p>1 Day</p>
                    <p className="package-rent">Rs. XXX/day</p>
                  </div>
                </Button>
                <Button
                  className="select-package-button"
                  variant="outline-dark"
                  type="button"
                  block
                >
                  <div>
                    <p>1 Month</p>
                    <p className="package-rent">Rs. XXX/day</p>
                  </div>
                </Button>
                <Button
                  className="select-package-button"
                  variant="outline-dark"
                  type="button"
                  block
                >
                  <div>
                    <p>1 Month</p>
                    <p className="package-rent">Rs. XXX/day</p>
                  </div>
                </Button>
              </Col>
              <Col md={6}>
                <Button
                  className="select-package-button"
                  variant="outline-dark"
                  type="button"
                  block
                >
                  <div>
                    <p>1 Week</p>
                    <p className="package-rent">Rs. XXX/day</p>
                  </div>
                </Button>
                <Button
                  className="select-package-button"
                  variant="outline-dark"
                  type="button"
                  block
                >
                  <div>
                    <p>1 Year</p>
                    <p className="package-rent">Rs. XXX/day</p>
                  </div>
                </Button>
                <Button
                  className="select-package-button"
                  variant="outline-dark"
                  type="button"
                  block
                >
                  <div>
                    <p>1 Year</p>
                    <p className="package-rent">Rs. XXX/day</p>
                  </div>
                </Button>
              </Col>
            </Row>
          </div>
          <div>
            <p style={{ textAlign: "left" }} className="py-3">
              Select your package
            </p>
            <Row>
              <Col md={6}>
                <Button
                  className="package-button"
                  variant="outline-dark"
                  type="button"
                >
                  <p className="text-center py-2">Add game</p>
                </Button>
              </Col>
              <Col md={6}>
                <Button
                  className="package-button"
                  variant="outline-dark"
                  type="button"
                >
                  <p className="text-center py-2">Add game</p>
                </Button>
              </Col>
            </Row>
          </div>
          <div>
            <p style={{ textAlign: "left" }} className="py-3">
              Select your package
            </p>
            <Row>
              <Col md={4}>
                <Button
                  className="package-button"
                  variant="outline-dark"
                  type="button"
                >
                  <p className="text-center py-2">Add game</p>
                </Button>
              </Col>
              <Col md={4}>
                <Button
                  className="package-button"
                  variant="outline-dark"
                  type="button"
                >
                  <p className="text-center py-2">Add game</p>
                </Button>
              </Col>
              <Col md={4}>
                <Button
                  className="package-button"
                  variant="outline-dark"
                  type="button"
                >
                  <p className="text-center py-2">Add game</p>
                </Button>
              </Col>
            </Row>
          </div>
          <div>
            <p style={{ textAlign: "left" }} className="py-3">
              Enter delivery & pickup dates
            </p>
            <ButtonGroup style={{ width: "100%" }}>
              <Button
                onClick={() => setShow(true)}
                variant="outline-dark"
                className="px-4"
                style={{ fontWeight: "bold" }}
              >
                Delivery date <i className="fas fa-arrow-right"></i>
              </Button>
              <CModal show={show} onHide={() => setShow(false)} />
              <Button
                variant="outline-dark"
                className="px-4"
                style={{ fontWeight: "bold" }}
              >
                Pickup date <i className="fas fa-arrow-right"></i>
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <p style={{ textAlign: "left" }} className="py-3">
              Product Summary
            </p>
            <Row>
              <Col md={6}>
                <p className="my-2 product-summary">PS4 + Controller</p>
                <p className="product-summary">Games</p>
                <p className="my-2 product-summary">Controller</p>
                <p className="product-summary">Coupon</p>
              </Col>
              <Col md={6}>
                <p className="my-2 product-summary-price">+ RS.XXX</p>
                <p className="product-summary-price">+ RS.XXX</p>
                <p className="my-2 product-summary-price">+ RS.XXX</p>
                <p className="product-summary-price">+ RS.XXX</p>
              </Col>
            </Row>
            <p className="total-price">Total : Rs. XXXX</p>
            <p className="tax">Inclusive of all taxes</p>
            <Row>
              <Col md={6}>
                <Button className="coupon py-2" variant="success" type="button">
                  Coupon Applied
                </Button>
              </Col>
              <Col md={6}>
                <Button
                  variant="primary"
                  className="place-order"
                  size="lg"
                  type="button"
                >
                  Place Order
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}