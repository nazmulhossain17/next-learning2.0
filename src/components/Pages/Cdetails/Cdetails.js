import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Cdetails = ({nse}) => {
    const {name, img, description} = nse;
    console.log(nse)
    return (
        <div>
          <p>{name}</p>
          <img src={img} alt=''/>
        </div>
    );
};

export default Cdetails;