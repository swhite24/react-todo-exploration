/**
 * client/pages/Login.jsx
 * Login page
 */

import React from 'react';
import AuthActions from '../actions/AuthActions';
import BaseComponent from '../util/BaseComponent';
import LoginForm from '../components/LoginForm';

export default class Login extends BaseComponent {

  constructor() {
    super();

    this._bind('_onSubmit');
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <LoginForm onSubmit={this._onSubmit} />
      </div>
    );
  }

  _onSubmit(email, password) {
    AuthActions.login(this.state.email, this.state.password);
  }
}
