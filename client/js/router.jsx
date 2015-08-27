/**
 * client/js/router.jsx
 * Client side routing
 */

import React from 'react';
import Router from 'react-router';
import routes from '../../shared/routes';
import RouterContainer from '../../shared/util/RouterContainer';

// Create router instance
let router = Router.create({
  routes,
  location: Router.HistoryLocation
});
RouterContainer.set(router);

export default router;
