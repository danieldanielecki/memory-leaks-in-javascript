let map = new Map();
let set = new Set();

(function () {
  let obj = {
    name: "temp",
    data: new Array(1000000).fill("leak"),
  };

  map.set(obj, "some metadata");
  set.add(obj);

  // Still works, but...
})();

// 'obj' is out of scope, but...
// Map and Set keep a **strong reference**, so GC won't collect 'obj'!
// This means that 'obj' will not be garbage collected until the Map and Set are cleared or go out of scope.
