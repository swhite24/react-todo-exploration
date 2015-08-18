/**
 * client/pages/Login.jsx
 * Login page
 */

import React from 'react';
import LoginForm from '../components/LoginForm';

export default class Login extends React.Component {

  render() {
    return (
      <div>
        <h3>Login</h3>
        <LoginForm />
      </div>
    );
  }
}
