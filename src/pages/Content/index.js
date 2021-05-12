import React from 'react';
import { printLine } from './modules/print';
import {renderComponent} from './modules/dom';
import {saveGlobally} from './modules/storage';
import FullDashboard from '../../containers/FullDashboard';
import WeightDashboard from "../../containers/WeightDashboard";

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

/** render components in the web DOM */
const components = {
  'mdl-layout-title': <FullDashboard />,
  'mdl-tabs__tab-bar': <WeightDashboard />
}
Object.keys(components).map(key => renderComponent({className: key, component: components[key]}));