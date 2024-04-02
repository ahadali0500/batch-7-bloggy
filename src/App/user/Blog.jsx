import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <Navbar />

      <>
        <div className="section search-result-wrap">
          <div className="container">
            <div className="row posts-entry">
              <div className="col-lg-8">
                <div className="blog-entry d-flex blog-entry-search-item">
                  <Link to="/blog-detail/demo" className="img-link me-4">
                    <img
                      src="/images/img_1_sq.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </Link>
                  <div>
                    <span className="date">
                      Apr. 14th, 2022 • <Link to="/blog-detail/demo">Business</Link>
                    </span>
                    <h2>
                      <Link to="/blog-detail/demo">
                        Thought you loved Python? Wait until you meet Rust
                      </Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, nobis ea quis inventore vel voluptas.
                    </p>
                    <p>
                      <Link
                        to="/blog-detail/demo"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Read More
                      </Link>
                    </p>
                  </div>
                </div>
               
              
              </div>
              <div className="col-lg-4 sidebar">
                <div className="sidebar-box">
                  <h3 className="heading">Popular Posts</h3>
                  <div className="post-entry-sidebar">
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

                <div className="sidebar-box">
                  <h3 className="heading">Categories</h3>
                  <ul className="categories">
                    <li>
                      <Link to="#">
                        Food <span>(12)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Travel <span>(22)</span>
                      </Link>
                    </li>
                    
                  </ul>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </>
  );
}
