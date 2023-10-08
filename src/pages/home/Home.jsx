import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container-fluid'>
      
      <div className="" id="home">
  {/* <h2>Carousel Example</h2>   */}
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    {/* Indicators */}
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to={0} className="active" />
      <li data-target="#myCarousel" data-slide-to={1} />
      <li data-target="#myCarousel" data-slide-to={2} />
    </ol>
    {/* Wrapper for slides */}
    <div className="carousel-inner" style={{ width: "100%", height: 500 }}>
      <div
        className="item active"
        style={{
          backgroundImage: "url(../assets/images/sldr1.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 500,
          width: "100%"
        }}
      ></div>
      <div
        className="item"
        style={{
          backgroundImage: "url(../assets/images/4976750.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 500,
          width: "100%"
        }}
      ></div>
      <div
        className="item"
        style={{
          backgroundImage: "url(../assets/images/banner\ 5.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 500,
          width: "100%"
        }}
      ></div>
    </div>
    {/* Left and right controls */}
    <Link className="left carousel-control" to="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" />
      <span className="sr-only">Previous</span>
    </Link>
    <Link className="right carousel-control" to="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" />
      <span className="sr-only">Next</span>
    </Link>
  </div>
  <br />
  {/*products*/}
  {/*start*/}
  {/*products*/}
  <section>
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12  ">
          <div
            className="row d-block d-none d-flex flex-row"
            style={{ backgroundColor: "rgb(136, 79, 79)", height: 400 }}
          >
              <img
                src="../assets/images/watchbanner2.png"
                id="img1"
                className="img-responsive img-fluid"
                style={{  height: 400 , width : 700 }}
              />
           
            
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 pl-lg-5 pt-lg-0 pt-md-3 pt-sm-3">
          <div className="row d-block d-none">
           
              <img
                src="../assets/images/sheosbanner1.jpeg"
                style={{ width: "100%", height: 200 }}
              />
            
            <div className="col-lg-6 col-md-6 col-xs-6 pt-3">
              <div
                className="row align-items-center justify-content-between"
                style={{ backgroundColor: "cadetblue", height: 190 }}
              >
                  <img
                    src="../assets/images/shirtbanner1.jpeg"
                    id="img3"
                    className="img-responsive img-fluid "
                    style={{height: 190 , width:400 }}
                  />
                
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-6 pt-3 pl-5 ">
              <div
                className="row align-items-center justify-content-between"
                style={{ backgroundColor: "cadetblue", height: 190 }}
              >
                  <img
                    src="../assets/images/perfumebanner1.png"
                    id="img4"
                    className=" img-responsive img-fluid "
                    style={{ height: 190 }}
                  />
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </section>
  {/*products end*/}
  <>
  {/*categories*/}
  <section>
    <div className=" container-fluid">
      <div className="row bg-light">
        <div className="col-12">
          <div className="display-4 p-2">Categories!</div>
        </div>
      </div>
    </div>
    <br />
    <div className=" container-fluid">
      <div className="row ml-5">
        <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 h-100 ">
          <a href="dressshirt.html">
            {" "}
            <img
              src="../assets/images/shirt 1.png"
              id="img5"
              className="img-responsive  d-block d-none"
            />
            <div className="d-inline-block ml-4">
              <h6>Dress Shirts</h6>
            </div>
          </a>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  col-xs-6  h-100">
          <a href="jean.html">
            {" "}
            <img
              src="../assets/images/jean 2.png"
              id="img6"
              className="img-responsive d-block d-none"
            />
            <div className="d-inline-block pl-5 ">
              <h6>Jeans</h6>
            </div>
          </a>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  col-xs-6  h-100">
          <a href="perfume.html">
            {" "}
            <img
              src="../assets/images/perfume 3.png"
              id="img7"
              className="img-responsive img-fluid d-block d-none"
            />
            <div className="d-inline-block ml-5">
              <h6>Perfumes</h6>
            </div>
          </a>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  col-xs-6  h-100">
          <a href="tshirt.html">
            {" "}
            <img
              src="../assets/images/t shirt 1.png"
              id="img9"
              className="img-responsive img-fluid d-block d-none"
            />
            <div className="d-inline-block ml-5 pl-2">
              <h6>T-Shirts</h6>
            </div>
          </a>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  col-xs-6 h-100">
          <a href="watch.html">
            {" "}
            <img
              src="../assets/images/watch 4.png"
              id="img8"
              className="img-responsive  d-block d-none"
            />
            <div className="d-inline-block ml-5">
              <h6>Watches</h6>
            </div>
          </a>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  col-xs-6  h-100">
          <a href="shoe.html">
            <img
              src="../assets/images/shoe 8.png"
              id="img10"
              className="img-responsive img-fluid d-block d-none "
            />
            <div className="d-inline-block pl-5 ml-2">
              <h6>Shoes</h6>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <br />
  {/*categories end*/}
  {/*trending products*/}
  <section>
    <div className="container-fluid">
      <div className="row bg-light">
        <div className="col-6">
          <div className="display-4 pt-4">Trending Products</div>
        </div>
        <div className="ml-auto mt-2">
          <div className="col-6 ">
            <nav className="navbar navbar-expand-md navbar-light">
              <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarnav"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon " />
              </button>
              <div className="ml-auto">
                <div className="collapse navbar-collapse" id="navbarnav">
                  <ul className="navbar-nav">
                   
                    <li className="nav-item active">
                    <Link className="dropdown-item" to="/Watches">
                          Watches
                        </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/Perfumes">
                        Perfumes
                      </Link>
                    </li>
                    <li className="nav-item active">
                    <Link className="dropdown-item" to="/Shoes">
                          Shoes
                        </Link>
                    </li>
                    <li className="nav-item active">
                    <Link
                          className="dropdown-item"
                          to="Tshirts">
                          T-Shirts
                        </Link>
                    </li>
                    <li className="nav-item active">
                    <Link
                          className="dropdown-item"
                          to="/Dress">
                          Dress Shirts
                        </Link>
                    </li>
                    <li className="nav-item active">
                    <Link className="dropdown-item" to="/Jeans">
                          Jeans
                        </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="row mr-lg-1 mr-sm-1 px-5 bg-light">
            <img
              src="../assets/images/jean 8.png"
              id="img11"
              className="img-responsive img-fluid px-5"
            />
          </div>
          <div className="d-flex flex-row">
            <h6>Black Denim Jeans</h6>
            <div className="ml-auto pr-4 pt-2">
              <a href="#">
                <i className="fas fa-shopping-cart">Add to Cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3  col-md-6 col-sm-6 col-xs-12">
          <div className="row mr-lg-1 align-items-center justify-content-between bg-light">
            <img
              src="../assets/images/shoe 13.png"
              id="img12"
              className="img-responsive img-fluid py-5"
            />
          </div>
          <div className="d-flex flex-row">
            <h6>Camel Sneakers</h6>
            <div className="ml-auto pr-4 pt-2">
              <a href="#">
                <i className="fas fa-shopping-cart">Add to Cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="row mr-lg-1 mr-sm-1 p-4 bg-light">
            <img
              src="../assets/images/shirt 13.png"
              id="img13"
              className="img-responsive img-fluid px-4"
            />
          </div>
          <div className="d-flex flex-row">
            <h6>White Dress Shirt</h6>
            <div className="ml-auto pr-4 pt-2">
              <a href="#">
                <i className="fas fa-shopping-cart">Add to Cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="row p-5 bg-light">
            <img
              src="../assets/images/perfume 11.png"
              id="img14"
              className="img-responsive img-fluid px-5"
            />
          </div>
          <div className="d-flex flex-row">
            <h6>Perfume</h6>
            <div className="ml-auto pr-4 pt-2">
              <a href="#">
                <i className="fas fa-shopping-cart">Add to Cart</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
  <section>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="row mr-lg-1 mr-sm-1 p-4 bg-light">
            <img
              src="../assets/images/watch 9.png"
              id="img15"
              className="img-responsive img-fluid px-5 py-5"
            />
          </div>
          <div className="d-flex flex-row">
            <h6>Black Watch</h6>
            <div className="ml-auto pr-4 pt-2">
              <a href="#">
                <i className="fas fa-shopping-cart">Add to Cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3  col-md-6 col-sm-6 col-xs-12">
          <div className="row mr-lg-1 p-sm-5 bg-light">
            <img
              src="../assets/images/t shirt 12.png"
              id="img16"
              className="img-responsive img-fluid px-5"
            />
          </div>
          <div className="d-flex flex-row">
            <h6>T-shirt</h6>
            <div className="ml-auto pr-4 pt-2">
              <a href="#">
                <i className="fas fa-shopping-cart">Add to Cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="row mr-lg-1 mr-sm-1 pl-5 bg-light">
            <img
              src="../assets/images/shoe 3.png"
              id="img17"
              className="img-responsive img-fluid p-5 my-4"
            />
          </div>
          <div className="d-flex flex-row">
            <h6>Gray Sneakers</h6>
            <div className="ml-auto pr-4 pt-2">
              <a href="#">
                <i className="fas fa-shopping-cart">Add to Cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="row pl-5 bg-light">
            <img
              src="../assets/images/jean 4.png"
              id="img18"
              className="img-responsive img-fluid p-5 my-4 "
            />
          </div>
          <div className="d-flex flex-row">
            <h6>Blue Denim Jean</h6>
            <div className="ml-auto pr-4 pt-2">
              <a href="#">
                <i className="fas fa-shopping-cart">Add to Cart</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*trending products end*/}
</>

  {/*end*/}
  {/*featured products end*/}
</div>


    </div>
  )
}

export default Home
