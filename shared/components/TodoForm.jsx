/**
 * shared/components/TodoForm.jsx
 * New todo form
 */

import React from 'react';
import BaseComponent from '../util/BaseComponent';
import TodoActions from '../actions/TodoActions';

const ENTER_KEY = 13;

export default class TodoForm extends BaseComponent {
  constructor(options) {
    super(options);

    // Setup initial state
    this.state = { content: '' };

    // Bind callback methods
    this._bind('_onChange', '_onKeyDown', '_save');
  }

  /**
   * Handle input value change by updating state.
   */
  _onChange(evnt) {
    this.setState({ content: this.refs['input'].getDOMNode().value });
  }

  /**
   * Handle input keydown event. Used to capture enter
   * key to submit new todo
   */
  _onKeyDown(evnt) {
    if (evnt.keyCode === ENTER_KEY) this._save();
  }

  /**
   * Saves existing content as new input
   */
  _save() {
    if (!this.state.content) return;
    TodoActions.createTodo(this.state);
    this.setState({ content: '' });
  }

  render() {
    return (
      <div className='row'>
        <div className='col s12 input-field'>
          <input
            type='text'
            value={this.state.content}
            onChange={this._onChange}
            onKeyDown={this._onKeyDown}
            ref='input'
            />
          <label>New Todo</label>
        </div>
      </div>
    );
  }
}
