import React from 'react';
// import Footer from '../Footer/Footer';
// import MenuBar from '../MenuBar/MenuBar';
import './Contact.css';
const Contact = () => {
  return (
    <div className="containers pb-3 w-100">
      <div>
        <div className="containers">
          <h1 className="text-center pt-5">Contact Us</h1>
          <div className="content">
            {/* left side icon with info */}
            <div className="left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <div className="topic">Address</div>
                <div className="text-one">Gulshan, Dhaka</div>
                <div className="text-two">Bangladesh</div>
              </div>
              <div className="phone details">
                <i className="fas fa-phone-alt text-primary"></i>
                <div className="topic">Phone</div>
                <div className="text-one">+0098 9893 5647</div>
                <div className="text-two">+0096 3434 5678</div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope text-primary"></i>
                <div className="topic">Email</div>
                <div className="text-one">music@gmail.com</div>
                <div className="text-two">info.music@gmail.com</div>
              </div>
            </div>

            {/* right side form */}
            <div className="right-side">
              <div className="topic-text text-primary">Send us a message</div>
              <p>
                If you have any query about out academy please send us a Message. It's Our pleasure
                to help you.
              </p>
              <form action="#">
                <div className="input-box">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div className="input-box message-box">
                  <input type="text" placeholder="Write your message" />
                </div>
                <div className="button">
                  <input className="text-white bg-primary" type="button" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
