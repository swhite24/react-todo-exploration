/**
 * client/js/app.js
 * Entry point into client app
 */

import Iso from 'iso';
import React from 'react';
import Router from './router';
import alt from '../../shared/alt';

Iso.bootstrap((state, _, container) => {
  alt.bootstrap(state);

  Router.run((Handler, state) => {
    let params = state.params;
    React.render(<Handler params={params} />, container);
  });
});
