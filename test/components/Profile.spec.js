/**
 * test/components/Profile.spec.js
 * Tests for Profile component
 */

import React from 'react/addons';
import Profile from '../../shared/pages/Profile';
import alt from '../../shared/alt';
import data from '../util/data';

let TestUtils = React.addons.TestUtils;

describe('Profile', () => {
  let item, stub;

  // Setup
  beforeEach(() => {
    alt.bootstrap(JSON.stringify({
      AuthStore: { token: data.token },
      TodoStore: { todos: data.todos }
    }));
    stub = TestUtils.renderIntoDocument(<Profile />);
    item = stub.refs.component;
  });

  // Cleanup
  afterEach(() => React.unmountComponentAtNode(React.findDOMNode(stub)));

  describe('render()', () => {
    it('should exist', () => expect(TestUtils.isCompositeComponent(item)).to.be.true);

    it('should display user name', () => {
      let name = item.refs.name;
      let node = name.getDOMNode();

      expect(node.textContent).to.equal(`${data.user.firstName} ${data.user.lastName}`);
    });

    it('should display user email', () => {
      let email = item.refs.email;
      let node = email.getDOMNode();

      expect(node.textContent).to.equal(data.user.email);
    });

    it('should display number of todos', () => {
      let todos = item.refs.todos;
      let node = todos.getDOMNode();

      expect(+node.textContent).to.equal(data.todos.length);
    });
  });
});
