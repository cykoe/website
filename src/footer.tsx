import React from 'react';
import './footer.scss';

import facebook from './facebook.svg';
import youtube from './youtube.svg';
import twitter from './twitter.svg';
import sina from './sina-weibo.svg';
import zblit from './zblit.png';
import gohabit from './gohabit.png';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Footer: React.FC = () => {
  return (
      <div className='footer'>
        <div className='footer-follow'>
          <div className='footer-follow-wrapper'>
            <div className='footer-follow-title'>
              Follow Me
            </div>
            <div className='footer-follow-list'>
              <ul>
                <li><img src={facebook} className='footer-follow-logos'/></li>
                <li><img src={youtube} className='footer-follow-logos'/></li>
                <li><img src={twitter} className='footer-follow-logos'/></li>
                <li><img src={sina} className='footer-follow-logos'/></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-current'>
          <div className='footer-current-wrapper'>
            <div className='footer-current-title'>
              Currently Working On:
            </div>
            <div className='footer-current-subtitle'>
              Erhabo
            </div>
          </div>
        </div>
        <div className='footer-projects'>
          <span className='footer-projects-arrows'>
            <ArrowBackIcon
                className='footer-projects-arrow footer-projects-arrow-active'/>
            <ArrowForwardIcon className='footer-projects-arrow'/>
          </span>
          <ul className='footer-projects-list'>
            <li>
              <div className='footer-projects-item-title'>
                1. Zblit
              </div>
              <div>
                <img src={zblit} className='footer-projects-logos'/>
              </div>
            </li>
            <li>
              <div className='footer-projects-item-title'>
                2. Gohabit
              </div>
              <div>
                <img src={gohabit} className='footer-projects-logos'/>
              </div>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Footer;
