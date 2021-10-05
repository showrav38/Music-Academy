import React, { useEffect, useState } from 'react';
import HomeDetails from '../HomeDetails.js/HomeDetails';
import './HomeMusic.css';

const HomeMusic = () => {
  const [musicDetails, setMusicDetails] = useState([]);

  useEffect(() => {
    fetch('./homeMusic.JSON')
      .then(res => res.json())
      .then(data => setMusicDetails(data));
  }, []);

  return (
    <div>
      <h1 className="text-center mb-5 mt-5">Some of Our Courses</h1>
      <div className="scientist-container row">
        <div className="details-container col-md-12 grids">
          {musicDetails.map(music => (
            <HomeDetails key={music.name} music={music}></HomeDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMusic;
