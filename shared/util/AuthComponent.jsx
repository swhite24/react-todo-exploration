/**
 * shared/util/AuthComponent.jsx
 * Higher order component for wrapping other components
 * which require a user to be logged in.
 */

import React from 'react';
import AuthStore from '../stores/AuthStore';
import BaseComponent from './BaseComponent';

export default (Component) => {
  return class AuthComponent extends BaseComponent {

    /**
     * Monitor transition states. If trying to visit auth
     * page, redirect.
     */
    static willTransitionTo(transition, params, query, callback) {
      if (!AuthStore.getState().user) {
        transition.redirect('login');
      }
      callback();
    }

    constructor() {
      super();
      this.state = AuthStore.getState();

      this._bind('_onChange');
    }

    /**
     * Bind to changes in AuthStore
     */
    componentDidMount() {
      AuthStore.listen(this._onChange);
    }

    /**
     * Clean up
     */
    componentWillUnmount() {
      AuthStore.unlisten(this._onChange);
    }

    render() {
      // Provide context to component
      return (
        <Component
          {...this.props}
          user={this.state.user}
          token={this.state.token}
          ref='component'
          />
      );
    }

    /**
     * Capture state
     */
    _onChange(state) {
      this.setState(state);
    }

  };
};
