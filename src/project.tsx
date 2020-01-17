import React from 'react';

import './project.scss';
import view_project from './assets/view_project.svg';

import './col.scss';

const imageUrl = 'https://raw.githubusercontent.com/sircharlie/diary/master/';

export function Project(props: any) {
  const description = props.description;
  const hi = 'col-xl-1';
  // TODO: make project class dynamic based
  return (<div className={`project col-9 ${hi}`}>
    <div className='col-4 col-l-5 project__images'>
      <ul>
        <li><img src={imageUrl + description.images[0]} alt=""/></li>
        <li><img src={imageUrl + description.images[1]} alt=""/></li>
      </ul>
    </div>
    <div className='col-8 col-l-5 project__title'>
      <div className='item-name-section'>
        <div className='font-2--0em'><p>01</p></div>
        <div>
          <p className='font-2--0em'>{description.name}</p>
          <p className='font-1--1em'>{description.description}</p>
        </div>
      </div>
    </div>
    <div className='col-1 col-l-4'/>
    <div
        className='col-3 col-l-3 project__view vertical-align--center'>
      <img src={view_project} alt=""/>
    </div>
  </div>);
}

export default Project;

