/**
 * shared/util/RouterContainer.js
 * Stores router instance for use in components
 */

let _router = null;

export default {
  set: (router) => _router = router,
  get: () => _router
};
