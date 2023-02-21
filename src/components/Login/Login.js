import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

       signIn(email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
        navigate('/blog')
    })
    .catch(error =>{
        console.error(error)
    })
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