import React from 'react';
import axios from 'axios';

import './detail.scss';
import arrow_back from './assets/arrow_back.svg';
import arrow_forward from './assets/arrow_forward.svg';
import {IProject} from './project';
import Popup from 'reactjs-popup';

const ReactMarkdown = require('react-markdown');
const detailUrl = 'https://raw.githubusercontent.com/sircharlie/diary/master/';
const imageUrl = 'https://raw.githubusercontent.com/sircharlie/diary/master/';

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
            modal
            contentStyle={{
              width: '80%',
              height: '80%',
              overflowY: 'scroll',
              background: '#F0ECE2',
            }}
            open={this.props.pop}
            onClose={this.closeModal}
            lockScroll={true}
            closeOnDocumentClick>
          {close =>
              <div className="detail">
                <span className="close" onClick={close}>
                  &times;
                </span>
                <div className="row">
                  <div className="col-4 col-m-6 col-l-6 col-xl-6">
                    <div className="row">
                      <div className="col-4">
                        <div className='font-2--2em'>{props.name}
                        </div>
                        <div className="font-1--1em">
                          {props.about}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 col-m-6 col-l-6 col-xl-6">
                        <div className="font-2--2em">Platform</div>
                        <div className="font-1--1em">{props.platform}</div>
                      </div>
                      <div className="col-4 col-m-6 col-l-6 col-xl-6">
                        <div className="font-2--2em">Category</div>
                        <div className="font-1--1em">{props.category.map(
                            (c: string) => <span>{c} </span>)}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <div className="font-2--2em">Detail</div>
                        <div
                            className="font-0--7em">
                          <ReactMarkdown source={this.state.detail}/>
                        </div>
                      </div>
                    </div>
                    <div className="row project-source">
                      <div className="col-4 font-1--8em">
                        <a
                            href={props.productUrl} target="_blank"
                            rel="noopener noreferrer">see the product</a>
                      </div>
                      <div className="col-4 font-1--8em">
                        <a
                            href={props.codeUrl} target="_blank"
                            rel="noopener noreferrer">source code</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-m-6 col-l-6 col-xl-6 gallery">
                    <ul>
                      {props.images.map(
                          (image: string, index: number) => <li key={index}><img
                              src={imageUrl + image} alt="image1"/>
                          </li>,
                      )}
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="row project-options">
                      <div className="col-4 col-m-6 col-l-6 col-xl-6 font-1--4em"
                           onClick={this.previous}>
                        <span>previous project</span><img
                          src={arrow_back} alt="back"/></div>
                      <div className="col-4 col-m-6 col-l-6 col-xl-6 font-1--4em" onClick={this.next}>
                        <span>next project</span><img
                          src={arrow_forward} alt="forward"/></div>
                    </div>
                  </div>
                </div>
              </div>
          }
        </Popup>
    );
  }
}
