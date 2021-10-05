import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div style ={{backgroundColor : '#f2f4f8'}}>
            {/* <MenuBar></MenuBar> */}
            <h1 className='p-5 text-center containers pt-3'>About Us</h1>
            <div className='custom2'>
                <img className='text-center mx-auto d-flex custom1 w-50 mb-5' src="https://studyabroad.shiksha.com/mediadata/images/articles/empty-chairs-with-orchestral-instruments-lay-down-picture-id119024079.jpg" alt="" />
            </div>
            <div className='text-center'>
                <h1>SunShine Music Academy</h1>
                <h4 className='pb-3'>One of the Prestigious Music School Of BanglaDesh.</h4>
                <p className='w-75 text-center mb-0 mx-auto pb-5'>This school is funded in 1943 in dhaka bangladesh,which current location is gulshan 234,road number 3, after the victoria college
                Here we work more than 30 people from different background.
               This school is funded in 1943 in dhaka bangladesh,which current location is gulshan 234,road number 3, after the victoria college Here we work more than 30 people from different background.dhaka bangladesh,which current location is gulshan 234,road number 3, after the victoria college Here we work more than 30 people from different background.</p>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default AboutUs;