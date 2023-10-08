import React from 'react'

function Signin() {
  return (
    <div>
    
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="author" content="Yinka Enoch Adedokun" />
  <title>Login Page</title>
  {/* Main Content */}
  <div className="container-fluid">
    <div className="row main-content bg-success text-center">
      <div className="col-md-4 text-center company__info" >
       
        <h4 className="company_title">Welcome to Men's Products</h4>
        <img src='../assets/images/MW (3).jpg' / 
        >
      </div>
      <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
        <div className="container-fluid">
          <div className="row">
            <h2>Log In</h2>
          </div>
          <div className="row">
            <form control="" className="form-group">
              <div className="row">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form__input"
                  placeholder="Username"
                />
              </div>
              <div className="row">
                {/* <span class="fa fa-lock"></span> */}
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form__input"
                  placeholder="Password"
                />
              </div>
              <div className="row">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  className=""
                />
                <label htmlFor="remember_me">Remember Me!</label>
              </div>
              <div className="row">
                <input type="submit" defaultValue="Submit" className="btn" id='btn2' />
              </div>
            </form>
          </div>
          <div className="row">
            <p>
              Don't have an account? <a href="#">Register Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}


    </div>
  )
}

export default Signin
