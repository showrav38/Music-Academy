import React from 'react';
import './Footer.css';
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import icon name
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="container row">
            <div>
              <div className="footer-menu-container">
                <ul className="d-flex justify-content-between">
                  <Link to="/home" className="text-decoration-none footer-menu text-white">
                    <li>Home</li>
                  </Link>

                  <Link to="/courses" className="text-decoration-none footer-menu text-white">
                    <li>Courses</li>
                  </Link>

                  <Link to="/about-us" className="text-decoration-none footer-menu text-white">
                    <li>About us</li>
                  </Link>

                  <Link to="/faq" className="text-decoration-none footer-menu text-white">
                    <li>FAQ</li>
                  </Link>

                  <Link to="/contact-us" className="text-decoration-none footer-menu text-white">
                    <li>Contact us</li>
                  </Link>

                  {/* <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Sports</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li> */}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="row text-center">
              <h1 className="text-center">Sunshine Music Club</h1>
            </div>

            <div className="row text-center">
              <div className="icons-container d-flex justify-content-center d-inline text-center ">
                <div className="icon">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="phone d-flex align-items-center justify-content-center mt-4 col-md-6 ">
              <div className="foter-phone-icon text-success">
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>
              <div>
                <h5>+880 1900 555 35 35</h5>
              </div>
            </div>

            <div className="col-md-6 map d-flex align-items-center justify-content-center">
              <div className="foter-phone-icon text-success text-center m-2">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>
              <div className="mt-3">
                <p>
                  130 gulshan, Dhaka, DH 10038,
                  <br /> 102 1st Avenue, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
