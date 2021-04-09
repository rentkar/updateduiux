import React, { Component, useState, useContext, useEffect } from "react";
import ProductCard4 from "./ProductCard4";
import guitar from "../images/guitar2.png";
import search_boy from "../images/search_boy.png";
import { fetchProducts, fetchUsers, fetchProductDetail} from '../config'
import {Link} from 'react-router-dom'
// import './category.css';

import { Card, Image } from "semantic-ui-react";

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

import selectedcamera from "../images/icons/catogories-40.png";

import selectedgaming from "../images/icons/catogories-49.png";

import arrow from "../images/arrow.jpeg";

import "./category.css";
  

const categories = ["MUSIC", "GAMING", "LAPTOP", "PHOTOGRAPHY"];
const sub = [
  [
    "GUITAR",
    "KEYBOARD",
    "PERCUSSION",
    "RECORDING",
    "AMPLIFIER",
    "GROOVE",
    "WIND"
  ],
  ["PACKAGES", "PC GAMING", "CONSOLE", "ACCESSORIES"],
  ["GAMING", "i3", "i5", "i7", "MACBOOK", "PC", "TABLET"],
  ["CAMERA", "FILTERS", "LENS", "LIGHTS", "RECORDING", "RIGS"]
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

export const Category = (props) => {
  const [category, setcategory] = useState(props.index ? props.index : 0);
  const [subb, setsubb] = useState(
    props.index_product ? props.index_product : 0
  );
  // sub: 0,
  console.log(props.index);
const [ p, setP ] = useState( [] )
    useEffect(() => {
    const fetchAPI = async () => {
      setP( await fetchProducts() );
    };
     fetchAPI();
    }, [] );
  
  
  useEffect(() => {
    // return () => {
    document.getElementById("sub" + subb.toString()).style.opacity = "1";
    // }
  }, [sub]);

  const subSelect = (index) => {
    for (var i = 0; i < sub[category].length; i++) {
      if (i === index)
        document.getElementById("sub" + index.toString()).style.opacity = "1";
      else document.getElementById("sub" + i.toString()).style.opacity = "0";
    }
    // setState({
    setsubb(index);

    console.log(index);
    console.log(subb);
  };

  const categorySelect = (index) => {
    subSelect(0);
    // setState((prevState) => {
    //     return {
    //         category: index,
    //         sub: 0,
    //     };
    // });
    setcategory(index);
    setsubb(0);
  };

  const SubCard = ({ index }) => (
    <Card
      className="subCard"
      onClick={() => {
        subSelect(index);
      }}
    >
      <Card.Content>
        <Image
          src={
            subb === index ? selectedImg[category][index] : img[category][index]
          }
          wrapped
          ui={false}
        />
        <p>{sub[category][index]}</p>
      </Card.Content>
    </Card>
  );
  
  
  return (
    <div className="category_overview">
      <div className="staticContent sticky">
        <div className="categorizeHead">
          <div className="pagePath">
            <p style={{ marginTop: "5px" }}>
              HOME &gt; {categories[category]} &gt; {sub[category][subb]}
            </p>
          </div>
          <div className="categoriesBackground">
            <div className="categories">
              
              <button
                id="musicButton"
                className={category === 0 ? "selectedButton" : "categoryButton"}
                onClick={() => {
                  categorySelect(0);
                }}
              >
                {categories[0].toUpperCase()}
              </button>
              <button
                id="gamingButton"
                className={category === 1 ? "selectedButton" : "categoryButton"}
                onClick={() => {
                  categorySelect(1);
                }}
              >
                {categories[1].toUpperCase()}
              </button>
              <button
                id="laptopButton"
                className={category === 2 ? "selectedButton" : "categoryButton"}
                onClick={() => {
                  categorySelect(2);
                }}
              >
                {categories[2].toUpperCase()}
              </button>
              <button
                id="photographyButton"
                className={category === 3 ? "selectedButton" : "categoryButton"}
                onClick={() => {
                  categorySelect(3);
                }}
              >
                {categories[3].toUpperCase()}
              </button>
            </div>
            {/*      { p.map(( item ) => {
                return (
                  <div>
                    <p>{ item.category }</p>
                    </div>
                )
                        } ) }  */}

            
          </div>
          
          <div className="subCategoriesBackground">
            <div className="subCategories">
              {sub[category].map((item, index) => {
                return (
                  <div>
                    <SubCard index={index} />
                    <hr className="subLine" id={"sub" + index.toString()} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="scrollContent">
        <div className="product_overview">
          <div className="category">
            { p.filter( p => p.subcategory === sub[category][subb] ).map( item => (
            <ProductCard4
						link={ `/product/${ item._id }` }
						name={ item.productName } startingprice={ item.pricing[ 0 ].price } bg={ `https://backendrentkar.herokuapp.com${ item.img }` } />
            ))}
          </div>
        </div>
        <div className="search_boy_with_input">
          <div className="search_boy_header">
            <h1>DIDN'T FIND WHAT YOU ARE LOOKING FOR ?</h1>
          </div>
          <div className="search_boy">
            <img src={search_boy} />
          </div>
          <div className="search_boy_input">
            <input placeholder="Drop your queries here"></input>
            <button id="category_last_but" className="selectedButton">
              Submit
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
