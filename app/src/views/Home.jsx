import React from 'react';
import './Home.scss';
import porfileImg from '../assets/profile_img.jpg';
import weatherDartSnapshot from '../assets/weatherdart_screenshot.jpg';
import reactLogo from '../assets/react_logo.png';
import softSkillsIcon from '../assets/softSkills_icon.png';
import Card from '../components/Card';

const Home = () => (
  <div className='homeView'>
    <div className='homeView__banner'>
      <img className='homeView__banner__profileImg' src={porfileImg} />
      <h1>Designer & Front-end Developer</h1>
      <p>I have an eye for design both visually and programmatically. It's what I love doing.</p>
    </div>

    <div className='homeView__aboutMe'>
      <div className='homeView__aboutMe__content'>
        <h2 className='homeView__aboutMe__content__title'>Hello, my name is Malcolm Lowery.</h2>
        <p className='homeView__aboutMe__content__coverLetter'>
          Since starting of my 2 year journey as a UI/UX designer and frontend developer, I've worked 
          remotely with a startup. I have also accomplished building a few
          personal projects that have helped bring out the best of my skills with UI/UX
          and program best practices in mind. With that said, I am always curious as to how I can improve
          as a developer. There is nothing more refreshing than learning something new!
        </p>
      </div>
    </div>

    <div className='homeView__profile'>

      <Card className='homeView__profile__card'>
        <h3 className='homeView__profile__card__title'>Soft Skills</h3>
        <div className='homeView__profile__card__content'>
          <p>Work Ethic</p>
          <p>Communication</p>
          <p>Problem Solving</p>
          <p>Creativity</p>
          <p>Teamwork</p>
          <p>Adaptability</p>
        </div>
        <img className='homeView__profile__card__reactLogo' src={reactLogo} />
      </Card>

      <Card className='homeView__profile__card'>
        <h3 className='homeView__profile__card__title'>Tech Skills</h3>
        <div className='homeView__profile__card__content'>
          <p>React</p>
          <p>Javascript</p>
          <p>HTML</p>
          <p>CSS & Sass</p>
          <p>Material-UI</p>
          <p>Git</p>
        </div>
        <img className='homeView__profile__card__skillsIcon' src={softSkillsIcon} />
      </Card>

    </div>

    <div className='homeView__recentWork'>
      <h2>Here is my recent work!</h2>
      <div className='homeView__recentWork__content'>
        
        <div className='homeView__recentWork__content__card'>
          <img src={weatherDartSnapshot} />
          <div className='homeView__recentWork__content__card__text'>
            <p>WeatherDART</p>
            <p>Realtime Weather App</p>
          </div>
        </div>

        <div className='homeView__recentWork__content__card'>
          <div className='homeView__recentWork__content__card__empty'>
            <h3>InternX</h3>
            <h3>Comming Soon</h3>
          </div>
        </div>
        
        <div className='homeView__recentWork__content__card'>
          <div className='homeView__recentWork__content__card__empty'>
            <h3>Food Rush</h3>
            <h3>Comming Soon</h3>
          </div>
        </div>

      </div>
    </div>

    <div className='homeView__footer'>
      <p>A Malcolm Lowery Project</p>
    </div>
  </div>
);

export default Home;