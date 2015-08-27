/**
 * shared/pages/404.jsx
 * 404 Page
 */

import React from 'react';

export default class NotFoundPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='center-align'>
        <h3 className='center-align'>Page Not Found</h3>
        <p className='light'>Try again</p>
      </div>
    );
  }
}
