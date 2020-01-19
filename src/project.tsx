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
  odd: boolean;
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
  productUrl?: string;
  codeUrl?: string;
}

export default class Project extends React.Component<IProject, any> {
  constructor(props: IProject) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  evenProject() {
    const props = this.props;
    return (
        <div className='row list-section__item' onClick={this.handleClick}>
          <div className='col-4 col-s-10 col-xs-10 col-xl-7 project-odd'>
            <div
                className='col-4 col-s-8 col-xs-8 col-l-5 project-odd__title'>
              <Title index={props.index + 1} name={props.name}
                     description={props.description}
                     technology={props.technology}/>
            </div>
            <div
                className='col-4 col-s-4 col-xs-4 col-l-7 project-odd__images'>
              <Image images={props.images}/>
            </div>
          </div>
        </div>
    );
  }

  oddProject() {
    const props = this.props;
    return (
        <div className='row list-section__item' onClick={this.handleClick}>
          <div className='col-10 col-s-10 col-xs-10 col-xl-7 project-even'>
            <div className='col-4 project-even__images'>
              <Image images={props.images}/>
            </div>
            <div
                className='col-4 col-s-8 col-xs-8 col-l-5 project-even__title'>
              <Title index={props.index + 1} name={props.name}
                     description={props.description}
                     technology={props.technology}/>
            </div>
            <div className='col-4 project-even__images--small'>
              <Image images={props.images}/>
            </div>
          </div>
        </div>
    );
  }

  render() {
    const props = this.props;
    return props.odd ? this.oddProject():this.evenProject();
  }
}

function Image(props: { images: string[] }) {
  return (
      <ul>
        <li><img src={imageUrl + props.images[0]} alt=""/></li>
        <li><img src={imageUrl + props.images[1]} alt=""/></li>
      </ul>
  );
}

interface ITitle {
  index: number;
  name: string;
  description: string;
  technology: string[];
}

function Title(props: ITitle) {
  return (
      <div className='item-name-section'>
        <div className='font-2--2em'>{props.index}.</div>
        <div>
          <p className='font-2--2em'>{props.name}</p>
          <p className='font-0--9em'>{props.description}</p>
          <div>
            {props.technology.map(
                (t: string) => <img src={imageDict[t]} alt={t}/>)}
          </div>
        </div>
      </div>
  );
}
