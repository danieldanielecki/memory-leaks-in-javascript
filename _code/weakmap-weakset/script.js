let weakMap = new WeakMap();
let weakSet = new WeakSet();

(function () {
  let obj = {
    name: "temp",
    data: new Array(1000000).fill("leak"),
  };

  weakMap.set(obj, "some metadata");
  weakSet.add(obj);

  // At this point, obj is still in scope
})();

// After the function scope ends, 'obj' goes out of scope.
// Since WeakMap and WeakSet hold a weak reference, 'obj' can be garbage-collected.
// This means that if there are no other references to 'obj', it will be removed from memory.
