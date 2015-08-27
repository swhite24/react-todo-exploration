/**
 * shared/components/RegisterForm.jsx
 * Register form component
 */

import React from 'react/addons';
import ReactMixin from 'react-mixin';
import BaseComponent from '../util/BaseComponent';

import AuthActions from '../actions/AuthActions';

export default class RegisterForm extends BaseComponent {

  constructor(options) {
    super(options);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    this._bind('_onSubmit');
  }

  _onSubmit(evnt) {
    evnt.preventDefault();
    AuthActions.register(this.state);
  }

  render() {
    return (
      <form>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              type='text'
              name='firstName'
              valueLink={this.linkState('firstName')}
              />
            <label>First Name</label>
          </div>
          <div className='input-field col s6'>
            <input
              type='text'
              name='lastName'
              valueLink={this.linkState('lastName')}
              />
            <label>Last Name</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              type='email'
              name='email'
              valueLink={this.linkState('email')}
              />
            <label>Email Address</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              type='password'
              name='password'
              valueLink={this.linkState('password')}
              />
            <label>Password</label>
          </div>
        </div>
        <div className='row'>
          <button type='submit' className='btn waves-effect right' onClick={this._onSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}

ReactMixin(RegisterForm.prototype, React.addons.LinkedStateMixin);
