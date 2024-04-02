import { Link, useParams } from "react-router-dom";
import Navbar from "../user/component/Navbar";
import Footer from "../user/component/Footer";

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar></Navbar>

      <>
        <div
          className="site-cover site-cover-sm same-height overlay single-page"
          style={{ backgroundImage: 'url("/images/hero_5.jpg")' }}
        >
          <div className="container">
            <div className="row same-height justify-content-center">
              <div className="col-md-6">
                <div className="post-entry text-center">
                  <h1 className="mb-4">
                    Blog detail
                  </h1>
                  <div className="post-meta align-items-center text-center">
                    <figure className="author-figure mb-0 me-3 d-inline-block">
                      <img
                        src="/images/person_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <span className="d-inline-block mt-1">
                      By Carl Atkinson
                    </span>
                    <span>&nbsp;-&nbsp; February 10, 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="row blog-entries element-animate">
              <div className="col-md-12 col-lg-8 main-content">
                <div className="post-content-body">
                  <h4>Blog Title</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium nam quas inventore, ut iure iste modi eos
                    adipisci ad ea itaque labore earum autem nobis et numquam,
                    minima eius. Nam eius, non unde ut aut sunt eveniet rerum
                    repellendus porro.
                  </p>
                
                </div>
                <div className="pt-5">
                  <p>
                    Categories: <Link to="#">Food</Link>, <Link to="#">Travel</Link>{" "}
                  </p>
                </div>
                <div className="pt-5 comment-wrap">
                  <h3 className="mb-5 heading">6 Comments</h3>
                  <ul className="comment-list">
                    <li className="comment">
                      <div className="vcard">
                        <img
                          src="/images/person_1.jpg"
                          alt="Image placeholder"
                        />
                      </div>
                      <div className="comment-body">
                        <h3>Jean Doe</h3>
                        <div className="meta">January 9, 2018 at 2:21pm</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Pariatur quidem laborum necessitatibus, ipsam
                          impedit vitae autem, eum officia, fugiat saepe enim
                          sapiente iste iure! Quam voluptas earum impedit
                          necessitatibus, nihil?
                        </p>
                        <p>
                          <Link to="#" className="reply rounded">
                            Reply
                          </Link>
                        </p>
                      </div>
                    </li>
                   
                  </ul>
                  {/* END comment-list */}
                  <div className="comment-form-wrap pt-5">
                    <h3 className="mb-5">Leave a comment</h3>
                    <form action="#" className="p-5 bg-light">
                      <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <input
                          type="url"
                          className="form-control"
                          id="website"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name=""
                          id="message"
                          cols={30}
                          rows={10}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          defaultValue="Post Comment"
                          className="btn btn-primary"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* END main-content */}
              <div className="col-md-12 col-lg-4 sidebar">
                
                {/* END sidebar-box */}
                <div className="sidebar-box">
                  <div className="bio text-center">
                    <img
                      src="/images/person_2.jpg"
                      alt="Image Placeholder"
                      className="img-fluid mb-3"
                    />
                    <div className="bio-body">
                      <h2>Hannah Anderson</h2>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Exercitationem facilis sunt repellendus excepturi
                        beatae porro debitis voluptate nulla quo veniam fuga sit
                        molestias minus.
                      </p>
                     
                      <p className="social">
                        <Link to="#" className="p-2">
                          <span className="fa fa-facebook" />
                        </Link>
                        <Link to="#" className="p-2">
                          <span className="fa fa-twitter" />
                        </Link>
                        <Link to="#" className="p-2">
                          <span className="fa fa-instagram" />
                        </Link>
                        <Link to="#" className="p-2">
                          <span className="fa fa-youtube-play" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                {/* END sidebar-box */}
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
                {/* END sidebar-box */}
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
                        Business <span>(42)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Adventure <span>(14)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
               
              </div>
              {/* END sidebar */}
            </div>
          </div>
        </section>
      </>

      <Footer></Footer>
    </>
  );
};

export default BlogDetail;
