import './index.css';

import reducer, { initialState } from './reducer';

import App from './App';
import React from 'react';
import { StateProvider } from './StateProvider';
import { render } from 'react-dom';

render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
