import React, { Component, Fragment } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/styles.scss";

class index extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default index;
