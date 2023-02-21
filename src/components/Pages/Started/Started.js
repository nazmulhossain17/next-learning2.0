import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Started.css';

const Started = () => {
    return (
        <>
        <div className='img-w'></div>
        <div className='content'>
            <h1>Welcome to Next-Learning Platform</h1><br/>
            <p>Instructors from around the world teach millions of students on Next-Learning 2.0.<br/> Start, switch, or advance your career, Professional Certificates, and degrees from<br/> world-class universities and companies. We provide the tools and skills to teach what you love.</p>
            <button className='by'><span><Link className='text-decoration-none' to='/courses'>Join Now</Link></span></button>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div>
            <section className='p-5 fixed-end'>
            <h1 className='p-3 text-success text-lg'>Learn Anything from our platform</h1>
            <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="http://www.arnesoncommunicates.com/uploads/1/0/5/0/10503253/learning_orig.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        
        <h1 className="card-text">Benefits About Online Learning Expertise</h1>
        <div className="list-group">
  <a href="#" className="list-group-item list-group-item-action active bg-info" aria-current="true">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1 mx-auto">Online Courses</h5>
      
    </div>
    <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1 mx-auto">Earn A Certificates</h5>
    </div>
    <p className="mb-1">Digital certificates provide security, and they can also ensure that communications reach only the intended recipients. Whether through website encryption or client encryption, digital certificates can help you authenticate communication and users. </p>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1 mx-auto">Learn with Expert</h5>
    </div>
    <p className="mb-1">We’ve got the solution: world-class training and development programs developed by top universities and companies. All on Coursera for Business.</p>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1 mx-auto">Build your skill</h5>
    </div>
    <p className="mb-1">Skills development and training can help you learn new information quickly and improve your overall knowledge base. This will make it easier for you to stay current on trends and developments in your field and identify potential challenges before they become problems.</p>
  </a>
</div>
      </div>
    </div>
  </div>
</div>
            </section>
        </div>
        </>
    );
};

export default Started;