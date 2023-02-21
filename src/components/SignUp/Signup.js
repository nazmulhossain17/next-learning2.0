import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Signup = () => {
  const {createUser} = useContext(AuthContext);
  const handleSignup = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
    .then(result => {
      const user = result.user
      console.log('resgister', user)
    })
    .catch(error =>{
      console.error(error)
    })
  }
    return (
        <div>
            <section className="vh-100" >
  <div className="container h-100 p-3">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <Form className='m-5' onSubmit={handleSignup}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
      
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter your Name" required/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
      
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='d-grid gap-2'>
      <Button size='lg' variant="outline-success" type="submit">
        Sign Up
      </Button>
        </div>
      <h5>Already have an account<Link to='/login'>Login</Link></h5>
    </Form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt=""/>

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

export default Signup;