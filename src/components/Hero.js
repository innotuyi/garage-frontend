import React from "react";

const Hero = () => {
  return (
    <section class="py-5 hero">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mt-5">
            <h2 class="display-4">Join Our Community</h2>
            <p class="lead">
              Be part of our awesome community and stay updated with the latest
              trends and news.
            </p>
            <a class="btn btn-secondary btn-lg"  to="/register">Sign Up Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
