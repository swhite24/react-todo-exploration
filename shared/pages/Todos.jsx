/**
 * client/pages/Todos.jsx
 * Show / create todos
 */

import React from 'react';
import AuthComponent from '../util/AuthComponent';
import BaseComponent from '../util/BaseComponent';
import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

@AuthComponent
export default class Todos extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = TodoStore.getState();

    // Bind callback methods
    this._bind('_onChange');
  }

  /**
   * Bootstrap data if not present
   */
  componentDidMount() {
    TodoStore.listen(this._onChange);
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
    return (
      <div>
        <h3>Todos</h3>
        <TodoForm />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}
