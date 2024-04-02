import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <h3 className="mb-4">About</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="widget">
              <h3>Social</h3>
              <ul className="list-unstyled social">
                <li>
                  <Link to="#">
                    <span className="icon-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon-facebook" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 ps-lg-5">
            <div className="widget">
              <h3 className="mb-4">Company</h3>
              <ul className="list-unstyled float-start links">
                <li>
                  <Link to="/about-us">About us</Link>
                </li>
                <li>
                  <Link to="/terms-condition">Terms Condition</Link>
                </li>
                <li>
                  <Link to="/dmca-policy">DMCA Policy</Link>
                </li>
              </ul>
              <ul className="list-unstyled float-start links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="widget">
              <h3 className="mb-4">Recent Post Entry</h3>
              <div className="post-entry-footer">
                <ul>
                  <li>
                    <Link to="">
                      <img
                        src="/images/img_1_sq.jpg"
                        alt="Image placeholder"
                        className="me-4 rounded"
                      />
                      <div className="text">
                        <h4>
                          There’s a Cool New Way for Men to Wear Socks and
                          Sandals
                        </h4>
                        <div className="post-meta">
                          <span className="mr-2">March 15, 2018 </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
