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
      <Router>
        <div className="App">
          <Switch>
            <Route path='/projects'>
              <Project/>
            </Route>
            <Route path='/'>
              <div className='main-page'>
                <div className='row'>
                  <div className='col-1'></div>
                  <header className="col-1">
                    <img src={Logo} className="float-left"/>
                  </header>
                </div>
                <div className='row flex-grow-1'>
                  <div className='col-1'></div>
                  <div className='col-3 vertical-bottom'>
                    <ul className="float-left">
                      <li><img src={weibo_dark}/></li>
                      <li><img src={twitter_dark}/></li>
                      <li><img src={youtube_dark}/></li>
                      <li><img src={email_dark}/></li>
                    </ul>
                  </div>
                  <div className='col-1 vertical-center'>
                    <div className='float-left'>
                      <p>Charlie Yang</p>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                  <div className='col-4 vertical-center'>
                    <img src={MainLogo}/>
                  </div>
                  <div className='col-2 vertical-bottom'>
                    <p className='scroll-down-text'>Scroll Down</p>
                    <img src={vertial_line}/>
                  </div>

                </div>
              </div>

              <div className='project-list-section'>

                <div className='row project-list'>
                  <div className='col-1'></div>
                  <div className='project-list-item col-10'>
                    <div className='col-5 project-list-item-name'>
                      <div className='item-name-section'>
                        <div><img src={horizontal_line}/></div>
                        <div>01</div>
                        <Link to="/projects">About</Link>
                        <div className='title'>
                          Zblit
                          <div className='sub-title'>next-generataion receipt
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
                    <div className='col-4'></div>
                    {/* buffer zone*/}
                    <div
                        className='col-3 project-list-item-view vertical-center'>
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
                        className='col-3 project-list-item-view vertical-center'>
                      <img src={view_project}/>
                    </div>
                    {/* view-project button */}
                    <div className='col-4 project-list-item-space'></div>
                    {/* buffer zone*/}
                    <div className='col-5 project-list-item-name'>
                      <div className='item-name-section'>
                        <div><img src={horizontal_line}/></div>
                        <div>01</div>
                        <div className='title'>
                          Zblit
                          <div className='sub-title'>next-generataion receipt
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

                <div className='row project-list'>
                  <div className='col-1'></div>
                  <div className='project-list-item col-10'>
                    <div className='col-5 project-list-item-name'>
                      <div className='item-name-section'>
                        <div><img src={horizontal_line}/></div>
                        <div>01</div>
                        <div className='title'>
                          Zblit
                          <div className='sub-title'>next-generataion receipt
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
                    <div className='col-4'></div>
                    {/* buffer zone*/}
                    <div
                        className='col-3 project-list-item-view vertical-center'>
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
                        className='col-3 project-list-item-view vertical-center'>
                      <img src={view_project}/>
                    </div>
                    {/* view-project button */}
                    <div className='col-4 project-list-item-space'></div>
                    {/* buffer zone*/}
                    <div className='col-5 project-list-item-name'>
                      <div className='item-name-section'>
                        <div><img src={horizontal_line}/></div>
                        <div>01</div>
                        <div className='title'>
                          Zblit
                          <div className='sub-title'>next-generataion receipt
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

              <div className='row footer'>
                <ul className="float-left col-12 text-center">
                  <li><img src={weibo_light}/></li>
                  <li><img src={twitter_light}/></li>
                  <li><img src={youtube_light}/></li>
                  <li><img src={email_light}/></li>
                </ul>
                <div className='footer-copyright text-center'>
                  <img src={copyright}/>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

function Project() {
  return (
      <div className='row'>
        <div className='col-6'>
          <div className='row'>
            <img src={Logo} />
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

