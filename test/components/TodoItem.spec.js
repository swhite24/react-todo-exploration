/**
 * test/components/TodoItem.spec.js
 * Tests for TodoItem component
 */

import React from 'react/addons';
import TodoItem from '../../shared/components/TodoItem';
import data from '../util/data';

let TestUtils = React.addons.TestUtils;

describe('TodoItem', () => {
  let item;

  // Setup
  beforeEach(() => item = TestUtils.renderIntoDocument(<TodoItem todo={data.todo} />));

  // Cleanup
  afterEach(() => React.unmountComponentAtNode(React.findDOMNode(item)));

  describe('render()', () => {
    it('should exist', () => expect(TestUtils.isCompositeComponent(item)).to.be.true);

    it('should output todo content', () => {
      let label = TestUtils.findRenderedDOMComponentWithTag(item, 'label');
      let node = label.getDOMNode();

      expect(node.textContent).to.equal(data.todo.content);
    });

    it('should output todo complete', () => {
      let input = TestUtils.findRenderedDOMComponentWithTag(item, 'input');
      let node = input.getDOMNode();

      expect(node.checked).to.equal(data.todo.complete);
    });

    it('should display delete button', () => {
      let button = TestUtils.findRenderedDOMComponentWithTag(item, 'button');
      let node = button.getDOMNode();

      expect(node.textContent).to.equal('-');
      expect(button.props.onClick).to.exist;
    });
  });
});
