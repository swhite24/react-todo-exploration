/**
 * client/pages/Todos.jsx
 * Show / create todos
 */

import React from 'react';
import AuthComponent from '../util/AuthComponent';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

@AuthComponent
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
