import React from "react";
import { Link } from "react-router-dom";
import Signin from "../pages/signin/Signin";

const Navbar = () => {
  return (
    <div>
      <header id="navv" >
        <h6 className= "   d-inline-block pt-2 pl-2 " >
          Welcome to MEN'S FASHION WORLD
        </h6>
        {/* Header icons  */}
        <div className="d-inline-block float-right align-items-center     ">
          <a href="#" className="social">
            <i style={{ color: "black" }} className="fab fa-facebook-f pr-4" />
          </a>
          <a href="#" className="social">
            <i
              style={{ color: "black" }}
              className="fab fa-google-plus-g pr-4"
            />
          </a>
          <a href="#" className="social">
            <i style={{ color: "black" }} className="fab fa-linkedin-in pr-4" />
          </a>
          <a href="#" className="social">
            <i style={{ color: "black" }} className="fab fa-instagram pr-4" />
          </a>
          <a href="#" className="social">
            <i style={{ color: "black" }} className="fab fa-twitter pr-4" />
          </a>
          <button id="button10" type="button" className="btn btn-link ">
            Track My Order
          </button>
          <Link to="/signin" >
            <button id="button20" type="button" className="btn btn-link ">
              LOGIN
            </button>
          </Link>
          <button id="button20" type="button" className="btn btn-link">
            My Account
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
