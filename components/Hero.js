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
          <div className="pl3">
            <h1 className="h1" style={{ fontSize: "3.5em", fontWeight: 900 }}>
              Simple Way to Organize Your Inspirations
            </h1>
            <p className="h2" style={{ lineHeight: 1.5 }}>
              I think what motivates people is not great hate, but great love
              for other people.
            </p>
          </div>
        </div>
        <div className="flex flex-column p4 col-6 justify-center">
          <div className="pr3">
            <form className="flex flex-column" onSubmit={this.onSubmit}>
              <label className="center h3 p3">SIGN UP FOR FREE</label>
              <input
                name="name"
                id="name"
                placeholder="Name"
                className="h4 p2 input"
                onChange={this.handleChange}
              />
              <input
                name="email"
                id="email"
                placeholder="Email"
                className="h4 p2 input"
                onChange={this.handleChange}
              />
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                className="h4 p2 input"
                onChange={this.handleChange}
              />
              <button
                type="submit"
                className="pointer border-none h3 p2"
                disabled={!(name && email && password)}
              >
                Sign up
              </button>
            </form>
            <div className="center p2">
              <p className="dark-white">By clicking "Sign up" I agree to our</p>
              <Link href="#">
                <a className="link">Terms of Service</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Hero;
