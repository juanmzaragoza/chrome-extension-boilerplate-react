export const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

export const insertChild = (referenceNode, newNode) => {
  referenceNode.appendChild(newNode);
}