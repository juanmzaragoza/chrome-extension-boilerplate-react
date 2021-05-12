import React from "react";
import ReactDOM from "react-dom";

export const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

export const insertChild = (referenceNode, newNode) => {
  referenceNode.appendChild(newNode);
}

export const renderComponent = ({className, component}) => {
  const element = document.getElementsByClassName(className)[0];
  const app = document.createElement('span');
  insertChild(element, app);
  ReactDOM.render(component, app);
}