import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from './store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename='stock-dashboard'>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);