function createGlobalVar() {
  globalVar = "I'm a global variable"; // Implicitly global
}
console.log(
  "window.globalVar before calling createGlobalVar(): ",
  window.globalVar
);
createGlobalVar();
console.log(
  "window.globalVar after calling createGlobalVar(): ",
  window.globalVar
);
