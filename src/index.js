import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducer'
import 'semantic-ui-css/semantic.min.css'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <Router>
  <App />
  </Router>
  </Provider>, document.getElementById('root'));
