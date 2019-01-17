import React, { Component, Fragment } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="flex py2 px4" style={{ alignItems: "center" }}>
          <div className="col-2">
            <Link href="#">
              <a className="h1 link">Stamp</a>
            </Link>
          </div>
          <nav className="flex-auto col-8 center">
            <Link href="#">
              <a className="link nav-link h3 p2 mx1">About</a>
            </Link>
            <Link href="#">
              <a className="link nav-link h3 p2 mx1">Integrations</a>
            </Link>
            <Link href="#">
              <a className="link nav-link h3 p2 mx1">Pricing</a>
            </Link>
            <Link href="#">
              <a className="link nav-link h3 p2 mx1">Contacts</a>
            </Link>
          </nav>
          <div className="col-2">
            <FaBars className="link right pointer" size="2em" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
