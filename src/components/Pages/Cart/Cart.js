import React from 'react';
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
        <button>Clear Cart</button>
        
    </div>
    );
};

export default Cart;