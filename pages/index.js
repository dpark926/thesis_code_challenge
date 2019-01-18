import React, { Component, Fragment } from "react";
import Head from "next/head";
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
        <Head>
          <title>Thesis + Daniel = Awesomeness!</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, viewport-fit=cover"
          />
        </Head>
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default index;
