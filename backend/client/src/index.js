import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import history from './history'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter history={history}>
      <App />
  </BrowserRouter>
  );
registerServiceWorker();