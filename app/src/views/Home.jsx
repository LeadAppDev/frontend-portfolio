import React from 'react';
import './Home.scss';
import porfileImg from '../assets/profile_img.jpg';

const Home = () => (
  <div className='homeView'>
    <div className='homeView__banner'>
      <img className='homeView__banner__profileImg' src={porfileImg} />
      <h1>Designer, Front-end Developer</h1>
      <p>Test content Test content Test content Test content </p>
    </div>

    <div className='homeView__aboutMe'>
      <div className='homeView__aboutMe__content'>
        
      </div>
    </div>
  </div>
);

export default Home;