import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import App from './App';
import './index.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

ReactDOM.render(<App />, document.querySelector('#app'));
