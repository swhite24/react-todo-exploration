/**
 * test/components/TodoList.spec.js
 * Tests for TodoList component
 */

import React from 'react/addons';
import TodoList from '../../shared/components/TodoList';
import TodoItem from '../../shared/components/TodoItem';
import data from '../util/data';

let TestUtils = React.addons.TestUtils;

describe('TodoList', () => {
  let item;

  // Setup
  beforeEach(() => item = TestUtils.renderIntoDocument(<TodoList todos={data.todos} />));

  // Cleanup
  afterEach(() => React.unmountComponentAtNode(React.findDOMNode(item)));

  describe('render()', () => {
    it('should exist', () => expect(TestUtils.isCompositeComponent(item)).to.be.true);

    it('should render the correct number of TodoItems', () => {
      let todos = TestUtils.scryRenderedComponentsWithType(item, TodoItem);

      expect(todos.length).to.equal(data.todos.length);
    });

    it('should pass a todo to each TodoItem', () => {
      let todos = TestUtils.scryRenderedComponentsWithType(item, TodoItem);

      todos.forEach(function(todo) {
        expect(todo.props.todo).to.be.an('object');
      });
    });
  });
});
