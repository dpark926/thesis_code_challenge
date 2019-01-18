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
              <a className="h1 link" rel="canonical">
                Stamp
              </a>
            </Link>
          </div>
          <nav className="navbar flex-auto col-8 center">
            <Link href="#">
              <a className="link nav-link h3" rel="canonical">
                About
              </a>
            </Link>
            <Link href="#">
              <a className="link nav-link h3" rel="canonical">
                Integrations
              </a>
            </Link>
            <Link href="#">
              <a className="link nav-link h3" rel="canonical">
                Pricing
              </a>
            </Link>
            <Link href="#">
              <a className="link nav-link h3" rel="canonical">
                Contacts
              </a>
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
