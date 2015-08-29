/**
 * test/components/Header.spec.js
 * Tests for Header component
 */

import React from 'react/addons';
import Header from '../../shared/components/Header';
import AuthActions from '../../shared/actions/AuthActions';
import alt from '../../shared/alt';
import stubRouterContext from '../util/stubRouterContext';
import data from '../util/data';

let HeaderStub = stubRouterContext(Header);
let TestUtils = React.addons.TestUtils;

describe('Header', () => {
  // Two vars to represent Header, since it must be wrapped
  // within a higher order component to stub out react-router.
  let stub, item;

  // Cleanup
  afterEach(() => React.unmountComponentAtNode(React.findDOMNode(stub)));

  describe('render()', () => {
    it('should exist', () => {
      stub = TestUtils.renderIntoDocument(<HeaderStub />);
      item = stub.refs.component;
      expect(TestUtils.isCompositeComponent(item)).to.be.true;
    });

    describe('when logged in', () => {
      beforeEach(() => {
        // Bootstrap a user
        alt.bootstrap(JSON.stringify({ AuthStore: { token: data.token }}));

        stub = TestUtils.renderIntoDocument(<HeaderStub />);
        item = stub.refs.component;
      });

      // Cleanup alt / dom
      afterEach(() => {
        alt.rollback();
        React.unmountComponentAtNode(React.findDOMNode(stub));
      });

      it('should show logout link', () => {
        let logout = item.refs.logout;

        expect(logout).to.exist;
        expect(logout.props.onClick).to.be.a('function');
        expect(logout.getDOMNode().textContent).to.equal('Logout');
      });

      it('should show profile link', () => {
        let profile = item.refs.profile;

        expect(profile).to.exist;
        expect(React.findDOMNode(profile).textContent).to.equal('Profile');
      });

      describe('logout', () => {
        it('should invoke AuthActions.logout()', () => {
          let logoutStub = sinon.spy(AuthActions, 'logout');
          let logout = item.refs.logout;

          TestUtils.Simulate.click(logout);
          expect(logoutStub).to.have.been.called;
        });
      });
    });

    describe('when not logged in', () => {
      beforeEach(() => {
        stub = TestUtils.renderIntoDocument(<HeaderStub />);
        item = stub.refs.component;
      });

      // Cleanup alt / dom
      afterEach(() => React.unmountComponentAtNode(React.findDOMNode(stub)));

      it('should show login link', () => {
        let login = item.refs.login;

        expect(login).to.exist;
        expect(React.findDOMNode(login).textContent).to.equal('Login');
      });

      it('should show register link', () => {
        let register = item.refs.register;

        expect(register).to.exist;
        expect(React.findDOMNode(register).textContent).to.equal('Register');
      });
    });
  });

});
