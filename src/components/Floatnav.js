import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { abouto } from "../images/float_nav/abouto.png";
import { aboutf } from "../images/float_nav/aboutf.png";

import { bagf } from "../images/float_nav/bagf.png";
import { bago } from "../images/float_nav/bago.png";

import { homeo } from "../images/float_nav/homeo.png";
import { homef } from "../images/float_nav/homef.png";

import { searcho } from "../images/float_nav/searcho.png";
import { searchf } from "../images/float_nav/searchf.png";

import "./Float.css";

export class Floatnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: require("../images/float_nav/homef.png"),
      search: require("../images/float_nav/searcho.png"),
      bag: require("../images/float_nav/bago.png"),
      about: require("../images/float_nav/abouto.png")
    };
  }

  onHome = (e) => {
    this.setState({ home: require("../images/float_nav/homef.png") });
    this.setState({ bag: require("../images/float_nav/bago.png") });
    this.setState({ about: require("../images/float_nav/abouto.png") });
    this.setState({ search: require("../images/float_nav/searcho.png") });
  };
  onSearch = (e) => {
    this.setState({ home: require("../images/float_nav/homeo.png") });
    this.setState({ bag: require("../images/float_nav/bago.png") });
    this.setState({ about: require("../images/float_nav/abouto.png") });
    this.setState({ search: require("../images/float_nav/searchf.png") });
  };
  onBag = (e) => {
    this.setState({ home: require("../images/float_nav/homeo.png") });
    this.setState({ bag: require("../images/float_nav/bagf.png") });
    this.setState({ about: require("../images/float_nav/abouto.png") });
    this.setState({ search: require("../images/float_nav/searcho.png") });
  };
  onAbout = (e) => {
    this.setState({ home: require("../images/float_nav/homeo.png") });
    this.setState({ bag: require("../images/float_nav/bago.png") });
    this.setState({ about: require("../images/float_nav/aboutf.png") });
    this.setState({ search: require("../images/float_nav/searcho.png") });
  };

  render() {
    return (
      <div className="floatnav">
        <div className="mtop">
          <nav className="fixed-bottom text-center dark customnav">
            <div className="d-flex justify-content-between">
              <div className="container" id="home_float" onClick={this.onHome}>
                <Link to="/">
                  <img src={this.state.home} className="img-thumbnail" />
                </Link>
              </div>
              <div className="container" onClick={ this.onSearch }>
                  <Link to="/mybag">
                  <img src={ this.state.search } className="img-thumbnail" />
                  </Link>
              </div>
              <div className="container" onClick={this.onBag}>
                <Link to="/category">
                  <img src={this.state.bag} className="img-thumbnail" />
                </Link>
              </div>
              <div className="container" onClick={this.onAbout}>
                <Link to="/home">
                  <img src={this.state.about} className="img-thumbnail" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Floatnav;
