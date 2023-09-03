import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Pricing = () => {
  return (
    <>
    <Navbar/>
    <div class="container mt-5">
    <h1 class="text-center mb-4">Course Pricing</h1>
    <div class="row">
        {/* BASIC */}
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Basic</h5>
            <p class="card-text">Access to one course</p>
            <h3 class="card-title">2000FRW</h3>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
        </div>
      </div>

      {/* Standard Tier */}

      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Standard</h5>
            <p class="card-text">Access to three courses</p>
            <h3 class="card-title">5000FRW</h3>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
        </div>
      </div>

      {/* Premium */}

      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Premium</h5>
            <p class="card-text">Unlimited access to all courses</p>
            <h3 class="card-title">10000FRW</h3>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
        </div>
      </div>
    </div>


    <div class="row mb-5">
      <div class="col-md-6">
        <blockquote class="blockquote">
          <p class="mb-0">"I learned so much from these courses. Highly recommended!"</p>
          <footer class="blockquote-footer">Innocent</footer>
        </blockquote>
      </div>
      <div class="col-md-6">
        <blockquote class="blockquote">
          <p class="mb-0">"The quality of the content exceeded my expectations."</p>
          <footer class="blockquote-footer">Innocent</footer>
        </blockquote>
      </div>
    </div>
  </div>
  <Footer/>
    </>
  )
}

export default Pricing