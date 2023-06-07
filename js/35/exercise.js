function repeatHello(callback) {
  setInterval(() => {
    callback();
  }, 1000);
}

//Better readability for shorter functions / one liner tasks
let hello = () => console.log("Hello");

repeatHello(hello);
