import React from 'react';
import axios from 'axios';

import './detail.scss';
import image from './assets/image.png';
import arrow_back from './assets/arrow_back.svg';
import arrow_forward from './assets/arrow_forward.svg';
import view from './assets/view.svg';
import {IProject} from './project';
import Popup from 'reactjs-popup';

const ReactMarkdown = require('react-markdown');
const detailUrl = 'https://raw.githubusercontent.com/sircharlie/diary/master/';

export default class Detail extends React.Component<IProject, any> {
  constructor(props: IProject) {
    super(props);
    this.state = {
      detail: '',
    };
    this.closeModal = this.closeModal.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  closeModal() {
    this.props.closeModal();
  }

  next() {
    this.props.next();
  }

  previous() {
    this.props.previous();
  }

  async componentDidMount() {
    const response = await axios.get(detailUrl + this.props.name + '/index.md');
    this.setState({detail: response.data});
  }

  render() {
    const props = this.props;
    return (
        <Popup
            open={this.props.pop}
            onClose={this.closeModal}
            closeOnDocumentClick>
          <div className="row detail">
            <div className="col-6">
              <div className="row project-about">
                <div className="col-12 font-1--3em project-about--title">About
                  the
                  project
                </div>
                <div className="col-12 font-0--8em project-about--subtitle">
                  <p>{props.about}</p></div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="font-1--3em">Platform</div>
                  <div className="font-0--8em">{props.platform}</div>
                </div>
                <div className="col-6">
                  <div className="font-1--3em">Category</div>
                  <div className="font-0--8em">{props.category.map(
                      (c: string) => <span>{c} </span>)}</div>
                </div>
              </div>
              <div className="row project-about">
                <div className="col-12 font-1--3em project-about--title">Detail
                </div>
                <div className="col-12 font-0--8em project-about--subtitle">
                  <ReactMarkdown source={this.state.detail}/>
                </div>
              </div>
              <div className="row project-source">
                <div className="col-12 font-0--8em"><span>See the product</span><img
                    src={view} alt="view"/></div>
                <div className="col-12 font-0--8em"><span>See the source code</span><img
                    src={view} alt="view"/></div>
              </div>
              <div className="row project-options">
                <div className="col-12 font-0--8em" onClick={this.previous}><span>Previous project</span><img
                    src={arrow_back} alt="back"/></div>
                <div className="col-12 font-0--8em" onClick={this.next}><span>Next project</span><img
                    src={arrow_forward} alt="forward"/></div>
              </div>
            </div>
            <div className="col-6 image-gallery">
              <ul>
                <li><img src={image} alt="image1"/></li>
                <li><img src={image} alt="image1"/></li>
                <li><img src={image} alt="image1"/></li>
                <li><img src={image} alt="image1"/></li>
              </ul>
            </div>
          </div>
        </Popup>
    );
  }
}
