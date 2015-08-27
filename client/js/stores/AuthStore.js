/**
 * client/js/stores/AuthStore.js
 * Store for user state
 */

import jwtDecode from 'jwt-decode';
import alt from '../alt';
import AuthActions from '../actions/AuthActions';

class AuthStore {
  constructor() {
    this.token = null;
    this.user = null;
    this.bindActions(AuthActions);

    this._autoLogin();
  }

  /**
   * Handle successful login
   */
  loginSuccess(data) {
    this._handleToken(data.token);
  }

  /**
   * Handle successful logout
   */
  logoutSuccess() {
    this.user = null;
    this.token = null;
    localStorage.setItem('token', '');
  }

  /**
   * Handle successful registration
   */
  registerSuccess(data) {
    this._handleToken(data.token);
  }

  /**
   * Store / save token
   */
  _handleToken(token) {
    // Capture state
    this.token = token;
    this.user = jwtDecode(this.token);

    // Store data
    localStorage.setItem('token', this.token);
  }

  /**
   * Load state from localStorage
   */
  _autoLogin() {
    let token = localStorage.getItem('token');
    if (token) this._handleToken(token);
  }
}

export default alt.createStore(AuthStore);
