import React from 'react';

import './project.scss';
import angular from './assets/angular.svg';
import react from './assets/react.svg';
import vue from './assets/vue.svg';
import tensorflow from './assets/tensorflow.svg';
import gcp from './assets/gcp.svg';
import mysql from './assets/mysql.svg';
import alibaba from './assets/alibaba.svg';
import serverless from './assets/serverless.svg';
import mongoDb from './assets/mongoDb.svg';
import flutter from './assets/flutter.svg';
import aws from './assets/aws.svg';

const imageUrl = 'https://raw.githubusercontent.com/sircharlie/diary/master/';

const imageDict: any = {
  'angular': angular,
  'react': react,
  'vue': vue,
  'tensorflow': tensorflow,
  'gcp': gcp,
  'mysql': mysql,
  'alibaba': alibaba,
  'serverless': serverless,
  'mongoDb': mongoDb,
  'flutter': flutter,
  'aws': aws,
};

export interface IProject {
  index: number;
  name: string;
  description: string;
  images: string[];
  reverse: boolean;
  technology: string[];
  about: string;
  platform: string[];
  category: string[];
  detail: string;
  pop?: boolean;
  onClick?: any;
  closeModal?: any;
  next?: any;
  previous?: any;
}

export default class Project extends React.Component<IProject, any> {
  constructor(props: IProject) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    console.log('clicked!');
    this.props.onClick();
  }

  render() {
    const props = this.props;
    return props.reverse ?
        (
            <div className='row list-section__item' onClick={this.handleClick}>
              <div className='col-2 col-xl-3'/>
              <div className='col-9 col-xl-7 project'>
                <div className='col-4 col-l-7 project__images'>
                  <ul>
                    <li><img src={imageUrl + props.images[0]} alt=""/></li>
                    <li><img src={imageUrl + props.images[1]} alt=""/></li>
                  </ul>
                </div>
                <div className='col-8 col-l-5 project__title'>
                  <div className='item-name-section'>
                    <div className='font-2--0em'><p>{props.index + 1}.</p></div>
                    <div>
                      <p className='font-2--0em'>{props.name}</p>
                      <p className='font-0--7em'>{props.description}</p>
                      {props.technology.map(
                          (t: string) => <img src={imageDict[t]} alt={t}/>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-1 col-xl-2'/>
            </div>
        )
        :
        (
            <div className='row list-section__item' onClick={this.handleClick}>
              <div className='col-1 col-xl-2'/>
              <div className='col-9 col-xl-7 project--reverse'>
                <div className='col-1 col-l-6 project__buffer'/>
                <div className='col-8 col-l-5 project__title'>
                  <div className='item-name-section'>
                    <div className='font-2--0em'>{props.index + 1}.</div>
                    <div>
                      <p className='font-2--0em'>{props.name}</p>
                      <p className='font-0--7em'>{props.description}</p>
                      {props.technology.map(
                          (t: string) => <img src={imageDict[t]} alt={t}/>)}
                    </div>
                  </div>
                </div>
                <div className='col-4 col-l-7 project__images'>
                  <ul>
                    <li><img src={imageUrl + props.images[0]} alt=""/></li>
                    <li><img src={imageUrl + props.images[1]} alt=""/></li>
                  </ul>
                </div>
              </div>
              <div className='col-2 col-xl-3'/>
            </div>
        );
  }
}
