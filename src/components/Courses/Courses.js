import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Pages/Cart/Cart';
import Cdetails from '../Pages/Cdetails/Cdetails';
import './Courses.css';

const Courses = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>Courses : {data[0]?.length}</h1>
        
            <div className='shop-container'>
            <div className='products-container'>
            {
                data[0]?.map(nse => <Cdetails 
                key={nse.id} 
                nse={nse}
                ></Cdetails>)
            }
            </div>
            <div className="cart-container">
                <Cart>
                        <button>Review Order</button>
                </Cart>
            </div>
            </div>
            
            
        </div>
    );
};

export default Courses;