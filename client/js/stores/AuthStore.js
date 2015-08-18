/**
 * client/js/stores/AuthStore.js
 * Store for user state
 */

import alt from 'alt';
import AuthActions from '../actions/AuthActions';

class AuthStore {
  constructor() {

    this.bindActions(AuthActions);
  }

  loginSuccess(data) {
    console.log('login success: ', data);
  }

  registerSuccess(data) {
    console.log('register success: ', data);
  }
}

export default alt.createStore(AuthStore);
