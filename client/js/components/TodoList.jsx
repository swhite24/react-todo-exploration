/**
 * client/js/components/TodoList.jsx
 * Todo list component
 */

import React from 'react';
import BaseComponent from '../util/BaseComponent';
import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';
import TodoItem from './TodoItem';

export default class TodoList extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = TodoStore.getState();

    // Bind callback methods
    this._bind('_onChange');
  }

  /**
   * Register listener for store change
   */
  componentWillMount() {
    TodoStore.listen(this._onChange);
  }

  /**
   * Bootstrap data if not present
   */
  componentDidMount() {
    if (!this.state.todos.length) TodoActions.fetchTodos();
  }

  /**
   * Remove listener for store change
   */
  componentWillUnmount() {
    TodoStore.unlisten(this._onChange);
  }

  /**
   * Update date on store change
   */
  _onChange(state) {
    this.setState(state);
  }

  render() {
    // Check if items available
    if (!this.state.todos.length) return <div></div>;

    // Build todo items
    let items = this.state.todos.map((todo) => {
      return <TodoItem key={todo._id} todo={todo} />;
    });

    return (
      <ul className="collection z-depth-2">
        {items}
      </ul>
    );
  }

}
