import React from 'react';
import icon from './icon.svg';
import './header.scss';
import SearchIcon from '@material-ui/icons/Search';

const Header: React.FC = () => {
  return (
      <div className="header row">
          <span className='header-icon col-3'>
            <img src={icon} className='icon'/>
            <span>harlie</span>
          </span>
        <ul className='header-list text-center col-9'>
          <li className='header-right'>
            <a href="blog">Blog</a>
          </li>
          <li className='header-right'>
            <a href="Project">Project</a>
          </li>
          <li className='header-right'>
            <a href="Resume">Resume</a>
          </li>
          <li className='header-right'>
            <SearchIcon/>
          </li>
        </ul>
      </div>
  );
};

export default Header;
