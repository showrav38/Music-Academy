import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <h1 className='m-5 text-center'>About Us</h1>
            <div className='custom2'>
                <img className='text-center mx-auto d-flex custom1 w-50 m-5' src="https://studyabroad.shiksha.com/mediadata/images/articles/empty-chairs-with-orchestral-instruments-lay-down-picture-id119024079.jpg" alt="" />
            </div>
            <div className='text-center m-5'>
                <h1>SunShine Music Academy</h1>
                <h4>One of the Prestigious Music School Of BanglaDesh.</h4>
                <p className='w-75 text-center mx-auto'>This school is funded in 1943 in dhaka bangladesh,which current location is gulshan 234,road number 3, after the victoria college
                Here we work more than 30 people from different background.
               This school is funded in 1943 in dhaka bangladesh,which current location is gulshan 234,road number 3, after the victoria college Here we work more than 30 people from different background.dhaka bangladesh,which current location is gulshan 234,road number 3, after the victoria college Here we work more than 30 people from different background.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;