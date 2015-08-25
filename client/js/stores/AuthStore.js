/**
 * client/js/stores/AuthStore.js
 * Store for user state
 */

import alt from '../alt';
import AuthActions from '../actions/AuthActions';

class AuthStore {
  constructor() {
    this.token = null;
    this.user = null;
    this.bindActions(AuthActions);

    this._autoLogin();
  }

  loginSuccess(data) {
    // Capture state
    this.user = data.user;
    this.token = data.token;

    // Store data
    localStorage.setItem('token', JSON.stringify(this.token));
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  logoutSuccess() {
    this.user = null;
    this.token = null;
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
  }

  registerSuccess(data) {
    this.user = data.user;
    this.token = data.token;
  }

  _autoLogin() {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    try {
      if (token) this.token = JSON.parse(token);
      if (user) this.user = JSON.parse(user);
    } catch(e) {
      console.err('Failed to login: ', e);
    }
  }
}

export default alt.createStore(AuthStore);
