/**
 * client/js/components/Header.jsx
 * App Header
 */

import React from 'react';

export default class Header extends React.Component {
  constructor(options) {
    super(options);
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <div className='container'>
            <a className='brand-logo'>Todo Example</a>
          </div>
        </div>
      </nav>
    );
  }
}
