/**
 * client/js/pages/app.jsx
 * App container
 */

import React from 'react';
import {RouteHandler} from 'react-router';
import Header from '../components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }
}
