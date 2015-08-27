/**
 * shared/stores/AuthStore.js
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

    // Parse token on bootstrap
    this.on('bootstrap', () => {
      if (this.token) this._handleToken(this.token);
    });
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
  }
}

export default alt.createStore(AuthStore, 'AuthStore');
