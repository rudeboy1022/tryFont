import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { TextsContextsProvider } from './Provider/TextContextsProvider';

ReactDOM.render(
  <React.StrictMode>
    <TextsContextsProvider>
      <App />
    </TextsContextsProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);