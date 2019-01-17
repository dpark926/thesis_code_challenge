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
        <div className="flex py2 px3" style={{ alignItems: "center" }}>
          <div>
            <Link href="#">
              <a className="h1">Stamp</a>
            </Link>
          </div>
          <nav className="flex-auto center">
            <Link href="#">
              <a className="h3 px3">About</a>
            </Link>
            <Link href="#">
              <a className="h3 px3">Integrations</a>
            </Link>
            <Link href="#">
              <a className="h3 px3">Pricing</a>
            </Link>
            <Link href="#">
              <a className="h3 px3">Contacts</a>
            </Link>
          </nav>
          <div>
            <FaBars size="2em" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
