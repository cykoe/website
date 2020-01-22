import React from 'react';
import axios from 'axios';

import './Detail.scss';
import arrow_back from '../assets/arrow_back.svg';
import arrow_forward from '../assets/arrow_forward.svg';
import {IProject} from '../Project/Project';
import Popup from 'reactjs-popup';
import emoji from 'emoji-dictionary';
import Carousel, {Modal, ModalGateway} from 'react-images';

const ReactMarkdown = require('react-markdown');
const detailUrl = 'https://raw.githubusercontent.com/sircharlie/diary/master/';
const imageUrl = 'https://raw.githubusercontent.com/sircharlie/diary/master/';

export default class Detail extends React.Component<IProject, any> {
  constructor(props: IProject) {
    super(props);
    this.state = {
      detail: '',
      modalIsOpen: false,
      selectedIndex: 0,
    };
    this.closeModal = this.closeModal.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  toggleModal = (index: number) => {
    this.setState((state: any) => ({
      modalIsOpen: !state.modalIsOpen,
      selectedIndex: index,
    }));
  };

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
    const {modalIsOpen, selectedIndex} = this.state;
    const props = this.props;
    const emojiSupport = (text: any) => text.value.replace(/:\w+:/gi,
        (name: any) => emoji.getUnicode(name));
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
            lockScroll
            closeOnDocumentClick>
          {close =>
              <div className="detail">
                {}
                <ModalGateway>
                  {modalIsOpen ? (<Modal onClose={this.toggleModal}>
                    <Carousel
                        views={props.images.map(i => ({src: imageUrl + i}))}
                        currentIndex={selectedIndex}
                    />
                  </Modal>):null}
                </ModalGateway>
                <span className="close" onClick={close}>
                  &times;
                </span>
                <div className="row">
                  <div className="col-4 col-m-6 col-l-6 col-xl-6">
                    <div className="col-4">
                      <div className='font-2--2em underline'>{props.name}
                      </div>
                      <div className="font-1--1em">
                        {props.about}</div>
                    </div>
                    <div className="row">
                      <div className="col-4 col-m-6 col-l-6 col-xl-6">
                        <div className="font-2--2em underline">Platform</div>
                        <div className="font-1--1em">{props.platform}</div>
                      </div>
                      <div className="col-4 col-m-6 col-l-6 col-xl-6">
                        <div className="font-2--2em underline">Category</div>
                        <div className="font-1--1em">{props.category.map(
                            (c: string) => <span>{c} </span>)}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <div className="font-2--2em underline">Detail</div>
                        <div
                            className="font-1--1em">
                          <ReactMarkdown source={this.state.detail}
                                         renderers={{text: emojiSupport}}/>
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
                          (image: string, index: number) => <li key={index}
                                                                onClick={() => this.toggleModal(
                                                                    index)}><img
                              src={imageUrl + image} alt="image1"/>
                          </li>,
                      )}
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="row project-options">
                      <div
                          className="col-4 col-m-6 col-l-6 col-xl-6 font-1--4em"
                          onClick={this.previous}>
                        <span>previous project</span><img
                          src={arrow_back} alt="back"/></div>
                      <div
                          className="col-4 col-m-6 col-l-6 col-xl-6 font-1--4em"
                          onClick={this.next}>
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
