/**
 * test/components/TodoForm.spec.js
 * Tests for TodoForm component
 */

import React from 'react/addons';
import TodoForm from '../../shared/components/TodoForm';
import TodoItem from '../../shared/components/TodoItem';
import TodoActions from '../../shared/actions/TodoActions';

let TestUtils = React.addons.TestUtils;

describe('TodoForm', () => {
  let item;

  // Setup
  beforeEach(() => item = TestUtils.renderIntoDocument(<TodoForm />));

  // Cleanup
  afterEach(() => React.unmountComponentAtNode(React.findDOMNode(item)));

  describe('render()', () => {
    it('should exist', () => expect(TestUtils.isCompositeComponent(item)).to.be.true);

    it('should render an input', () => {
      let input = item.refs.input;

      expect(input.props.type).to.equal('text');

      // Check bindings
      expect(input.props.onChange).to.be.a('function');
      expect(input.props.onKeyDown).to.be.a('function');
    });

    it('should render a label', () => {
      let label = TestUtils.findRenderedDOMComponentWithTag(item, 'label');
      let node = label.getDOMNode();

      expect(node.textContent).to.equal('New Todo');
    });
  });

  describe('onKeyDown - character', () => {
    it('should capture value', () => {
      let input = item.refs.input;

      // Send some text
      input.value = 'hi';
      TestUtils.Simulate.change(input);

      // Test state
      expect(item.state.content).to.equal('hi');
    });
  });

  describe('onKeyDown - enter', () => {
    it('should try and save', () => {
      let saveStub = sinon.stub(item, '_save');
      let input = item.refs.input;

      // Send some text
      input.value = 'hi';
      TestUtils.Simulate.change(input);

      // Submit
      TestUtils.Simulate.keyDown(input, { keyCode: 13 });

      expect(saveStub).to.have.been.called;
    });

    it('should invoke the createTodo action', () => {
      let createTodoStub = sinon.stub(TodoActions, 'createTodo');
      let input = item.refs.input;

      // Send some text
      input.value = 'hi';
      TestUtils.Simulate.change(input);

      // Submit
      TestUtils.Simulate.keyDown(input, { keyCode: 13 });

      expect(createTodoStub).to.have.been.called;
    });
  });
});
