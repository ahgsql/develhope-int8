function repeatHello(callback) {
  let inter = setInterval(() => {
    callback();
  }, 1000);
  setTimeout(() => clearInterval(inter), 5000);
}
//Better readability for shorter functions / one liner tasks
let hello = () => console.log("Hello");

repeatHello(hello);
