import React from 'react';

import './detail.scss';
import Logo from './assets/logo.svg';
import image from './assets/image.png';
import arrow_back from './assets/arrow_back.svg';
import arrow_forward from './assets/arrow_forward.svg';
import view from './assets/view.svg';

export default function Detail() {
  return (
      <div className="detail">
        <div className="col-1"/>
        <div className="col-5">
          <div className="row"><img src={Logo} alt="logo"/></div>
          <div className="row project-about">
            <div className="col-12 font-1--5em project-about--title">About the
              project
            </div>
            <div className="col-12 font-0--7em project-about--subtitle"><p>Blah
              blah blah</p></div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="font-1--5em">Platform</div>
              <div className="font-0--7em">Web</div>
            </div>
            <div className="col-6">
              <div className="font-1--5em">Category</div>
              <div className="font-0--7em">Productivity</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12"><span>See the product</span><img src={view} alt="view"/></div>
            <div className="col-12"><span>See the source code</span><img src={view} alt="view"/></div>
          </div>
          <div className="row">
            <div className="col-12">Previous project<img src={arrow_back} alt="back"/></div>
            <div className="col-12">Next project<img src={arrow_forward} alt="forward"/></div>
          </div>
        </div>
        <div className="col-5 image-gallery">
          <ul>
            <li><img src={image} alt="image"/></li>
            <li><img src={image} alt="image"/></li>
            <li><img src={image} alt="image"/></li>
            <li><img src={image} alt="image"/></li>
          </ul>
        </div>
        <div className="col-1"/>
      </div>
  );
}
