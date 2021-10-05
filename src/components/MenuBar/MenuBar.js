// import React, { useContext } from "react";
import './MenuBar.css';
import logo from '../..//images/logo/images.png';
// import logo from "../..//images/logo/baller-logo-3.png";
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { userContext } from "./../../App";

const MenuBar = () => {
  // const [user, setUser] = useContext(userContext);
  // console.log(user);
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img d-flex">
              <div>
                <NavLink to="/home" className="text-decoration-none h1hover">
                  <h5 className="text-white h1hover">
                    SunShine <br /> Music Club.
                  </h5>
                </NavLink>
              </div>

              {/* <img className="w-50" src={logo} alt="" /> */}
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                {/* <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/sports" className="items">
                  <li>Sports</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About us</li>
                </Link>
                <Link to="contact" className="items">
                  <li>Contact us</li>
                </Link>  */}

                <Link to="/home" className="text-decoration-none">
                  <li className="items">Home</li>
                </Link>

                <Link to="/courses" className="text-decoration-none">
                  <li className="items">Courses</li>
                </Link>

                <Link to="/about-us" className="text-decoration-none">
                  <li className="items">About us</li>
                </Link>

                <Link to="/faq" className="text-decoration-none">
                  <li className="items">FAQ</li>
                </Link>

                <Link to="/contact-us" className="text-decoration-none">
                  <li className="items">Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
