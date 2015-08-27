/**
 * shared/pages/app.jsx
 * App container
 */

import React from 'react';
import {RouteHandler} from 'react-router';
import BaseComponent from '../util/BaseComponent';
import RouterContainer from '../util/RouterContainer';
import Header from '../components/Header';
import AuthStore from '../stores/AuthStore';

export default class App extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('_onChange');
  }

  /**
   * Bind to changes.
   */
  componentDidMount() {
    AuthStore.listen(this._onChange);
  }

  /**
   * Clean up.
   */
  componentWillUnmount() {
    AuthStore.unlisten(this._onChange);
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

  _onChange(state) {
    let router = RouterContainer.get();

    setTimeout(() => {
      if (state.user) router.transitionTo('list');
      else router.transitionTo('login');
    });
  }
}
