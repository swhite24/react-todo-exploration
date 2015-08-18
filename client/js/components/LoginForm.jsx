/**
 * client/components/login.jsx
 * Login component
 */

import React from 'react/addons';
import ReactMixin from 'react-mixin';
import BaseComponent from '../util/BaseComponent';

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

    console.log('submitting: ', this.state);
  }

  render() {
    return (
      <form>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              className='validate'
              type='email'
              required
              valueLink={this.linkState('email')}
              />
            <label>Email</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              className='validate'
              type='password'
              required
              valueLink={this.linkState('password')}
              />
            <label>Password</label>
          </div>
        </div>
        <div className='row'>
          <button type='submit' className='btn waves-effect' onClick={this._onSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}

ReactMixin(LoginForm.prototype, React.addons.LinkedStateMixin);
