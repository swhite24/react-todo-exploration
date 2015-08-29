/**
 * shared/components/TodoList.jsx
 * Todo list component
 */

import React from 'react';
import BaseComponent from '../util/BaseComponent';
import TodoItem from './TodoItem';

export default class TodoList extends BaseComponent {

  render() {
    // Check if items available
    if (!this.props.todos.length) return <div></div>;

    // Build todo items
    let items = this.props.todos.map((todo) => {
      return <TodoItem key={todo._id} todo={todo} />;
    });

    return (
      <ul className="collection z-depth-2">
        {items}
      </ul>
    );
  }

}

// Define required props
TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
};
