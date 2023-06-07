function hello() {
  console.log("Hello");
}
function printAsyncName(callback, name) {
  setInterval(() => {
    callback();
  }, 1000);
  setInterval(() => {
    console.log(name);
  }, 2000);
}

printAsyncName(hello, "Ali");
