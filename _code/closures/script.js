function outerFunction() {
  let count = 0;
  return function innerFunction() {
    count++;
    console.log(count);
  };
}

const counter = outerFunction();
counter(); // 1
counter(); // 2
