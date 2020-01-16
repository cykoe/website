import React from 'react';
import './Apps.scss';
import './col.scss';
import Logo from './assets/logo.svg';
import MainLogo from './assets/x.svg';
import weibo_dark from './assets/weibo_dark.svg';
import weibo_light from './assets/weibo_light.svg';
import email_dark from './assets/email_dark.svg';
import email_light from './assets/email_light.svg';
import youtube_dark from './assets/youtube_dark.svg';
import youtube_light from './assets/youtube_light.svg';
import twitter_dark from './assets/twitter_dark.svg';
import twitter_light from './assets/twitter_light.svg';
import horizontal_line from './assets/horizontal_line.svg';
import vertial_line from './assets/vertical_line.svg';
import view_project from './assets/view_project.svg';
import copyright from './assets/copyright.svg';
import image from './assets/image.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const App: React.FC = () => {
  return (
      <div className="App">
        <div className='main-section'>
          <div className='row'>
            <div className='col-1 col-xl-2'/>
            <div className="col-1">
              <img src={Logo} alt="logo"/>
            </div>
          </div>
          <div className='row introduction'>
            {/*TODO: restore this*/}
            <div className='col-1 col-xl-2 col-xs-1 introduction__buffer'/>
            <div className='col-2 col-l-3 col-xl-1 col-xs-2 vertical-align--bottom introduction__logos'>
              <ul>
                <li><img src={weibo_dark} alt="weibo"/></li>
                <li><img src={twitter_dark} alt="twitter"/></li>
                <li><img src={youtube_dark} alt="youtube"/></li>
                <li><img src={email_dark} alt="email"/></li>
              </ul>
            </div>
            <div className='col-3 col-l-2 col-xl-3 col-xs-6 vertical-align--center text-center introduction__titles'>
              <p className='font-2--0em'>Charlie Yang</p>
              <p className='font-1--3em'>Software Engineer</p>
            </div>
            <div className='col-4 col-xl-3 col-xs-6 vertical-align--center introduction__logo'>
              <img src={MainLogo} alt=""/>
            </div>
            <div className='col-xs-9 vertical-align--bottom introduction__logos--small'>
              <ul>
                <li><img src={weibo_dark} alt="weibo"/></li>
                <li><img src={twitter_dark} alt="twitter"/></li>
                <li><img src={youtube_dark} alt="youtube"/></li>
                <li><img src={email_dark} alt="email"/></li>
              </ul>
            </div>
            <div className='col-2 col-xs-2 vertical-align--bottom text-center introduction__scroll'>
              <span className='scroll-down-text'><p className='font-1--0em'>SCROLL DOWN</p></span>
              <img src={vertial_line} alt="line"/>
            </div>
          </div>
        </div>

        <div className='list-section'>
          <div className='row list-section__item'>
            <div className='col-2 col-xl-3'/>
            <div className='col-9 col-xl-7 project'>
              <div className='col-4 col-l-5 project__images'>
                <ul>
                  <li><img src={image} alt=""/></li>
                  <li><img src={image} alt=""/></li>
                </ul>
              </div>
              <div className='col-8 col-l-5 project__title'>
                <div className='item-name-section'>
                  <div className='font-2--0em'><p>01</p></div>
                  <div>
                    <p className='font-2--0em'>Zblit</p>
                    <p className='font-1--1em'>next-generation receipt splitting
                      platform</p>
                  </div>
                </div>
              </div>
              <div className='col-1 col-l-4'/>
              <div className='col-3 col-l-3 project__view vertical-align--center'>
                <img src={view_project} alt=""/>
              </div>
            </div>
            <div className='col-1 col-xl-2'/>
            </div>

          <div className='row list-section__item'>
            <div className='col-1 col-xl-2'/>
            <div className='col-9 col-xl-7 project--reverse'>
              <div className='col-3 col-l-3 project__view vertical-align--center'>
                <img src={view_project} alt=""/>
              </div>
              <div className='col-1 col-l-4 project__buffer'/>
              <div className='col-8 col-l-5 project__title'>
                <div className='item-name-section'>
                  <div className='font-2--0em'>01</div>
                  <div>
                    <p className='font-2--0em'>Zblit</p>
                    <p className='font-1--1em'>next-generation receipt splitting
                      platform</p>
                  </div>
                </div>
              </div>
              <div className='col-4 col-l-5 project__images'>
                <ul>
                  <li><img src={image} alt=""/></li>
                  <li><img src={image} alt=""/></li>
                </ul>
              </div>
            </div>
            <div className='col-2 col-xl-3'/>
          </div>
        </div>

        <div className='footer-section text-center'>
          <ul className="col-12">
            <li><img src={weibo_light} alt=""/></li>
            <li><img src={twitter_light} alt=""/></li>
            <li><img src={youtube_light} alt=""/></li>
            <li><img src={email_light} alt=""/></li>
          </ul>
          <div>
            <img src={copyright} alt=""/>

          </div>
        </div>
      </div>
  );
};

function Project() {
  return (
      <div className='row'>
        <div className='col-6'>
          <div className='row'>
            <img src={Logo}/>
          </div>
          <div className='row'>
            <p>
              about the project
            </p>
            <p>asdkjashgdj adhasjdsa asdsha jahdjashdjgshdj sgadhjsgd
              gasjdgsaj </p>
          </div>
          <div className='row'>
            <p>see the product</p>
          </div>
          <div className="row">
            <p>see the source code</p>
          </div>
          <div className="row"><span><img src={horizontal_line} alt=""/></span>
            <p>previous product</p></div>
          <div className="row"><span><img src={horizontal_line}/></span>
            <p>next product</p>
          </div>
        </div>
        <div className='col-6 img'>
          <ul>
            <li><img src={image} alt=""/></li>
            <li><img src={image} alt=""/></li>
            <li><img src={image} alt=""/></li>
            <li><img src={image} alt=""/></li>
          </ul>
        </div>
      </div>
  );
}

export default App;

