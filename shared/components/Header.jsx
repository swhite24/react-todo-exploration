/**
 * shared/components/Header.jsx
 * App Header
 */

import React from 'react';
import {Link} from 'react-router';
import BaseComponent from '../util/BaseComponent';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';

export default class Header extends BaseComponent {
  constructor(options) {
    super(options);

    // Bind to store changes
    this.state = AuthStore.getState();
    this._bind('_onChange', '_logout');
  }

  /**
   * Listen to auth store changes
   */
  componentDidMount() {
    AuthStore.listen(this._onChange);
  }

  /**
   * Clean up
   */
  componentWillUnmount() {
    AuthStore.unlisten(this._onChange);
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <div className='container'>
            <Link to='list' className='brand-logo'>Todo Example</Link>
            {this._getNavMenu()}
          </div>
        </div>
      </nav>
    );
  }

  /**
   * Capture state changes
   */
  _onChange(state) {
    this.setState(state);
  }

  _logout(e) {
    e.preventDefault();
    AuthActions.logout();
  }

  /**
   * Build main navigation links
   */
  _getNavMenu() {
    if (this.state.user) {
      return (
        <ul className='right'>
          <li><Link to='profile' ref='profile'>Profile</Link></li>
          <li><a href='javascript:void(0)' ref='logout' onClick={this._logout}>Logout</a></li>
        </ul>
      );
    } else {
      return (
        <ul className='right'>
          <li><Link to='login' ref='login'>Login</Link></li>
          <li><Link to='register' ref='register'>Register</Link></li>
        </ul>
      );
    }
  }
}
