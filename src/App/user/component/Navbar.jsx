import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <div className="row g-0 align-items-center">
              <div className="col-2">
                <Link to="/" className="logo m-0 float-start">
                  Hadi<span className="text-primary">.</span>
                </Link>
              </div>
              <div className="col-8 text-center">
                <form
                  action="#"
                  className="search-form d-inline-block d-lg-none"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bi-search" />
                </form>
                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </div>
              <div className="col-2 text-end">
                <Link
                  to="#"
                  className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                >
                  <span />
                </Link>
                <form
                  action="#"
                  className="search-form d-none d-lg-inline-block"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bi-search" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
