import React from "react";
import ReactDOM from "react-dom";

export const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

export const insertChild = (referenceNode, newNode) => {
  referenceNode.appendChild(newNode);
}

export const renderComponent = ({className, component, extraAction, transformContainer, getElement}) => {
  // do an extra action before insert it
  if(extraAction) extraAction();
  const element = document.getElementsByClassName(className)[0];
  const app = document.createElement('span');
  if(transformContainer) transformContainer(app);
  // if we have to access to another element
  insertChild(getElement? getElement(element):element, app);
  ReactDOM.render(component, app);
}