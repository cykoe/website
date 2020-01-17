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
import Project, {IIProject} from './project';
import axios from 'axios';

const ReactMarkdown = require('react-markdown');
const url = 'https://raw.githubusercontent.com/sircharlie/diary/master/projects.json';

class App extends React.Component {
  state: any = {
    items: [],
  };

  async componentDidMount() {
    const response = await axios.get(url);
    this.setState({items: response.data});
  }

  render() {
    return (
        <div className="App">
          <div className='main-section'>
            <div className='row'>
              <div className='col-1 col-xl-2'/>
              <div className="col-1">
                <img src={Logo} alt="logo" className='CLogo'/>
              </div>
            </div>
            <div className='row introduction'>
              {/*TODO: restore this*/}
              <div className='col-1 col-xl-2 col-xs-1 introduction__buffer'/>
              <div
                  className='col-2 col-l-3 col-xl-1 col-xs-2 vertical-align--bottom introduction__logos'>
                <ul>
                  <li><img src={weibo_dark} alt="weibo"/></li>
                  <li><img src={twitter_dark} alt="twitter"/></li>
                  <li><img src={youtube_dark} alt="youtube"/></li>
                  <li><img src={email_dark} alt="email"/></li>
                </ul>
              </div>
              <div
                  className='col-3 col-l-2 col-xl-3 col-xs-6 vertical-align--center text-center introduction__titles'>
                <p className='font-2--0em'>Charlie Yang</p>
                <p className='font-1--3em'>Software Engineer</p>
              </div>
              <div
                  className='col-5 col-xl-3 col-xs-6 vertical-align--center introduction__logo'>
                <img src={MainLogo} alt=""/>
              </div>
              <div
                  className='col-xs-9 vertical-align--bottom introduction__logos--small'>
                <ul>
                  <li><img src={weibo_dark} alt="weibo"/></li>
                  <li><img src={twitter_dark} alt="twitter"/></li>
                  <li><img src={youtube_dark} alt="youtube"/></li>
                  <li><img src={email_dark} alt="email"/></li>
                </ul>
              </div>
              <div
                  className='col-2 col-xs-2 vertical-align--bottom text-center introduction__scroll'>
                <span className='scroll-down-text'><p className='font-1--0em'>SCROLL DOWN</p></span>
              </div>
            </div>
          </div>

          <div className='list-section'>
            {this.state.items.map(
                (item: IIProject, index: number) => <Project
                    key={index} index={index} name={item.name}
                    description={item.description}
                    images={item.images}
                    technology={item.technology}
                    reverse={index % 2 !== 0}/>)}
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
  }
}

// function Project() {
//   return (
//       <div className='row'>
//         <div className='col-6'>
//           <div className='row'>
//             <img src={Logo}/>
//           </div>
//           <div className='row'>
//             <p>
//               about the project
//             </p>
//             <p>asdkjashgdj adhasjdsa asdsha jahdjashdjgshdj sgadhjsgd
//               gasjdgsaj </p>
//           </div>
//           <div className='row'>
//             <p>see the product</p>
//           </div>
//           <div className="row">
//             <p>see the source code</p>
//           </div>
//           <div className="row"><span><img src={horizontal_line} alt=""/></span>
//             <p>previous product</p></div>
//           <div className="row"><span><img src={horizontal_line}/></span>
//             <p>next product</p>
//           </div>
//         </div>
//         <div className='col-6 img'>
//           <ul>
//             <li><img src={image} alt=""/></li>
//             <li><img src={image} alt=""/></li>
//             <li><img src={image} alt=""/></li>
//             <li><img src={image} alt=""/></li>
//           </ul>
//         </div>
//       </div>
//   );
// }

class PersonList extends React.Component {
  state = {
    contents: [],
    descriptions: [],
  };

  componentDidMount() {
    // axios.get('https://api.github.com/repos/sircharlie/diary/contents').
    //     then(res => {
    //       const repos = res.data.map((d: any) => d.download_url);
    //       return Promise.all(
    //           repos.filter((r: any) => !!r).map((r: any) => axios.get(r)));
    //     }).then(res => {
    //   res.forEach((r: any) => {
    //     if (Array.isArray(r)) {
    //       this.setState({descriptions: res.map((r: any) => r.data)});
    //
    //     } else {
    //       this.setState({contents: res.map((r: any) => r.data)});
    //     }
    //
    //   });
    // });
    // axios.get('https://raw.githubusercontent.com/sircharlie/diary/master/projects.json').
    //     then(res => {
    //       this.setState({descriptions: res.data})
    //     })
  }

  render() {
    // console.log(this.state.contents);
    console.log(this.state.descriptions);
    if (this.state.contents[0]) {
      return (<ReactMarkdown source={this.state.contents[0]}/>);
    }
    return (<div></div>);
  }
}

export default App;

