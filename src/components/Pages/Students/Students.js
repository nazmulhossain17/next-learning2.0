import React from 'react';
import { Link } from 'react-router-dom';

const Students = () => {
    return (
        <div>
        <h1>Our Popular Instructors</h1>
        <div className="card-group">
  <div className="card m-2">
    <img src="https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" className="card-img-top" alt="Hollywood Sign on The Hill"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div className="card m-2">
    <img src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="Palm Springs Road"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div className="card m-2">
    <img src="https://images.unsplash.com/photo-1534030422872-13302ecaefa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="Los Angeles Skyscrapers"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to show
        that equal height action.
      </p>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
    
  </div>
  
</div>
<br/>
<h1 className='p-2'>Best Selling Courses</h1>
<div className="row m-2">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body d-flex">
      <img width={'200px'} className='rounded float-left' src='https://aksoytolga.com/wp-content/uploads/2020/07/Spring_Banner.png' alt=''/>
        <div>
        <h5 className="card-title">Spring Framework 6: Beginner to Guru</h5>
        <p className="card-text">Learn All Things Spring! Spring Framework 6, Spring Boot 3, Spring MVC, Spring Data JPA, Spring Security, Spring WebFlux</p>
        <a href="#" className="btn btn-outline-danger">Enroll Now</a>
        </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body d-flex">
      <img width={'200px'} className='rounded float-left' src='https://i.ytimg.com/vi/4GeRf5EED6o/maxresdefault.jpg' alt=''/>
        <div>
        <h5 className="card-title">Unreal Engine 5: One Course Solution For Niagara VFX</h5>
        <p className="card-text">Learn All Things Use Niagara to create stunning, game-ready VFX in Unreal Engine 5 through a step by step approach</p>
        <a href="#" className="btn btn-outline-danger">Enroll Now</a>
        </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body d-flex">
      <img width={'200px'} className='rounded float-left' src='https://www.atriainnovation.com/wp-content/uploads/2021/02/portada.jpg' alt=''/>
        <div>
        <h5 className="card-title">Machine Learning A-Z™: Python & R in Data Science [2023]</h5>
        <p className="card-text">Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.</p>
        <a href="#" className="btn btn-outline-danger">Enroll Now</a>
        </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body d-flex">
      <img width={'200px'} className='rounded float-left' src='https://www.naukri.com/blog/content/images/2020/09/714512-ethical-hackingthinkstockphotos.jpg' alt=''/>
        <div>
        <h5 className="card-title">The Complete Ethical Hacking Course</h5>
        <p className="card-text">Protect yourself from hackers & cyberattacks. Learn penetration testing + build security and coding tools with Python.</p>
        <a href="#" className="btn btn-outline-danger">Enroll Now</a>
        </div>
      </div>
    </div>
  </div>
 
  
</div>
        </div>
    );
};

export default Students;