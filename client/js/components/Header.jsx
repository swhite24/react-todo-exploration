/**
 * client/js/components/Header.jsx
 * App Header
 */

import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  constructor(options) {
    super(options);
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <div className='container'>
            <Link to='list' className='brand-logo'>Todo Example</Link>
            <ul className='right'>
              <li><Link to='login'>Login</Link></li>
              <li><Link to='register'>Register</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
