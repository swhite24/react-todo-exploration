/**
 * client/js/components/RegisterForm.jsx
 * Register form component
 */

import React from 'react';

export default class RegisterForm extends React.Component {
  render() {
    return (
      <form>
        <div className='row'>
          <div className='input-field col s6'>
            <input type='text' />
            <label>First Name</label>
          </div>
          <div className='input-field col s6'>
            <input type='text' />
            <label>Last Name</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input type='email' />
            <label>Email Address</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input type='password' />
            <label>Password</label>
          </div>
        </div>
      </form>
    );
  }
}
