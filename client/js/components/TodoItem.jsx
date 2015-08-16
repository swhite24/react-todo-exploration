/**
 * client/js/components/TodoItem.jsx
 * Todo item component
 */

import React from 'react';
import BaseComponent from '../util/BaseComponent';
import TodoActions from '../actions/TodoActions';

export default class TodoItem extends BaseComponent {
  constructor(options) {
    super(options);

    // Bind callback methods
    this._bind('_onToggle', '_onRemove');
  }

  /**
   * Handle complete toggle
   */
  _onToggle() {
    TodoActions.toggleTodo(this.props.todo._id);
  }

  /**
   * Handle item removal
   */
  _onRemove() {
    TodoActions.removeTodo(this.props.todo._id);
  }

  render() {
    let todo = this.props.todo;

    return (
      <li key={todo._id} className='collection-item todo'>
        <div className='row'>
          <div className='col s2'>
            <input type='checkbox' id={todo._id} onChange={this._onToggle} checked={this.props.todo.complete}/>
            <label htmlFor={todo._id}>Complete</label>
          </div>
          <div className='col s7'>{todo.content}</div>
          <div className='col s3 right-align'>
            <button className='btn-floating waves-effect red' onClick={this._onRemove}>-</button>
          </div>
        </div>
      </li>
    );
  }
}
