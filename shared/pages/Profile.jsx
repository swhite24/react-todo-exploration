/**
 * shared/pages/Profile.jsx
 * User profile page
 */

import React from 'react';
import AuthStore from '../stores/AuthStore';
import TodoStore from '../stores/TodoStore';
import BaseComponent from '../util/BaseComponent';
import AuthComponent from '../util/AuthComponent';

@AuthComponent
export default class Profile extends BaseComponent {
    constructor() {
      super();
      this.state = {
        user: AuthStore.getState().user,
        todos: TodoStore.getState().todos
      };
    }

    render() {
      return (
        <div>
          <h3>Profile</h3>
          <div className='card'>
            <div className='card-content'>
              <div className='row'>
                <div className='col m6'>
                  <h4 className='thin'>Name</h4>
                  <p ref='name'>{this.state.user.firstName} {this.state.user.lastName}</p>
                </div>
                <div className='col m6'>
                  <h4 className='thin'>Email</h4>
                  <p ref='email'>{this.state.user.email}</p>
                </div>
              </div>
              <div className='row'>
                <div className='col m6'>
                  <h4 className='thin'>Number of Todos</h4>
                  <p ref='todos'>{this.state.todos.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
