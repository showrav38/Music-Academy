import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <div className="banner-container">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          
          <div className='container'>
          <div className="col-md-8 text-center">
            <h1 className="title">
              Grow Your Music Skill Like <br />The Sun Shine in The Sky.
            </h1>
            <p className="text-white text-center mt-3">
              One of renowned music academy of Bangladesh,the most experienced teacher with <br/>there vast of knowlendge and experinece.
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
