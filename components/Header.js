import React, { Component, Fragment } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import "../styles/header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="header-container flex" style={{ alignItems: "center" }}>
          <div className="home-icon">
            <Link href="#">
              <a className="h1 link">Stamp</a>
            </Link>
          </div>
          <nav className="navbar flex-auto col-8 center">
            <Link href="#">
              <a className="link nav-link h3">About</a>
            </Link>
            <Link href="#">
              <a className="link nav-link h3">Integrations</a>
            </Link>
            <Link href="#">
              <a className="link nav-link h3">Pricing</a>
            </Link>
            <Link href="#">
              <a className="link nav-link h3">Contacts</a>
            </Link>
          </nav>
          <div className="menu-icon">
            <FaBars className="link right pointer" size="1.5em" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
