import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
        <h4>Order Summary</h4>
        <p>Selected Items:</p>
        <p>Total price: $</p>
        <p>Total Shipping: $</p>
        <p>Tax:</p>
        <h5>Grand Total: </h5>
        <Button variant='outline-danger'>Clear Cart</Button>
        
    </div>
    );
};

export default Cart;