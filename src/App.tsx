import React from 'react';
import './Apps.scss';
import Header from './header';
import Main from './main';
import Footer from './footer';
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
      <div className='root'>
        <div className="app">
          <div className='main'>
            <div className='row'>
              <div className='col-1'/>
              <div className="col-1">
                <img src={Logo} alt="logo"/>
              </div>
            </div>
            <div className='row introduction'>
              <div className='col-1'/>
              <div className='col-3 vertical-align--bottom'>
                <ul className="float-left">
                  <li><img src={weibo_dark} alt="weibo"/></li>
                  <li><img src={twitter_dark} alt="twitter"/></li>
                  <li><img src={youtube_dark} alt="youtube"/></li>
                  <li><img src={email_dark} alt="email"/></li>
                </ul>
              </div>
              <div
                  className='col-2 vertical-align--center introduction__titles'>
                <p className='font-2--5em'>Charlie Yang</p>
                <p className='font-1--3em'>Software Engineer</p>
              </div>
              <div className='col-3 vertical-align--center introduction__logo'>
                <img src={MainLogo} alt=""/>
              </div>
              <div
                  className='col-3 vertical-align--bottom introduction__scroll'>
                <span className='scroll-down-text'>SCROLL DOWN</span>
                <img src={vertial_line} alt="line"/>
              </div>
            </div>
          </div>

          <div className='project-list'>
            <div className='row project-list'>
              <div className='col-1'></div>
              <div className='project-list-item col-10'>
                <div className='col-5 project-list-item-images'>
                  <ul>
                    <li><a href='/projects'><img src={image}/></a></li>
                    <li><img src={image}/></li>
                  </ul>
                </div>
                {/* images */}
                <div className='col-5 project-list-item-name'>
                  <div className='item-name-section'>
                    <div className='font-3em'><img src={horizontal_line}/></div>
                    <div className='font-3em'>01</div>
                    <div className='title font-3em'>
                      Zblit
                      <div className='sub-title font-2em'>next-generataion
                        receipt
                        splitting
                        platform
                      </div>
                    </div>
                  </div>
                </div>
                {/* title */}
                <div className='col-4'></div>
                {/* buffer zone*/}
                <div
                    className='col-3 project-list-item-view vertical-align--center'>
                  <img src={view_project}/>
                </div>
                {/* view-project button */}
              </div>
              <div className='col-1'></div>
            </div>

            <div className='row project-list'>
              <div className='col-1'></div>
              <div className='project-list-item-reverse col-10'>
                <div
                    className='col-3 project-list-item-view vertical-align--center'>
                  <img src={view_project}/>
                </div>
                {/* view-project button */}
                <div className='col-2 project-list-item-space'></div>
                {/* buffer zone*/}
                <div className='col-5 project-list-item-name'>
                  <div className='item-name-section'>
                    <div className='font-3em'><img src={horizontal_line}/></div>
                    <div className='font-3em'>01</div>
                    <div className='title font-3em'>
                      Zblit
                      <div className='sub-title font-2em'>next-generataion
                        receipt
                        splitting
                        platform
                      </div>
                    </div>
                  </div>
                </div>
                {/* title */}
                <div className='col-5 project-list-item-images'>
                  <ul>
                    <li><img src={image}/></li>
                    <li><img src={image}/></li>
                  </ul>
                </div>
                {/* images */}
              </div>
              <div className='col-1'></div>
            </div>

          </div>

          {/*<div className='row footer'>*/}
          {/*  <ul className="float-left col-12 text-center">*/}
          {/*    <li><img src={weibo_light}/></li>*/}
          {/*    <li><img src={twitter_light}/></li>*/}
          {/*    <li><img src={youtube_light}/></li>*/}
          {/*    <li><img src={email_light}/></li>*/}
          {/*  </ul>*/}
          {/*  <div className='footer-copyright text-center'>*/}
          {/*    <img src={copyright}/>*/}
          {/*  </div>*/}
          {/*</div>*/}
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

