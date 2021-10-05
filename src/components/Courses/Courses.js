import React, { useEffect, useState } from 'react';
import HomeDetails from '../HomeDetails.js/HomeDetails';
import './Courses.css';

const Services = () => {
  const [service, setService] = useState([]);

  // feth the custom fake data
  useEffect(() => {
    fetch('./allMusic.JSON')
      .then(res => res.json())
      .then(data => setService(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center mb-5 mt-5">Our All Courses</h1>
        <div className="scientist-container row">
          <div className="details-container col-md-12 grids">
            {service.map(music => (
              <HomeDetails key={music.name} music={music}></HomeDetails>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
