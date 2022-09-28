import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import  store from './redux/store';
import './index.css';
import { App } from './App';
import { HashRouter as Router } from 'react-router-dom';
import 'bulma/css/bulma.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  </Provider>
);
