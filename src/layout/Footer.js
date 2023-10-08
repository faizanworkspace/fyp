import React from "react";

const Footer = () => {
  return (
    
      <div className="  jumbotron jumbotron-fluid d-flex flex-row px-5">
        <div className="container-fluid w-25">
          <h3>(+92) 305 571 7170</h3>
          <div className="d-flex mt-4 ">
            <i className="fa fa-location-arrow pt-3 pr-2 " aria-hidden="true" />
            <h6>736 NW. Street Morrisville, PA 19067</h6>
          </div>
          <div className="d-flex mt-3 ">
            <i className="fas fa-mail-bulk   fa-fw pt-3 " />
            <h6 className="pl-2">men'sworld@mail.com</h6>
          </div>
          <div className="d-flex mt-4 ">
            <a href="#" className="social">
              <i
                style={{ color: "black" }}
                className="fab fa-facebook-f pr-5"
              />
            </a>
            <a href="#" className="social">
              <i
                style={{ color: "black" }}
                className="fab fa-google-plus-g pr-5"
              />
            </a>
            <a href="#" className="social">
              <i
                style={{ color: "black" }}
                className="fab fa-linkedin-in pr-5"
              />
            </a>
            <a href="#" className="social">
              <i style={{ color: "black" }} className="fab fa-instagram pr-5" />
            </a>
            <a href="#" className="social">
              <i style={{ color: "black" }} className="fab fa-twitter pr-5" />
            </a>
          </div>
        </div>
        <div className="container-fluid pt-4 w-25 ">
          <div className="nav flex-column">
            <a className="nav-link active" href="#">
              Terms Of Use
            </a>
            <a className="nav-link" href="#">
              Privacy &amp; Policy
            </a>
            <a className="nav-link" href="#">
              Return Policy
            </a>
            <a className="nav-link" href="#">
              Shipping
            </a>
          </div>
        </div>
        <div className="container-fluid pt-4 w-25">
          <div className="nav flex-column">
            <a className="nav-link active" href="#">
              Account
            </a>
            <a className="nav-link" href="#">
              Wishlist
            </a>
            <a className="nav-link" href="#">
              Shopping Cart
            </a>
            <a className="nav-link" href="#">
              Track My Order
            </a>
          </div>
        </div>
        <div className="container-fluid w-25 ">
          <h3>Subscribe Newsletter</h3>
          <h5 className="pt-3 pb-3">
            Let's stay updated on the latest news and offers.
          </h5>
          <input
            className="form-control  "
            type="mail"
            placeholder="Enter Your Mail…"
          />
        </div>
      </div>
    
  );
};

export default Footer;
