/**
 * test/components/LoginForm.spec.js
 * Tests for LoginForm component
 */

import React from 'react/addons';
import LoginForm from '../../shared/components/LoginForm';
import TodoItem from '../../shared/components/TodoItem';
import TodoActions from '../../shared/actions/TodoActions';
import AuthActions from '../../shared/actions/AuthActions';

let TestUtils = React.addons.TestUtils;

describe('LoginForm', () => {
  let item;

  // Setup
  beforeEach(() => item = TestUtils.renderIntoDocument(<LoginForm />));

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

    describe('submit button', () => {
      it('should be disabled when email is empty', () => {
        let email = item.refs.email;
        let password = item.refs.password;
        let submit = item.refs.submit;

        TestUtils.Simulate.change(email, {target: {value: ''}});
        TestUtils.Simulate.change(password, {target: {value: 'foobar'}});

        expect(submit.props.disabled).to.be.true;
      });

      it('should be disabled when password is empty', () => {
        let email = item.refs.email;
        let password = item.refs.password;
        let submit = item.refs.submit;

        TestUtils.Simulate.change(email, {target: {value: 'foo@foo.com'}});
        TestUtils.Simulate.change(password, {target: {value: ''}});

        expect(submit.props.disabled).to.be.true;
      });

      it('should not be disabled when email and password are provided', () => {
        let email = item.refs.email;
        let password = item.refs.password;
        let submit = item.refs.submit;

        TestUtils.Simulate.change(email, {target: {value: 'foo@foo.com'}});
        TestUtils.Simulate.change(password, {target: {value: 'foobar'}});

        expect(submit.props.disabled).to.be.false;
      });

      describe('onClick', () => it('should invoke AuthActions.login()', () => {
        let loginStub = sinon.spy(AuthActions, 'login');
        let email = item.refs.email;
        let password = item.refs.password;
        let submit = item.refs.submit;

        TestUtils.Simulate.change(email, {target: {value: 'foo@foo.com'}});
        TestUtils.Simulate.change(password, {target: {value: 'foobar'}});
        TestUtils.Simulate.click(submit);

        expect(loginStub).to.have.been.called;
      }));
    });
  });
});
