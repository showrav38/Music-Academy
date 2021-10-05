import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './HomeDetails.css';

const HomeDetails = props => {
  const { img, name, born, price, bornPlace, topInnovation } = props.music;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="col-md-4 col-sm-6 d-flex justify-content-center">
      <div
        className="border-primary border p-1 btn-custom text-center"
        style={{
          height: '500px',
          width: '310px',
          // margin: 'auto',
          marginBottom:'40px',
          borderRadius: '10px',
          backgroundColor: '#f5f4f4'
          // backgroundImage: 'linear-gradient(to right,#83a4d4,#b6fbff)',
        }}
      >
        {/* all details information */}
        <img style={{ borderRadius: '10px',width:'400px',height:'200px' }} className="img-fluid" src={img} alt="" />
        <h5 className="mt-3 border border-top-3">Name: {name}</h5>
        <p>Discovered: {born}</p>
        <p>Place Discoverded: {bornPlace}</p>
        <p>Learning Level: {topInnovation}</p>
        <h4 className="mb-5">Price: {price}</h4>
        <div className="d-flex justify-content-center my-auto btn-position">
          <button className="btn btn-primary">{element}Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
