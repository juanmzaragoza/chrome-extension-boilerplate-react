import React from 'react';
import ReactDOM from 'react-dom';
import { printLine } from './modules/print';
import {insertChild} from './modules/dom';
import {saveGlobally} from './modules/storage';
import FullDashboard from '../../containers/FullDashboard';

console.log('IVEE Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

// send message to backend and waiting for his response
chrome.runtime.sendMessage({text: "hey"}, function(response) {
  console.log("[CONTENT] Response received from the background: ", response); //I've received from the background!
});

// from the page
window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "MEMBERSPACE_OBJECT")) {
    console.log("[CONTENT] Content script received message: ", event.data);
    saveGlobally('member',event.data.member);
  }
});

// put the button in the DOM
const element = document.getElementsByClassName('mdl-tabs__tab is-active')[0];
const app = document.createElement('span');
insertChild(element, app);
ReactDOM.render(<FullDashboard />, app);