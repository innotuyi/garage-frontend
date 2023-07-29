import React from "react";

const Footer = () => {
  return (
    <footer class="text-white py-5 footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h4>Garage Management System</h4>
            <p>Address: 123 Main Street, City, Country</p>
            <p>Email: info@garagemanagement.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div class="col-md-4">
            <h4>Quick Links</h4>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4>Follow Us</h4>
            <ul class="list-unstyled d-flex justify-content-between">
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
