import React from 'react';
import axios from 'axios';

import './detail.scss';
import Logo from './assets/logo.svg';
import image from './assets/image.png';
import arrow_back from './assets/arrow_back.svg';
import arrow_forward from './assets/arrow_forward.svg';
import view from './assets/view.svg';
import {IProject} from './project';

const ReactMarkdown = require('react-markdown');
const detailUrl = 'https://raw.githubusercontent.com/sircharlie/diary/master/';

export default class Detail extends React.Component<IProject, any> {
  constructor(props: IProject) {
    super(props);
    this.state = {
      detail: ''
    }
  }

  async componentDidMount() {
    console.log(detailUrl + this.props.name + '/index.md');
    const response = await axios.get(detailUrl + this.props.name + '/index.md');
    this.setState({detail: response.data});
  }

  render() {
    const props = this.props;
    console.log(this.state.detail);
    return (
        <div className="row detail">
          <div className="col-1"/>
          <div className="col-5">
            <div className="row"><img src={Logo} alt="logo"/></div>
            <div className="row project-about">
              <div className="col-12 font-1--5em project-about--title">About the
                project
              </div>
              <div className="col-12 font-0--7em project-about--subtitle">
                <p>{props.about}</p></div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="font-1--5em">Platform</div>
                <div className="font-0--7em">{props.platform}</div>
              </div>
              <div className="col-6">
                <div className="font-1--5em">Category</div>
                <div className="font-0--7em">{props.category.map((c: string) => <span>{c} </span>)}</div>
              </div>
            </div>
            <div className="row project-about">
              <div className="col-12 font-1--5em project-about--title">Detail
              </div>
              <div className="col-12 font-0--7em project-about--subtitle">
                <ReactMarkdown source={this.state.detail}/>
              </div>
            </div>
            <div className="row project-source">
              <div className="col-12"><span>See the product</span><img
                  src={view} alt="view"/></div>
              <div className="col-12"><span>See the source code</span><img
                  src={view} alt="view"/></div>
            </div>
            <div className="row project-options">
              <div className="col-12"><span>Previous project</span><img
                  src={arrow_back} alt="back"/></div>
              <div className="col-12"><span>Next project</span><img
                  src={arrow_forward} alt="forward"/></div>
            </div>
          </div>
          <div className="col-5 image-gallery">
            <ul>
              <li><img src={image} alt="image1"/></li>
              <li><img src={image} alt="image1"/></li>
              <li><img src={image} alt="image1"/></li>
              <li><img src={image} alt="image1"/></li>
            </ul>
          </div>
          <div className="col-1"/>
        </div>
    );
  }
}
