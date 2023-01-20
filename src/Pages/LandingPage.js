import React from "react";
import "../Style/style.css";

const LandingPage = () => {
  return (
    // <div> <a href='/hub/dashbord' className='text-decoration-none d-flex justify-content-center mt-5'>Go To DashBord Page --></a> </div>

    <div className="container">
      <div className="content-wrapper">
        <header className="wrapper bg-soft-primary">
          <nav className="navbar navbar-light navbar-expand-lg fixed-top">
            <div
              className="container-fluid flex-lg-row flex-nowrap align-items-center"
              style={{ backgroundColor: "#0171a5" }}
            >
              <div className="container">
                <div className="row">
                  <div className="navbar-brand w-50">
                    <a href="#">
                      <img
                        src="./images/ORMAS_Logo_with_CM.jpg"
                        srcset="assets/images/logo.png 2x"
                        alt=""
                        style={{ width: "400px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="navbar-collapse offcanvas-nav">
                <div className="offcanvas-header d-lg-none d-xl-none">
                  <a href="./index.html">
                    <img
                      src="./images/logo.png"
                      style={{ width: "60%" }}
                      alt="Logo"
                    />
                  </a>
                  <button
                    type="button"
                    className="btn-close btn-close-white offcanvas-close offcanvas-nav-close"
                    aria-label="Close"
                  ></button>
                </div>
                <ul className="navbar-nav flex-row align-items-center ms-auto" />
                <li className="nav-item m-2">
                  <a
                    className="nav-link btn btn-sm btn-primary rounded ml-1 dash_logo"
                    href="/hub/Dashbord"
                  >
                    Skip ->
                  </a>
                </li>
              </div>
              <div className="navbar-other ms-lg-4">
                <ul
                  className="navbar-nav flex-row align-items-center ms-auto"
                  data-sm-skip="true"
                >
                  <li className="nav-item d-lg-none">
                    <div className="navbar-hamburger">
                      <button
                        className="hamburger animate plain"
                        data-toggle="offcanvas-nav"
                      >
                        <span></span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
<br/>
<br/>
<br/>
<br/>
        <div className="container m-5 loginmargintop">
          <section className=" bg-soft-primary d-flex justify-content-center m-5 ">
            <div className="container py-lg-15">
              <div className="row">
                <div className="col-md-6">
                  <div className="row gy-10 gx-lg-8 gx-xl-12 bg-design">
                    <div className="col-lg-12">
                      <h3 className="signup_text">Log In</h3>
                      <h3 className="signup_text_1">
                        Stay updated on your professional world
                      </h3>
                     
                      <form className="contact-form needs-validation p-5">
                        <div className="messages"></div>
                        <div className="row gx-4">
                          <div className="col-md-12">
                            <div className=" mb-4">
                              <label for="form_name">
                                Email or phone number*
                              </label>
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter Your Maild or Phone Number"
                                required
                              />

                              <div className="valid-feedback">
                                {" "}
                                Looks good!{" "}
                              </div>
                              <div className="invalid-feedback">
                                {" "}
                                Please enter your first name.{" "}
                              </div>
                            </div>
                          </div>
                          {/* <!-- /column --> */}
                          <div className="col-md-12">
                            <div className="mb-1">
                              <label for="form_lastname">
                                Password (6 or more characters)*
                              </label>
                              <input
                                id="form_lastname"
                                type="text"
                                name="surname"
                                className="form-control"
                                placeholder="Enter Your Password"
                                required
                              />

                              <div className="valid-feedback">
                                {" "}
                                Looks good!{" "}
                              </div>
                              <div className="invalid-feedback">
                                {" "}
                                Please enter your last name.{" "}
                              </div>
                            </div>
                          </div>
                          {/* <!-- /column --> */}
                          <div>
                            <a href="#" className="forgot_pass">
                              Forgot password?
                            </a>
                          </div>
                          <div className="col-12 mt-2 text-center">
                            <a href="/hub/Dashbord">
                              <input
                                type="submit"
                                className="btn btn-primary rounded-pill btn-send mb-3 dash_logo"
                                value="Sign In"
                              />
                            </a>

                            <p className="signup_p2">
                              Or login white{" "}
                              <a href="#">
                                <img src="./images/google.png" />
                              </a>{" "}
                              &nbsp;
                              <a href="#">
                                <img src="./images/facebook.png" />
                              </a>{" "}
                              &nbsp;
                              <a href="#">
                                <img src="./images/twitter.png" />
                              </a>{" "}
                              &nbsp;
                            </p>
                          </div>
                          {/* <!-- /column --> */}
                        </div>
                        {/* <!-- /.row --> */}
                      </form>
                      {/* <!-- /form --> */}
                    </div>
                    {/* <!--/column --> */}

                    {/* <!--/column --> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://skillem.in/wp-content/uploads/2019/11/cropped-2-1.png"
                    className="width_banner"
                  />
                </div>
              </div>
            </div>
            {/* <!-- /.container --> */}
          </section>
        </div>
      </div>
      {/* <!-- /.content-wrapper --> */}

      <div className="fixed_bottom">
        <div className="bottom_bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <a href="terms.html" className="footer_item">
                  Terms
                </a>{" "}
                <span> | </span>{" "}
                <a href="privacy.html" className="footer_item">
                  Privacy
                </a>{" "}
                <span> | </span>
                <a href="#" className="footer_item">
                  Support
                </a>{" "}
                <span> | </span>{" "}
                <a href="disclaimer.html" className="footer_item">
                  Disclaimer
                </a>
              </div>
              <div className="col-md-6">
                <a href="#" className="footer_item float-end">
                  Copyright © 2023, ORMAS, All rights reserved.{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  );
};

export default LandingPage;
