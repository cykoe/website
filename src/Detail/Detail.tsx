import React, {useState, useEffect} from 'react';
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

export default function(props: IProject) {
  const [detail, setDetail] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const closeModal = () => {
    props.closeModal();
  };

  const next = () => {
    props.next();
  };

  const previous = () => {
    props.previous();
  };

  const toggleModal = (index: number) => {
    setModalIsOpen(!modalIsOpen);
    setSelectedIndex(index);
  };

  const emojiSupport = (text: any) => text.value.replace(/:\w+:/gi,
      (name: any) => emoji.getUnicode(name));

  useEffect(() => {
    async function getData() {
      const response = await axios.get(detailUrl + props.name + '/index.md');
      setDetail(response.data);
    }
    getData();
  });

  return (
      <Popup
          modal
          contentStyle={{
            width: '80%',
            height: '80%',
            overflowY: 'scroll',
            background: '#F0ECE2',
          }}
          open={props.pop}
          onClose={closeModal}
          lockScroll
          closeOnDocumentClick>
        {close =>
            <div className="detail">
              {}
              <ModalGateway>
                {modalIsOpen ? (<Modal onClose={toggleModal}>
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
                          (c: string, index: number) => <span
                              key={index}>{c} </span>)}</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="font-2--2em underline">Detail</div>
                      <div
                          className="font-1--1em">
                        <ReactMarkdown source={detail}
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
                                                              onClick={() => toggleModal(
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
                        onClick={previous}>
                      <span>previous project</span><img
                        src={arrow_back} alt="back"/></div>
                    <div
                        className="col-4 col-m-6 col-l-6 col-xl-6 font-1--4em"
                        onClick={next}>
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
