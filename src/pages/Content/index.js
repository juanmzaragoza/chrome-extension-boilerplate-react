import React from 'react';
import {find} from 'lodash';
import { printLine } from './modules/print';
import {renderComponent} from './modules/dom';
import {saveGlobally} from './modules/storage';
import FullDashboard from '../../containers/FullDashboard';
import WeightDashboard from "../../containers/WeightDashboard";

const FULL_DASHBOARD_BUTTON_INDEX_CHILD = 1;
const PATIENT_DASHBOARD_BUTTON_INDEX_CHILD = 2;

const allowedURLRegexes = [/^http.*evetpractice.com.*/];

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

const mustInsertCodeDom = () => {
  const result = allowedURLRegexes.filter(regex => regex.test(window.location.href));
  return result.length > 0;
}

const getPatientId =  () => {
  // get table
  const table = document.getElementsByClassName('patientHighlightsDetails')[0];
  // find <tr> which includes Patient Id in the position 1
  const tr = find(table.childNodes[1].childNodes, (item) => {
    const contains = item.childNodes[1] && item.childNodes[1].innerHTML.includes('Patient Id');
    return contains;
  });
  // return the position 3
  return tr && tr.childNodes[3].innerHTML;

}

/** render components in the web DOM */
if(mustInsertCodeDom()){
  const patientId = getPatientId();
  console.log("PATIENT ID ",patientId);
  const components = {
    'title': {
      component: <FullDashboard />,
    },
    'patientWeightChart': {
      component: <WeightDashboard buttonStyle={{position: 'absolute'}}/>,
      extraAction: () => {
        const element = document.getElementsByClassName('patientWeightChart')[0];
        element.style = 'position: relative;';
      },
      transformContainer: (app) => {
        app.style = "position: absolute; top: 0; right: 50px;";
      },
      getElement: (element) => {
        return element.childNodes[FULL_DASHBOARD_BUTTON_INDEX_CHILD];
      }
    },
    'patientReminders': {
      component: <WeightDashboard buttonStyle={{position: 'absolute'}}/>,
      extraAction: () => {
        const element = document.getElementsByClassName('patientReminders')[0];
        element.style = 'position: relative;';
      },
      transformContainer: (app) => {
        app.style = "position: absolute; top: 0; right: 50px;";
      },
      getElement: (element) => {
        return element.childNodes[FULL_DASHBOARD_BUTTON_INDEX_CHILD];
      }
    },
    'patientCoreVaccines': {
      component: <WeightDashboard buttonStyle={{position: 'absolute'}}/>,
      extraAction: () => {
        const element = document.getElementsByClassName('patientCoreVaccines')[0];
        element.style = 'position: relative;';
      },
      transformContainer: (app) => {
        app.style = "position: absolute; top: 0; right: 50px;";
      },
      getElement: (element) => {
        return element.childNodes[FULL_DASHBOARD_BUTTON_INDEX_CHILD];
      }
    },
    'patientMonitorItems': {
      component: <WeightDashboard buttonStyle={{position: 'absolute'}}/>,
      extraAction: () => {
        const element = document.getElementsByClassName('patientMonitorItems')[0];
        element.style = 'position: relative;';
      },
      transformContainer: (app) => {
        app.style = "position: absolute; top: 0; right: 50px;";
      },
      getElement: (element) => {
        return element.childNodes[FULL_DASHBOARD_BUTTON_INDEX_CHILD];
      }
    },
  }
  Object.keys(components).map(key => renderComponent({className: key, ...components[key]}));
}