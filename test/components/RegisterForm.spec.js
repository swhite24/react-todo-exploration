/**
 * test/components/RegisterForm.spec.js
 * Tests for RegisterForm component
 */

import React from 'react/addons';
import RegisterForm from '../../shared/components/RegisterForm';
import TodoItem from '../../shared/components/TodoItem';
import TodoActions from '../../shared/actions/TodoActions';
import AuthActions from '../../shared/actions/AuthActions';

let TestUtils = React.addons.TestUtils;

describe('RegisterForm', () => {
  let item;

  // Setup
  beforeEach(() => item = TestUtils.renderIntoDocument(<RegisterForm />));

  // Cleanup
  afterEach(() => React.unmountComponentAtNode(React.findDOMNode(item)));

  describe('render()', () => {
    it('should exist', () => expect(TestUtils.isCompositeComponent(item)).to.be.true);

    it('should render email field', () => {
      let input = item.refs.email;
      expect(input.props.type).to.equal('email');
    });

    it('should render password field', () => {
      let input = item.refs.password;
      expect(input.props.type).to.equal('password');
    });

    it('should render firstName field', () => {
      let input = item.refs.firstName;
      expect(input.props.type).to.equal('text');
    });

    it('should render lastName field', () => {
      let input = item.refs.lastName;
      expect(input.props.type).to.equal('text');
    });

    describe('onSubmit', () => it('should invoke AuthActions.register()', () => {
      let registerStub = sinon.spy(AuthActions, 'register');
      let email = item.refs.email;
      let password = item.refs.password;
      let firstName = item.refs.firstName;
      let lastName = item.refs.lastName;
      let submit = item.refs.submit;

      TestUtils.Simulate.change(email, {target: {value: 'foo@foo.com'}});
      TestUtils.Simulate.change(password, {target: {value: 'foobar'}});
      TestUtils.Simulate.change(firstName, {target: {value: 'foo'}});
      TestUtils.Simulate.change(lastName, {target: {value: 'bar'}});
      TestUtils.Simulate.click(submit);

      expect(registerStub).to.have.been.called;
    }));
  });
});
