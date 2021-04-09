import React, { Component, useState } from "react";
import { Card, Icon, Feed, Image, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomerCarousel from "./CustomerCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCarousel2 from "./ProductCarousel2";
import { DotsMobileStepper } from "./ListItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Covid from "./Covid";
import "./body.css";

import musical from "../images/musical.jpg";
import gaming from "../images/gaming.jpg";
import guitar from "../images/guitar.png";
import share from "../images/share.png";
import icon1 from "../images/changes_icon-01.png";
import icon2 from "../images/changes_icon-02.png";
import icon3 from "../images/changes_icon-03.png";
import icon4 from "../images/changes_icon-04-2.png";
import icon5 from "../images/changes_icon-05.png";
import cust1 from "../images/cust1.png";
import cust2 from "../images/cust2.png";
import wave from "../images/wave.png";

import knowmore from "./Know_more";
import category1 from "../images/category1.png";
import category2 from "../images/category2.png";
import category3 from "../images/category3.png";
import category4 from "../images/category4.png";
import selectedCategory1 from "../images/selectedCategory1.png";
import selectedCategory2 from "../images/selectedCategory2.png";
import selectedCategory3 from "../images/selectedCategory3.png";
import selectedCategory4 from "../images/selectedCategory4.png";
import ProductCard from "./ProductCard";
import ProductCarousel from "./ProductCarousel";

import gam_con_sel from "../images/icons2/icons/GAMING/console gradient.png";
import gam_con from "../images/icons2/icons/GAMING/console grey.png";
import ps4_sel from "../images/icons2/icons/GAMING/games gradient.png";
import ps4 from "../images/icons2/icons/GAMING/games grey.png";
import packag_sel from "../images/icons2/icons/GAMING/packages colour.png";
import packag from "../images/icons2/icons/GAMING/packages grey.png";
import pc_sel from "../images/icons2/icons/GAMING/pc gradient.png";
import pc from "../images/icons2/icons/GAMING/pc grey.png";
import access_sel from "../images/icons2/icons/GAMING/accesories colour.png";
import access from "../images/icons2/icons/GAMING/accesories grey.png";

import guitar_sel from "../images/icons2/icons/MUSIC/GUITAR GRADIENT.png";
import key_sel from "../images/icons2/icons/MUSIC/keyboard volour.png";
import per_sel from "../images/icons2/icons/MUSIC/percussion colour.png";
import rec_sel from "../images/icons2/icons/MUSIC/recording colour.png";
import amp_sel from "../images/icons2/icons/MUSIC/amplifier colour.png";
import groove_sel from "../images/icons2/icons/MUSIC/groove colour.png";
import wind_sel from "../images/icons2/icons/MUSIC/wind color.png";

import guitar_grey from "../images/icons2/icons/MUSIC/GUITAR GREY.png";
import key from "../images/icons2/icons/MUSIC/keyboard grey.png";
import per from "../images/icons2/icons/MUSIC/percussion grey.png";
import rec from "../images/icons2/icons/MUSIC/recording grey.png";
// "../images/icons2/icons/MUSIC/GUITAR GREY.png",
import amp from "../images/icons2/icons/MUSIC/amplifier grey.png";
import groove from "../images/icons2/icons/MUSIC/groove.png";
import wind from "../images/icons2/icons/MUSIC/wind grey.png";

// game
import l1s from "../images/icons2/icons/laptop/gaming colour.png";
import l2s from "../images/icons2/icons/laptop/i3colour.png";
import l3s from "../images/icons2/icons/laptop/i5 colour.png";
import l4s from "../images/icons2/icons/laptop/i7 colour.png";
import l5s from "../images/icons2/icons/laptop/macbook colour.png";
import l6s from "../images/icons2/icons/laptop/pc colour.png";
import l7s from "../images/icons2/icons/laptop/tablet color.png";

import l1 from "../images/icons2/icons/laptop/gaming grey.png";
import l2 from "../images/icons2/icons/laptop/i3 grey.png";
import l3 from "../images/icons2/icons/laptop/i5 grey.png";
import l4 from "../images/icons2/icons/laptop/i7 grey.png";
import l5 from "../images/icons2/icons/laptop/macbook grey.png";
import l6 from "../images/icons2/icons/laptop/pc grey.png";
import l7 from "../images/icons2/icons/laptop/tablet grey.png";

import c1s from "../images/icons2/icons/photography/camera colour.png";
import c2s from "../images/icons2/icons/photography/filters.png";
import c3s from "../images/icons2/icons/photography/lense color.png";
import c4s from "../images/icons2/icons/photography/lights colour.png";
import c5s from "../images/icons2/icons/photography/recording colour.png";
import c6s from "../images/icons2/icons/photography/rigs color.png";

import c1 from "../images/icons2/icons/photography/camera grey.png";
import c2 from "../images/icons2/icons/photography/filters grey.png";
import c3 from "../images/icons2/icons/photography/lens grey.png";
import c4 from "../images/icons2/icons/photography/lights grey.png";
import c5 from "../images/icons2/icons/photography/recording.png";
import c6 from "../images/icons2/icons/photography/rigs grey.png";
import ProductCarousel3 from './productcarousel3'
const categories = ["Music", "Gaming", "Laptop", "Photography"];
const sub = [
  [
    "Guitar",
    "Keyboard",
    "Percussion",
    "Recording",
    "Amplifier",
    "Groove",
    "Wind"
  ],
  ["Packages", "PC Gaming", "Console", "Accessories"],
  ["Gaming", "i3", "i5", "i7", "Macbook", "PC", "Tablet"],
  ["Camera", "Filters", "Lens", "Lights", "Recording", "Rigs"]
];
const img = [
  [guitar_grey, key, per, rec, amp, groove, wind],
  [packag, pc, gam_con, access],
  [l1, l2, l3, l4, l5, l6, l7],

  [c1, c2, c3, c4, c5, c6]
];
const selectedImg = [
  [guitar_sel, key_sel, per_sel, rec_sel, amp_sel, groove_sel, wind_sel],

  [packag_sel, pc_sel, gam_con_sel, access_sel],
  [l1s, l2s, l3s, l4s, l5s, l6s, l7s],
  [c1s, c2s, c3s, c4s, c5s, c6s]
];

export class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalshow: false,
      category: 0,
      sub: 0
    };
  }

  componentDidMount() {
    document.getElementById("sub0").style.opacity = "1";
  }

  subSelect(index) {
    for (var i = 0; i < sub[this.state.category].length; i++) {
      if (i === index)
        document.getElementById("sub" + index.toString()).style.opacity = "1";
      else document.getElementById("sub" + i.toString()).style.opacity = "0";
    }
    this.setState({
      sub: index
    });
    console.log(index);
    console.log(this.state.sub);
  }

  categorySelect(index) {
    this.subSelect(0);
    this.setState((prevState) => {
      return {
        category: index,
        sub: 0
      };
    });
  }

  render() {
    //
    let addModalclose = () => {
      this.setState({ addModalshow: false });
    };

    // const goLeft = () => {
    //     setX(x + 100);
    // };
    // const goRight = () => {
    //     setX(x - 100);
    // };

    const SubCard = ({ index }) => (
      <Card
        className="subCard"
        onClick={() => {
          this.subSelect(index);
        }}
      >
        <Card.Content>
          <Image
            src={
              this.state.sub === index
                ? selectedImg[this.state.category][index]
                : img[this.state.category][index]
            }
            wrapped
            ui={false}
          />
          <p>{sub[this.state.category][index]}</p>
        </Card.Content>
      </Card>
    );

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2.5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const left_but = {
      backgroundColor: "#e4e4e4",
      padding: "5px 10px",
      borderRadius: "20px",
      margin: "2vw",
    };

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
      const {
        carouselState: { currentSlide }
      } = rest;
      return (
        <div
          className="carousel-button-group"
          style={{
            marginLeft: `40vw`,
            PaddingBottom: `20vh`
          }}
        >
          <a style={left_but} onClick={() => previous()}>
            <i class="fas fa-chevron-left"></i>
          </a>
          <a style={left_but} onClick={() => next()}>
            <i class=""></i>
          </a>
        </div>
      );
    };

    return (
      <div className="homeBody">
        {/*	<div className='covid'>
					<div>
						<img src={imgcovid} />
					</div>
					<div className='covid_text'>
						<h4>Safety precaution during COVID-19</h4>
						<p>
							We are taking additional steps and precautionary measures to
							protect our community from COVID-19
						</p>
						<button id='button_knowmore'>Know more</button>
					</div>
					<div className='card'>
						<div className='card1'>
							<img src={sanitise} />
							<div>
								<h5>Sanitised Products</h5>
								<h7 id='alag'>
									Know more <i class='fas fa-chevron-circle-right'></i>
								</h7>
							</div>
						</div>
						<div className='card2'>
							<img src={hygienic} />
							<div>
								<h5>Hygienic deliveries</h5>
								<h7 id='alag'>
									Know more <i class='fas fa-chevron-circle-right'></i>
								</h7>
							</div>
		
					</div>
				</div>
				</div> */}
        <Covid />
        <div className="list">
          <div className="Heading">
            <h1>EXPLORE CATEGORIES</h1>
          </div>
          <div className="categoriesBackground">
            <div className="categories">
              <button
                id="musicButton"
                className={
                  this.state.category === 0 ? "selectedButton" : "categoryButton"
                }
                onClick={() => {
                  this.categorySelect(0);
                }}
              >
                {categories[0].toUpperCase()}
              </button>
              <button
                id="gamingButton"
                className={
                  this.state.category === 1 ? "selectedButton" : "categoryButton"
                }
                onClick={() => {
                  this.categorySelect(1);
                }}
              >
                {categories[1].toUpperCase()}
              </button>

              <button
                id="laptopButton"
                className={
                  this.state.category === 2
                    ? "selectedButton"
                    : "categoryButton"
                }
                onClick={() => {
                  this.categorySelect(2);
                }}
              >
                {categories[2].toUpperCase()}
              </button>

              <button
                id="photographyButton"
                className={
                  this.state.category === 3
                    ? "selectedButton"
                    : "categoryButton"
                }
                onClick={() => {
                  this.categorySelect(3);
                }}
              >
                {categories[3].toUpperCase()}
              </button>
            </div>
          </div>
          <div className="subCategoriesBackground">
            <div className="subCategories">
              {sub[this.state.category].map((item, index) => {
                return (
                  <div>
                    <Link
                      to={{
                        pathname: "/category",
                        index_product: index,
                        index: this.state.category
                      }}
                    >
                      <SubCard index={index} />
                      <hr className="subLine" id={"sub" + index.toString()} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className='category'>
                        <div className='catcard'>
                            <Card className='ccard'>
                                <Image src={gaming} wrapped ui={false} />
                                <Card.Content
                                    className='cathead'>
                                    <Card.Header>GAMING</Card.Header>
                                </Card.Content>
                            </Card>
                        </div>
                        <div className='catcard'>
                            <Card className='ccard'>
                                <Image src={musical} wrapped ui={false} />
                                <Card.Content className='cathead'>
                                    <Card.Header >MUSICAL</Card.Header>
                                </Card.Content>
                            </Card>
                        </div>
                    </div> */}
        </div>
        <div className="list2">
          <div className="Heading">
            <h1>WHAT'S HOT?</h1>
          </div>

          {/* <div className='category'>
						<ProductCarousel />
					</div>
          <div className="category">
            <ProductCarousel2 />
          </div>
           */}
          
          <div className='category'>
            <ProductCarousel3 />
          </div>
        </div>
        <div className="new">
          <div className="Heading">
            <h1>NEW PRODUCTS</h1>
          </div>

          {/* <div className='category'>
						<ProductCarousel />
					</div> */}
          <div className="category">
            <ProductCarousel3 />
          </div>
        </div>
        <div className="list3">
          <div className="final">
            <div className="para">
              <div className='listyouritem'>
                <h1>LIST YOUR ITEM</h1>
              </div>
              <div>
                <h4>We help you share</h4>
                <p>
                  Join our community of lenders sharing their products all
                  around the city.We help you with delivery,pick up and total
                  security of your peoducts
                </p>
                <div className="button" id="in_pc_mode">
                  <Link to="/knowmore">
                    <Button className="button1">Learn more</Button>
                  </Link>
                  <Button
                    className="button2"
                    onClick={() => this.setState({ addModalshow: true })}
                  >
                    List an item
                  </Button>
                  <DotsMobileStepper
                    show={this.state.addModalshow}
                    onHide={addModalclose}
                  />
                </div>
              </div>
            </div>
            <div>
              <img src={share}></img>
            </div>
            <div className="button" id="in_mobile_mode">
              <Link to="/knowmore">
                <Button className="button1">Learn more</Button>
              </Link>
              <Button
                className="button2"
                onClick={() => this.setState({ addModalshow: true })}
              >
                List an item
              </Button>
              <DotsMobileStepper
                show={this.state.addModalshow}
                onHide={addModalclose}
              />
            </div>
          </div>
        </div>
        {/*<div className='list4'>
					<div className='final'>
						<div className='para'>
							<div>
								<h1>START EARNING NOW</h1>
							</div>
							<div>
								<h4>Earn from the products shared securely around the city</h4>
							</div>
							<div className='button_with_para'>
								<div>
									<p>
										Also get 100 INR Share credit on listing each item and 250
										INR Share Credit on getting your friend on board to list
										their items
									</p>
								</div>
								<div className='button'>
									<Button className='button1'>Start Earning </Button>
									<Button className='button2'>Learn more</Button>
								</div>
							</div>
						</div>
					</div>
				</div>*/}
        <div className="promiseBackground">
          <div className="promise">
            <div>
              <h4 className="title">OUR PROMISES</h4>
            </div>
            <div className="parts">
              <div>
                <Card className="same_card">
                  <img className="logos" src={icon1} wrapped ui={false} />
                  <Card.Content className="cathead">
                    <Card.Header>
                      <h4>No Security Deposit</h4>
                    </Card.Header>
                    <Card.Description>
                      <p>Rent is the only fee you pay</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </div>
              <div>
                <Card className="same_card">
                  <img className="logos" src={icon2} wrapped ui={false} />
                  <Card.Content className="cathead">
                    <Card.Header>
                      <h4>No Security Deposit</h4>
                    </Card.Header>
                    <Card.Description>
                      <p>Rent is the only fee you pay</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </div>
              <div>
                <Card className="same_card">
                  <img className="logos" src={icon3} wrapped ui={false} />
                  <Card.Content className="cathead">
                    <Card.Header>
                      <h4>Spend less, Explore more</h4>
                    </Card.Header>
                    <Card.Description>
                      <p>Rent is the only fee you pay</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </div>
              <div>
                <Card className="same_card">
                  <img className="logos" src={icon4} wrapped ui={false} />
                  <Card.Content className="cathead">
                    <Card.Header>
                      <h4>Share & Earn</h4>
                    </Card.Header>
                    <Card.Description>
                      <p>Rent is the only fee you pay</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </div>
              <div>
                <Card className="same_card">
                  <img className="logos" src={icon5} wrapped ui={false} />
                  <Card.Content className="cathead">
                    <Card.Header>
                      <h4>Live Lighter</h4>
                    </Card.Header>
                    <Card.Description>
                      <p>Rent is the only fee you pay</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="customers">
          <div className="custom">
            <div className="special">
              <h4>NOTE FROM OUR HAPPY CUSTOMER</h4>
            </div>
            <div className="customer_carousel">
              <CustomerCarousel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
