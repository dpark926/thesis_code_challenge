import React, { Component, Fragment } from "react";
import Link from "next/link";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <footer className="flex py2 px4" style={{ alignItems: "center" }}>
        <p>©2016 Stamp. All Rights Reserved</p>
        <nav className="flex-auto right-align">
          <Link href="#">
            <a className="link h4 p2 mx1">CONTACT</a>
          </Link>
          <Link href="#">
            <a className="link h4 p2 mx1">HELP</a>
          </Link>
          <Link href="#">
            <a className="link h4 p2 mx1">TERMS OF USE</a>
          </Link>
          <Link href="#">
            <a className="link h4 p2 mx1">PRIVACY POLICY</a>
          </Link>
        </nav>
      </footer>
    );
  }
}

export default Footer;
