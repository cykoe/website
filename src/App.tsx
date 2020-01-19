import React from 'react';

import './Apps.scss';
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
import copyright from './assets/copyright.svg';
import Project, {IProject} from './project';
import axios from 'axios';
import Detail from './detail';

const url = 'https://raw.githubusercontent.com/sircharlie/diary/master/projects.json';

class App extends React.Component {
  state: any = {
    items: [],
    clicks: [],
  };

  async componentDidMount() {
    const response = await axios.get(url);
    this.setState({
      items: response.data,
      clicks: new Array(response.data.length).fill(false),
    });
  }

  handleClick(index: number) {
    const newArray = [...this.state.clicks];
    newArray[index] = true;
    this.setState({clicks: newArray});
  }

  handleCloseModal(index: number) {
    const newArray = [...this.state.clicks];
    newArray[index] = false;
    this.setState({clicks: newArray});
  }

  handleNext(index: number) {
    const newArray = [...this.state.clicks];
    newArray[index] = false;
    newArray[(index + 1) % newArray.length] = true;

    this.setState({clicks: newArray});
  }

  handlePrevious(index: number) {
    const newArray = [...this.state.clicks];
    newArray[index] = false;
    const result = index - 1 < 0 ? newArray.length - 1:index - 1;
    newArray[result] = true;
    this.setState({clicks: newArray});
  }

  render() {
    return (
        <div className="App">
          <div className='main-section'>
            <div className='row'>
              <div className="col-1 offset-s-1 offset-m-1 col-l-1 offset-l-2">

                <a href="https://github.com/sircharlie"
                   target='_blank'><img src={Logo} alt="logo"
                                        className='CLogo'/></a>
              </div>
            </div>
            <div className='row introduction'>
              <div
                  className='col-2 offset-s-1 col-m-2 col-l-1 offset-l-2 col-s-1 col-xs-1 introduction__logos'>
                <Logos/>
              </div>
              <div
                  className='col-2 col-m-3 col-l-3 text-center introduction__titles'>
                <p className='font-2--8em'>Charlie Yang</p>
                <p className='font-1--5em'>Software Engineer</p>
              </div>
              <div
                  className='col-2 col-m-5 col-l-3 introduction__logo'>
                <img src={MainLogo} alt=""/>
              </div>
              <div
                  className='col-3 col-xs-9 introduction__logos--small'>
                <Logos/>
              </div>
            </div>
          </div>

          <div className='list-section'>
            {
              this.state.items.map(
                  (item: IProject, index: number) => <Project
                      key={index} index={index} name={item.name}
                      description={item.description}
                      images={item.images}
                      technology={item.technology}
                      onClick={this.handleClick.bind(this, index)}
                      odd={index % 2 !== 0} about={''} platform={[]}
                      category={[]} detail={''}/>)

            }
            {this.state.items.map(
                (item: IProject, index: number) => <Detail key={index}
                                                           index={index}
                                                           name={item.name}
                                                           description={''}
                                                           images={item.images}
                                                           odd={index %
                                                           2 !== 0}
                                                           technology={[]}
                                                           about={item.about}
                                                           platform={item.platform}
                                                           category={item.category}
                                                           codeUrl={item.codeUrl}
                                                           productUrl={item.productUrl}
                                                           pop={this.state.clicks[index]}
                                                           closeModal={this.handleCloseModal.bind(
                                                               this, index)}
                                                           next={this.handleNext.bind(
                                                               this, index)}
                                                           previous={this.handlePrevious.bind(
                                                               this, index)}
                                                           detail={item.detail}/>)}

          </div>

          <div className='footer-section text-center'>
            <ul className="col-12">
              <li><a href="https://github.com/sircharlie"
                     target='_blank'><img src={weibo_light} alt=""/></a></li>
              <li><a href="https://github.com/sircharlie"
                     target='_blank'><img src={twitter_light} alt=""/></a></li>
              <li><a href="https://github.com/sircharlie"
                     target='_blank'><img src={youtube_light} alt=""/></a></li>
              <li><a href="mailto:esculin.hao@gmail.com?Subject=Hello%20there"
                     target="_top"><img src={email_light} alt="email"/></a></li>
            </ul>
            <div>
              <a href="https://github.com/sircharlie" target='_blank'><img
                  src={copyright} alt="sircharlie"/></a>
            </div>
          </div>
        </div>
    );
  }
}

function Logos() {
  return (
      <ul>
        <li><a href="https://github.com/sircharlie" target='_blank'><img
            src={weibo_dark}
            alt="weibo"/></a></li>
        <li><a href="https://github.com/sircharlie" target='_blank'><img
            src={twitter_dark}
            alt="twitter"/></a>
        </li>
        <li><a href="https://github.com/sircharlie" target='_blank'><img
            src={youtube_dark}
            alt="youtube"/></a>
        </li>
        <li><a href="mailto:esculin.hao@gmail.com?Subject=Hello%20there"
               target="_top"><img src={email_dark} alt="email"/></a></li>
      </ul>
  );
}

export default App;

