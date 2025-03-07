let detachedNode;
function createDetachedNode() {
  const div = document.createElement("div");
  document.body.appendChild(div);
  document.body.removeChild(div); // Removed from DOM
  detachedNode = div; // Still in memory
  console.log("detachedNode before setting to null: ", detachedNode);
}
createDetachedNode();

// fix
detachedNode = null; // Remove reference manually when no longer needed
console.log("detachedNode after setting to null: ", detachedNode);
