let serverData = [];

function fetchData() {
  serverData = [
    {
      1: "one",
      2: "two",
    },
  ];
  // serverData = getDataFromServer();
}

fetchData();
console.log("my server data", serverData);

// Mitigation
function clearData() {
  serverData = null;
}
clearData();
console.log("my server data", serverData);
