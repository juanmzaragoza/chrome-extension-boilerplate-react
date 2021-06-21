import React from "react";
import ReactDOM from "react-dom";

export const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

export const insertChild = (referenceNode, newNode) => {
  referenceNode.appendChild(newNode);
}

export const renderComponent = ({getFunction, identifier, component, extraAction, transformContainer, getElement, resultPos = 0}) => {
  // do an extra action before insert it
  if(extraAction) extraAction();
  const element = getFunction? document[getFunction](identifier):document.getElementsByClassName(identifier)[resultPos];
  const app = document.createElement('span');
  if(transformContainer) transformContainer(app);
  // if we have to access to another element
  insertChild(getElement? getElement(element):element, app);
  ReactDOM.render(component, app);
}