/**
 * client/js/actions/AuthActions.js
 * Actions for user user state
 */

import alt from '../alt';
import request from 'superagent';

class AuthActions {
  constructor() {
    // Setup success / fail actions
    this.generateActions('loginSuccess', 'loginError');
    this.generateActions('registerSuccess', 'registerError');
  }

  login(email, password) {
    this.dispatch();

    request
      .post('/api/login')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send({
        email: email,
        password: password
      })
      .end((err, res) => {
        if (err) return this.actions.loginError(err);
        this.actions.loginSuccess(res.body);
      });
  }

  register(user) {
    this.dispatch();

    request
      .post('/api/register')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(user)
      .end((err, res) => {
        if (err) return this.actions.registerError(err);
        this.actions.registerSuccess(res.body);
      });
  }
}

export default alt.createActions(AuthActions);
