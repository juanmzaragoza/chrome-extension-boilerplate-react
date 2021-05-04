import React from 'react';
import ReactDOM from 'react-dom';
import { printLine } from './modules/print';
import {insertChild} from './modules/dom';
import FullDashboard from '../../containers/FullDashboard';

console.log('IVEE Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

const element = document.getElementsByClassName('title')[0];
const app = document.createElement('span');
insertChild(element, app);
ReactDOM.render(<FullDashboard />, app);