import React from 'react';
import { Button } from 'react-bootstrap';
import './Started.css';

const Started = () => {
    return (
        <>
        <div className='img-w'></div>
        <div className='content'>
            <h1>Welcome to our plateform</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <Button>join</Button>
        </div>
        </>
    );
};

export default Started;