/**
 * client/pages/Todos.jsx
 * Show / create todos
 */

import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default class Todos extends React.Component {
  render() {
    return (
      <div>
        <h3>Todos</h3>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}
