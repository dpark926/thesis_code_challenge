import React, { Component, Fragment } from "react";
import Link from "next/link";

class Hero extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const { name, email, password } = this.state;

    e.preventDefault();
    alert(`Welcome, ${name}!`);
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <main className="flex px3">
        <div className="flex flex-column p4 col-6 justify-center">
          <h1 className="h1" style={{ fontSize: "3.5em", fontWeight: 900 }}>
            Simple Way to Organize Your Inspirations
          </h1>
          <p className="h2">
            I think what motivates people is not great hate, but great love for
            other people.
          </p>
        </div>
        <div className="flex flex-column p4 col-6 justify-center">
          <form className="flex flex-column" onSubmit={this.onSubmit}>
            <label className="center h3 p2">SIGN UP FOR FREE</label>
            <input
              name="name"
              id="name"
              placeholder="Name"
              className="h3 p2"
              onChange={this.handleChange}
            />
            <input
              name="email"
              id="email"
              placeholder="Email"
              className="h3 p2"
              onChange={this.handleChange}
            />
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              className="h3 p2"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="pointer h3 p2"
              disabled={!(name && email && password)}
            >
              Sign up
            </button>
          </form>
          <div className="center">
            <p>By clicking "Sign up" I agree to our</p>
            <Link href="#">
              <a className="link">Terms of Service</a>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default Hero;
