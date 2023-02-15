import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className='m-4'>
 
    <Form className='m-5' onSubmit={handleLogin}>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='d-grid gap-2'>
      <Button size='lg' variant="outline-primary" type="submit">
        Login
      </Button>
      <Button variant='outline-danger' size='lg'>Continue With Google <FaGoogle/></Button>
        </div>
      
    </Form>

        </div>
    );
};

export default Login;