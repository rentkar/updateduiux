import React, { useState, useEffect } from "react";
import {
  fetchProductDetail,
  fetchProductBoxDetail,
  fetchProductPricingDetail,
  fetchProductImagesDetail,
  fetchProductSpecsDetail,
} from "../config";
import { useParams } from "react-router";
import "./ProductPage.css";
import { Card, Image } from "semantic-ui-react";
//import controller from "../images/controller.png";
// import console from '../images/Console.png';
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
//import "react-google-flight-datepicker/dist/main.css";
//import { RangeDatePicker } from "react-google-flight-datepicker";
import { Link } from "react-router-dom";
import ProductCard3 from "./ProductCard3";
import ProductCarousel3 from "./productcarousel3";
import "./body.css";
import add from "../images/add.png";
import { Carousel, Modal, Button } from "react-bootstrap";
import AddGamesModal from "./AddGamesModal";
import {useHistory} from "react-router-dom";

export default function ProductPage(props) {
  const history = useHistory();
  const [up, setup] = useState(true);
  const [gameModalShow1, setGameModalShow1] = useState(false);
  const [gameModalShow2, setGameModalShow2] = useState(false);
  const [ price, setPrice ] = useState( 0 );
  const [newval, setval] = useState()
  const [freeGames, setFreeGames] = useState();
  const [freeGame2, setFreeGame2] = useState();
  let { _id } = useParams();
  const [pd, setpd] = useState([]);
  const [pdb, setpdb] = useState([]);
  const [pdp, setpdp] = useState([]);
  const [pds, setpds] = useState([]);
  const [pdi, setpdi] = useState([]);
  const [startdate, setstartdate] = useState();
  //const [dateDiff, setDateDiff] = useState();
  const [payment, setPayment] = useState("");
  const [isGame1Selected, setIsGame1Selectd] = useState();
  const [isGame2Selected, setIsGame2Selectd] = useState();

  var sgst = (price * 9) / 100;
  var cgst = (price * 9) / 100;
  var total = price + sgst + cgst;

  var val = 0;
  var i=0;
  var m=0, j=0, a=0, b=0, c=0;

  //calculator
  const list1 = [];

  for (i = 1; i < 367; i++) {
    if (i >= 180) {
      val = Math.ceil(pd.price * 0.000031 * i) * 100;
    } else if (i >= 90) {
      val = Math.ceil(pd.price * 0.0000365 * i) * 100;
    } else if (i >= 60) {
      val = Math.ceil(pd.price * 0.000043 * i) * 100;
    } else if (i >= 30) {
      val = Math.ceil(pd.price * 0.000046 * i) * 100;
    } else if (i > 15) {
      j = i - 14;
      for (a = 1; a <= j; a++) {
        val = c + pd.price * a * 0.003;
        // val = m
      }
    } else if (i === 14) {
      val = Math.ceil(pd.price * 0.000065 * i) * 100;
      c = val;
    } else if (i > 7) {
      j = i - 7;
      for (a = 1; a <= j; a++) {
        val = b + pd.price * a * 0.004;
        // val = m
      }
    } else if (i === 7) {
      val = Math.ceil(pd.price * 0.00009 * i) * 100;
      b = val;
    } else if (i > 3) {
      j = i - 3;
      for (a = 1; a <= j; a++) {
        val = m + pd.price * a * 0.009;
        // val = m
      }
    } else if (i === 3) {
      val = Math.ceil(pd.price * 0.000167 * 2 + 0.00002 * pd.price) * 100;
      m = val;
    } else if (i === 2) {
      val = pd.price * 0.0167 * i;
    } else if (i === 1) {
      val = pd.price * 0.02 * i;
    }
    list1.push(val);
  }

  const [day, setday] = useState(0)

  useEffect(() => {
    const fetchAPI = async () => {
      setpd(await fetchProductDetail(_id));
      setpdb(await fetchProductBoxDetail(_id));
      setpdp(await fetchProductPricingDetail(_id));
      setpds(await fetchProductSpecsDetail(_id));
      setpdi( await fetchProductImagesDetail( _id ) );
    };
    fetchAPI();
  }, [ _id ] );
  
  useEffect(() => {
    if(localStorage.getItem("freeGame1") === null) {
      setIsGame1Selectd(false);
    }else if(localStorage.getItem("freeGame1") !== null){
      setIsGame1Selectd(true);
    }

    if(localStorage.getItem("freeGame2") === null) {
      setIsGame2Selectd(false);
    }else if(localStorage.getItem("freeGame2") !== null){
      setIsGame2Selectd(true);
    }
  }, [ freeGames, freeGame2 ] )
  

  const handlePrice = ( event, newVal) =>
  {
    setval(newVal)
    setPrice(newVal.list);
    setday(newVal.days)
  };

  const toggle = () => {
    setup(!up);
  };

  // const onDateChange = (startDate, endDate) => {
  //   setstartdate(startDate.toDateString());
  //   if (endDate) {
  //   //  setenddate(endDate.toDateString());
  //     const diffTime = Math.abs(endDate - startDate);
  //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //     setDateDiff(diffDays);
  //     setPayment(list1[diffDays - 1]);
  //     // console.log(list1[diffDays -1])
  //   }
  //   // setsgst( ( payment * 9 ) / 100 )
  //   // setcgst( ( payment * 9 ) / 100 )
  //   // settotal( payment + cgst + sgst )
  //   // console.log("payment");
  //   // console.log(payment);
  //   // console.log(cgst);
  //   // console.log(sgst);
  //   // console.log(Number(payment));
  // };

  const handelFreeGame = (data) => {
    setFreeGames(JSON.stringify(data));
  };

  const handleDate = ( e ) =>
  {
    setstartdate(e.target.value )
  }
    var enddate = new Date(new Date().setDate(new Date(startdate).getDate() + (day) )).toDateString()

  
  function orderplace(e) {
    // localStorage.setItem("rememberMe", rememberMe);
    // localStorage.setItem("user", rememberMe ? user : "");
    localStorage.setItem("price", price);
    localStorage.setItem("sgst", sgst);
    localStorage.setItem("cgst", cgst);
    localStorage.setItem("total", total);
    history.push("/checkout")
  }


  return (
    <div className="productPage row">
      <div className="left col-lg-9 col--12 order-md-1">
        <div className="product__page__carousel">
          <Carousel>
            {pdi.slice(1, 5).map((item) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`https://backendrentkar.herokuapp.com${item.image}`}
                    alt={`image${item}`}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className="whats__included">
          <h2>What's Included</h2>

          <div className="cards">
            {pdb.map((item, i) => {
              return (
                <Card className="includedCard">
                  <Card.Content>
                    <img
                      src={`https://backendrentkar.herokuapp.com${item.image}`}
                      alt={`image${i}`}
                    />
                    <p>{item.content}</p>
                  </Card.Content>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="whats__included">
          <h2>Specifications</h2>
          <div className="cards">
            {pds.map((item, i) => {
              return (
                <Card className="includedCard">
                  <Card.Content>
                    <img
                      src={`https://backendrentkar.herokuapp.com${item.stype}`}
                      alt={`image${i}`}
                    />
                    <p>{item.spec}</p>
                  </Card.Content>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="description">
          <h2>Description</h2>
          <p>{pd.description}</p>
        </div>
    
        <div className="recommendations">
          <h2>Recommended Products</h2>
          <div className="product__carousel">
            <ProductCarousel3 />
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
        <div className="btn up" onClick={toggle}>
      <p className='book'> Book Now</p>   <i className={up ? "fas fa-chevron-up" : "fas fa-chevron-down"} />
        </div>
        <div className="product__name">
          <h2>{pd.productname}</h2>

          <p className='rating'>
            <i
              className="fas fa-star-half-alt"
              style={{
                color: "#FFC502",
              }}
            />
            4.5
          </p>
        </div>
        <h3 style={{ textAlign: "left" }}>Select Your Package</h3>

        <ToggleButtonGroup
          className="durationPrice"
          value={ newval}
          exclusive
          onChange={handlePrice}
        >
          {/* { pdp.map( ( item, i ) =>
 {
 return (
 <ToggleButton
 className="durationButton col-5"
 value={ item.price }
 >
 <div>
 <p className='duration'>{item.duration}</p>
 <p className='price'>Rs {item.price}/Day</p>
 </div>
 </ToggleButton>
 )
 } ) } */}
          <ToggleButton className="durationButton col-5" value={ { list: list1[ 0] , days:1}}>
            <div>
              <p className="duration">1 Day</p>
              <p className="price">Rs {list1[0]}</p>
            </div>
          </ToggleButton>
          <ToggleButton className="durationButton col-5" value={ { list: list1[ 3 ] , days:3}}>
            <div>
              <p className="duration">3 Days</p>
              <p className="price">Rs {list1[2]}</p>
            </div>
          </ToggleButton>
          <ToggleButton className="durationButton col-5" value={ { list: list1[ 6 ] , days:7}}>
            <div>
              <p className="duration">1 Week</p>
              <p className="price">Rs {list1[6]}</p>
            </div>
          </ToggleButton>
          <ToggleButton className="durationButton col-5" value={ { list: list1[ 29 ] , days:30}}>
            <div>
              <p className="duration">1 Month</p>
              <p className="price">Rs {list1[29]}</p>
            </div>
          </ToggleButton>
          <ToggleButton className="durationButton col-5" value={ { list: list1[ 89 ] , days:90}}>
            <div>
              <p className="duration">3 Months</p>
              <p className="price">Rs {list1[89]}</p>
            </div>
          </ToggleButton>
          <ToggleButton className="durationButton col-5" value={ { list: list1[ 179 ] , days:180}}>
            <div>
              <p className="duration">6 Months</p>
              <p className="price">Rs {list1[179]}</p>
            </div>
          </ToggleButton>
        </ToggleButtonGroup>

                <div className="select__games">
          <h3 style={{ textAlign: "left", margin: "20px" }}>
            Select your 2 free games
          </h3>
          <div className="select__free__games">
            <div
              className="btn btn-outline-dark games"
            >
              <img
              onClick={() => setGameModalShow1(true)}
                src={
                  JSON.parse(localStorage.getItem("freeGame1")) !== null
                    ? JSON.parse(localStorage.getItem("freeGame1")).img
                    : add
                }
              />
              {/* { showFreeBtn1 && <button>X</button> } */}
              {isGame1Selected && <button onClick={() => {
                setFreeGames("");
                localStorage.removeItem("freeGame1")
              }}>X</button>}
              
            </div>
            <div
              className="btn btn-outline-dark games"
              >
              <img
                  onClick={() => setGameModalShow2(true)}
                src={
                  JSON.parse(localStorage.getItem("freeGame2")) !== null
                    ? JSON.parse(localStorage.getItem("freeGame2")).img
                    : add
                }
              />
              {/* { showFreeBtn2 && <button>X</button> } */}
              {isGame2Selected && <button onClick={() => {
                setFreeGame2("");
                localStorage.removeItem("freeGame2")
              }}>X</button>}
            </div>
            <AddGamesModal
              show={gameModalShow1}
              onHide={() => setGameModalShow1(false)}
              onGameChange={(data) => setFreeGames(data)}
              itemNum={1}
            />
            <AddGamesModal
              show={gameModalShow2}
              onHide={() => setGameModalShow2(false)}
              onGameChange={(data) => setFreeGame2(data)}
              itemNum={2}
            />
          </div>
        </div>


        <div className="select__package">
          <h3 style={{ textAlign: "left", margin: "20px" }}>Add Ons</h3>
          <div className="select__your__package">
            <div className="btn btn-outline-dark col-3 packages"></div>
            <div className="btn btn-outline-dark col-3 packages"></div>
            <div className="btn btn-outline-dark col-3 packages"></div>
          </div>
        </div>

        <div className="dateSlot" style={{ marginTop: "50px" }}>
          <h3 style={{ textAlign: "left" }}>Select Delivery Date</h3>
          {/* <RangeDatePicker
            startDate={startdate}
            endDate={enddate}
            minDate={new Date(2020, 1, 1)}
            maxDate={new Date(2220, 1, 1)}
            onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
            startDatePlaceholder="Delivery Date"
            endDatePlaceholder="PickUp Date"
            disabled={false}
            className="datepicker col-3"
            startWeekDay="monday"
          /> */}
          <div className='dates'>
            <input className='date' type='date' onChange={ handleDate } />
            <div className='date__output'>
              <p>{startdate}</p>
              <p> { ( enddate !== 'Invalid Date' ) ? enddate : "" }</p>
              </div>
          </div>
        </div>

        <div className="summary" style={{ marginTop: "50px" }}>
          <h3 style={{ textAlign: "left" }}>Product Summary</h3>
          <div className="product">
            <p>{pd.productname}</p>
            <div className="btn btn-outline-dark">+ Rs {price}</div>
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
                Rs {sgst}
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
                Rs {cgst}
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
            Total : Rs {total}
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
            <button className="col-5"  onClick={(e) => orderplace(e)}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}