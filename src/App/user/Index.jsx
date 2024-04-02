import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Navbar></Navbar>
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-stretch retro-layout">
            <div className="col-md-4">
              <Link to="/blog-detail/demo" className="h-entry mb-30 v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: 'url("/images/img_2_horizontal.jpg")',
                  }}
                />
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>AI can now kill those annoying cookie pop-ups</h2>
                </div>
              </Link>
              <Link to="/blog-detail/demo" className="h-entry v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: 'url("/images/img_5_horizontal.jpg")',
                  }}
                />
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Don’t assume your user data in the cloud is safe</h2>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/blog-detail/demo" className="h-entry img-5 h-100 gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: 'url("/images/img_1_vertical.jpg")',
                  }}
                />
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Why is my internet so slow?</h2>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/blog-detail/demo" className="h-entry mb-30 v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: 'url("/images/img_3_horizontal.jpg")',
                  }}
                />
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Startup vs corporate: What job suits you best?</h2>
                </div>
              </Link>
              <Link to="/blog-detail/demo" className="h-entry v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: 'url("/images/img_4_horizontal.jpg")',
                  }}
                />
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Thought you loved Python? Wait until you meet Rust</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h2 className="posts-entry-title">Politics</h2>
            </div>
            <div className="col-sm-6 text-sm-end">
              <Link to="/blog" className="read-more">
                View All
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="post-entry-alt">
                <Link to="/blog-detail/demo" className="img-link">
                  <img
                    src="images/img_7_horizontal.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </Link>
                <div className="excerpt">
                  <h2>
                    <Link to="/blog-detail/demo">
                      Startup vs corporate: What job suits you best?
                    </Link>
                  </h2>
                  <div className="post-meta align-items-center text-left clearfix">
                    <figure className="author-figure mb-0 me-3 float-start">
                      <img
                        src="images/person_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <span className="d-inline-block mt-1">
                      By <Link to="#">David Anderson</Link>
                    </span>
                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo sunt tempora dolor laudantium sed optio, explicabo ad
                    deleniti impedit facilis fugit recusandae! Illo, aliquid,
                    dicta beatae quia porro id est.
                  </p>
                  <p>
                    <Link to="#" className="read-more">
                      Continue Reading
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
