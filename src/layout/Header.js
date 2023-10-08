import React from "react";
import { Link } from "react-router-dom";
import Products from "../pages/product/Products";
import Home from "../pages/home/Home";

function Header() {
  return (
    <div>
      <>
        {/*nav start*/}
        <nav className="   navbar navbar-expand-md navbar-light  w-100">
          <Link to="/" target="new">
            <img
              src="../assets/images/MW (2).png"
              img-responsive=""
              img-fluid=""
              id="logo1"
              style={{ width: 170, height: 55 }}
            />
          </Link>
          <div className="ml-auto ">
            <div className="collapse navbar-collapse " id="navbarnav">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/product">
                    Products
                  </Link>
                </li>

                <div className="dropdown mt-2">
                  <button
                    class="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Categories
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <Link className="dropdown-item" to="/Jeans">
                          Jeans
                        </Link>
                    <Link className="dropdown-item" to="/Shoes">
                          Shoes
                        </Link>
                    <Link
                          className="dropdown-item"
                          to="/Dress">
                          Dress Shirts
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="Tshirts">
                          T-Shirts
                        </Link>
                    <Link className="dropdown-item" to="/Perfumes">
                      Perfumes
                    </Link>
                    <Link className="dropdown-item" to="/Watches">
                          Watches
                        </Link>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <a href="#">
            <i className="fa fa-search pl-sm-auto  pr-4 " />
          </a>
          <a href="#">
            <i className="fa fa-heart pl-4 pr-4 " />{" "}
          </a>
          <a href="#">
            <i className="fa fa-lock pl-4 mr-4" />
          </a>
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarnav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
        {/*nav end*/}
      </>
    </div>
  );
}

export default Header;
