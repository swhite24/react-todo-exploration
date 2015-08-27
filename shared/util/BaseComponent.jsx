/**
 * shared/util/BaseComponent.jsx
 * Base react component class
 */

import React from 'react';

/**
 * Extension of React.Component to provide _bind method.
 */
export default class BaseComponent extends React.Component {

  /**
   * Binds provided prototype methods to the instance
   */
  _bind(...methods) {
    methods.forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

}
