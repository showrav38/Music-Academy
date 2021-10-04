import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import HomeMusic from "../HomeMusic/HomeMusic";
import MenuBar from "../MenuBar/MenuBar";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeMusic></HomeMusic>
      
      <Footer></Footer>
    </div>
  );
};

export default Home;
