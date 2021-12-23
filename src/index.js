import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import App from './App';
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

const store = configureStore();

render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
