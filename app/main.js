/* @flow */

import React from 'react';
import {render} from 'react-dom';

import './main-style.css';
import App from './components/App-react';

render(<App name="Brian Di Palma" />, document.getElementById('container'));
