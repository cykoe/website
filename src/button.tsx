import React from 'react';
import './button.scss';

export default function Button(props: any) {
  return (
      <div className="button">
        <div className="btn">
          <svg height="62">
            <defs>
              <linearGradient id="grad1">
                <stop offset="0%" stop-color="#010101"/>
                <stop offset="100%" stop-color="#010101"/>
              </linearGradient>
            </defs>
            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)"
                  width="266" height="50"></rect>
          </svg>
          <span>{props.option} project</span>
        </div>
      </div>
  );
}
