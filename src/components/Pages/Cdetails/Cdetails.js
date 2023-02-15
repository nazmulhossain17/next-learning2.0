import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './Cdetails.css';

const Cdetails = ({nse}) => {
    const {name, img, description, seller, price, ratings} = nse;
    console.log(nse)
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
</div>
    );
};

export default Cdetails;