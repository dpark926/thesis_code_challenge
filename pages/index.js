import React, { Component, Fragment } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/styles.scss";
import HeroImg from "../assets/hero-img.png";

class index extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="index z2">
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default index;
