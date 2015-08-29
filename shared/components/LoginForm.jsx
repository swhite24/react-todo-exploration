/**
 * client/components/login.jsx
 * Login component
 */

import React from 'react/addons';
import ReactMixin from 'react-mixin';
import BaseComponent from '../util/BaseComponent';

import AuthActions from '../actions/AuthActions';

export default class LoginForm extends BaseComponent {

  constructor(options) {
    super(options);
    this.state = {
      email: '',
      password: ''
    };
    this._bind('_onSubmit');
  }

  _onSubmit(evnt) {
    evnt.preventDefault();
    AuthActions.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <form>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              type='email'
              ref='email'
              required
              valueLink={this.linkState('email')}
              />
            <label>Email</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              type='password'
              ref='password'
              required
              valueLink={this.linkState('password')}
              />
            <label>Password</label>
          </div>
        </div>
        <div className='row'>
          <button
            type='submit'
            ref='submit'
            className='btn waves-effect right'
            disabled={this._invalid()}
            onClick={this._onSubmit}>Submit</button>
        </div>
      </form>
    );
  }

  /**
   * Form state
   */
  _invalid() {
    return !this.state.email || !this.state.password;
  }
}

ReactMixin(LoginForm.prototype, React.addons.LinkedStateMixin);
