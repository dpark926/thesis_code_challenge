import React, { Component, Fragment } from "react";
import Link from "next/link";
import "../styles/footer.scss";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <footer className="flex">
        <p className="nowrap">©2016 Stamp. All Rights Reserved</p>
        <nav className="flex footer-nav flex-auto">
          <div className="flex footer-links-left">
            <Link href="#">
              <a className="link h4 p1 mx1">CONTACT</a>
            </Link>
            <Link href="#">
              <a className="link h4 p1 mx1">HELP</a>
            </Link>
          </div>
          <div className="flex footer-links-right">
            <Link href="#">
              <a className="link h4 p1 mx1">TERMS OF USE</a>
            </Link>
            <Link href="#">
              <a className="link h4 p1 mx1">PRIVACY POLICY</a>
            </Link>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Footer;
