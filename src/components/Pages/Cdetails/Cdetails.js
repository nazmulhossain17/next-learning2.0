import React from 'react';
import { Button, Card, CardGroup, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cdetails = ({nse, handleAdd}) => {
    const {name, img, description, seller, price, ratings, id} = nse;
    // console.log(nse)
    return (
        <div>
      <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'> 
            <div className='d-flex'>
            
                <p>ratings: {ratings}</p>
                <p className='ms-5'>Add to Cart:<FaRegBookmark className='ms-3'/></p>
            </div>
      </Card.Header>
      <Card.Body>
      <Card.Img variant='top' src={img}/>
        <Card.Title>{name}</Card.Title>
        <p>Tutor: <b>{seller}</b></p>
        <Card.Text>
        
          {description.length > 200 ?
          <p>{description.slice(0, 250) + '...'} <Link to={`/blog/${id}`}>Read more</Link></p>
          :
          <p>{description}</p>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        
        <div className='d-flex'>
        <Button onClick={handleAdd} variant="outline-info" size="lg">
        Buy Now
      </Button>
      <h4 className='ms-5'>Price: ${price}</h4>
        </div>
      </Card.Footer>
    </Card>
    </div>
    );
};

export default Cdetails;