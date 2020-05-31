import React from 'react';
import './Home.scss';
import porfileImg from '../assets/profile_img.jpg';
import weatherDartSnapshot from '../assets/weatherdart_screenshot.jpg';

const Home = () => (
  <div className='homeView'>
    <div className='homeView__banner'>
      <img className='homeView__banner__profileImg' src={porfileImg} />
      <h1>Designer & Front-end Developer</h1>
      <p>Test content Test content Test content Test content </p>
    </div>

    <div className='homeView__aboutMe'>
      <div className='homeView__aboutMe__content'>
        <h2 className='homeView__aboutMe__content__title'>Hello, my name is Malcolm Lowery.</h2>
        <p className='homeView__aboutMe__content__coverLetter'>
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five 
          centuries.
        </p>
      </div>
    </div>

    <div className='homeView__recentWork'>
      <h2>Here is my recent work!</h2>
      <div className='homeView__recentWork__content'>
        
        <div className='homeView__recentWork__content__card'>
          <img src={weatherDartSnapshot} />
        </div>

        <div className='homeView__recentWork__content__card'>
          <img src={weatherDartSnapshot} />
        </div>

        <div className='homeView__recentWork__content__card'>
          <img src={weatherDartSnapshot} />
        </div>

      </div>
    </div>
  </div>
);

export default Home;