window.onload = (e) => {
  console.log("LOADED", e);
};

window.onunload = (e) => {
  console.log("UNLOADED", e);
};

setTimeout(() => {
  console.log("1 SECOND PASSED");
}, 1000);
