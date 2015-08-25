/**
 * client/js/actions/AuthActions.js
 * Actions for user user state
 */

import alt from '../alt';
import Api from '../util/API';

class AuthActions {
  constructor() {
    // Setup success / fail actions
    this.generateActions('loginSuccess', 'loginError');
    this.generateActions('logoutSuccess', 'logoutError');
    this.generateActions('registerSuccess', 'registerError');
  }

  /**
   * Login action
   */
  login(email, password) {
    this.dispatch();

    Api.login(email, password, (err, res) => {
      if (err) return this.actions.loginError(err);
      this.actions.loginSuccess(res.body);
    });
  }

  logout() {
    this.dispatch();

    setTimeout(() => this.actions.logoutSuccess());
  }

  /**
   * Register action
   */
  register(user) {
    this.dispatch();

    Api.register(user, (err, res) => {
      if (err) return this.actions.registerError(err);
      this.actions.registerSuccess(res.body);
    });
  }
}

export default alt.createActions(AuthActions);
