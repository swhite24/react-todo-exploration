/**
 * client/js/pages/app.jsx
 * App container
 */

import React from 'react';
import {RouteHandler} from 'react-router';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <h4>Todos</h4>
          <TodoForm />
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }
}
