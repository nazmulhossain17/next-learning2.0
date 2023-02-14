import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://images.unsplash.com/photo-1538652116325-8f5fa30fefff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="login form" className="img-fluid m-2 rounded"  />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3"></i>
                    <span className="h1 fw-bold mb-0 mx-auto text-secondary">Sign In</span>
                  </div>


                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example17"><h4>Email address</h4></label>
                    <input type="email" id="form2Example17" className="form-control form-control-lg" required/>
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example27"><h4>Password</h4></label>
                    <input type="password" id="form2Example27" className="form-control form-control-lg" required/>
                    
                  </div>
                  <a className="small text-muted" href="#!">Forgot password?</a>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button">Sign In</button>
                  </div>

                  
                  <p className="mb-5 pb-lg-2" >Don't have an account? <Link to="/signup"
                      >Sign Up here</Link></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default SignIn;