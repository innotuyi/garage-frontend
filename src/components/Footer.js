import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="text-white py-2 footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h4>Castro Driving School Online Management System</h4>
            <p>Address: Nyarugenge, Kigali, Rwanda</p>
            <p>Email: fideluwiringiyima@gmail.com</p>
            <p>Phone: +250 788843907</p>
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
            <ul className="list-unstyled d-flex justify-content-between">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
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
