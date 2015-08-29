/**
 * test/utils/stubRouterContext
 * Bullshit stub hack because react-router makes things untestable
 */

import React from 'react/addons';

export default (Component, props, stubs) => {
  function RouterStub() { }

  Object.assign(RouterStub, {
    makePath () {},
    makeHref () {},
    transitionTo () {},
    replaceWith () {},
    goBack () {},
    getCurrentPath () {},
    getCurrentRoutes () {},
    getCurrentPathname () {},
    getCurrentParams () {},
    getCurrentQuery () {},
    isActive () {},
    getRouteAtDepth() {},
    setRouteComponentAtDepth() {}
  }, stubs);

  return React.createClass({
    childContextTypes: {
      router: React.PropTypes.func,
      routeDepth: React.PropTypes.number
    },

    getChildContext () {
      return {
        router: RouterStub,
        routeDepth: 0
      };
    },

    render () {
      return <Component ref='component' {...props} />;
    }
  });
};
