import React from 'react';
import portrait from './portrait.png';
import './main.scss';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Main: React.FC = () => {
  return (
      <div className='main'>
        <div className="left-intro">
          <div className="left-intro-title">
            I'm Charlie
          </div>
          <div className="left-intro-subtitle">
            Software Engineer
          </div>
        </div>
        <div className="middle-intro">
          <div className="middle-intro-sentence">
            I am a senior studying computer engineer at the University of
            Illinois
          </div>
          <div className="middle-intro-arrows">
            <ArrowBackIcon className="middle-intro-arrow middle-intro-arrow-active"/>
            <ArrowForwardIcon className="middle-intro-arrow"/>
          </div>
        </div>
        <div className="right-intro">
          <img src={portrait} className='portrait'/>
        </div>
      </div>
  );
};

export default Main;
