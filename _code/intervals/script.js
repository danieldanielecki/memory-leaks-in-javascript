let interval = setInterval(() => {
  console.log("Interval");
  clearInterval(interval); // fix
}, 1000);

interval();
