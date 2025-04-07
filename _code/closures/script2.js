function outerFunction() {
  let largeArray = new Array(1000000).fill("memory leak");

  // Use the required value, not the entire object.
  // const importantValue = largeArray[0]; // fix

  return function innerFunction() {
    console.log(largeArray[0]); // only this is kept in the memory, garbage collector will now free memory from largeArray.
  };
}
const leak = outerFunction();
leak();
