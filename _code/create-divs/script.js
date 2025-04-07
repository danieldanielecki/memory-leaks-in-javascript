const x = [];

function grow() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 10000; i++) {
    fragment.appendChild(document.createElement("div"));
  }
  document.body.appendChild(fragment);
  x.push("x".repeat(999999));
  console.log(x);
  console.log(x.length);
}

document.getElementById("grow").addEventListener("click", grow);
