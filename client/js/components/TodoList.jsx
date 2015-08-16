/**
 * client/js/components/TodoList.jsx
 * Todo list component
 */

import React from 'react';
import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = TodoStore.getState();

    // Create _onChange instance method. Arrow function used for scope
    // when listen / unlisten on store.
    this._onChange = (state) => {
      this.setState(state);
    };
  }

  componentWillMount() {
    TodoStore.listen(this._onChange);
  }

  componentDidMount() {
    if (!this.state.todos.length) TodoActions.fetchTodos();
  }

  componentWillUnmount() {
    TodoStore.unlisten(this._onChange);
  }

  render() {
    return <h1>TodoList</h1>;
  }

}
