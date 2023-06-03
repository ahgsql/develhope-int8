function printName() {
  var helloName = "Hello John";
  function inner() {
    console.log(helloName);
  }
  inner();
}
printName();
