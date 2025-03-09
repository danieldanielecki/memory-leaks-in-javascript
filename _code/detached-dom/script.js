let detachedNode;
function createDetachedNode() {
  const divElement = document.createElement("div");
  divElement.style.padding = "10px";
  divElement.style.margin = "5px";
  divElement.style.height = "50px";
  divElement.style.background = "red";
  document.body.appendChild(divElement);
  // document.body.removeChild(divElement); // Removed from DOM
  detachedNode = divElement; // Still in memory
  console.log("detachedNode before setting to null: ", detachedNode);
}
createDetachedNode();

// fix
detachedNode = null; // Remove reference manually when no longer needed
console.log("detachedNode after setting to null: ", detachedNode);
