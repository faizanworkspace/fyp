import React from 'react'

function Products() {
  return (
    <div >


  {/* products start  */}
  <div className="container-fluid d-flex ">
    <section className="w-75">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 ">
            <div className="row mr-1 p-4 bg-light">
              <img
                src="../assets/images/tshirt 1.png"
                id="img11"
                className="img-responsive img-fluid px-5 pt-3 pb-4"
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Red T-shirt</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 align-items-center justify-content-between bg-light">
              <img
                src="../assets/images/shirt 4.png"
                id="img12"
                className="img-responsive img-fluid p-5"
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Sky Shirt</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 ">
            <div className="row mr-1  bg-light"
            
            >
              <img
                src="../assets/images/tshirt2.png"
                id="img13"
                className="img-responsive img-fluid px-5 pt-3 pb-4"
                style={{ height: 310 }}
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Black T-shirt</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 p-4 bg-light">
              <img
                src="../assets/images/pent1 (2).png"
                id={17}
                className="img-responsive img-fluid px-4 py-1"
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Denim Jeans</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          {/*div 2*/}
          <div className="col-lg-4  col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 p-4 bg-light">
              <img
                src="../assets/images/pent1.png"
                id={18}
                className="img-responsive img-fluid px-4 py-1"
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Blue Jean</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          {/*div 3*/}
          <div className="  col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 p-3 bg-light">
              <img
                src="../assets/images/pent3.png"
                id={19}
                className="img-responsive img-fluid px-5 py-2"
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Sky Jean</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 bg-light">
              <img
                src="../assets/images/watch3.png"
                id="img15"
                className="img-responsive img-fluid px-5 pt-4 pb-5"
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Black Watch</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 px-5 pt-1 bg-light">
              <img
                src="../assets/images/watch5.png"
                id="img16"
                className="img-responsive img-fluid px-4 "
                style={{ height: 310 }}
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Silver Watch</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          <div className="  col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 p-3 bg-light">
              <img
                src="../assets/images/perfume4.png"
                id="img14"
                className="img-responsive img-fluid px-2"
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Boss Perfume</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 p-3 bg-light">
              <img
                src="../assets/images/watch7.png"
                id={17}
                className="img-responsive img-fluid px-5 "
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Green Watch</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          {/*div 2*/}
          <div className="col-lg-4  col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 bg-light">
              <img
                src="../assets/images/perfume3.png"
                id={18}
                className="img-responsive img-fluid px-5 py-5"
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Boss Perfume</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          {/*div 3*/}
          <div className="  col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 p-5 bg-light">
              <img
                src="../assets/images/perfume5.png"
                id={19}
                className="img-responsive img-fluid px-5 py-2"
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Angel Perfume</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          <div className="  col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 bg-light">
              <img
                src="../assets/images/shoes1.jpg"
                id={20}
                className="img-responsive img-fluid p-2"
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Red Shoe </h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          <div className="  col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 bg-light">
              <img
                src="../assets/images/shoes6.jpg"
                id={21}
                className="img-responsive img-fluid p-2 "
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Camel Shoe</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
          <div className="  col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="row mr-1 p-2 bg-light">
              <img
                src="../assets/images/shoes8.jpg"
                id={22}
                className="img-responsive img-fluid "
              />
            </div>
            <div className="d-flex pt-1">
              <h6 className="pr-5">Brown Shoe</h6>
              <span className="fa fa-star checked pl-5" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Scnd Box Div  */}
    {/* Scnd Box Div  */}
    <section>
      <div className="container-fluid bg-light d-inline-block h-auto ">
        <h4 className="p-3">Categories:</h4>
        <a href="#">
          <h6 className="p-2" style={{ color: "black" }}>
            Pents
          </h6>
        </a>
        <a href="#">
          <h6 className="p-2" style={{ color: "black" }}>
            Shoes
          </h6>
        </a>
        <a href="#">
          <h6 className="p-2" style={{ color: "black" }}>
            Shirts
          </h6>
        </a>
        <a href="#">
          <h6 className="p-2" style={{ color: "black" }}>
            T-Shirts
          </h6>
        </a>
        <a href="#">
          <h6 className="p-2" style={{ color: "black" }}>
            Perfeums
          </h6>
        </a>
        <a href="#">
          <h6 className="p-2" style={{ color: "black" }}>
            Watches
          </h6>
        </a>
      </div>
      {/* Discount Started  */}
      <div className="container-fluid bg-light h-auto mt-3">
        <div className="d-inline-block">
          <h4 className="p-3">Discount Products</h4>
          <div className="d-inline-block">
            <div className="d-flex flex-row">
              {" "}
              <a href="#">
                <img
                  src="../assets/images/jean 2.png"
                 id='dp1'
                  className="img-responsive img-fluid  "
                  style={{ height: 100 }}
                />
              </a>
              <h6>
              LEVI'S Denim <br />
                Blue Jean <br />
                <del style={{ color: "red" }}>$15.00</del>
                <br />
                $10.00
              </h6>
            </div>
            <div className="d-flex flex-row">
              <a href="#">
                {" "}
                <img
                  src="../assets/images/t shirt 3.png"
                  id="dp2"
                  className="img-responsive img-fluid d-block d-none pt-3"
                />
              </a>
              <h6 className="pt-3">
                Polo T-shirt
                <br />
                <del style={{ color: "red" }}>$50.00</del>
                <br />
                $45.00
              </h6>
            </div>
            <div className="d-flex flex-row">
              <a href="#">
                <img
                  src="../assets/images/watch3.png"
                  id="dp3"
                  className="img-responsive img-fluid d-block d-none pt-3 "
                />
              </a>
              <h6 className="pt-3 pr-5">
                Rado Watch <br />
                <del style={{ color: "red" }}>$10.00</del>
                <br />
                $5.00
              </h6>
            </div>
            <div className="d-flex flex-row">
              <a href="#">
                {" "}
                <img
                  src="../assets/images/shoe 5.png"
                  id="dp4"
                  className="img-responsive img-fluid pt-3 pl-1"
                  style={{ height: 100 }}
                />
              </a>
              <h6 className="pt-3 pl-2">
                Puma Shoe <br />
                <del style={{ color: "red" }}>$35.00</del>
                <br />
                $30.00
              </h6>
            </div>
            <div className="d-flex flex-row">
              <a href="#">
                {" "}
                <img
                  src="../assets/images/shirt1.png"
                  id="dp5"
                  className="img-responsive img-fluid pt-3 pl-1"
                  style={{ height: 100 }}
                />
              </a>
              <h6 className="pt-3 pl-3">
                Gray Shirt <br />
                <del style={{ color: "red" }}>$35.00</del>
                <br />
                $30.00
              </h6>
            </div>
            <div className="d-flex flex-row">
              <a href="#">
                {" "}
                <img
                  src="../assets/images/perfume4.png"
                  id="dp6"
                  className="img-responsive img-fluid pt-3  "
                  style={{ height: 100 }}
                />
              </a>
              <h6 className="pt-3 ">
                Royal Perfeum <br />
                <del style={{ color: "red" }}>$35.00</del>
                <br />
                $30.00
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/*discount product end*/}
      {/*trending product*/}
      <div className="container-fluid bg-light h-auto mt-3">
        <div className="d-inline-block">
          <h4 className="p-3">Trending Products</h4>
          <div className="d-inline-block">
            <div className="d-flex flex-row">
              {" "}
              <a href="#">
                <img
                  src="../assets/images/shirt 2.png"
                  id="tp1"
                  className="img-responsive img-fluid"
                  style={{ height: 100 }}
                />
              </a>
              <h6 className="pl-3">
                Lewis Denim <br />
                Blue Jean <br />
                <del style={{ color: "red" }}>$15.00</del>
                <br />
                $10.00
              </h6>
            </div>
            <div className="d-flex flex-row pt-2">
              <a href="#">
                {" "}
                <img
                  src="../assets/images/jean 4.png"
                  id="tp2"
                  className="img-responsive img-fluid d-block d-none pt-3"
                />
              </a>
              <h6 className="pl-2 pt-3">
                Polo T-shirt
                <br />
                <del style={{ color: "red" }}>$50.00</del>
                <br />
                $45.00
              </h6>
            </div>
            <div className="d-flex flex-row pt-3">
              <a href="#">
                <img
                  src="../assets/images/watch 4.png"
                  id="tp3"
                  className="img-responsive img-fluid d-block d-none pt-3 pl-2 "
                />
              </a>
              <h6 className="pl-4 pt-4">
                Rado Watch <br />
                <del style={{ color: "red" }}>$10.00</del>
                <br />
                $5.00
              </h6>
            </div>
            <div className="d-flex flex-row pt-2">
              <a href="#">
                {" "}
                <img
                  src="../assets/images/shoe 12.png"
                  id="tp4"
                  className="img-responsive img-fluid"
                  
                />
              </a>
              <h6 className="pt-4">
                Puma Shoe <br />
                <del style={{ color: "red" }}>$35.00</del>
                <br />
                $30.00
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/*trending product end*/}
    </section>
  </div>
  


      
    </div>
  )
}

export default Products
